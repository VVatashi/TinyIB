<?php

# TinyIB
#
# https://github.com/tslocum/TinyIB

require_once './vendor/autoload.php';

error_reporting(E_ALL);
ini_set("display_errors", 1);
session_start();
setcookie(session_name(), session_id(), time() + 2592000);

ob_implicit_flush();
if (function_exists('ob_get_level')) {
    while (ob_get_level() > 0) {
        ob_end_flush();
    }
}

if (get_magic_quotes_gpc()) {
    foreach ($_GET as $key => $val) {
        $_GET[$key] = stripslashes($val);
    }
    foreach ($_POST as $key => $val) {
        $_POST[$key] = stripslashes($val);
    }
}
if (get_magic_quotes_runtime()) {
    set_magic_quotes_runtime(0);
}

function fancyDie($message)
{
    die('<body text="#800000" bgcolor="#FFFFEE" align="center"><br><div style="display: inline-block; background-color: #F0E0D6;font-size: 1.25em;font-family: Tahoma, Geneva, sans-serif;padding: 7px;border: 1px solid #D9BFB7;border-left: none;border-top: none;">' . $message . '</div><br><br>- <a href="javascript:history.go(-1)">Click here to go back</a> -</body>');
}

if (!file_exists('settings.php')) {
    fancyDie('Please copy the file settings.default.php to settings.php');
}

require 'settings.php';

if (TINYIB_TRIPSEED == '' || TINYIB_ADMINPASS == '') {
    fancyDie('TINYIB_TRIPSEED and TINYIB_ADMINPASS must be configured.');
}

if (TINYIB_CAPTCHA === 'recaptcha' && (TINYIB_RECAPTCHA_SITE == '' || TINYIB_RECAPTCHA_SECRET == '')) {
    fancyDie('TINYIB_RECAPTCHA_SITE and TINYIB_RECAPTCHA_SECRET  must be configured.');
}

// Check directories are writable by the script
$writedirs = array("res", "src", "thumb");

foreach ($writedirs as $dir) {
    if (!is_writable($dir)) {
        fancyDie("Directory '" . $dir . "' can not be written to.  Please modify its permissions.");
    }
}

$includes = array('inc/defines.php', 'inc/functions.php', 'inc/html.php', 'inc/database.php');

foreach ($includes as $include) {
    include $include;
}

if (TINYIB_TIMEZONE != '') {
    date_default_timezone_set(TINYIB_TIMEZONE);
}

global $ban_repository, $post_repository;

