<?php

namespace TinyIB\Controller;

use GuzzleHttp\Psr7\Response;
use Psr\Http\Message\ResponseInterface;
use Psr\Http\Message\ServerRequestInterface;
use TinyIB\Cache\CacheInterface;
use TinyIB\Functions;
use TinyIB\Model\Post;
use TinyIB\Repository\PostRepositoryInterface;
use TinyIB\Service\CaptchaServiceInterface;
use TinyIB\Service\PostServiceInterface;
use TinyIB\Service\RendererServiceInterface;
use TinyIB\ValidationException;

class PostController implements PostControllerInterface
{
    /** @var \TinyIB\Cache\CacheInterface $cache */
    protected $cache;

    /** @var \TinyIB\Repository\PostRepositoryInterface $post_repository */
    protected $post_repository;

    /** @var CaptchaServiceInterface $captcha_service */
    protected $captcha_service;

    /** @var \TinyIB\Service\PostServiceInterface $post_service */
    protected $post_service;

    /** @var \TinyIB\Service\RendererServiceInterface $renderer */
    protected $renderer;

    /**
     * Constructs new post controller.
     *
     * @param \TinyIB\Cache\CacheInterface $cache
     * @param \TinyIB\Repository\PostRepositoryInterface $post_repository
     * @param \TinyIB\Service\CaptchaServiceInterface $captcha_service
     * @param \TinyIB\Service\PostServiceInterface $post_service
     * @param \TinyIB\Service\RendererServiceInterface $renderer
     */
    public function __construct(
        CacheInterface $cache,
        PostRepositoryInterface $post_repository,
        CaptchaServiceInterface $captcha_service,
        PostServiceInterface $post_service,
        RendererServiceInterface $renderer
    ) {
        $this->cache = $cache;
        $this->post_repository = $post_repository;
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

            case 'recaptcha':
                return $this->captcha_service->checkRecaptcha($captcha);

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
        $user_id = $request->getAttribute('user')->getID();
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
            if (TINYIB_ALWAYSNOKO || strtolower($post->getEmail()) === 'noko') {
                $id = $post->getID();
                $thread_id = $post->isThread() ? $id : $post->getParentID();
                $redirect_url = '/' . TINYIB_BOARD . "/res/$thread_id#$id";
            }
        }

