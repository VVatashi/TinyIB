<?php

namespace TinyIB\Service;

use TinyIB\Cache\CacheInterface;
use TinyIB\Repository\PostRepositoryInterface;
use Twig_Environment;
use VVatashi\BBCode\BBCode;
use VVatashi\BBCode\Tokenizer;
use VVatashi\BBCode\Parser;
use VVatashi\BBCode\HtmlGenerator;

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
    public function render($template, $variables = [])
    {
        return $this->twig->render($template, $variables);
    }

    /**
     * @param array $message
     * @param boolean $res
     *
     * @return array
     */
    protected function truncateMessage($post, $res)
    {
        // Truncate messages on board index pages for readability
        if (TINYIB_TRUNCATE > 0 && !$res
            && substr_count($post['message'], '<br>') > TINYIB_TRUNCATE) {
            $br_offsets = strallpos($post['message'], '<br>');
            $post['message'] = substr($post['message'], 0, $br_offsets[TINYIB_TRUNCATE - 1]);
            $post['is_truncated'] = true;
        }

        return $post;
    }

    /**
     * @param string $message
     *
     * @return string
     */
    protected function bbcode($message)
    {
        $tags = [
            'b' => BBCode::create('strong'),
            'i' => BBCode::create('em'),
            'u' => BBCode::create('span', 'style="text-decoration: underline;"'),
            's' => BBCode::create('del'),
            'color' => BBCode::create('span', function ($attribute) {
                $matches = [];
                if (preg_match('/#[0-9a-f]{6}/i', $attribute, $matches)) {
                    $color = $matches[0];
                    return "style=\"color: $color;\"";
                }

                return '';
            }),
            'sup' => BBCode::create('sup'),
            'sub' => BBCode::create('sub'),
            'spoiler' => BBCode::create('span', 'class="spoiler"'),
            'rp' => BBCode::create('span', 'class="rp"'),
            'code' => BBCode::create('code', 'style="white-space: pre;"', false),
        ];

        $tokenizer = new Tokenizer($tags);
        $parser = new Parser($tags);
        $generator = new HtmlGenerator($tags);

        $tokens = $tokenizer->tokenize($message);
        $nodes = $parser->parse($tokens);
        return $generator->generate($nodes);
    }

    /**
     * {@inheritDoc}
     */
    public function preprocessPost($post, $res)
    {
        $post = $this->truncateMessage($post, $res);
        $post['message'] = $this->bbcode($post['message']);

        if (isset($post['file'])) {
            $file_parts = explode('.', $post['file']);
            $post['file_extension'] = end($file_parts);

            if (isEmbed($post["file_hex"])) {
                $post['file_type'] = 'embed';
            } elseif (in_array($post['file_extension'], ['jpg', 'png', 'gif'])) {
                $post['file_type'] = 'image';
            } elseif (in_array($post['file_extension'], ['mp3'])) {
                $post['file_type'] = 'audio';
            } elseif (in_array($post['file_extension'], ['mp4', 'webm'])) {
                $post['file_type'] = 'video';
            }
        }

        return $post;
    }

    /**
     * {@inheritDoc}
     */
    public function renderPost($post, $res, $preprocessed = false)
    {
        if ($preprocessed === false) {
            $post = $this->preprocessPost($post, $res);
        }

        $is_thread = $post['parent'] == TINYIB_NEWTHREAD;

        return $this->render($is_thread ? '_post_oppost.twig' : '_post.twig', [
            'post' => $post,
            'res' => $res,
        ]);
    }

    public function supportedFileTypes()
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
    public function renderThreadPage($id)
    {
        $posts = array_map(function ($post) {
            if (TINYIB_CACHE === 'database') {
                // Do not cache individual posts in database mode.
                return $this->preprocessPost($post, TINYIB_RESPAGE);
            }

            $key = TINYIB_BOARD . ':post:' . $post['id'];
            $post['rendered'] = $this->cache->get($key);

            if ($post['rendered'] === null) {
                $post = $this->preprocessPost($post, TINYIB_RESPAGE);
                $post['rendered'] = $this->renderPost($post, TINYIB_RESPAGE, true);
                $this->cache->set($key, $post['rendered'], 4 * 60 * 60);
            }

            return $post;
        }, $this->post_repository->postsInThreadByID($id));

        return $this->render('thread.twig', [
            'filetypes' => $this->supportedFileTypes(),
            'posts' => $posts,
            'parent' => $id,
            'res' => TINYIB_RESPAGE,
            'thumbnails' => true,
        ]);
    }

    /**
     * {@inheritDoc}
     */
    public function renderBoardPage($page)
    {
        $threads = $this->post_repository->getThreadsByPage($page);
        $pages = ceil($this->post_repository->countThreads() / TINYIB_THREADSPERPAGE) - 1;
        $posts = [];

        foreach ($threads as $thread) {
            $replies = $this->post_repository->postsInThreadByID($thread['id']);
            $thread['omitted'] = max(0, count($replies) - TINYIB_PREVIEWREPLIES - 1);
            $replies = array_slice($replies, -TINYIB_PREVIEWREPLIES);

            if (empty($replies) || $replies[0]['id'] !== $thread['id']) {
                array_unshift($replies, $thread);
            }

            $posts = array_merge($posts, array_map(function ($post) {
                if (TINYIB_CACHE === 'database') {
                    // Do not cache individual posts in database mode.
                    return $this->preprocessPost($post, TINYIB_INDEXPAGE);
                }

                $key = TINYIB_BOARD . ':index_post:' . $post['id'];
                $post['rendered'] = $this->cache->get($key);

                if ($post['rendered'] === null) {
                    $post = $this->preprocessPost($post, TINYIB_INDEXPAGE);
                    $post['rendered'] = $this->renderPost($post, TINYIB_INDEXPAGE, true);
                    $this->cache->set($key, $post['rendered'], 4 * 60 * 60);
                }

                return $post;
            }, $replies));
        }

        return $this->render('board.twig', [
            'filetypes' => $this->supportedFileTypes(),
            'posts' => $posts,
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
    public function makeLinksClickable($text)
    {
        $text = preg_replace('!(((f|ht)tp(s)?://)[-a-zA-Zа-яА-Я()0-9@:%\!_+.,~#?&;//=]+)!i', '<a href="$1" target="_blank">$1</a>', $text);
        $text = preg_replace('/\(\<a href\=\"(.*)\)"\ target\=\"\_blank\">(.*)\)\<\/a>/i', '(<a href="$1" target="_blank">$2</a>)', $text);
        $text = preg_replace('/\<a href\=\"(.*)\."\ target\=\"\_blank\">(.*)\.\<\/a>/i', '<a href="$1" target="_blank">$2</a>.', $text);
        $text = preg_replace('/\<a href\=\"(.*)\,"\ target\=\"\_blank\">(.*)\,\<\/a>/i', '<a href="$1" target="_blank">$2</a>,', $text);

        return $text;
    }
}
