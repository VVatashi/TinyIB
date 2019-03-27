<?php

namespace Imageboard\Controller;

use GuzzleHttp\Psr7\Response;
use Imageboard\Cache\CacheInterface;
use Imageboard\Exception\ValidationException;
use Imageboard\Model\Post;
use Imageboard\Service\{
    CaptchaServiceInterface,
    PostServiceInterface,
    RendererServiceInterface
};
use Psr\Http\Message\{ServerRequestInterface, ResponseInterface};

class PostController implements PostControllerInterface
{
    /** @var CacheInterface */
    protected $cache;

    /** @var CaptchaServiceInterface */
    protected $captcha_service;

    /** @var PostServiceInterface */
    protected $post_service;

    /** @var RendererServiceInterface */
    protected $renderer;

    /**
     * Constructs new post controller.
     *
     * @param CacheInterface $cache
     * @param CaptchaServiceInterface $captcha_service
     * @param PostServiceInterface $post_service
     * @param RendererServiceInterface $renderer
     */
    public function __construct(
        CacheInterface $cache,
        CaptchaServiceInterface $captcha_service,
        PostServiceInterface $post_service,
        RendererServiceInterface $renderer
    ) {
        $this->cache = $cache;
        $this->captcha_service = $captcha_service;
        $this->post_service = $post_service;
        $this->renderer = $renderer;
    }

    /**
     * Checks captcha.
     *
     * @param string $captcha
     *
     * @return bool
     */
    protected function checkCAPTCHA(string $captcha) : bool
    {
        if (!defined('TINYIB_CAPTCHA') || empty(TINYIB_CAPTCHA)) {
            return true;
        }

        switch (TINYIB_CAPTCHA) {
            case 'simple':
                return $this->captcha_service->checkCaptcha($captcha);

            default:
                return true;
        }
    }

    /**
     * {@inheritDoc}
     */
    public function create(ServerRequestInterface $request) : ResponseInterface
    {
        if (TINYIB_DBMIGRATE) {
            $message = "Posting is currently disabled.\nPlease try again in a few moments.";
            return new Response(503, [], $message);
        }

        $data = $request->getParsedBody();
        $captcha = isset($data['captcha']) ? $data['captcha'] : '';
        if (!$this->checkCAPTCHA($captcha)) {
            throw new ValidationException('Incorrect CAPTCHA');
        }

        $name = isset($data['name']) ? $data['name'] : '';
        $email = isset($data['email']) ? $data['email'] : '';
        $subject = isset($data['subject']) ? $data['subject'] : '';
        $message = isset($data['message']) ? $data['message'] : '';
        $password = isset($data['password']) ? $data['password'] : '';
        $ip = $_SERVER['REMOTE_ADDR'];
        $user_id = $request->getAttribute('user')->id;
        $parent = isset($data['parent']) ? (int)$data['parent'] : 0;
        $rawpost = isset($data['rawpost']);

        $post = $this->post_service->create(
            $name,
            $email,
            $subject,
            $message,
            $password,
            $ip,
            $user_id,
            $parent,
            $rawpost
        );

        $redirect_url = '/' . TINYIB_BOARD . '/';
        if ($post->isModerated()) {
            if (TINYIB_ALWAYSNOKO || strtolower($post->email) === 'noko') {
                $id = $post->id;
                $thread_id = $post->isThread() ? $id : $post->parent_id;
                $redirect_url = '/' . TINYIB_BOARD . "/res/$thread_id#$id";
            }
        }

        return new Response(302, ['Location' => $redirect_url]);
    }

    /**
     * {@inheritDoc}
     */
    public function ajaxCreatePost(ServerRequestInterface $request) : ResponseInterface
    {
        $data = $request->getParsedBody();

        $name    = isset($data['name'])    ? $data['name']    : '';
        $email   = isset($data['email'])   ? $data['email']   : '';
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
        $destination = TINYIB_BASE_URL . TINYIB_BOARD . '/res/' . $thread_id . '#reply_' . $post->id;

        $name = !empty($post->name) || !empty($post->tripcode)
            ? $post->name : 'Anonymous';

        return new Response(201, [
            'Content-type' => 'application/json',
            'Location' => $destination,
        ], json_encode([
            'id'         => $post->id,
            'parent_id'  => $post->parent_id,
            'name'       => $name,
            'tripcode'   => $post->tripcode,
            'email'      => $post->email,
            'subject'    => $post->subject,
            'file'       => $post->file,
            'created_at' => $post->getCreatedTimestamp(),
        ]));
    }

