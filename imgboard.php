<?php

# TinyIB
#
# https://github.com/tslocum/TinyIB

require_once './vendor/autoload.php';

use TinyIB\Controller\ManageController;
use TinyIB\Controller\PostController;
use TinyIB\Controller\SettingsController;
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

/** @var \TinyIB\Controller\ISettingsController $settings_controller */
$settings_controller = new SettingsController($renderer);

// Check if the request is to make a post
if (isset($_POST['message']) || isset($_POST['file'])) {
    $data = array_intersect_key($_POST, array_flip([
        'name',
        'email',
        'subject',
        'message',
        'password',
        'embed',
    ]));

    $post_controller->create($data)->send();
// Check if the request is to delete a post and/or its associated image
} elseif (isset($_GET['delete']) && !isset($_GET['manage'])) {
    $id = isset($_POST['delete']) ? $_POST['delete'] : null;
    $password = isset($_POST['password']) ? $_POST['password'] : null;

    $post_controller->delete($id, $password)->send();
} elseif (isset($_GET['settings'])) {
    $settings_controller->settings()->send();
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
