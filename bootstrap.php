<?php

use GuzzleHttp\Psr7\{Response, ServerRequest};
use Illuminate\Database\Capsule\Manager as Capsule;
use Monolog\Formatter\LineFormatter;
use Monolog\Handler\RotatingFileHandler;
use Monolog\Logger;
use Monolog\Processor\PsrLogMessageProcessor;
use Psr\Container\ContainerInterface;
use Psr\Log\LoggerInterface;
use TinyIB\Cache\{CacheInterface, NoCache, RedisCache};
use TinyIB\Functions;
use TinyIB\Middleware\{AuthMiddleware, CorsMiddleware, ExceptionMiddleware, RequestHandler};
use TinyIB\Service\{RendererServiceInterface, RoutingServiceInterface};
use VVatashi\DI\Container;

require_once __DIR__ . '/vendor/autoload.php';

// Setup error handling.
error_reporting(E_ALL);
ini_set('display_errors', 1);
set_error_handler(function ($code, $message, $file, $line) {
    throw new ErrorException($message, 0, $code, $file, $line);
});

function sendResponse(Response $response) {
    $version = $response->getProtocolVersion();
    $status = $response->getStatusCode();
    $status_phrase = $response->getReasonPhrase();
    header("HTTP/$version $status $status_phrase", TRUE);

    foreach ($response->getHeaders() as $name => $values) {
        $header_line = $response->getHeaderLine($name);
        header("$name: $header_line", FALSE);
    }

    $execution_time = round(microtime(true) - $_SERVER['REQUEST_TIME_FLOAT'], 3);
    header("X-Execution-Time: " . $execution_time, FALSE);
    echo $response->getBody();
}

// Create DIC.
$container = new Container();

// Setup exception handling.
set_exception_handler(function (Throwable $exception) use ($container) {
    $message = Functions::formatException($exception);

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
    sendResponse($response);
});

session_start();
setcookie(session_name(), session_id(), time() + 24 * 60 * 60, '/');

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

if (TINYIB_CACHE === 'redis') {
    $container->registerCallback(CacheInterface::class, function ($container) {
        return new RedisCache(TINYIB_CACHE_REDIS_HOST);
    });
} else {
    $container->registerType(CacheInterface::class, NoCache::class);
}

$capsule = new Capsule();
$capsule->addConnection([
    'driver'    => TINYIB_DBDRIVER,
    'host'      => TINYIB_DBHOST,
    'database'  => TINYIB_DBNAME,
    'username'  => TINYIB_DBUSERNAME,
    'password'  => TINYIB_DBPASSWORD,
    'charset'   => 'utf8',
    'collation' => 'utf8_unicode_ci',
    'prefix'    => '',
]);
$capsule->setAsGlobal();
$capsule->bootEloquent();
$container->registerInstance(Capsule::class, $capsule);

$pdo = $capsule->getConnection()->getReadPdo();
$container->registerInstance(\PDO::class, $pdo);

function glob_recursive($pattern, $flags = 0)
{
    $files = glob($pattern, $flags);
    foreach (glob(dirname($pattern) . '/*', GLOB_ONLYDIR|GLOB_NOSORT) as $dir) {
        $files = array_merge($files, glob_recursive($dir . '/' . basename($pattern), $flags));
    }

    return $files;
}

// Discovery classes to register in the DIC.
$directories = [
    'Commands' => ['#$#', ''],
    'Controller' => ['#Interface$#', ''],
    'Model' => ['#Interface$#', ''],
    'Queries' => ['#$#', ''],
    'Service' => ['#Interface$#', ''],
];
foreach ($directories as $directory => $regex) {
    $files = glob_recursive(__DIR__ . "/src/$directory/*.php");
    $files = array_map(function ($file) {
        $file = str_replace(__DIR__, '', $file);
        $file = preg_replace('#^/src(.+)\\.php$#', 'TinyIB$1', $file);
        $file = str_replace('/', '\\', $file);
        return $file;
    }, $files);

    $interfaces = array_filter($files, function ($file) use ($regex) {
        return preg_match($regex[0], $file);
    });

    foreach ($interfaces as $interface) {
        $class = preg_replace($regex[0], $regex[1], $interface);
        if (in_array($class, $files)) {
            $container->registerType($interface, $class);
        }
    }
}

// Setup request handling.

// Use routing handler.
/** @var \TinyIB\Service\RoutingServiceInterface $routing_service */
$handler = $container->get(RoutingServiceInterface::class);

// Add auth handler.
$handler = new RequestHandler(new AuthMiddleware($container), $handler);

// Add CORS handler.
$handler = new RequestHandler(new CorsMiddleware('*', [
    'OPTIONS',
    'GET',
    'POST',
], [
], [
    'AMP-Access-Control-Allow-Source-Origin',
    'AMP-Redirect-To',
]), $handler);

// Add exception handler.
$handler = new RequestHandler(new ExceptionMiddleware(
    $container->get(LoggerInterface::class),
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
sendResponse($response);
