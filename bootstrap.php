<?php

use Monolog\Logger;
use Monolog\Formatter\LineFormatter;
use Monolog\Handler\StreamHandler;
use Monolog\Processor\PsrLogMessageProcessor;
use Psr\Container\ContainerInterface;
use Psr\Log\LoggerInterface;
use TinyIB\Response;
use TinyIB\Cache\DatabaseCache;
use TinyIB\Cache\CacheInterface;
use TinyIB\Cache\InMemoryCache;
use TinyIB\Cache\RedisCache;
use TinyIB\Controller\ManageController;
use TinyIB\Controller\ManageControllerInterface;
use TinyIB\Controller\PostController;
use TinyIB\Controller\PostControllerInterface;
use TinyIB\Controller\SettingsController;
use TinyIB\Controller\SettingsControllerInterface;
use TinyIB\Repository\BanRepositoryInterface;
use TinyIB\Repository\CacheRepositoryInterface;
use TinyIB\Repository\PostRepositoryInterface;
use TinyIB\Repository\PDOBanRepository;
use TinyIB\Repository\PDOCacheRepository;
use TinyIB\Repository\PDOPostRepository;
use TinyIB\Router\RouterInterface;
use TinyIB\Router\TreeRouter;
use TinyIB\Service\CryptographyService;
use TinyIB\Service\CryptographyServiceInterface;
use TinyIB\Service\PostService;
use TinyIB\Service\PostServiceInterface;
use TinyIB\Service\RendererServiceInterface;
use TinyIB\Service\RendererService;
use VVatashi\DI\Container;

require_once __DIR__ . '/vendor/autoload.php';

// Setup error handling.
error_reporting(E_ALL);
ini_set('display_errors', 1);
set_error_handler(function ($code, $message, $file, $line) {
    throw new ErrorException($message, 0, $code, $file, $line);
});

// Create DIC.
$container = new Container();

