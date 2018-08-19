<?php

use GuzzleHttp\Psr7\Response;
use GuzzleHttp\Psr7\ServerRequest;
use Monolog\Formatter\LineFormatter;
use Monolog\Handler\RotatingFileHandler;
use Monolog\Logger;
use Monolog\Processor\PsrLogMessageProcessor;
use Psr\Container\ContainerInterface;
use Psr\Log\LoggerInterface;
use TinyIB\Cache\CacheInterface;
use TinyIB\Cache\DatabaseCache;
use TinyIB\Cache\InMemoryCache;
use TinyIB\Cache\RedisCache;
use TinyIB\Controller\Admin\UserCrudController;
use TinyIB\Controller\Admin\UserCrudControllerInterface;
use TinyIB\Controller\AuthController;
use TinyIB\Controller\AuthControllerInterface;
use TinyIB\Controller\CaptchaController;
use TinyIB\Controller\CaptchaControllerInterface;
use TinyIB\Controller\ManageController;
use TinyIB\Controller\ManageControllerInterface;
use TinyIB\Controller\PostController;
use TinyIB\Controller\PostControllerInterface;
use TinyIB\Controller\SettingsController;
use TinyIB\Controller\SettingsControllerInterface;
use TinyIB\Middleware\AuthMiddleware;
use TinyIB\Middleware\CorsMiddleware;
use TinyIB\Middleware\ExceptionMiddleware;
use TinyIB\Middleware\RequestHandler;
use TinyIB\Functions;
use TinyIB\Repository\BanRepositoryInterface;
use TinyIB\Repository\CacheRepositoryInterface;
use TinyIB\Repository\PDOBanRepository;
use TinyIB\Repository\PDOCacheRepository;
use TinyIB\Repository\PDOPostRepository;
use TinyIB\Repository\PDOUserRepository;
use TinyIB\Repository\PostRepositoryInterface;
use TinyIB\Repository\UserRepositoryInterface;
use TinyIB\Service\BanService;
use TinyIB\Service\BanServiceInterface;
use TinyIB\Service\CaptchaService;
use TinyIB\Service\CaptchaServiceInterface;
use TinyIB\Service\CryptographyService;
use TinyIB\Service\CryptographyServiceInterface;
use TinyIB\Service\PostService;
use TinyIB\Service\PostServiceInterface;
use TinyIB\Service\RendererService;
use TinyIB\Service\RendererServiceInterface;
use TinyIB\Service\RoutingService;
use TinyIB\Service\RoutingServiceInterface;
use TinyIB\Service\UserService;
use TinyIB\Service\UserServiceInterface;
use VVatashi\DI\Container;
use VVatashi\Router\Router;
use VVatashi\Router\RouterInterface;

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

    $response = new Response(500, [], $html);
    $version = $response->getProtocolVersion();
    $status = $response->getStatusCode();
    $status_phrase = $response->getReasonPhrase();
    header("HTTP/$version $status $status_phrase", TRUE);

    foreach ($response->getHeaders() as $name => $values) {
        $header_line = $response->getHeaderLine($name);
        header("$name: $header_line", FALSE);
    }

    echo $response->getBody();
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
$writedirs = ['storage', 'webroot/src', 'webroot/thumb'];

foreach ($writedirs as $dir) {
    if (!is_writable(__DIR__ . '/' . $dir)) {
        $message = "Directory '$dir' can not be written to.  Please modify its permissions.";
        throw new Exception($message);
    }
}

define('TINYIB_NEWTHREAD', 0);
define('TINYIB_INDEXPAGE', false);
define('TINYIB_RESPAGE', true);

if (!empty(TINYIB_TIMEZONE)) {
    date_default_timezone_set(TINYIB_TIMEZONE);
}

// Register services in the DIC.
$container->registerInstance(ContainerInterface::class, $container);
$container->registerCallback(LoggerInterface::class, function ($container) {
    $logger = new Logger('app');
    $log_handler = new RotatingFileHandler(__DIR__ . '/storage/logs/error');
    $log_formatter = new LineFormatter(null, null, true, true);
    $log_handler->setFormatter($log_formatter);
    $logger->pushHandler($log_handler);
    $logger->pushProcessor(new PsrLogMessageProcessor());
    return $logger;
});

$container->registerType(BanRepositoryInterface::class, PDOBanRepository::class);
$container->registerType(CacheRepositoryInterface::class, PDOCacheRepository::class);
$container->registerType(PostRepositoryInterface::class, PDOPostRepository::class);
$container->registerType(UserRepositoryInterface::class, PDOUserRepository::class);

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
        'cache' => __DIR__ . '/storage/twig-cache',
        'debug' => true,
    ]);

    $twig->addGlobal('base_url', '/' . TINYIB_BOARD);
    $twig->addGlobal('embeds', $tinyib_embeds);
    $twig->addGlobal('uploads', $tinyib_uploads);
    $twig->addGlobal('is_installed_via_git', Functions::installedViaGit());

    return $twig;
});

$container->registerType(RouterInterface::class, Router::class);

$container->registerType(BanServiceInterface::class, BanService::class);
$container->registerType(CaptchaServiceInterface::class, CaptchaService::class);
$container->registerType(CryptographyServiceInterface::class, CryptographyService::class);
$container->registerType(PostServiceInterface::class, PostService::class);
$container->registerType(RendererServiceInterface::class, RendererService::class);
$container->registerType(RoutingServiceInterface::class, RoutingService::class);
$container->registerType(UserServiceInterface::class, UserService::class);

$container->registerType(AuthControllerInterface::class, AuthController::class);
$container->registerType(CaptchaControllerInterface::class, CaptchaController::class);
$container->registerType(ManageControllerInterface::class, ManageController::class);
$container->registerType(PostControllerInterface::class, PostController::class);
$container->registerType(SettingsControllerInterface::class, SettingsController::class);
$container->registerType(UserCrudControllerInterface::class, UserCrudController::class);

// Setup request handling.

// Use routing handler.
/** @var \TinyIB\Service\RoutingServiceInterface $routing_service */
$handler = $container->get(RoutingServiceInterface::class);

// Add authentification handler.
$handler = new RequestHandler(new AuthMiddleware(), $handler);

// Add CORS handler.
$handler = new RequestHandler(new CorsMiddleware(), $handler);

// Add exception handler.
$handler = new RequestHandler(new ExceptionMiddleware(
    $container->get(RendererServiceInterface::class)
), $handler);

// Get request object.
$request = ServerRequest::fromGlobals();

// If getallheaders() is not supported.
if (!function_exists('getallheaders')) {
    foreach ($_SERVER as $name => $value) {
        if (substr($name, 0, 5) == 'HTTP_') {
            $name = substr($name, 5);
            $name = str_replace(' ', '-', ucwords(strtolower(str_replace('_', ' ', $name))));
            $request = $request->withHeader($name, $value);
        }
    }
}

// Handle request.
$response = $handler->handle($request);

// Send response.
$version = $response->getProtocolVersion();
$status = $response->getStatusCode();
$status_phrase = $response->getReasonPhrase();
header("HTTP/$version $status $status_phrase", TRUE);

foreach ($response->getHeaders() as $name => $values) {
    $header_line = $response->getHeaderLine($name);
    header("$name: $header_line", FALSE);
}

echo $response->getBody();
