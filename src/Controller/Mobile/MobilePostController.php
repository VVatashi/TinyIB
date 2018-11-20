<?php

namespace TinyIB\Controller\Mobile;

use GuzzleHttp\Psr7\Response;
use Psr\Http\Message\ResponseInterface;
use Psr\Http\Message\ServerRequestInterface;
use TinyIB\Cache\CacheInterface;
use TinyIB\Functions;
use TinyIB\Model\Post;
use TinyIB\Service\PostServiceInterface;
use TinyIB\Service\RendererServiceInterface;
use TinyIB\NotFoundException;

class MobilePostController implements MobilePostControllerInterface
{
    /** @var \TinyIB\Cache\CacheInterface $cache */
    protected $cache;

    /** @var \TinyIB\Service\PostServiceInterface $post_service */
    protected $post_service;

    /** @var \TinyIB\Service\RendererServiceInterface $renderer */
    protected $renderer;

    /**
     * Constructs new Mobile post controller.
     *
     * @param \TinyIB\Cache\CacheInterface $cache
     * @param \TinyIB\Service\PostServiceInterface $post_service
     * @param \TinyIB\Service\RendererServiceInterface $renderer
     */
    public function __construct(
        CacheInterface $cache,
        PostServiceInterface $post_service,
        RendererServiceInterface $renderer
    ) {
        $this->cache = $cache;
        $this->post_service = $post_service;
        $this->renderer = $renderer;
    }

    protected function fixLinks(string $message, int $thread_id): string {
        $link_pattern = '#href="/' . TINYIB_BOARD . '/res/(\d+)\#(\d+)"#';
        return preg_replace_callback($link_pattern, function ($matches) use ($thread_id) {
            $target_thread_id = (int)$matches[1];
            $target_post_id = (int)$matches[2];
            if ($target_thread_id !== $thread_id) {
                // If link to another thread.
                return 'href="/' . TINYIB_BOARD . "/mobile/thread/$target_thread_id#post_$target_post_id\""
                    . " data-target-post-id=\"$target_post_id\"";
            }

            // If link to the same thread.
            return "href=\"#post_$target_post_id\" data-target-post-id=\"$target_post_id\"";
        }, $message);
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
            $threads = Post::getThreadsByPage($page);
            $threads = $threads->map(function ($thread) {
                $message = $thread->message;
                $message = $thread->markup($message);
                $thread->message = $message;

                $thread->replyCount = Post::getReplyCountByThreadID($thread->id);
                return $thread;
            });

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
            $thread = Post::find($thread_id);
            if (!isset($thread)) {
                throw new NotFoundException("Thread #$thread_id not found.");
            }

            $posts = Post::getPostsByThreadID($thread_id, true, $limit, $page * $limit);
            $posts = $posts->map(function ($post) use ($thread_id) {
                $message = $post->message;
                $message = $post->markup($message);
                $message = $this->fixLinks($message, $thread_id);
                $post->message = $message;
                return $post;
            });

            $content = $this->renderer->render('mobile/thread.twig', [
                'title' => '/' . TINYIB_BOARD . ' &ndash; ' . $thread->subject,
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
        $user_id = $request->getAttribute('user')->id;
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

        $thread_id = $post->isThread() ? $post->id : $post->parent_id;
        $destination = TINYIB_BASE_URL . TINYIB_BOARD . '/mobile/thread/' . $thread_id . '#footer';

        return new Response(303, [
            'Location' => $destination,
            'Content-Type' => 'application/json',
        ]);
    }

    /**
     * {@inheritDoc}
     */
    public function ajaxThread(ServerRequestInterface $request) : ResponseInterface
    {
        $args = explode('/', $request->getUri()->getPath());
        $thread_id = (int)$args[4];

        $query = $request->getQueryParams();
        $after = isset($query['after']) ? (int)$query['after'] : 0;

        $limit = 50;
        $thread = Post::find($thread_id);
        if (!isset($thread)) {
            throw new NotFoundException("Thread #$thread_id not found.");
        }

        $posts = Post::getPostsByThreadID($thread_id, true, $limit, 0);

        $posts = $posts->filter(function ($post) use ($after) {
            return $post->id > $after;
        })->map(function ($post) use ($thread_id) {
            $message = $post->message;
            $message = $post->markup($message);
            $message = $this->fixLinks($message, $thread_id);
            $post->message = $message;
            return $post;
        });

        $content = $this->renderer->render('mobile/ajax/thread.twig', [
            'posts' => $posts,
        ]);

        return new Response(200, [], $content);
    }

    /**
     * {@inheritDoc}
     */
    public function ajaxCreatePost(ServerRequestInterface $request) : ResponseInterface
    {
        $data = $request->getParsedBody();
        $name = isset($data['name']) ? $data['name'] : '';
        $email = isset($data['email']) ? $data['email'] : '';
        $subject = isset($data['subject']) ? $data['subject'] : '';
        $message = isset($data['message']) ? $data['message'] : '';

        $password = '';
        $ip = $_SERVER['REMOTE_ADDR'];
        $user_id = $request->getAttribute('user')->id;
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

        $thread_id = $post->isThread() ? $post->id : $post->parent_id;
        $destination = TINYIB_BASE_URL . TINYIB_BOARD . '/mobile/thread/' . $thread_id . '#footer';

        return new Response(201, [
            'Location' => $destination,
        ]);
    }
}
