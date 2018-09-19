<?php

namespace TinyIB\Controller\Mobile;

use GuzzleHttp\Psr7\Response;
use Psr\Http\Message\ResponseInterface;
use Psr\Http\Message\ServerRequestInterface;
use TinyIB\Cache\CacheInterface;
use TinyIB\Functions;
use TinyIB\Model\Post;
use TinyIB\Repository\PostRepositoryInterface;
use TinyIB\Service\BanServiceInterface;
use TinyIB\Service\PostServiceInterface;
use TinyIB\Service\RendererServiceInterface;
use TinyIB\NotFoundException;

class MobilePostController implements MobilePostControllerInterface
{
    /** @var \TinyIB\Cache\CacheInterface $cache */
    protected $cache;

    /** @var \TinyIB\Repository\PostRepositoryInterface $post_repository */
    protected $post_repository;

    /** @var \TinyIB\Service\BanServiceInterface $ban_service */
    protected $ban_service;

    /** @var \TinyIB\Service\PostServiceInterface $post_service */
    protected $post_service;

    /** @var \TinyIB\Service\RendererServiceInterface $renderer */
    protected $renderer;

    /**
     * Constructs new Mobile post controller.
     *
     * @param \TinyIB\Cache\CacheInterface $cache
     * @param \TinyIB\Repository\PostRepositoryInterface $post_repository
     * @param \TinyIB\Service\BanServiceInterface $renderer
     * @param \TinyIB\Service\PostServiceInterface $renderer
     * @param \TinyIB\Service\RendererServiceInterface $renderer
     */
    public function __construct(
        CacheInterface $cache,
        PostRepositoryInterface $post_repository,
        BanServiceInterface $ban_service,
        PostServiceInterface $post_service,
        RendererServiceInterface $renderer
    ) {
        $this->cache = $cache;
        $this->post_repository = $post_repository;
        $this->ban_service = $ban_service;
        $this->post_service = $post_service;
        $this->renderer = $renderer;
    }

    /**
     * {@inheritDoc}
     */
    public function index(ServerRequestInterface $request) : ResponseInterface
    {
        $query = $request->getQueryParams();
        $page = isset($query['page']) ? (int)$query['page'] : 0;

        $cache_key = TINYIB_BOARD . ':mobile:page:' . $page;
        $headers = [];
        $content = $this->cache->get($cache_key);
        if (!isset($content)) {
            $threads = $this->post_repository->getThreadsByPage($page);
            $threads = array_map(function ($thread) {
                $message = $thread->getMessage();
                $message = $thread->markup($message);
                $thread->setMessage($message);

                $id = $thread->getID();
                $thread->replyCount = $this->post_repository->getReplyCountByThreadID($id);
                return $thread;
            }, $threads);

            $content = $this->renderer->render('mobile/board.twig', [
                'title' => '/' . TINYIB_BOARD,
                'board' => TINYIB_BOARDDESC,
                'threads' => $threads,
                'limit' => TINYIB_THREADSPERPAGE,
                'page' => $page,
            ]);

            $this->cache->set($cache_key, $content);
            $headers['X-Cached'] = 'false';
        } else {
            $headers['X-Cached'] = 'true';
        }

        return new Response(200, $headers, $content);
    }

    /**
     * {@inheritDoc}
     */
    public function thread(ServerRequestInterface $request) : ResponseInterface
    {
        $args = explode('/', $request->getUri()->getPath());
        $thread_id = (int)$args[3];

        $query = $request->getQueryParams();
        $page = isset($query['page']) ? (int)$query['page'] : 0;

        $cache_key = TINYIB_BOARD . ':mobile:thread:' . $thread_id . ':page:' . $page;
        $headers = [];
        $content = $this->cache->get($cache_key);
        if (!isset($content)) {
            $limit = 50;
            $thread = $this->post_repository->getPostByID($thread_id);
            if (!isset($thread)) {
                throw new NotFoundException("Thread #$thread_id not found.");
            }

            $posts = $this->post_repository->getPostsByThreadID($thread_id, true, $limit, $page * $limit);
            $posts = array_map(function ($post) use ($thread_id) {
                $message = $post->getMessage();
                $message = $post->markup($message);
                $post_id = $post->getID();

                // Fix links in thread and populate the reference map.
                $link_pattern = '#href="/' . TINYIB_BOARD . '/res/(\d+)\#(\d+)"#';
                $message = preg_replace_callback($link_pattern, function ($matches) use ($thread_id) {
                    $link_thread_id = (int)$matches[1];
                    $target_id = (int)$matches[2];

                    if ($link_thread_id !== $thread_id) {
                        return 'href="/' . TINYIB_BOARD . "/mobile/thread/$link_thread_id#post_$target_id\"";
                    }

                    return "href=\"#post_$target_id\"";
                }, $message);

                $post->setMessage($message);
                return $post;
            }, $posts);

            $content = $this->renderer->render('mobile/thread.twig', [
                'title' => '/' . TINYIB_BOARD . ' &ndash; ' . $thread->getSubject(),
                'board' => TINYIB_BOARDDESC,
                'thread' => $thread,
                'posts' => $posts,
                'limit' => $limit,
                'page' => $page,
            ]);

            $this->cache->set($cache_key, $content);
            $headers['X-Cached'] = 'false';
        } else {
            $headers['X-Cached'] = 'true';
        }

        return new Response(200, $headers, $content);
    }

    /**
     * {@inheritDoc}
     */
    public function createPost(ServerRequestInterface $request) : ResponseInterface
    {
        $data = $request->getParsedBody();
        $name = isset($data['name']) ? $data['name'] : '';
        $email = isset($data['email']) ? $data['email'] : '';
        $subject = isset($data['subject']) ? $data['subject'] : '';
        $message = isset($data['message']) ? $data['message'] : '';

        $password = '';
        $ip = $_SERVER['REMOTE_ADDR'];
        $user_id = $request->getAttribute('user')->getID();
        $parent = isset($data['parent']) ? (int)$data['parent'] : 0;

        $post = $this->post_service->create(
            $name,
            $email,
            $subject,
            $message,
            $password,
            $ip,
            $user_id,
            $parent
        );

        $thread_id = $post->isThread() ? $post->getID() : $post->getParentID();
        $destination = TINYIB_BASE_URL . TINYIB_BOARD . '/mobile/thread/' . $thread_id . '#footer';

        return new Response(303, [
            'Location' => $destination,
            'Content-Type' => 'application/json',
        ]);
    }
}