$redirect = true;
// Check if the request is to make a post
if (isset($_POST['message']) || isset($_POST['file'])) {
    if (TINYIB_DBMIGRATE) {
        fancyDie('Posting is currently disabled.<br>Please try again in a few moments.');
    }

    list($loggedin, $isadmin) = manageCheckLogIn();
    $rawpost = isRawPost();
    if (!$loggedin) {
        checkCAPTCHA();
        checkBanned();
        checkMessageSize();
        checkFlood();
    }

    $post = newPost(setParent());
    $post['ip'] = $_SERVER['REMOTE_ADDR'];

    list($post['name'], $post['tripcode']) = nameAndTripcode($_POST['name']);

    $post['name'] = cleanString(substr($post['name'], 0, 75));
    $post['email'] = cleanString(str_replace('"', '&quot;', substr($_POST['email'], 0, 75)));
    $post['subject'] = cleanString(substr($_POST['subject'], 0, 75));

    if ($rawpost) {
        $rawposttext = ($isadmin) ? ' <span style="color: red;">## Admin</span>' : ' <span style="color: purple;">## Mod</span>';
        $post['message'] = $_POST['message']; // Treat message as raw HTML
    } else {
        $rawposttext = '';
        $post['message'] = str_replace("\n", '<br>', makeLinksClickable(colorQuote(postLink(cleanString(rtrim($_POST['message']))))));

        if (TINYIB_DICE_ENABLED) {
            $post['message'] = dice($post['message']);
        }
    }

    $post['password'] = ($_POST['password'] != '') ? md5(md5($_POST['password'])) : '';
    $post['nameblock'] = nameBlock($post['name'], $post['tripcode'], $post['email'], time(), $rawposttext);

    if (isset($_POST['embed']) && trim($_POST['embed']) != '') {
        list($service, $embed) = getEmbed(trim($_POST['embed']));
        if (empty($embed) || !isset($embed['html']) || !isset($embed['title']) || !isset($embed['thumbnail_url'])) {
            fancyDie("Invalid embed URL. Only " . (implode("/", array_keys($tinyib_embeds))) . " URLs are supported.");
        }

        $post['file_hex'] = $service;
        $temp_file = time() . substr(microtime(), 2, 3);
        $file_location = "thumb/" . $temp_file;
        file_put_contents($file_location, url_get_contents($embed['thumbnail_url']));

        $file_info = getimagesize($file_location);
        $file_mime = mime_content_type($file_location);
        $post['image_width'] = $file_info[0];
        $post['image_height'] = $file_info[1];

        if ($file_mime == "image/jpeg") {
            $post['thumb'] = $temp_file . '.jpg';
        } else if ($file_mime == "image/gif") {
            $post['thumb'] = $temp_file . '.gif';
        } else if ($file_mime == "image/png") {
            $post['thumb'] = $temp_file . '.png';
        } else {
            fancyDie("Error while processing audio/video.");
        }
        $thumb_location = "thumb/" . $post['thumb'];

        list($thumb_maxwidth, $thumb_maxheight) = thumbnailDimensions($post);

        if (!createThumbnail($file_location, $thumb_location, $thumb_maxwidth, $thumb_maxheight)) {
            fancyDie("Could not create thumbnail.");
        }

        if ($embed['type'] !== 'photo') {
            addVideoOverlay($thumb_location);
        }

        $thumb_info = getimagesize($thumb_location);
        $post['thumb_width'] = $thumb_info[0];
        $post['thumb_height'] = $thumb_info[1];

        $post['file_original'] = cleanString($embed['title']);
        $post['file'] = $embed['html'];
    } elseif (isset($_FILES['file'])) {
        if ($_FILES['file']['name'] != "") {
            validateFileUpload();

            if (!is_file($_FILES['file']['tmp_name']) || !is_readable($_FILES['file']['tmp_name'])) {
                fancyDie("File transfer failure. Please retry the submission.");
            }

            if ((TINYIB_MAXKB > 0) && (filesize($_FILES['file']['tmp_name']) > (TINYIB_MAXKB * 1024))) {
                fancyDie("That file is larger than " . TINYIB_MAXKBDESC . ".");
            }

            $post['file_original'] = trim(htmlentities(substr($_FILES['file']['name'], 0, 50), ENT_QUOTES));
            $post['file_hex'] = md5_file($_FILES['file']['tmp_name']);
            $post['file_size'] = $_FILES['file']['size'];
            $post['file_size_formatted'] = convertBytes($post['file_size']);

            if (TINYIB_FILE_ALLOW_DUPLICATE === false) {
                checkDuplicateFile($post['file_hex']);
            }

            $file_mime_split = explode(' ', trim(mime_content_type($_FILES['file']['tmp_name'])));
            if (count($file_mime_split) > 0) {
                $file_mime = strtolower(array_pop($file_mime_split));
            } else {
                if (!@getimagesize($_FILES['file']['tmp_name'])) {
                    fancyDie("Failed to read the MIME type and size of the uploaded file. Please retry the submission.");
                }

                $file_info = getimagesize($_FILES['file']['tmp_name']);
                $file_mime = mime_content_type($file_location);
            }

            // If can't obtain file mime, try get it from extension
            if (empty($file_mime) || $file_mime === 'application/octet-stream') {
                $mime_types = array(
                    'jpg' => 'image/jpeg',
                    'jpeg' => 'image/jpeg',
                    'png' => 'image/png',
                    'gif' => 'image/gif',
                    'mp3' => 'audio/mpeg',
                    'webm' => 'video/webm',
                );

                $parts = explode('.', $_FILES['file']['name']);
                $extension = end($parts);

                if (isset($mime_types[$extension])) {
                    $file_mime = $mime_types[$extension];
                }
            }

            if (empty($file_mime) || !isset($tinyib_uploads[$file_mime])) {
                fancyDie(supportedFileTypes());
            }

            $file_name = time() . substr(microtime(), 2, 3);
            $post['file'] = $file_name . "." . $tinyib_uploads[$file_mime][0];

            $file_location = "src/" . $post['file'];
            if (!move_uploaded_file($_FILES['file']['tmp_name'], $file_location)) {
                fancyDie("Could not copy uploaded file.");
            }

            if ($_FILES['file']['size'] != filesize($file_location)) {
                @unlink($file_location);
                fancyDie("File transfer failure. Please go back and try again.");
            }

            if ($file_mime == "audio/webm" || $file_mime == "video/webm") {
                $post['image_width'] = max(0, intval(shell_exec('mediainfo --Inform="Video;%Width%" ' . $file_location)));
                $post['image_height'] = max(0, intval(shell_exec('mediainfo --Inform="Video;%Height%" ' . $file_location)));

                if ($post['image_width'] > 0 && $post['image_height'] > 0) {
                    list($thumb_maxwidth, $thumb_maxheight) = thumbnailDimensions($post);
                    $post['thumb'] = $file_name . "s.jpg";
                    shell_exec("ffmpegthumbnailer -s " . max($thumb_maxwidth, $thumb_maxheight) . " -i $file_location -o thumb/{$post['thumb']}");

                    $thumb_info = getimagesize("thumb/" . $post['thumb']);
                    $post['thumb_width'] = $thumb_info[0];
                    $post['thumb_height'] = $thumb_info[1];

                    if ($post['thumb_width'] <= 0 || $post['thumb_height'] <= 0) {
                        @unlink($file_location);
                        @unlink("thumb/" . $post['thumb']);
                        fancyDie("Sorry, your video appears to be corrupt.");
                    }

                    addVideoOverlay("thumb/" . $post['thumb']);
                }

                $duration = intval(shell_exec('mediainfo --Inform="General;%Duration%" ' . $file_location));
                if ($duration > 0) {
                    $mins = floor(round($duration / 1000) / 60);
                    $secs = str_pad(floor(round($duration / 1000) % 60), 2, "0", STR_PAD_LEFT);

                    $post['file_original'] = "$mins:$secs" . ($post['file_original'] != '' ? (', ' . $post['file_original']) : '');
                }
            } elseif (in_array($file_mime, array('image/jpeg', 'image/pjpeg', 'image/png', 'image/gif', 'application/x-shockwave-flash'))) {
                $file_info = getimagesize($file_location);

                $post['image_width'] = $file_info[0];
                $post['image_height'] = $file_info[1];
            }

            if (isset($tinyib_uploads[$file_mime][1])) {
                $thumbfile_split = explode(".", $tinyib_uploads[$file_mime][1]);
                $post['thumb'] = $file_name . "s." . array_pop($thumbfile_split);
                if (!copy($tinyib_uploads[$file_mime][1], "thumb/" . $post['thumb'])) {
                    @unlink($file_location);
                    fancyDie("Could not create thumbnail.");
                }
                if ($file_mime == "application/x-shockwave-flash") {
                    addVideoOverlay("thumb/" . $post['thumb']);
                }
            } else if (in_array($file_mime, array('image/jpeg', 'image/pjpeg', 'image/png', 'image/gif'))) {
                $post['thumb'] = $file_name . "s." . $tinyib_uploads[$file_mime][0];
                list($thumb_maxwidth, $thumb_maxheight) = thumbnailDimensions($post);

                if (!createThumbnail($file_location, "thumb/" . $post['thumb'], $thumb_maxwidth, $thumb_maxheight)) {
                    @unlink($file_location);
                    fancyDie("Could not create thumbnail.");
                }
            }

            if ($post['thumb'] != '') {
                $thumb_info = getimagesize("thumb/" . $post['thumb']);
                $post['thumb_width'] = $thumb_info[0];
                $post['thumb_height'] = $thumb_info[1];
            }
        }
    }

    if ($post['file'] == '') { // No file uploaded
        $allowed = "";
        if (!empty($tinyib_uploads)) {
            $allowed = "file";
        }
        if (!empty($tinyib_embeds)) {
            if ($allowed != "") {
                $allowed .= " or ";
            }
            $allowed .= "embed URL";
        }
        if ($post['parent'] == TINYIB_NEWTHREAD && $allowed != "" && !TINYIB_NOFILEOK) {
            fancyDie("A $allowed is required to start a thread.");
        }
        if (str_replace('<br>', '', $post['message']) == "") {
            fancyDie("Please enter a message" . ($allowed != "" ? " and/or upload a $allowed" : "") . ".");
        }
    } else {
        print $post['file_original'] . ' uploaded.<br>';
    }

    if (!$loggedin && (($post['file'] != '' && TINYIB_REQMOD == 'files') || TINYIB_REQMOD == 'all')) {
        $post['moderated'] = '0';
        print 'Your ' . ($post['parent'] == TINYIB_NEWTHREAD ? 'thread' : 'post') . ' will be shown <b>once it has been approved</b>.<br>';
        $slow_redirect = true;
    }

    $post['id'] = $post_repository->insertPost($post);

    if ($post['moderated'] == '1') {
        if (TINYIB_ALWAYSNOKO || strtolower($post['email']) == 'noko') {
            $redirect = 'res/' . ($post['parent'] == TINYIB_NEWTHREAD ? $post['id'] : $post['parent']) . '.html#' . $post['id'];
        }

        $post_repository->trimThreads();

        print 'Updating thread...<br>';
        if ($post['parent'] != TINYIB_NEWTHREAD) {
            rebuildThread($post['parent']);

            if (strtolower($post['email']) != 'sage') {
                if (TINYIB_MAXREPLIES == 0 || $post_repository->numRepliesToThreadByID($post['parent']) <= TINYIB_MAXREPLIES) {
                    $post_repository->bumpThreadByID($post['parent']);
                }
            }
        } else {
            rebuildThread($post['id']);
        }

        print 'Updating index...<br>';
        rebuildIndexes();
    }
// Check if the request is to delete a post and/or its associated image
} elseif (isset($_GET['delete']) && !isset($_GET['manage'])) {
    if (!isset($_POST['delete'])) {
        fancyDie('Tick the box next to a post and click "Delete" to delete it.');
    }

    if (TINYIB_DBMIGRATE) {
        fancyDie('Post deletion is currently disabled.<br>Please try again in a few moments.');
    }

    $post = $post_repository->postByID($_POST['delete']);
    if ($post) {
        list($loggedin, $isadmin) = manageCheckLogIn();

        if ($loggedin && $_POST['password'] == '') {
            // Redirect to post moderation page
            print '--&gt; --&gt; --&gt;<meta http-equiv="refresh" content="0;url=' . basename($_SERVER['PHP_SELF']) . '?manage&moderate=' . $_POST['delete'] . '">';
        } elseif ($post['password'] != '' && md5(md5($_POST['password'])) == $post['password']) {
            $post_repository->deletePostByID($post['id']);
            if ($post['parent'] == TINYIB_NEWTHREAD) {
                threadUpdated($post['id']);
            } else {
                threadUpdated($post['parent']);
            }
            fancyDie('Post deleted.');
        } else {
            fancyDie('Invalid password.');
        }
    } else {
        fancyDie('Sorry, an invalid post identifier was sent.  Please go back, refresh the page, and try again.');
    }

    $redirect = false;
// Check if the request is to access the management area
} elseif (isset($_GET['manage'])) {
    $navbar = '&nbsp;';
    $redirect = false;
    $loggedin = false;
    $isadmin = false;
    $returnlink = basename($_SERVER['PHP_SELF']);

    list($loggedin, $isadmin) = manageCheckLogIn();

    $data = [
        'is_admin' => $isadmin,
        'is_installed_via_git' => installedViaGit(),
        'is_logged_in' => $loggedin,
        'is_manage_page' => true,
        'return_link' => $returnlink,
    ];

    if (isset($_GET['rebuildall'])) {
        if ($loggedin && $isadmin) {
            $allthreads = $post_repository->allThreads();

            foreach ($allthreads as $thread) {
                rebuildThread($thread['id']);
            }

            rebuildIndexes();

            $data['text'] = 'Rebuilt board.';
            print $renderer->render('manage_info.twig', $data);
        } else {
            print $renderer->render('manage_login_form.twig', $data);
        }
    } elseif (isset($_GET['bans'])) {
        if ($loggedin && $isadmin) {
            $ban_repository->clearExpiredBans();

            if (isset($_POST['ip'])) {
                if ($_POST['ip'] != '') {
                    $banexists = $ban_repository->banByIP($_POST['ip']);
                    if ($banexists) {
                        fancyDie('Sorry, there is already a ban on record for that IP address.');
                    }

                    $ban = array();
                    $ban['ip'] = $_POST['ip'];
                    $ban['expire'] = ($_POST['expire'] > 0) ? (time() + $_POST['expire']) : 0;
                    $ban['reason'] = $_POST['reason'];

                    $ban_repository->insertBan($ban);
                    $data['text'] = 'Ban record added for ' . $ban['ip'];
                }
            } elseif (isset($_GET['lift'])) {
                $ban = $ban_repository->banByID($_GET['lift']);

                if ($ban) {
                    $ban_repository->deleteBanByID($_GET['lift']);
                    $data['text'] = 'Ban record lifted for ' . $ban['ip'];
                }
            }

            $data['ip'] = $_GET['bans'];
            $data['bans'] = $ban_repository->allBans();
            print $renderer->render('manage_bans.twig', $data);
        } else {
            print $renderer->render('manage_login_form.twig', $data);
        }
    } elseif (isset($_GET['update'])) {
        if ($loggedin && $isadmin) {
            if (is_dir('.git')) {
                $data['git_output'] = shell_exec('git pull 2>&1');
            }

            print $renderer->render('manage_update.twig', $data);
        } else {
            print $renderer->render('manage_login_form.twig', $data);
        }
    } elseif (isset($_GET['delete'])) {
        if ($loggedin) {
            $post = $post_repository->postByID($_GET['delete']);

            if ($post) {
                $post_repository->deletePostByID($post['id']);
                rebuildIndexes();

                if ($post['parent'] != TINYIB_NEWTHREAD) {
                    rebuildThread($post['parent']);
                }

                $id = $post['id'];
                $data['text'] = "Post No.$id deleted.";
                print $renderer->render('manage_info.twig', $data);
            } else {
                fancyDie("Sorry, there doesn't appear to be a post with that ID.");
            }
        } else {
            print $renderer->render('manage_log_inform.twig', $data);
        }
    } elseif (isset($_GET['approve'])) {
        if ($loggedin) {
            if ($_GET['approve'] > 0) {
                $post = $post_repository->postByID($_GET['approve']);
                if ($post) {
                    $post_repository->approvePostByID($post['id']);
                    $thread_id = $post['parent'] == TINYIB_NEWTHREAD ? $post['id'] : $post['parent'];

                    if (strtolower($post['email']) != 'sage'
                        && (TINYIB_MAXREPLIES == 0
                        || $post_repository->numRepliesToThreadByID($thread_id) <= TINYIB_MAXREPLIES)) {
                        $post_repository->bumpThreadByID($thread_id);
                    }

                    threadUpdated($thread_id);

                    $id = $post['id'];
                    $data['text'] = "Post No.$id approved.";
                    print $renderer->render('manage_info.twig', $data);
                } else {
                    fancyDie("Sorry, there doesn't appear to be a post with that ID.");
                }
            }
        } else {
            print $renderer->render('manage_login_form.twig', $data);
        }
    } elseif (isset($_GET['moderate'])) {
        if ($loggedin) {
            if ($_GET['moderate'] > 0) {
                $post = $post_repository->postByID($_GET['moderate']);

                if ($post) {
                    $data['has_ban'] = $ban_repository->banByIP($post['ip']);
                    $data['post'] = $post;

                    $is_thread = $post['parent'] == TINYIB_NEWTHREAD;
                    $posts = $is_thread ? $post_repository->postsInThreadByID($post['id']) : array($post);

                    $data['posts'] = array_map(function ($post) {
                        $post['rendered'] = buildPost($post, TINYIB_INDEXPAGE);
                        return $post;
                    }, $posts);

                    print $renderer->render('manage_moderate_post.twig', $data);
                } else {
                    fancyDie("Sorry, there doesn't appear to be a post with that ID.");
                }
            } else {
                print $renderer->render('manage_moderate_form.twig', $data);
            }
        } else {
            print $renderer->render('manage_login_form.twig', $data);
        }
    } elseif (isset($_GET['sticky']) && isset($_GET['setsticky'])) {
        if ($loggedin) {
            if ($_GET['sticky'] > 0) {
                $post = $post_repository->postByID($_GET['sticky']);
                if ($post && $post['parent'] == TINYIB_NEWTHREAD) {
                    $post_repository->stickyThreadByID($post['id'], (intval($_GET['setsticky'])));
                    threadUpdated($post['id']);

                    $id = $post['id'];
                    $action = intval($_GET['setsticky']) == 1 ? 'stickied' : 'un-stickied';
                    $data['text'] = "Thread No.$id $action.";
                    print $renderer->render('manage_info.twig', $data);
                } else {
                    fancyDie("Sorry, there doesn't appear to be a thread with that ID.");
                }
            } else {
                fancyDie("Form data was lost. Please go back and try again.");
            }
        } else {
            print $renderer->render('manage_login_form.twig', $data);
        }
    } elseif (isset($_GET["rawpost"])) {
        if ($loggedin) {
            print $renderer->render('manage_raw_post_form.twig', $data);
        } else {
            print $renderer->render('manage_login_form.twig', $data);
        }
    } elseif (isset($_GET["logout"])) {
        if ($loggedin) {
            $_SESSION['tinyib'] = '';
            session_destroy();
            die('--&gt; --&gt; --&gt;<meta http-equiv="refresh" content="0;url=' . $returnlink . '?manage">');
        } else {
            print $renderer->render('manage_login_form.twig', $data);
        }
    } else {
        if ($loggedin) {
            $threads = $post_repository->countThreads();
            $bans = count($ban_repository->allBans());
            $data['info'] = $threads . ' ' . plural('thread', $threads) . ', ' . $bans . ' ' . plural('ban', $bans);

            if (TINYIB_REQMOD === 'files' || TINYIB_REQMOD === 'all') {
                $data['reqmod_posts'] = array_map(function ($post) {
                    $post['rendered'] = buildPost($post, TINYIB_INDEXPAGE);
                    return $post;
                }, $post_repository->latestPosts(false));
            }

            $data['posts'] = array_map(function ($post) {
                $post['rendered'] = buildPost($post, TINYIB_INDEXPAGE);
                return $post;
            }, $post_repository->latestPosts(true));

            print $renderer->render('manage_status.twig', $data);
        } else {
            print $renderer->render('manage_login_form.twig', $data);
        }
    }
} elseif (!file_exists('index.html') || $post_repository->countThreads() == 0) {
    rebuildIndexes();
}

if ($redirect) {
    print '--&gt; --&gt; --&gt;<meta http-equiv="refresh" content="'
        . (isset($slow_redirect) ? '3' : '0') . ';url='
        . (is_string($redirect) ? $redirect : 'index.html') . '">';
}
