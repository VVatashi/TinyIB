<?php

namespace TinyIB\Renderer;

class Renderer implements IRenderer
{
    /** @var \TinyIB\Repository\IPostRepository $post_repository */
    protected $post_repository;

    /** @var string $twig */
    protected $twig;

    /**
     * @param \TinyIB\Repository\IPostRepository $post_repository
     * @param array $variables
     */
    public function __construct($post_repository, $variables)
    {
        $this->post_repository = $post_repository;

        $loader = new \Twig_Loader_Filesystem('./templates');

        $this->twig = new \Twig_Environment($loader, array(
            'autoescape' => false,
            'cache' => './templates/cache',
            'debug' => true,
        ));

        foreach ($variables as $key => $value) {
            $this->twig->addGlobal($key, $value);
        }
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
    protected function wakabamark($message)
    {
        // Converts wakabamark to bbcodes
        $patterns = array(
            '/\*\*(.*?)\*\*/si' => '[b]\\1[/b]',
            '/\*(.*?)\*/si' => '[i]\\1[/i]',
            '/~~(.*?)~~/si' => '[s]\\1[/s]',
            '/%%(.*?)%%/si' => '[spoiler]\\1[/spoiler]',
            '/`(.*?)`/si' => '[code]\\1[/code]',
        );

        return preg_replace(array_keys($patterns), array_values($patterns), $message);
    }

    /**
     * @param string $message
     *
     * @return string
     */
    protected function bbcode($message)
    {
        $patterns = array(
            '/\[b\]([^[]*)\[\/b\]/si' => '<strong>\\1</strong>',
            '/\[i\]([^[]*)\[\/i\]/si' => '<em>\\1</em>',
            '/\[u\]([^[]*)\[\/u\]/si' => '<span style="text-decoration: underline;">\\1</span>',
            '/\[s\]([^[]*)\[\/s\]/si' => '<del>\\1</del>',
            '/\[sup\]([^[]*)\[\/sup\]/si' => '<sup>\\1</sup>',
            '/\[sub\]([^[]*)\[\/sub\]/si' => '<sub>\\1</sub>',
            '/\[spoiler\]([^[]*)\[\/spoiler\]/si' => '<span class="spoiler">\\1</span>',
            '/\[code\]([^[]*)\[\/code\]/si' => '<code style="white-space: pre;">\\1</code>',
            '/\[rp\]([^[]*)\[\/rp\]/si' => '<span class="rp">\\1</span>',
        );

        do {
            $message = preg_replace(array_keys($patterns), array_values($patterns), $message, -1, $count);
        } while ($count);

        return $message;
    }

    /**
     * {@inheritDoc}
     */
    public function preprocessPost($post, $res)
    {
        $post = $this->truncateMessage($post, $res);
        $post['message'] = $this->wakabamark($post['message']);
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
            } elseif (in_array($post['file_extension'], ['webm'])) {
                $post['file_type'] = 'video';
            }
        }

        return $post;
    }

    /**
     * {@inheritDoc}
     */
    public function renderPost($post, $res)
    {
        $post = $this->preprocessPost($post, $res);
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
    public function makeLinksClickable($text)
    {
        $text = preg_replace('!(((f|ht)tp(s)?://)[-a-zA-Zа-яА-Я()0-9@:%\!_+.,~#?&;//=]+)!i', '<a href="$1" target="_blank">$1</a>', $text);
        $text = preg_replace('/\(\<a href\=\"(.*)\)"\ target\=\"\_blank\">(.*)\)\<\/a>/i', '(<a href="$1" target="_blank">$2</a>)', $text);
        $text = preg_replace('/\<a href\=\"(.*)\."\ target\=\"\_blank\">(.*)\.\<\/a>/i', '<a href="$1" target="_blank">$2</a>.', $text);
        $text = preg_replace('/\<a href\=\"(.*)\,"\ target\=\"\_blank\">(.*)\,\<\/a>/i', '<a href="$1" target="_blank">$2</a>,', $text);

        return $text;
    }

    protected function writePage($filename, $contents)
    {
        $tempfile = tempnam('res/', TINYIB_BOARD . 'tmp'); /* Create the temporary file */
        $fp = fopen($tempfile, 'w');
        fwrite($fp, $contents);
        fclose($fp);
        /* If we aren't able to use the rename function, try the alternate method */
        if (!@rename($tempfile, $filename)) {
            copy($tempfile, $filename);
            unlink($tempfile);
        }

        chmod($filename, 0664); /* it was created 0600 */
    }

    /**
     * {@inheritDoc}
     */
    public function rebuildIndexes()
    {
        $page = 0;
        $i = 0;
        $posts = [];
        $threads = $this->post_repository->allThreads();
        $pages = ceil(count($threads) / TINYIB_THREADSPERPAGE) - 1;

        foreach ($threads as $thread) {
            $replies = $this->post_repository->postsInThreadByID($thread['id']);
            $thread['omitted'] = max(0, count($replies) - TINYIB_PREVIEWREPLIES - 1);

            $replies = array_slice($replies, -TINYIB_PREVIEWREPLIES);
            array_unshift($replies, $thread);

            $posts = array_merge($posts, array_map(function ($post) {
                return $this->preprocessPost($post, TINYIB_INDEXPAGE);
            }, $replies));

            if (++$i >= TINYIB_THREADSPERPAGE) {
                $file = ($page == 0) ? 'index.html' : $page . '.html';
                $html = $this->render('board.twig', [
                    'filetypes' => $this->supportedFileTypes(),
                    'posts' => $posts,
                    'pages' => max($pages, 0),
                    'this_page' => $page,
                    'parent' => 0,
                    'res' => TINYIB_INDEXPAGE,
                    'thumbnails' => true,
                    'unique_posts' => $this->post_repository->uniquePosts(),
                ]);

                $this->writePage($file, $html);

                $page++;
                $i = 0;
                $posts = [];
            }
        }

        if ($page == 0 || !empty($posts)) {
            $file = ($page == 0) ? 'index.html' : $page . '.html';
            $html = $this->render('board.twig', [
                'filetypes' => $this->supportedFileTypes(),
                'posts' => $posts,
                'pages' => max($pages, 0),
                'this_page' => $page,
                'parent' => 0,
                'res' => TINYIB_INDEXPAGE,
                'thumbnails' => true,
                'unique_posts' => $this->post_repository->uniquePosts(),
            ]);

            $this->writePage($file, $html);
        }
    }

    /**
     * {@inheritDoc}
     */
    public function rebuildThread($id)
    {
        $posts = array_map(function ($post) {
            return $this->preprocessPost($post, TINYIB_RESPAGE);
        }, $this->post_repository->postsInThreadByID($id));

        $html = $this->render('thread.twig', [
            'filetypes' => $this->supportedFileTypes(),
            'posts' => $posts,
            'parent' => $id,
            'res' => TINYIB_RESPAGE,
            'thumbnails' => true,
            'unique_posts' => $this->post_repository->uniquePosts(),
        ]);

        $this->writePage('res/' . $id . '.html', fixLinksInRes($html));
    }
}
