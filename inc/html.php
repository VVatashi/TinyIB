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

function wakabamark($message)
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

function bbcode($message)
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

function buildPost($post, $res)
{
    global $renderer;
    $is_thread = $post['parent'] == TINYIB_NEWTHREAD;
    $is_embed = isEmbed($post["file_hex"]);

    $post['message'] = bbcode(wakabamark($post['message']));

    if (!isset($post["omitted"])) {
        $post["omitted"] = 0;
    }

    $expandhtml = '';
    $direct_link = $is_embed ? "#" : (($res == TINYIB_RESPAGE ? "../" : "") . "src/" . $post["file"]);

    if ($is_embed) {
        $expandhtml = $post['file'];
    } elseif (substr($post['file'], -5) == '.webm') {
        $dimensions = 'width="500" height="50"';
        if ($post['image_width'] > 0 && $post['image_height'] > 0) {
            $dimensions = 'width="' . $post['image_width'] . '" height="' . $post['image_height'] . '"';
        }
        $expandhtml = <<<EOF
<video $dimensions style="position: static; pointer-events: inherit; display: inline; max-width: 100%; max-height: 100%;" controls autoplay loop>
    <source src="$direct_link"></source>
</video>
EOF;
    } elseif (in_array(substr($post['file'], -4), array('.jpg', '.png', '.gif'))) {
        $expandhtml = "<a href=\"$direct_link\" onclick=\"return expandFile(event, '${post['id']}');\"><img src=\"" . ($res == TINYIB_RESPAGE ? "../" : "") . "src/${post["file"]}\" width=\"${post["image_width"]}\" style=\"max-width: 100%;height: auto;\"></a>";
    }

    $expand = $is_embed || in_array(substr($post['file'], -4), array('.jpg', '.png', '.gif', 'webm'));
    $expandhtml = rawurlencode($expandhtml);

    return $renderer->render($is_thread ? '_thread.twig' : '_reply.twig', [
        'direct_link' => $direct_link,
        'expand' => $expand,
        'expandhtml' => $expandhtml,
        'is_embed' => $is_embed,
        'reply' => $post,
        'res' => $res,
    ]);
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
    global $post_repository;

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
            $htmlreplies[] = buildPost($replies[$j], TINYIB_INDEXPAGE);
        }

        $htmlposts .= buildPost($thread, TINYIB_INDEXPAGE) . implode('', array_reverse($htmlreplies)) . "\n<hr>";

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
    global $post_repository;

    $htmlposts = "";
    $posts = $post_repository->postsInThreadByID($id);
    foreach ($posts as $post) {
        $htmlposts .= buildPost($post, TINYIB_RESPAGE);
    }

    $htmlposts .= "\n<hr>";

    writePage('res/' . $id . '.html', fixLinksInRes(buildPage($htmlposts, $id)));
}
