<?php

namespace Imageboard;

use GuzzleHttp\Psr7\{ServerRequest, Response};
use Illuminate\Database\Capsule\Manager as Capsule;
use Imageboard\Cache\{CacheInterface, NoCache, RedisCache};
use Imageboard\Helper\DatabaseHelper;
use Imageboard\Middleware\{
  AuthMiddleware,
  CorsMiddleware,
  ExceptionMiddleware,
  RequestHandler
};
use Imageboard\Service\{ConfigService, RoutingServiceInterface, RendererServiceInterface};
use Monolog\Formatter\LineFormatter;
use Monolog\Handler\RotatingFileHandler;
use Monolog\Logger;
use Monolog\Processor\PsrLogMessageProcessor;
use Psr\Container\ContainerInterface;
use Psr\Http\Message\ResponseInterface;
use Psr\Log\LoggerInterface;
use VVatashi\DI\Container;

class App
{
  /** @var Container */
  protected $container;

  /**
   * @var \Imageboard\Service\ConfigServiceInterface
   */
  protected $config;

  /**
   * @var \Imageboard\Helper\DatabaseHelper
   */
  protected $databaseHelper;

  function getContainer() : ContainerInterface
  {
    return $this->container;
  }

  /**
   * Setups error handling, session and DI.
   */
  function bootstrap(bool $handleErrors = true) : self
  {
    $this->setupErrorHandling();

    // Set up config
    $this->config = new ConfigService();
    $this->databaseHelper = new DatabaseHelper($this->config);

    // Set default constants.
    defined('TINYIB_NEWTHREAD') || define('TINYIB_NEWTHREAD', 0);
    defined('TINYIB_INDEXPAGE') || define('TINYIB_INDEXPAGE', false);
    defined('TINYIB_RESPAGE') || define('TINYIB_RESPAGE', true);
    defined('TINYIB_TWIG_CACHE') || define('TINYIB_TWIG_CACHE', __DIR__ . '/../storage/twig-cache');
    defined('TINYIB_ERROR_LOG') || define('TINYIB_ERROR_LOG', true);

    // Start session.
    session_start();
    setcookie(session_name(), session_id(), time() + 24 * 60 * 60, '/');

    $this->registerServices();

    return $this;
  }

