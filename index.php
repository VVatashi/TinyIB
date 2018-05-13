<?php

# TinyIB
#
# https://github.com/tslocum/TinyIB

use TinyIB\Controller\ManageController;
use TinyIB\Controller\PostController;
use TinyIB\Controller\SettingsController;
use TinyIB\Renderer\Renderer;
use TinyIB\Repository\PDOBanRepository;
use TinyIB\Repository\PDOPostRepository;
use TinyIB\Response;
use TinyIB\Router\TreeRouter;

require_once './vendor/autoload.php';

// Setup error handling.
error_reporting(E_ALL);
ini_set('display_errors', 1);

set_error_handler(function ($code, $message, $file, $line) {
    throw new ErrorException($message, 0, $code, $file, $line);
});

set_exception_handler(function (Throwable $exception) {
    $output = <<<EOF
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8" />
    <title>Server Error</title>
</head>
<body>
    <pre>
EOF;

    $type = get_class($exception);
    $message = $exception->getMessage();
    $file = basename($exception->getFile());
    $line = $exception->getLine();
    $output .= "$type '$message' at $file:$line\n";
    $output .= "Stack trace:\n";

    $trace = $exception->getTrace();
    foreach ($trace as $key => $value) {
        $file = isset($value['file']) ? basename($value['file']) : '';
        $line = isset($value['line']) ? $value['line'] : '';
        $function = $value['function'];
        $args = implode(', ', array_map('gettype', $value['args']));
        $output .= "#$key $file:$line $function($args)\n";
    }

    $output .= <<<EOF
    </pre>
</body>
</html>
EOF;

    Response::serverError($output)->send();
});

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

// Include settings.php.
if (!file_exists('settings.php')) {
    $message = 'Please copy the file settings.default.php to settings.php';
    throw new Exception($message);
}

require_once 'settings.php';

// Check settings.
if (TINYIB_TRIPSEED == '' || TINYIB_ADMINPASS == '') {
    $message = 'TINYIB_TRIPSEED and TINYIB_ADMINPASS must be configured.';
    throw new Exception($message);
}

if (TINYIB_CAPTCHA === 'recaptcha'
    && (TINYIB_RECAPTCHA_SITE == '' || TINYIB_RECAPTCHA_SECRET == '')) {
    $message = 'TINYIB_RECAPTCHA_SITE and TINYIB_RECAPTCHA_SECRET must be configured.';
    throw new Exception($message);
}

// Check directories are writable by the script.
$writedirs = ['src', 'thumb'];

foreach ($writedirs as $dir) {
    if (!is_writable($dir)) {
        $message = "Directory '" . $dir . "' can not be written to.  Please modify its permissions.";
        throw new Exception($message);
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
    'uploads' => $tinyib_embeds,
]);

/** @var \TinyIB\Controller\IManageController $manage_controller */
$manage_controller = new ManageController($ban_repository, $post_repository, $renderer);

/** @var \TinyIB\Controller\IPostController $post_controller */
$post_controller = new PostController($ban_repository, $post_repository, $renderer);

/** @var \TinyIB\Controller\ISettingsController $settings_controller */
$settings_controller = new SettingsController($renderer);

/** @var \TinyIB\Router\IRouter $router */
$router = new TreeRouter();

// Setup routing.
$router->addRoute('/', function ($path) use ($renderer) {
    Response::ok($renderer->renderBoardPage(0))->send();
});

$router->addRoute('/:int', function ($path) use ($renderer) {
    $page = explode('/', $path)[1];
    Response::ok($renderer->renderBoardPage($page))->send();
});

$router->addRoute('/res/:int', function ($path) use ($renderer) {
    $id = explode('/', $path)[2];
    Response::ok($renderer->renderThreadPage($id))->send();
});

$router->addRoute('/manage', function ($path) use ($manage_controller) {
    $manage_controller->status()->send();
});

$router->addRoute('/manage/rebuildall', function ($path) use ($manage_controller) {
    $manage_controller->rebuildAll()->send();
});

$router->addRoute('/manage/approve/:int', function ($path) use ($manage_controller) {
    $id = explode('/', $path)[3];
    $manage_controller->approve($id)->send();
});

$router->addRoute('/manage/bans', function ($path) use ($manage_controller) {
    $bans = !empty($_GET['bans']) ? $_GET['bans'] : '';

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
});

$router->addRoute('/manage/delete/:int', function ($path) use ($manage_controller) {
    $id = explode('/', $path)[3];
    $manage_controller->delete($id)->send();
});

$router->addRoute('/manage/logout', function ($path) use ($manage_controller) {
    $manage_controller->logout()->send();
});

$router->addRoute('/manage/moderate', function ($path) use ($manage_controller) {
    $manage_controller->moderate()->send();
});

$router->addRoute('/manage/moderate/:int', function ($path) use ($manage_controller) {
    $id = explode('/', $path)[3];
    $manage_controller->moderate($id)->send();
});

$router->addRoute('/manage/rawpost', function ($path) use ($manage_controller) {
    $manage_controller->rawPost()->send();
});

$router->addRoute('/manage/sticky/:int', function ($path) use ($manage_controller) {
    $id = explode('/', $path)[3];
    $sticky = !empty($_GET['setsticky']) ? (bool)intval($_GET['setsticky']) : false;
    $manage_controller->setSticky($id, $sticky)->send();
});

$router->addRoute('/manage/update', function ($path) use ($manage_controller) {
    $manage_controller->update()->send();
});

$router->addRoute('/post/create', function ($path) use ($post_controller) {
    $data = array_intersect_key($_POST, array_flip([
        'name',
        'email',
        'subject',
        'message',
        'password',
        'embed',
    ]));
    $post_controller->create($data)->send();
});

$router->addRoute('/post/delete', function ($path) use ($post_controller) {
    $id = isset($_POST['delete']) ? $_POST['delete'] : null;
    $password = isset($_POST['password']) ? $_POST['password'] : null;
    $post_controller->delete($id, $password)->send();
});

$router->addRoute('/settings', function ($path) use ($settings_controller) {
    $settings_controller->settings()->send();
});

// Get request path without board, query and html extension.
$path = $_SERVER['REQUEST_URI'];
$prefix = '/' . TINYIB_BOARD;
$prefix_length = strlen($prefix);

if (strncmp($path, $prefix, $prefix_length) === 0) {
    $path = substr($path, $prefix_length);
}

$path = strtok($path, '?#');

if (substr($path, -5) === '.html') {
    $path = substr($path, 0, -5);
}

// Resolve route.
$handler = $router->resolve($path);

if ($handler !== null) {
    $handler($path);
} else {
    Response::notFound('The requested page is not found.')->send();
}