    /**
     * {@inheritDoc}
     */
    public function delete(ServerRequestInterface $request)
    {
        if (TINYIB_DBMIGRATE) {
            $message = "Post deletion is currently disabled.\nPlease try again in a few moments.";
            return new Response(503, [], $message);
        }

        $data = $request->getParsedBody();
        $id = isset($data['delete']) ? $data['delete'] : 0;
        $password = isset($data['password']) ? $data['password'] : '';
        $this->post_service->delete($id, $password);
        return 'Post deleted.';
    }

    /**
     * @param int $page
     *
     * @return string
     */
    protected function renderBoardPage(int $page) : string
    {
        $threads = Post::getThreadsByPage($page);
        $threads_count = Post::getThreadCount();
        $pages = ceil($threads_count / TINYIB_THREADSPERPAGE) - 1;
        $posts = [];

        foreach ($threads as $thread) {
            $replies = Post::getPostsByThreadID($thread->id);
            $omitted = max(0, $replies->count() - TINYIB_PREVIEWREPLIES - 1);
            $replies = $replies->take(-TINYIB_PREVIEWREPLIES);

            if ($replies->count() === 0 || $replies->first()->id !== $thread->id) {
                $replies->prepend($thread);
            }

            $replies->first()->omitted = $omitted;
            $posts = collect([$posts, $replies])->collapse();
        }

        return $this->renderer->render('board.twig', [
            'posts' => $posts,
            'pages' => max($pages, 0),
            'this_page' => $page,
            'parent' => 0,
            'res' => TINYIB_INDEXPAGE,
        ]);
    }

    /**
     * {@inheritDoc}
     */
    public function board(ServerRequestInterface $request, array $args) : ResponseInterface
    {
        $page = (int)($args['page'] ?? 0);
        $user = $request->getAttribute('user');
        $key = TINYIB_BOARD . ':page:' . $page . ':user:' . $user->id;
        $headers = [];
        $data = $this->cache->get($key);
        if (isset($data)) {
            $headers['X-Cached'] = 'true';
        } else {
            $headers['X-Cached'] = 'false';
            $data = $this->renderBoardPage($page);
            $this->cache->set($key, $data, 4 * 60 * 60);
        }

        return new Response(200, $headers, $data);
    }

    /**
     * {@inheritDoc}
     */
    public function thread(ServerRequestInterface $request, array $args) : ResponseInterface
    {
        $id = (int)$args['id'];
        $user = $request->getAttribute('user');
        $key = TINYIB_BOARD . ':thread:' . $id . ':user:' . $user->id;
        $headers = [];
        $data = $this->cache->get($key);
        if (isset($data)) {
            $headers['X-Cached'] = 'true';
        } else {
            $headers['X-Cached'] = 'false';

            $thread = Post::find($id);
            if (!isset($thread)) {
                throw new NotFoundException("Thread #$id not found.");
            }

            $posts = Post::getPostsByThreadID($id);
            $data = $this->renderer->render('thread.twig', [
                'posts' => $posts,
                'parent' => $id,
                'res' => TINYIB_RESPAGE,
            ]);
            $this->cache->set($key, $data, 4 * 60 * 60);
        }

        return new Response(200, $headers, $data);
    }

    /**
     * {@inheritDoc}
     */
    public function ajaxThread(ServerRequestInterface $request) : ResponseInterface
    {
        $args = explode('/', $request->getUri()->getPath());
        $id = (int)$args[3];

        $thread = Post::find($id);
        if (!isset($thread)) {
            throw new NotFoundException("Thread #$id not found.");
        }

        $query = $request->getQueryParams();
        $after = isset($query['after']) ? (int)$query['after'] : 0;

        $posts = Post::where(function ($query) use ($id) {
            $query->where('id', $id);
            $query->orWhere('parent_id', $id);
        })->where('id', '>', $after)->orderBy('id', 'asc')->get();

        $data = $this->renderer->render('ajax/thread.twig', [
            'posts' => $posts,
            'parent' => $id,
            'res' => TINYIB_RESPAGE,
        ]);

        return new Response(200, [], $data);
    }
}
