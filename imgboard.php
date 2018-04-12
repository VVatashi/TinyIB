<?php

# TinyIB
#
# https://github.com/tslocum/TinyIB

require_once './vendor/autoload.php';

use TinyIB\Controller\ManageController;
use TinyIB\Controller\PostController;
use TinyIB\Renderer\Renderer;
use TinyIB\Repository\PDOBanRepository;
use TinyIB\Repository\PDOPostRepository;
use TinyIB\Response;

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
    $message = 'Please copy the file settings.default.php to settings.php';
    Response::serverError($message)->send();
    exit;
}

require_once 'settings.php';

if (TINYIB_TRIPSEED == '' || TINYIB_ADMINPASS == '') {
    $message = 'TINYIB_TRIPSEED and TINYIB_ADMINPASS must be configured.';
    Response::serverError($message)->send();
    exit;
}

if (TINYIB_CAPTCHA === 'recaptcha'
    && (TINYIB_RECAPTCHA_SITE == '' || TINYIB_RECAPTCHA_SECRET == '')) {
    $message = 'TINYIB_RECAPTCHA_SITE and TINYIB_RECAPTCHA_SECRET  must be configured.';
    Response::serverError($message)->send();
    exit;
}

// Check directories are writable by the script
$writedirs = ["res", "src", "thumb"];

foreach ($writedirs as $dir) {
    if (!is_writable($dir)) {
        $message = "Directory '" . $dir . "' can not be written to.  Please modify its permissions.";
        Response::serverError($message)->send();
        exit;
    }
}

define('TINYIB_NEWTHREAD', '0');
define('TINYIB_INDEXPAGE', false);
define('TINYIB_RESPAGE', true);

include 'inc/functions.php';

if (TINYIB_TIMEZONE != '') {
    date_default_timezone_set(TINYIB_TIMEZONE);
}

/** @var \TinyIB\Repository\IBanRepository $ban_repository */
$ban_repository = new PDOBanRepository(TINYIB_DBBANS);

/** @var \TinyIB\Repository\IPostRepository $post_repository */
$post_repository = new PDOPostRepository(TINYIB_DBPOSTS);

/** @var \TinyIB\Renderer\IRenderer $renderer */
$renderer = new Renderer($post_repository, [
    'embeds' => $tinyib_uploads,
    'is_installed_via_git' => installedViaGit(),
    'manage_link' => basename($_SERVER['PHP_SELF']) . "?manage",
    'return_link' => basename($_SERVER['PHP_SELF']),
    'uploads' => $tinyib_embeds,
]);

/** @var \TinyIB\Controller\IManageController $manage_controller */
$manage_controller = new ManageController($ban_repository, $post_repository, $renderer);

/** @var \TinyIB\Controller\IPostController $post_controller */
$post_controller = new PostController($ban_repository, $post_repository, $renderer);

// Check if the request is to make a post
if (isset($_POST['message']) || isset($_POST['file'])) {
    $redirect = true;

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
        $post['message'] = str_replace("\n", '<br>', $renderer->makeLinksClickable(colorQuote(postLink(cleanString(rtrim($_POST['message']))))));

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
        } elseif ($file_mime == "image/gif") {
            $post['thumb'] = $temp_file . '.gif';
        } elseif ($file_mime == "image/png") {
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
                $mime_types = [
                    'jpg' => 'image/jpeg',
                    'jpeg' => 'image/jpeg',
                    'png' => 'image/png',
                    'gif' => 'image/gif',
                    'mp3' => 'audio/mpeg',
                    'webm' => 'video/webm',
                ];

                $parts = explode('.', $_FILES['file']['name']);
                $extension = end($parts);

                if (isset($mime_types[$extension])) {
                    $file_mime = $mime_types[$extension];
                }
            }

            if (empty($file_mime) || !isset($tinyib_uploads[$file_mime])) {
                fancyDie($renderer->supportedFileTypes());
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
            } elseif (in_array($file_mime, ['image/jpeg', 'image/pjpeg', 'image/png', 'image/gif', 'application/x-shockwave-flash'])) {
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
            } elseif (in_array($file_mime, ['image/jpeg', 'image/pjpeg', 'image/png', 'image/gif'])) {
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
            $renderer->rebuildThread($post['parent']);

            if (strtolower($post['email']) != 'sage') {
                if (TINYIB_MAXREPLIES == 0 || $post_repository->numRepliesToThreadByID($post['parent']) <= TINYIB_MAXREPLIES) {
                    $post_repository->bumpThreadByID($post['parent']);
                }
            }
        } else {
            $renderer->rebuildThread($post['id']);
        }

        print 'Updating index...<br>';
        $renderer->rebuildIndexes();
    }

    if ($redirect) {
        $url = is_string($redirect) ? $redirect : 'index.html';
        Response::redirect($url)->send();
    }
// Check if the request is to delete a post and/or its associated image
} elseif (isset($_GET['delete']) && !isset($_GET['manage'])) {
    $id = isset($_POST['delete']) ? $_POST['delete'] : null;
    $password = isset($_POST['password']) ? $_POST['password'] : null;

    $post_controller->delete($id, $password)->send();
    exit;
// Check if the request is to access the management area
} elseif (isset($_GET['manage'])) {
    if (isset($_GET['rebuildall'])) {
        $manage_controller->rebuildAll()->send();
    } elseif (isset($_GET['bans'])) {
        $bans = $_GET['bans'];

        if (!empty($_POST['ip'])) {
            $ip = $_POST['ip'];
            $expire = isset($_POST['expire']) ? $_POST['expire'] : null;
            $reason = isset($_POST['reason']) ? $_POST['reason'] : null;

            $manage_controller->addBan($bans, $ip, $expire, $reason)->send();
        } elseif (!empty($_GET['lift'])) {
            $lift = $_GET['lift'];

            $manage_controller->liftBan($bans, $lift)->send();
        } else {
            $manage_controller->listBans($bans)->send();
        }
    } elseif (isset($_GET['update'])) {
        $manage_controller->update()->send();
    } elseif (isset($_GET['delete'])) {
        $id = $_GET['delete'];

        $manage_controller->delete($id)->send();
    } elseif (isset($_GET['approve'])) {
        $id = $_GET['approve'];

        $manage_controller->approve($id)->send();
    } elseif (isset($_GET['moderate'])) {
        $id = $_GET['moderate'];

        $manage_controller->moderate($id)->send();
    } elseif (isset($_GET['sticky']) && isset($_GET['setsticky'])) {
        $id = $_GET['sticky'];
        $sticky = (bool) intval($_GET['setsticky']);

        $manage_controller->setSticky($id, $sticky)->send();
    } elseif (isset($_GET["rawpost"])) {
        $manage_controller->rawPost()->send();
    } elseif (isset($_GET["logout"])) {
        $manage_controller->logout()->send();
    } else {
        $manage_controller->status()->send();
    }
} elseif (!file_exists('index.html') || $post_repository->countThreads() == 0) {
    $renderer->rebuildIndexes();
    Response::redirect('index.html')->send();
} else {
    Response::redirect('index.html')->send();
}
