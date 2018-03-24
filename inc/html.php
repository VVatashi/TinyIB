<?php
if (!defined('TINYIB_BOARD')) {
	die('');
}

require_once './vendor/autoload.php';

$loader = new Twig_Loader_Filesystem('./templates');
$twig = new Twig_Environment($loader, array(
	'autoescape' => false,
	'cache' => './templates/cache',
	'debug' => true,
));
$twig->addGlobal('embeds', $tinyib_uploads);
$twig->addGlobal('uploads', $tinyib_embeds);

function supportedFileTypes() {
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

function makeLinksClickable($text) {
	$text = preg_replace('!(((f|ht)tp(s)?://)[-a-zA-Zа-яА-Я()0-9@:%\!_+.,~#?&;//=]+)!i', '<a href="$1" target="_blank">$1</a>', $text);
	$text = preg_replace('/\(\<a href\=\"(.*)\)"\ target\=\"\_blank\">(.*)\)\<\/a>/i', '(<a href="$1" target="_blank">$2</a>)', $text);
	$text = preg_replace('/\<a href\=\"(.*)\."\ target\=\"\_blank\">(.*)\.\<\/a>/i', '<a href="$1" target="_blank">$2</a>.', $text);
	$text = preg_replace('/\<a href\=\"(.*)\,"\ target\=\"\_blank\">(.*)\,\<\/a>/i', '<a href="$1" target="_blank">$2</a>,', $text);

	return $text;
}

function buildPost($post, $res) {
	global $twig;
	$is_thread = $post['parent'] == TINYIB_NEWTHREAD;
	$is_embed = isEmbed($post["file_hex"]);

	if (!isset($post["omitted"])) {
		$post["omitted"] = 0;
	}

	$expandhtml = '';
	$direct_link = $is_embed ? "#" : (($res == TINYIB_RESPAGE ? "../" : "") . "src/" . $post["file"]);

	if ($is_embed) {
		$expandhtml = $post['file'];
	} else if (substr($post['file'], -5) == '.webm') {
		$dimensions = 'width="500" height="50"';
		if ($post['image_width'] > 0 && $post['image_height'] > 0) {
			$dimensions = 'width="' . $post['image_width'] . '" height="' . $post['image_height'] . '"';
		}
		$expandhtml = <<<EOF
<video $dimensions style="position: static; pointer-events: inherit; display: inline; max-width: 100%; max-height: 100%;" controls autoplay loop>
	<source src="$direct_link"></source>
</video>
EOF;
	} else if (in_array(substr($post['file'], -4), array('.jpg', '.png', '.gif'))) {
		$expandhtml = "<a href=\"$direct_link\" onclick=\"return expandFile(event, '${post['id']}');\"><img src=\"" . ($res == TINYIB_RESPAGE ? "../" : "") . "src/${post["file"]}\" width=\"${post["image_width"]}\" style=\"max-width: 100%;height: auto;\"></a>";
	}

	$expand = $is_embed || in_array(substr($post['file'], -4), array('.jpg', '.png', '.gif', 'webm'));
	$expandhtml = rawurlencode($expandhtml);

	return $twig->render($is_thread ? '_thread.twig' : '_post.twig', array(
		'direct_link' => $direct_link,
		'expand' => $expand,
		'expandhtml' => $expandhtml,
		'is_embed' => $is_embed,
		'post' => $post,
		'res' => $res,
	));
}

function buildPage($htmlposts, $parent, $pages = 0, $thispage = 0) {
	global $twig, $tinyib_uploads;

	$managelink = basename($_SERVER['PHP_SELF']) . "?manage";

	$thumbnails = isset($tinyib_uploads['image/jpeg'])
		|| isset($tinyib_uploads['image/pjpeg'])
		|| isset($tinyib_uploads['image/png'])
		|| isset($tinyib_uploads['image/gif']);

	return $twig->render('page.twig', array(
		'filetypes' => supportedFileTypes(),
		'posts' => $htmlposts,
		'manage_link' => $managelink,
		'pages' => max($pages, 0),
		'this_page' => $thispage,
		'parent' => $parent,
		'thumbnails' => $thumbnails,
		'unique_posts' => uniquePosts(),
	));
}

function rebuildIndexes() {
	$page = 0;
	$i = 0;
	$htmlposts = '';
	$threads = allThreads();
	$pages = ceil(count($threads) / TINYIB_THREADSPERPAGE) - 1;

	foreach ($threads as $thread) {
		$replies = postsInThreadByID($thread['id']);
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

function rebuildThread($id) {
	$htmlposts = "";
	$posts = postsInThreadByID($id);
	foreach ($posts as $post) {
		$htmlposts .= buildPost($post, TINYIB_RESPAGE);
	}

	$htmlposts .= "\n<hr>";

	writePage('res/' . $id . '.html', fixLinksInRes(buildPage($htmlposts, $id)));
}

function managePage($text, $onload = '') {
	global $twig, $isadmin, $loggedin, $returnlink;
	return $twig->render('manage.twig', array(
		'body_attribs' => $onload,
		'is_admin' => $isadmin,
		'is_installed_via_git' => installedViaGit(),
		'is_logged_in' => $loggedin,
		'return_link' => $returnlink,
		'text' => $text,
	));
}

function manageOnLoad($page) {
	switch ($page) {
		case 'login':
			return ' onload="document.tinyib.managepassword.focus();"';
		case 'moderate':
			return ' onload="document.tinyib.moderate.focus();"';
		case 'rawpost':
			return ' onload="document.tinyib.message.focus();"';
		case 'bans':
			return ' onload="document.tinyib.ip.focus();"';
	}
}

function manageLogInForm() {
	global $twig;
	return $twig->render('_manage_log_in_form.twig');
}

function manageBanForm() {
	global $twig;
	return $twig->render('_manage_ban_form.twig', array('ip' => $_GET['bans']));
}

function manageBansTable() {
	global $twig;
	return $twig->render('_manage_bans_table.twig', array('bans' => allBans()));
}

function manageModeratePostForm() {
	global $twig;
	return $twig->render('_manage_moderate_post_form.twig');
}

function manageRawPostForm() {
	global $twig;
	return $twig->render('_manage_raw_post_form.twig');
}

function manageModeratePost($post) {
	global $twig, $isadmin;

	$data = array(
		'has_ban' => banByIP($post['ip']),
		'is_admin' => $isadmin,
		'post' => $post,
	);

	$is_thread = $post['parent'] == TINYIB_NEWTHREAD;
	$posts = $is_thread ? postsInThreadByID($post['id']) : array($post);

	$data['posts'] = array_map(function ($post) {
		$post['rendered'] = buildPost($post, TINYIB_INDEXPAGE);
		return $post;
	}, $posts);

	return $twig->render('_manage_moderate_post.twig', $data);
}

function manageStatus() {
	global $twig, $isadmin;
	$threads = countThreads();
	$bans = count(allBans());

	$data = array(
		'info' => $threads . ' ' . plural('thread', $threads) . ', ' . $bans . ' ' . plural('ban', $bans),
		'is_mysqli_recommended' => $isadmin && TINYIB_DBMODE == 'mysql' && function_exists('mysqli_connect'),
	);

	if (TINYIB_REQMOD == 'files' || TINYIB_REQMOD == 'all') {
		$data['reqmod_posts'] = array_map(function ($post) {
			$post['rendered'] = buildPost($post, TINYIB_INDEXPAGE);
			return $post;
		}, latestPosts(false));
	}

	$data['posts'] = array_map(function ($post) {
		$post['rendered'] = buildPost($post, TINYIB_INDEXPAGE);
		return $post;
	}, latestPosts(true));

	return $twig->render('_manage_status.twig', $data);
}

function manageInfo($text) {
	global $twig;
	return $twig->render('_manage_info.twig', array('text' => $text));
}
