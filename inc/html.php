<?php

if (!defined('TINYIB_BOARD')) {
    die('');
}

$renderer = new \TinyIB\Renderer([
    'embeds' => $tinyib_uploads,
    'uploads' => $tinyib_embeds,
    'manage_link' => basename($_SERVER['PHP_SELF']) . "?manage",
]);

function supportedFileTypes()
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

function makeLinksClickable($text)
{
    $text = preg_replace('!(((f|ht)tp(s)?://)[-a-zA-Zа-яА-Я()0-9@:%\!_+.,~#?&;//=]+)!i', '<a href="$1" target="_blank">$1</a>', $text);
    $text = preg_replace('/\(\<a href\=\"(.*)\)"\ target\=\"\_blank\">(.*)\)\<\/a>/i', '(<a href="$1" target="_blank">$2</a>)', $text);
    $text = preg_replace('/\<a href\=\"(.*)\."\ target\=\"\_blank\">(.*)\.\<\/a>/i', '<a href="$1" target="_blank">$2</a>.', $text);
    $text = preg_replace('/\<a href\=\"(.*)\,"\ target\=\"\_blank\">(.*)\,\<\/a>/i', '<a href="$1" target="_blank">$2</a>,', $text);

    return $text;
}

function buildPage($htmlposts, $parent, $pages = 0, $thispage = 0)
{
    global $renderer, $post_repository, $tinyib_uploads;

    $managelink = basename($_SERVER['PHP_SELF']) . "?manage";

    $thumbnails = isset($tinyib_uploads['image/jpeg'])
        || isset($tinyib_uploads['image/pjpeg'])
        || isset($tinyib_uploads['image/png'])
        || isset($tinyib_uploads['image/gif']);

    return $renderer->render($parent === 0 ? 'board.twig' : 'thread.twig', [
        'filetypes' => supportedFileTypes(),
        'posts' => $htmlposts,
        'pages' => max($pages, 0),
        'this_page' => $thispage,
        'parent' => $parent,
        'thumbnails' => $thumbnails,
        'unique_posts' => $post_repository->uniquePosts(),
    ]);
}

function rebuildIndexes()
{
    global $post_repository, $renderer;

    $page = 0;
    $i = 0;
    $htmlposts = '';
    $threads = $post_repository->allThreads();
    $pages = ceil(count($threads) / TINYIB_THREADSPERPAGE) - 1;

    foreach ($threads as $thread) {
        $replies = $post_repository->postsInThreadByID($thread['id']);
        $thread['omitted'] = max(0, count($replies) - TINYIB_PREVIEWREPLIES - 1);

        // Build replies for preview
        $htmlreplies = array();
        for ($j = count($replies) - 1; $j > $thread['omitted']; $j--) {
            $htmlreplies[] = $renderer->renderPost($replies[$j], TINYIB_INDEXPAGE);
        }

        $htmlposts .= $renderer->renderPost($thread, TINYIB_INDEXPAGE) . implode('', array_reverse($htmlreplies)) . "\n<hr>";

        if (++$i >= TINYIB_THREADSPERPAGE) {
            $file = ($page == 0) ? 'index.html' : $page . '.html';
            writePage($file, buildPage($htmlposts, 0, $pages, $page));

            $page++;
            $i = 0;
            $htmlposts = '';
        }
    }

    if ($page == 0 || $htmlposts != '') {
        $file = ($page == 0) ? 'index.html' : $page . '.html';
        writePage($file, buildPage($htmlposts, 0, $pages, $page));
    }
}

function rebuildThread($id)
{
    global $post_repository, $renderer;

    $htmlposts = "";
    $posts = $post_repository->postsInThreadByID($id);
    foreach ($posts as $post) {
        $htmlposts .= $renderer->renderPost($post, TINYIB_RESPAGE);
    }

    $htmlposts .= "\n<hr>";

    writePage('res/' . $id . '.html', fixLinksInRes(buildPage($htmlposts, $id)));
}
