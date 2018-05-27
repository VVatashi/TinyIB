<?php

# TinyIB
#
# https://github.com/tslocum/TinyIB

use Monolog\Logger;
use Monolog\Handler\StreamHandler;
use Monolog\Processor\PsrLogMessageProcessor;
use Psr\Container\ContainerInterface;
use Psr\Log\LoggerInterface;
use TinyIB\Response;
use TinyIB\Cache\DatabaseCache;
use TinyIB\Cache\ICache;
use TinyIB\Cache\InMemoryCache;
use TinyIB\Cache\RedisCache;
use TinyIB\Controller\IManageController;
use TinyIB\Controller\IPostController;
use TinyIB\Controller\ISettingsController;
use TinyIB\Controller\ManageController;
use TinyIB\Controller\PostController;
use TinyIB\Controller\SettingsController;
use TinyIB\Renderer\IRenderer;
use TinyIB\Renderer\Renderer;
use TinyIB\Repository\IBanRepository;
use TinyIB\Repository\ICacheRepository;
use TinyIB\Repository\IPostRepository;
use TinyIB\Repository\PDOBanRepository;
use TinyIB\Repository\PDOCacheRepository;
use TinyIB\Repository\PDOPostRepository;
use TinyIB\Router\IRouter;
use TinyIB\Router\TreeRouter;
use VVatashi\DI\Container;

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

// Create DIC and register services.
$container = new Container();
$container->registerInstance(ContainerInterface::class, $container);
$container->registerCallback(LoggerInterface::class, function ($container) {
    $logger = new Logger('name');
    $logger->pushHandler(new StreamHandler('log'));
    $logger->pushProcessor(new PsrLogMessageProcessor());
    return $logger;
});

$container->registerType(IBanRepository::class, PDOBanRepository::class);
$container->registerType(ICacheRepository::class, PDOCacheRepository::class);
$container->registerType(IPostRepository::class, PDOPostRepository::class);

if (TINYIB_CACHE === 'memory') {
    $container->registerType(ICache::class, InMemoryCache::class);
} elseif (TINYIB_CACHE === 'redis') {
    $container->registerCallback(ICache::class, function ($container) {
        return new RedisCache(TINYIB_CACHE_REDIS_HOST);
    });
} else {
    $container->registerType(ICache::class, DatabaseCache::class);
}

$container->registerCallback(IRenderer::class, function ($container) use ($tinyib_uploads, $tinyib_embeds) {
    $cache = $container->get(ICache::class);
    $post_repository = $container->get(IPostRepository::class);

    return new Renderer($cache, $post_repository, [
        'embeds' => $tinyib_uploads,
        'is_installed_via_git' => installedViaGit(),
        'uploads' => $tinyib_embeds,
    ]);
});

$container->registerType(IManageController::class, ManageController::class);
$container->registerType(IPostController::class, PostController::class);
$container->registerType(ISettingsController::class, SettingsController::class);

$container->registerCallback(IRouter::class, function ($container) {
    return new TreeRouter();
});

// Setup routing.
/** @var \TinyIB\Router\IRouter $router */
$router = $container->get(IRouter::class);

// Setup routing.
$router->addRoute('/', function ($path) use ($container) {
    $cache = $container->get(ICache::class);
    $key = TINYIB_BOARD . ':page:0';

    if ($cache->exists($key)) {
        $data = $cache->get($key);
    } else {
        $renderer = $container->get(IRenderer::class);
        $data = $renderer->renderBoardPage(0);
        $cache->set($key, $data, 4 * 60 * 60);
    }

    Response::ok($data)->send();
});

$router->addRoute('/:int', function ($path) use ($container) {
    $cache = $container->get(ICache::class);
    $page = explode('/', $path)[1];
    $key = TINYIB_BOARD . ':page:' . $page;

    if ($cache->exists($key)) {
        $data = $cache->get($key);
    } else {
        $renderer = $container->get(IRenderer::class);
        $data = $renderer->renderBoardPage($page);
        $cache->set($key, $data, 4 * 60 * 60);
    }

    Response::ok($data)->send();
});

$router->addRoute('/res/:int', function ($path) use ($container) {
    $cache = $container->get(ICache::class);
    $id = explode('/', $path)[2];
    $key = TINYIB_BOARD . ':thread:' . $id;

    if ($cache->exists($key)) {
        $data = $cache->get($key);
    } else {
        $renderer = $container->get(IRenderer::class);
        $data = $renderer->renderThreadPage($id);
        $cache->set($key, $data, 4 * 60 * 60);
    }

    Response::ok($data)->send();
});

$router->addRoute('/manage', function ($path) use ($container) {
    $manage_controller = $container->get(IManageController::class);
    $manage_controller->status()->send();
});

$router->addRoute('/manage/rebuildall', function ($path) use ($container) {
    $manage_controller = $container->get(IManageController::class);
    $manage_controller->rebuildAll()->send();
});

$router->addRoute('/manage/approve/:int', function ($path) use ($container) {
    $manage_controller = $container->get(IManageController::class);
    $id = explode('/', $path)[3];
    $manage_controller->approve($id)->send();
});

$router->addRoute('/manage/bans', function ($path) use ($container) {
    $manage_controller = $container->get(IManageController::class);
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

$router->addRoute('/manage/delete/:int', function ($path) use ($container) {
    $manage_controller = $container->get(IManageController::class);
    $id = explode('/', $path)[3];
    $manage_controller->delete($id)->send();
});

$router->addRoute('/manage/logout', function ($path) use ($container) {
    $manage_controller = $container->get(IManageController::class);
    $manage_controller->logout()->send();
});

$router->addRoute('/manage/moderate', function ($path) use ($container) {
    $manage_controller = $container->get(IManageController::class);
    $manage_controller->moderate()->send();
});

$router->addRoute('/manage/moderate/:int', function ($path) use ($container) {
    $manage_controller = $container->get(IManageController::class);
    $id = explode('/', $path)[3];
    $manage_controller->moderate($id)->send();
});

$router->addRoute('/manage/rawpost', function ($path) use ($container) {
    $manage_controller = $container->get(IManageController::class);
    $manage_controller->rawPost()->send();
});

$router->addRoute('/manage/sticky/:int', function ($path) use ($container) {
    $manage_controller = $container->get(IManageController::class);
    $id = explode('/', $path)[3];
    $sticky = !empty($_GET['setsticky']) ? (bool)intval($_GET['setsticky']) : false;
    $manage_controller->setSticky($id, $sticky)->send();
});

$router->addRoute('/manage/update', function ($path) use ($container) {
    $manage_controller = $container->get(IManageController::class);
    $manage_controller->update()->send();
});

$router->addRoute('/post/create', function ($path) use ($container) {
    $post_controller = $container->get(IPostController::class);
    $data = array_intersect_key($_POST, array_flip([
        'name',
        'email',
        'subject',
        'message',
        'password',
        'embed',
        'parent',
    ]));
    $post_controller->create($data)->send();
});

$router->addRoute('/post/delete', function ($path) use ($container) {
    $post_controller = $container->get(IPostController::class);
    $id = isset($_POST['delete']) ? $_POST['delete'] : null;
    $password = isset($_POST['password']) ? $_POST['password'] : null;
    $post_controller->delete($id, $password)->send();
});

$router->addRoute('/settings', function ($path) use ($container) {
    $settings_controller = $container->get(ISettingsController::class);
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