  function setupErrorHandling()
  {
    // Report all errors.
    error_reporting(E_ALL);
    ini_set('display_errors', 1);

    // Treat errors as exceptions.
    set_error_handler(function ($code, $message, $file, $line) {
      throw new \ErrorException($message, 0, $code, $file, $line);
    });

    // Set exception handling.
    set_exception_handler(function (\Throwable $exception) {
      $message = Functions::formatException($exception);

      // Log message if logger is available.
      if (isset($this->container)
        && $this->container->has(LoggerInterface::class)) {
        /** @var LoggerInterface */
        $logger = $this->container->get(LoggerInterface::class);
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
      $this->sendResponse($response);
    });
  }

  protected function registerServices()
  {
    // Create IoC-container.
    $this->container = new Container();

    // Register container itself.
    $this->container->registerInstance(ContainerInterface::class, $this->container);

    if (TINYIB_ERROR_LOG) {
      // Lazy create logger.
      $this->container->registerCallback(LoggerInterface::class, function ($container) {
        $logger = new Logger('App');
        $log_handler = new RotatingFileHandler(__DIR__ . '/../storage/logs/error');
        $log_formatter = new LineFormatter(null, null, true, true);
        $log_handler->setFormatter($log_formatter);
        $logger->pushHandler($log_handler);
        $logger->pushProcessor(new PsrLogMessageProcessor());
        return $logger;
      });
    }

    if (TINYIB_CACHE === 'redis') {
      // Lazy create Redis cache.
      $this->container->registerCallback(CacheInterface::class, function ($container) {
        return new RedisCache(TINYIB_CACHE_REDIS_HOST);
      });
    } else {
      // Disable cache.
      $this->container->registerType(CacheInterface::class, NoCache::class);
    }

    // Create database connection and ORM.
    $capsule = new Capsule();

    $capsule->addConnection([
      'driver'    => $this->config->get('TINYIB_DBDRIVER'),
      'host'      => $this->config->get('TINYIB_DBHOST'),
      'database'  => $this->databaseHelper->getFullPath(),
      'username'  => $this->config->get('TINYIB_DBUSERNAME'),
      'password'  => $this->config->get('TINYIB_DBPASSWORD'),
      'charset'   => 'utf8',
      'collation' => 'utf8_unicode_ci',
      'prefix'    => '',
    ]);
    $capsule->setAsGlobal();
    $capsule->bootEloquent();
    $this->container->registerInstance(Capsule::class, $capsule);

    $pdo = $capsule->getConnection()->getReadPdo();
    $this->container->registerInstance(\PDO::class, $pdo);

    // Register services in the IoC-container by conventions.
    $directories = [
      'Command' => ['#$#', ''],
      'Controller' => ['#Interface$#', ''],
      'Model' => ['#Interface$#', ''],
      'Service' => ['#Interface$#', ''],
      'Query' => ['#$#', ''],
    ];

    foreach ($directories as $directory => $regex) {
      $files = Functions::globRec(__DIR__ . '/' . $directory . '/*.php');
      $files = array_map(function ($file) {
        $file = str_replace(__DIR__, '', $file);
        $file = preg_replace('#^(.+)\\.php$#', 'Imageboard$1', $file);
        $file = str_replace('/', '\\', $file);
        return $file;
      }, $files);

      $interfaces = array_filter($files, function ($file) use ($regex) {
        return preg_match($regex[0], $file);
      });

      foreach ($interfaces as $interface) {
        $class = preg_replace($regex[0], $regex[1], $interface);
        if (in_array($class, $files)) {
          $this->container->registerType($interface, $class);
        }
      }
    }
  }

  /**
   * Handles server request and outputs response.
   */
  function handleRequest()
  {
    // Use routing handler.
    /** @var RoutingServiceInterface */
    $handler = $this->container->get(RoutingServiceInterface::class);

    /** @var RendererServiceInterface */
    $renderer = $this->container->get(RendererServiceInterface::class);

    /** @var LoggerInterface */
    $logger = $this->container->get(LoggerInterface::class);

    // Use auth middleware.
    $auth_middleware = new AuthMiddleware($this->container, $renderer);
    $handler = new RequestHandler($auth_middleware, $handler);

    // Use CORS handler.
    $allowed_methods = ['OPTIONS', 'GET', 'POST'];
    $cors_middleware = new CorsMiddleware('*', $allowed_methods, [], []);
    $handler = new RequestHandler($cors_middleware, $handler);

    // Use exception handler.
    $exception_middleware = new ExceptionMiddleware($logger, $renderer);
    $handler = new RequestHandler($exception_middleware, $handler);

    // Get request object.
    $request = ServerRequest::fromGlobals();

    // Add request headers if getallheaders() is not supported.
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
    $this->sendResponse($response);
  }

  /**
   * Outputs response and halts script execution.
   */
  protected function sendResponse(ResponseInterface $response)
  {
    // Emit response headers.
    $version = $response->getProtocolVersion();
    $status = $response->getStatusCode();
    $status_phrase = $response->getReasonPhrase();
    header("HTTP/$version $status $status_phrase", true, $status);

    foreach ($response->getHeaders() as $name => $values) {
      foreach ($values as $value) {
        header("$name: $value", false);
      }
    }

    // Return script execution time as a custom header.
    $start = $_SERVER['REQUEST_TIME_FLOAT'];
    $end = microtime(true);
    header('X-Execution-Time: ' . round($end - $start, 3), false);

    // Emit response body.
    $stream = $response->getBody();
    if ($stream->isSeekable()) {
      $stream->rewind();
    }

    while (!$stream->eof()) {
      echo $stream->read(1024 * 8);
    }

    // End script execution.
    exit;
  }
}