        return new Response(302, ['Location' => $redirect_url]);
    }

    /**
     * {@inheritDoc}
     */
    public function delete(ServerRequestInterface $request) : ResponseInterface
    {
        if (TINYIB_DBMIGRATE) {
            $message = "Post deletion is currently disabled.\nPlease try again in a few moments.";
            return new Response(503, [], $message);
        }

        $data = $request->getParsedBody();
        $id = isset($data['delete']) ? $data['delete'] : 0;
        $password = isset($data['password']) ? $data['password'] : '';
        $this->post_service->delete($id, $password);
        return new Response(200, [], 'Post deleted.');
    }

    /**
     * Renders a post view model.
     *
     * @param array $viewModel
     *
     * @return string
     */
    protected function renderPostViewModel(array $view_model, bool $res) : string
    {
        return $this->renderer->render('components/_post.twig', [
            'post' => $view_model,
            'res' => $res,
        ]);
    }

    /**
     * @param \TinyIB\Model\PostInterface $post
     * @param bool $res
     *
     * @return string
     */
    protected function renderPost(PostInterface $post, bool $res) : string
    {
        $view_model = $post->createViewModel($res);
        return $this->renderPostViewModel($view_model, $res);
    }

    /**
     * @return string
     */
    protected function supportedFileTypes() : string
    {
        global $tinyib_uploads;
        if (empty($tinyib_uploads)) {
            return '';
        }

        $types_allowed = array_map('strtoupper', array_unique(array_column($tinyib_uploads, 0)));
        $types_last = array_pop($types_allowed);
        $types_formatted = $types_allowed
            ? implode(', ', $types_allowed) . ' and ' . $types_last
            : $types_last;

        return 'Supported file type' . (count($tinyib_uploads) != 1 ? 's are ' : ' is ') . $types_formatted . '.';
    }

    /**
     * @param int $id
     *
     * @return string
     */
    protected function renderThreadPage(int $id) : string
    {
        /** @var \TinyIB\Models\PostInterface[] $posts */
        $posts = $this->post_repository->getPostsByThreadID($id);
        $post_vms = array_map(function ($post) {
            /** @var \TinyIB\Models\PostInterface $post */
            $view_model = $post->createViewModel(TINYIB_RESPAGE);
            if (TINYIB_CACHE === 'database') {
                // Do not cache individual posts in database mode.
                $view_model['rendered'] = $this->renderPostViewModel($view_model, TINYIB_RESPAGE);
                return $view_model;
            }

            $key = TINYIB_BOARD . ':post:' . $post->getID();
            $view_model['rendered'] = $this->cache->get($key);
            if ($view_model['rendered'] === null) {
                $view_model['rendered'] = $this->renderPostViewModel($view_model, TINYIB_RESPAGE);
                $this->cache->set($key, $view_model['rendered'], 4 * 60 * 60);
            }

            return $view_model;
        }, $posts);

        return $this->renderer->render('thread.twig', [
            'filetypes' => $this->supportedFileTypes(),
            'posts' => $post_vms,
            'parent' => $id,
            'res' => TINYIB_RESPAGE,
            'thumbnails' => true,
        ]);
    }

    /**
     * @param int $page
     *
     * @return string
     */
    protected function renderBoardPage(int $page) : string
    {
        /** @var \TinyIB\Model\PostInterface[] $threads */
        $threads = $this->post_repository->getThreadsByPage($page);
        $pages = ceil($this->post_repository->getThreadCount() / TINYIB_THREADSPERPAGE) - 1;
        $post_vms = [];

        foreach ($threads as $thread) {
            $replies = $this->post_repository->getPostsByThreadID($thread->getID());
            $omitted_count = max(0, count($replies) - TINYIB_PREVIEWREPLIES - 1);
            $replies = array_slice($replies, -TINYIB_PREVIEWREPLIES);
            if (empty($replies) || $replies[0]->getID() !== $thread->getID()) {
                array_unshift($replies, $thread);
            }

            $thread_reply_vms = array_map(function ($post) use ($omitted_count) {
                /** @var \TinyIB\Models\PostInterface $post */
                $view_model = $post->createViewModel(TINYIB_INDEXPAGE);
                if ($post->isThread() && $omitted_count > 0) {
                    $view_model['omitted'] = $omitted_count;
                }

                if (TINYIB_CACHE === 'database') {
                    // Do not cache individual posts in database mode.
                    $view_model['rendered'] = $this->renderPostViewModel($view_model, TINYIB_INDEXPAGE);
                    return $view_model;
                }

                $key = TINYIB_BOARD . ':index_post:' . $post->getID();
                $view_model['rendered'] = $this->cache->get($key);
                if ($view_model['rendered'] === null) {
                    $view_model['rendered'] = $this->renderPostViewModel($view_model, TINYIB_INDEXPAGE);
                    $this->cache->set($key, $view_model['rendered'], 4 * 60 * 60);
                }

                return $view_model;
            }, $replies);

            $post_vms = array_merge($post_vms, $thread_reply_vms);
        }

        return $this->renderer->render('board.twig', [
            'filetypes' => $this->supportedFileTypes(),
            'posts' => $post_vms,
            'pages' => max($pages, 0),
            'this_page' => $page,
            'parent' => 0,
            'res' => TINYIB_INDEXPAGE,
            'thumbnails' => true,
        ]);
    }

    /**
     * {@inheritDoc}
     */
    public function board(ServerRequestInterface $request) : ResponseInterface
    {
        $args = explode('/', $request->getUri()->getPath());
        $page = count($args) > 1 ? (int)$args[1] : 0;
        $key = TINYIB_BOARD . ':page:' . $page;
        $data = $this->cache->get($key);
        if (!isset($data)) {
            $data = $this->renderBoardPage($page);
            $this->cache->set($key, $data, 4 * 60 * 60);
        }

        return new Response(200, [], $data);
    }

    /**
     * {@inheritDoc}
     */
    public function thread(ServerRequestInterface $request) : ResponseInterface
    {
        $args = explode('/', $request->getUri()->getPath());
        $id = (int)$args[2];
        $key = TINYIB_BOARD . ':thread:' . $id;
        $data = $this->cache->get($key);
        if (!isset($data)) {
            $data = $this->renderThreadPage($id);
            $this->cache->set($key, $data, 4 * 60 * 60);
        }

        return new Response(200, [], $data);
    }
}
