<?php

namespace TinyIB\Controller;

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

class AmpPostController implements AmpPostControllerInterface
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
     * Constructs new AMP post controller.
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

        $threads = $this->post_repository->getThreadsByPage($page);
        $threads = array_map(function ($thread) {
            $id = $thread->getID();
            $thread->replyCount = $this->post_repository->getReplyCountByThreadID($id);
            return $thread;
        }, $threads);

        return new Response(200, [], $this->renderer->render('amp/board.twig', [
            'amp_style' => file_get_contents(__DIR__ . '/../../webroot/css/amp.css'),
            'canonical_url' => TINYIB_BASE_URL . TINYIB_BOARD . '/' . $page,
            'title' => '/' . TINYIB_BOARD,
            'board' => TINYIB_BOARDDESC,
            'threads' => $threads,
            'limit' => TINYIB_THREADSPERPAGE,
            'page' => $page,
        ]));
    }

    /**
     * {@inheritDoc}
     */
    public function thread(ServerRequestInterface $request) : ResponseInterface
    {
        $limit = 50;

        $args = explode('/', $request->getUri()->getPath());
        $thread_id = (int)$args[3];
        $thread = $this->post_repository->getPostByID($thread_id);
        if (!isset($thread)) {
            throw new NotFoundException("Thread #$thread_id not found.");
        }

        $query = $request->getQueryParams();
        $page = isset($query['page']) ? (int)$query['page'] : 0;

        $posts = array_reverse($this->post_repository->getPostsByThreadID($thread_id, true, $limit, $page * $limit));
        $posts = array_map(function ($post) use ($thread_id) {
            $message = $post->getMessage();
            $message = $post->markup($message);
            // Fix links in thread.
            $message = preg_replace('#href="/' . TINYIB_BOARD . '/res/' . $thread_id . '\#(\d+)"#', 'href="#post_$1"', $message);
            $post->setMessage($message);
            return $post;
        }, $posts);

        $last_updated = $thread->getBumpTime();

        return new Response(200, [], $this->renderer->render('amp/thread.twig', [
            'amp_style' => file_get_contents(__DIR__ . '/../../webroot/css/amp.css'),
            'canonical_url' => TINYIB_BASE_URL . TINYIB_BOARD . "/res/$thread_id",
            'title' => '/' . TINYIB_BOARD . ' &ndash; ' . $thread->getSubject(),
            'board' => TINYIB_BOARDDESC,
            'thread' => $thread,
            'posts' => $posts,
            'last_updated' => $last_updated,
            'limit' => $limit,
            'page' => $page,
        ]));
    }
}
