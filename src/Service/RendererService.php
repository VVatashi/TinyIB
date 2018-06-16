<?php

namespace TinyIB\Service;

use TinyIB\Cache\CacheInterface;
use TinyIB\Model\PostInterface;
use TinyIB\Repository\PostRepositoryInterface;
use Twig_Environment;

class RendererService implements RendererServiceInterface
{
    /** @var \TinyIB\Cache\CacheInterface */
    protected $cache;

    /** @var \TinyIB\Repository\PostRepositoryInterface $post_repository */
    protected $post_repository;

    /** @var \Twig_Environment $twig */
    protected $twig;

    /**
     * @param \TinyIB\Repository\PostRepositoryInterface $post_repository
     * @param array $variables
     */
    public function __construct(
        CacheInterface $cache,
        PostRepositoryInterface $post_repository,
        Twig_Environment $twig
    ) {
        $this->cache = $cache;
        $this->post_repository = $post_repository;
        $this->twig = $twig;
    }

    /**
     * {@inheritDoc}
     */
    public function render(string $template, array $variables = []) : string
    {
        return $this->twig->render($template, $variables);
    }

    /**
     * Renders the post view model.
     *
     * @param array $viewModel
     *
     * @return string
     */
    public function renderPostViewModel(array $view_model, bool $res) : string
    {
        return $this->render('_post.twig', [
            'post' => $view_model,
            'res' => $res,
        ]);
    }

    /**
     * {@inheritDoc}
     */
    public function renderPost(PostInterface $post, bool $res) : string
    {
        $view_model = $post->createViewModel($res);
        return $this->renderPostViewModel($view_model, $res);
    }

    public function supportedFileTypes() : string
    {
        global $tinyib_uploads;
        if (empty($tinyib_uploads)) {
            return "";
        }

        $types_allowed = array_map('strtoupper', array_unique(array_column($tinyib_uploads, 0)));
        $types_last = array_pop($types_allowed);
        $types_formatted = $types_allowed
            ? implode(', ', $types_allowed) . ' and ' . $types_last
            : $types_last;

        return "Supported file type" . (count($tinyib_uploads) != 1 ? "s are " : " is ") . $types_formatted . ".";
    }

    /**
     * {@inheritDoc}
     */
    public function renderThreadPage(int $id) : string
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

        return $this->render('thread.twig', [
            'filetypes' => $this->supportedFileTypes(),
            'posts' => $post_vms,
            'parent' => $id,
            'res' => TINYIB_RESPAGE,
            'thumbnails' => true,
        ]);
    }

    /**
     * {@inheritDoc}
     */
    public function renderBoardPage(int $page) : string
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

        return $this->render('board.twig', [
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
    public function makeLinksClickable(string $text)
    {
        $text = preg_replace('!(((f|ht)tp(s)?://)[-a-zA-Zа-яА-Я()0-9@:%\!_+.,~#?&;//=]+)!i', '<a href="$1" target="_blank">$1</a>', $text);
        $text = preg_replace('/\(\<a href\=\"(.*)\)"\ target\=\"\_blank\">(.*)\)\<\/a>/i', '(<a href="$1" target="_blank">$2</a>)', $text);
        $text = preg_replace('/\<a href\=\"(.*)\."\ target\=\"\_blank\">(.*)\.\<\/a>/i', '<a href="$1" target="_blank">$2</a>.', $text);
        $text = preg_replace('/\<a href\=\"(.*)\,"\ target\=\"\_blank\">(.*)\,\<\/a>/i', '<a href="$1" target="_blank">$2</a>,', $text);

        return $text;
    }
}
