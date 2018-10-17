<?php

namespace TinyIB\Controller\Amp;

use GuzzleHttp\Psr7\Response;
use Psr\Http\Message\ResponseInterface;
use Psr\Http\Message\ServerRequestInterface;
use TinyIB\Cache\CacheInterface;
use TinyIB\Functions;
use TinyIB\Model\Post;
use TinyIB\Service\PostServiceInterface;
use TinyIB\Service\RendererServiceInterface;
use TinyIB\NotFoundException;

class AmpPostController implements AmpPostControllerInterface
{
    /** @var \TinyIB\Cache\CacheInterface $cache */
    protected $cache;

    /** @var \TinyIB\Service\PostServiceInterface $post_service */
    protected $post_service;

    /** @var \TinyIB\Service\RendererServiceInterface $renderer */
    protected $renderer;

    /**
     * Constructs new AMP post controller.
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

    /**
     * {@inheritDoc}
     */
    public function index(ServerRequestInterface $request) : ResponseInterface
    {
        $query = $request->getQueryParams();
        $page = isset($query['page']) ? (int)$query['page'] : 0;

        $cache_key = TINYIB_BOARD . ':amp:page:' . $page;
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

            $content = $this->renderer->render('amp/board.twig', [
                'amp_style' => file_get_contents(__DIR__ . '/../../../webroot/css/amp.css'),
                'canonical_url' => TINYIB_BASE_URL . TINYIB_BOARD . '/' . $page,
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

        $cache_key = TINYIB_BOARD . ':amp:thread:' . $thread_id . ':page:' . $page;
        $headers = [];
        $content = $this->cache->get($cache_key);
        if (!isset($content)) {
            $limit = 50;
            $thread = Post::find($thread_id);
            if (!isset($thread)) {
                throw new NotFoundException("Thread #$thread_id not found.");
            }

            $refmap = [];

            $posts = Post::getPostsByThreadID($thread_id, true, $limit, $page * $limit);
            $posts = $posts->map(function ($post) use ($thread_id, &$refmap) {
                $message = $post->message;
                $message = $post->markup($message);
                $post_id = $post->id;

                // Fix links in thread and populate the reference map.
                $link_pattern = '#href="/' . TINYIB_BOARD . '/res/(\d+)\#(\d+)"#';
                $message = preg_replace_callback($link_pattern, function ($matches) use ($thread_id, $post_id, &$refmap) {
                    $link_thread_id = (int)$matches[1];
                    $target_id = (int)$matches[2];

                    if ($link_thread_id !== $thread_id) {
                        return 'href="/' . TINYIB_BOARD . "/amp/thread/$link_thread_id#post_$target_id\"";
                    }

                    $refmap[$target_id][] = $post_id;
                    return "href=\"#post_$target_id\"";
                }, $message);

                $post->message = $message;
                return $post;
            });

            $posts = $posts->map(function ($post) use ($posts, $refmap) {
                $post_id = $post->id;
                if (isset($refmap[$post_id])) {
                    $post->references = $refmap[$post_id];
                    $post->updateTime = max(array_map(function ($post_id) use ($posts) {
                        $post = $posts->first(function ($post) use ($post_id) { return $post->id == $post_id; });
                        return $post->getCreatedTimestamp();
                    }, $refmap[$post_id]));
                }

                return $post;
            });

            $content = $this->renderer->render('amp/thread.twig', [
                'amp_style' => file_get_contents(__DIR__ . '/../../../webroot/css/amp.css'),
                'canonical_url' => TINYIB_BASE_URL . TINYIB_BOARD . "/res/$thread_id",
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
}
