<?php

namespace TinyIB\Controller;

use GuzzleHttp\Psr7\Response;
use Psr\Http\Message\ResponseInterface;
use Psr\Http\Message\ServerRequestInterface;
use TinyIB\Cache\CacheInterface;
use TinyIB\Functions;
use TinyIB\Model\Post;
use TinyIB\Repository\PostRepositoryInterface;
use TinyIB\Service\PostServiceInterface;
use TinyIB\Service\RendererServiceInterface;
use TinyIB\NotFoundException;

class AmpPostController implements AmpPostControllerInterface
{
    /** @var \TinyIB\Cache\CacheInterface $cache */
    protected $cache;

    /** @var \TinyIB\Repository\PostRepositoryInterface $post_repository */
    protected $post_repository;

    /** @var \TinyIB\Service\PostServiceInterface $post_service */
    protected $post_service;

    /** @var \TinyIB\Service\RendererServiceInterface $renderer */
    protected $renderer;

    /**
     * Constructs new AMP post controller.
     *
     * @param \TinyIB\Cache\CacheInterface $cache
     * @param \TinyIB\Repository\PostRepositoryInterface $post_repository
     * @param \TinyIB\Service\PostServiceInterface $post_service
     * @param \TinyIB\Service\RendererServiceInterface $renderer
     */
    public function __construct(
        CacheInterface $cache,
        PostRepositoryInterface $post_repository,
        PostServiceInterface $post_service,
        RendererServiceInterface $renderer
    ) {
        $this->cache = $cache;
        $this->post_repository = $post_repository;
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
        $poster_name = isset($query['name']) ? $query['name'] : null;

        $refmap = [];
        $inv_refmap = [];
        $own_posts = [];

        $posts = array_reverse($this->post_repository->getPostsByThreadID($thread_id, true, $limit, $page * $limit));
        $posts = array_map(function ($post) use ($thread_id, $poster_name, &$refmap, &$inv_refmap, &$own_posts) {
            $message = $post->getMessage();
            $message = $post->markup($message);
            $post_id = $post->getID();

            if (!empty($poster_name)
                && (stripos($post->getName(), $poster_name) !== false
                || stripos($post->getTripcode(), $poster_name) !== false)) {
                $own_posts[] = $post_id;
                $post->own = true;
            }

            // Fix links in thread and populate the reference map.
            $link_pattern = '#href="/' . TINYIB_BOARD . '/res/(\d+)\#(\d+)"#';
            $message = preg_replace_callback($link_pattern, function ($matches) use ($thread_id, $post_id, &$refmap, &$inv_refmap, &$own_posts) {
                $link_thread_id = (int)$matches[1];
                $target_id = (int)$matches[2];

                if ($link_thread_id !== $thread_id) {
                    return 'href="/' . TINYIB_BOARD . "/amp/thread/$link_thread_id#post_$target_id\"";
                }

                $refmap[$target_id][] = $post_id;
                $inv_refmap[$post_id][] = $target_id;
                return "href=\"#post_$target_id\"";
            }, $message);

            $post->setMessage($message);
            return $post;
        }, $posts);

        $posts = array_map(function ($post) use ($refmap, $inv_refmap, $own_posts) {
            $post_id = $post->getID();
            if (isset($refmap[$post_id])) {
                $post->references = $refmap[$post_id];
            }

            if (isset($inv_refmap[$post_id]) && !empty(array_intersect($inv_refmap[$post_id], $own_posts))) {
                $post->ownReply = $inv_refmap[$post_id];
            }

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
            'name' => $poster_name,
        ]));
    }

    /**
     * {@inheritDoc}
     */
    public function formState(ServerRequestInterface $request) : ResponseInterface
    {
        $query = $request->getQueryParams();
        $amp_source_origin = isset($query['__amp_source_origin']) ? $query['__amp_source_origin'] : '';

        $subject = isset($_SESSION['amp']['subject']) ? $_SESSION['amp']['subject'] : '';
        $name = isset($_SESSION['amp']['name']) ? $_SESSION['amp']['name'] : '';
        $email = isset($_SESSION['amp']['email']) ? $_SESSION['amp']['email'] : '';

        $data = json_encode([
            'subject' => $subject,
            'name' => $name,
            'email' => $email,
        ]);

        return new Response(200, [
            'AMP-Access-Control-Allow-Source-Origin' => $amp_source_origin,
            'Content-Type' => 'application/json',
        ], $data);
    }

    /**
     * {@inheritDoc}
     */
    public function createPost(ServerRequestInterface $request) : ResponseInterface
    {
        $query = $request->getQueryParams();
        $amp_source_origin = isset($query['__amp_source_origin']) ? $query['__amp_source_origin'] : '';
        $poster_name = isset($query['name']) ? $query['name'] : null;

        $data = $request->getParsedBody();
        $name = isset($data['name']) ? $data['name'] : '';
        $email = isset($data['email']) ? $data['email'] : '';
        $subject = isset($data['subject']) ? $data['subject'] : '';
        $message = isset($data['message']) ? $data['message'] : '';
        $password = '';
        $ip = $_SERVER['REMOTE_ADDR'];
        $user_id = $request->getAttribute('user')->getID();
        $parent = isset($data['parent']) ? (int)$data['parent'] : 0;

        // Store form state to the session.
        $_SESSION['amp']['subject'] = $subject;
        $_SESSION['amp']['name'] = $name;
        $_SESSION['amp']['email'] = $email;

        try {
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
        } catch (\Exception $e) {
            $data = json_encode([
                'error' => $e->getMessage(),
            ]);

            return new Response(400, [
                'AMP-Access-Control-Allow-Source-Origin' => $amp_source_origin,
                'Content-Type' => 'application/json',
            ], $data);
        }

        $data = json_encode([
            'id' => $post->getID(),
        ]);

        $thread_id = $post->isThread() ? $post->getID() : $post->getParentID();
        $destination = TINYIB_BASE_URL . TINYIB_BOARD . '/amp/thread/' . $thread_id;
        if (!empty($poster_name)) {
            $destination .= "?name=$poster_name";
        }

        return new Response(201, [
            'AMP-Access-Control-Allow-Source-Origin' => $amp_source_origin,
            'AMP-Redirect-To' => $destination,
            'Content-Type' => 'application/json',
        ], $data);
    }
}
