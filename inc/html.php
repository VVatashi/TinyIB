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
	$return = "";
	$threadid = ($post['parent'] == TINYIB_NEWTHREAD) ? $post['id'] : $post['parent'];

	if ($res == TINYIB_RESPAGE) {
		$reflink = "<a href=\"$threadid.html#{$post['id']}\">No.</a><a href=\"$threadid.html#q{$post['id']}\" onclick=\"javascript:quotePost('{$post['id']}')\">{$post['id']}</a>";
	} else {
		$reflink = "<a href=\"res/$threadid.html#{$post['id']}\">No.</a><a href=\"res/$threadid.html#q{$post['id']}\">{$post['id']}</a>";
	}

	if ($post["stickied"] == 1) {
		$reflink .= ' <img src="sticky.png" alt="Stickied" title="Stickied" width="16" height="16">';
	}

	if (!isset($post["omitted"])) {
		$post["omitted"] = 0;
	}

	$filehtml = '';
	$filesize = '';
	$expandhtml = '';
	$direct_link = isEmbed($post["file_hex"]) ? "#" : (($res == TINYIB_RESPAGE ? "../" : "") . "src/" . $post["file"]);

	if ($post['parent'] == TINYIB_NEWTHREAD && $post["file"] != '') {
		$filesize .= isEmbed($post['file_hex']) ? 'Embed: ' : 'File: ';
	}

	if (isEmbed($post["file_hex"])) {
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

	$thumblink = "<a href=\"$direct_link\" target=\"_blank\"" . ((isEmbed($post["file_hex"]) || in_array(substr($post['file'], -4), array('.jpg', '.png', '.gif', 'webm'))) ? " onclick=\"return expandFile(event, '${post['id']}');\"" : "") . ">";
	$expandhtml = rawurlencode($expandhtml);

	if (isEmbed($post["file_hex"])) {
		$filesize .= "<a href=\"$direct_link\" onclick=\"return expandFile(event, '${post['id']}');\">${post['file_original']}</a>&ndash;(${post['file_hex']})";
	} else if ($post["file"] != '') {
		$filesize .= $thumblink . "${post["file"]}</a>&ndash;(${post["file_size_formatted"]}";
		if ($post["image_width"] > 0 && $post["image_height"] > 0) {
			$filesize .= ", " . $post["image_width"] . "x" . $post["image_height"];
		}
		if ($post["file_original"] != "") {
			$filesize .= ", " . $post["file_original"];
		}
		$filesize .= ")";
	}

	if ($filesize != '') {
		$filesize = '<span class="filesize">' . $filesize . '</span>';
	}

	if ($filesize != '') {
		if ($post['parent'] != TINYIB_NEWTHREAD) {
			$filehtml .= '<br>';
		}
		$filehtml .= $filesize . '<br><div id="thumbfile' . $post['id'] . '">';
		if ($post["thumb_width"] > 0 && $post["thumb_height"] > 0) {
			$filehtml .= <<<EOF
$thumblink
	<img src="thumb/${post["thumb"]}" alt="${post["id"]}" class="thumb" id="thumbnail${post['id']}" width="${post["thumb_width"]}" height="${post["thumb_height"]}">
</a>
EOF;
		}
		$filehtml .= '</div>';

		if ($expandhtml != '') {
			$filehtml .= <<<EOF
<div id="expand${post['id']}" style="display: none;">$expandhtml</div>
<div id="file${post['id']}" class="thumb" style="display: none;"></div>
EOF;
		}
	}
	if ($post["parent"] == TINYIB_NEWTHREAD) {
		$return .= $filehtml;
	} else {
		$return .= <<<EOF
<table>
<tbody>
<tr>
<td class="doubledash">
	&#0168;
</td>
<td class="reply" id="reply${post["id"]}">
EOF;
	}

	$return .= <<<EOF
<a id="${post['id']}"></a>
<label>
	<input type="checkbox" name="delete" value="${post['id']}">
EOF;

	if ($post['subject'] != '') {
		$return .= ' <span class="filetitle">' . $post['subject'] . '</span> ';
	}

	$return .= <<<EOF
${post["nameblock"]}
</label>
<span class="reflink">
	$reflink
</span>
EOF;

	if ($post['parent'] != TINYIB_NEWTHREAD) {
		$return .= $filehtml;
	}

	if ($post['parent'] == TINYIB_NEWTHREAD && $res == TINYIB_INDEXPAGE) {
		$return .= "&nbsp;[<a href=\"res/${post["id"]}.html\">Reply</a>]";
	}

	if (TINYIB_TRUNCATE > 0 && !$res && substr_count($post['message'], '<br>') > TINYIB_TRUNCATE) { // Truncate messages on board index pages for readability
		$br_offsets = strallpos($post['message'], '<br>');
		$post['message'] = substr($post['message'], 0, $br_offsets[TINYIB_TRUNCATE - 1]);
		$post['message'] .= '<br><span class="omittedposts">Post truncated.  Click Reply to view.</span><br>';
	}
	$return .= <<<EOF
<div class="message">
${post["message"]}
</div>
EOF;

	if ($post['parent'] == TINYIB_NEWTHREAD) {
		if ($res == TINYIB_INDEXPAGE && $post['omitted'] > 0) {
			$return .= '<span class="omittedposts">' . $post['omitted'] . ' ' . plural('post', $post['omitted']) . ' omitted. Click Reply to view.</span>';
		}
	} else {
		$return .= <<<EOF
</td>
</tr>
</tbody>
</table>
EOF;
	}

	return $return;
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