// Setup exception handling.
set_exception_handler(function (Throwable $exception) use ($container) {
    $trace = $exception->getTrace();
    $trace_lines = array_map(function ($key, $value) {
        $file = isset($value['file']) ? basename($value['file']) : '';
        $line = isset($value['line']) ? $value['line'] : '';
        $function = $value['function'];
        $args = isset($value['args']) ? implode(', ', array_map('gettype', $value['args'])) : '';
        return "#$key $file:$line $function($args)";
    }, array_keys($trace), $trace);

    $type = get_class($exception);
    $exception_message = $exception->getMessage();
    $file = basename($exception->getFile());
    $line = $exception->getLine();
    $message = "$type '$exception_message' at $file:$line. Stack trace:\n" . implode("\n", $trace_lines);

    if ($container->has(LoggerInterface::class)) {
        /** @var LoggerInterface $logger */
        $logger = $container->get(LoggerInterface::class);
        $logger->critical($message);
    }

    $html = <<<EOF
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8" />
    <title>Server Error</title>
</head>
<body>
    <pre>$message</pre>
</body>
</html>
EOF;

    Response::serverError($html)->send();
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
if (!file_exists(__DIR__ . '/settings.php')) {
    $message = 'Please copy the file settings.default.php to settings.php';
    throw new Exception($message);
}

require_once __DIR__ . '/settings.php';

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
$writedirs = ['logs', 'templates/cache', 'webroot/src', 'webroot/thumb'];

foreach ($writedirs as $dir) {
    if (!is_writable(__DIR__ . '/' . $dir)) {
        $message = "Directory '$dir' can not be written to.  Please modify its permissions.";
        throw new Exception($message);
    }
}

define('TINYIB_NEWTHREAD', 0);
define('TINYIB_INDEXPAGE', false);
define('TINYIB_RESPAGE', true);

require_once __DIR__ . '/src/functions.php';

if (!empty(TINYIB_TIMEZONE)) {
    date_default_timezone_set(TINYIB_TIMEZONE);
}

// Register services in the DIC.
$container->registerInstance(ContainerInterface::class, $container);
$container->registerCallback(LoggerInterface::class, function ($container) {
    $logger = new Logger('app');
    $log_handler = new StreamHandler(__DIR__ . '/logs/app.log');
    $log_formatter = new LineFormatter(null, null, true, true);
    $log_handler->setFormatter($log_formatter);
    $logger->pushHandler($log_handler);
    $logger->pushProcessor(new PsrLogMessageProcessor());
    return $logger;
});

$container->registerType(BanRepositoryInterface::class, PDOBanRepository::class);
$container->registerType(CacheRepositoryInterface::class, PDOCacheRepository::class);
$container->registerType(PostRepositoryInterface::class, PDOPostRepository::class);

if (TINYIB_CACHE === 'memory') {
    $container->registerType(CacheInterface::class, InMemoryCache::class);
} elseif (TINYIB_CACHE === 'redis') {
    $container->registerCallback(CacheInterface::class, function ($container) {
        return new RedisCache(TINYIB_CACHE_REDIS_HOST);
    });
} else {
    $container->registerType(CacheInterface::class, DatabaseCache::class);
}

$container->registerCallback(Twig_Environment::class, function ($container) use ($tinyib_uploads, $tinyib_embeds) {
    $loader = new Twig_Loader_Filesystem(__DIR__ . '/templates');

    $twig = new Twig_Environment($loader, [
        'autoescape' => false,
        'cache' => __DIR__ . '/templates/cache',
        'debug' => true,
    ]);

    $twig->addGlobal('embeds', $tinyib_embeds);
    $twig->addGlobal('uploads', $tinyib_uploads);
    $twig->addGlobal('is_installed_via_git', installedViaGit());

    return $twig;
});

$container->registerType(CryptographyServiceInterface::class, CryptographyService::class);
$container->registerType(PostServiceInterface::class, PostService::class);
$container->registerType(RendererServiceInterface::class, RendererService::class);

$container->registerType(ManageControllerInterface::class, ManageController::class);
$container->registerType(PostControllerInterface::class, PostController::class);
$container->registerType(SettingsControllerInterface::class, SettingsController::class);

$container->registerType(RouterInterface::class, TreeRouter::class);

// Setup routing.
/** @var \TinyIB\Router\RouterInterface $router */
$router = $container->get(RouterInterface::class);

// Setup routing.
$router->addRoute('/', function ($path) use ($container) {
    $cache = $container->get(CacheInterface::class);
    $key = TINYIB_BOARD . ':page:0';
    $data = $cache->get($key);

    if ($data === null) {
        $renderer = $container->get(RendererServiceInterface::class);
        $data = $renderer->renderBoardPage(0);
        $cache->set($key, $data, 4 * 60 * 60);
    }

    Response::ok($data)->send();
});

$router->addRoute('/:int', function ($path) use ($container) {
    $cache = $container->get(CacheInterface::class);
    $page = explode('/', $path)[1];
    $key = TINYIB_BOARD . ':page:' . $page;
    $data = $cache->get($key);

    if ($data === null) {
        $renderer = $container->get(RendererServiceInterface::class);
        $data = $renderer->renderBoardPage($page);
        $cache->set($key, $data, 4 * 60 * 60);
    }

    Response::ok($data)->send();
});

$router->addRoute('/res/:int', function ($path) use ($container) {
    $cache = $container->get(CacheInterface::class);
    $id = explode('/', $path)[2];
    $key = TINYIB_BOARD . ':thread:' . $id;
    $data = $cache->get($key);

    if ($data === null) {
        $renderer = $container->get(RendererServiceInterface::class);
        $data = $renderer->renderThreadPage($id);
        $cache->set($key, $data, 4 * 60 * 60);
    }

    Response::ok($data)->send();
});

$router->addRoute('/manage', function ($path) use ($container) {
    $manage_controller = $container->get(ManageControllerInterface::class);
    $manage_controller->status()->send();
});

$router->addRoute('/manage/rebuildall', function ($path) use ($container) {
    $manage_controller = $container->get(ManageControllerInterface::class);
    $manage_controller->rebuildAll()->send();
});

$router->addRoute('/manage/approve/:int', function ($path) use ($container) {
    $manage_controller = $container->get(ManageControllerInterface::class);
    $id = explode('/', $path)[3];
    $manage_controller->approve($id)->send();
});

$router->addRoute('/manage/bans', function ($path) use ($container) {
    $manage_controller = $container->get(ManageControllerInterface::class);
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
    $manage_controller = $container->get(ManageControllerInterface::class);
    $id = explode('/', $path)[3];
    $manage_controller->delete($id)->send();
});

$router->addRoute('/manage/logout', function ($path) use ($container) {
    $manage_controller = $container->get(ManageControllerInterface::class);
    $manage_controller->logout()->send();
});

$router->addRoute('/manage/moderate', function ($path) use ($container) {
    $manage_controller = $container->get(ManageControllerInterface::class);
    $manage_controller->moderate()->send();
});

$router->addRoute('/manage/moderate/:int', function ($path) use ($container) {
    $manage_controller = $container->get(ManageControllerInterface::class);
    $id = explode('/', $path)[3];
    $manage_controller->moderate($id)->send();
});

$router->addRoute('/manage/rawpost', function ($path) use ($container) {
    $manage_controller = $container->get(ManageControllerInterface::class);
    $manage_controller->rawPost()->send();
});

$router->addRoute('/manage/sticky/:int', function ($path) use ($container) {
    $manage_controller = $container->get(ManageControllerInterface::class);
    $id = explode('/', $path)[3];
    $sticky = !empty($_GET['setsticky']) ? (bool)intval($_GET['setsticky']) : false;
    $manage_controller->setSticky($id, $sticky)->send();
});

$router->addRoute('/manage/update', function ($path) use ($container) {
    $manage_controller = $container->get(ManageControllerInterface::class);
    $manage_controller->update()->send();
});

$router->addRoute('/post/create', function ($path) use ($container) {
    $post_controller = $container->get(PostControllerInterface::class);
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
    $post_controller = $container->get(PostControllerInterface::class);
    $id = isset($_POST['delete']) ? $_POST['delete'] : null;
    $password = isset($_POST['password']) ? $_POST['password'] : null;
    $post_controller->delete($id, $password)->send();
});

$router->addRoute('/settings', function ($path) use ($container) {
    $settings_controller = $container->get(SettingsControllerInterface::class);
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
