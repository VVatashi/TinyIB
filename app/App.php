<?php

namespace Imageboard;

use GuzzleHttp\Psr7\{ServerRequest, Response};
use Imageboard\Middleware\{
  AuthMiddleware,
  CorsMiddleware,
  ExceptionMiddleware,
  RequestHandler
};
use Imageboard\Repositories\UserRepository;
use Imageboard\Services\{
  ConfigService,
  DatabaseService,
  RendererService,
  RoutingService,
  TokenService,
  UserService
};
use Imageboard\Services\Cache\{
  CacheInterface,
  NoCache,
  RedisCache
};
use Imageboard\Services\Notification\{
  NotificationService,
  StubNotificationService,
  OneSignalService
};
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
   * @var ConfigService
   */
  protected $config;

  /**
   * @var DatabaseService
   */
  protected $database;

  function getContainer() : ContainerInterface
  {
    return $this->container;
  }

  function getDatabase() : DatabaseService
  {
    return $this->database;
  }

  /**
   * Setups error handling, session and DI.
   */
  function bootstrap(bool $handleErrors = true) : self
  {
    if ($handleErrors) {
      $this->setupErrorHandling();
    }

    // Set up config
    $this->config = new ConfigService();
    $this->database = new DatabaseService($this->config);

    // Set default constants.
    defined('NEWTHREAD') || define('NEWTHREAD', 0);
    defined('INDEXPAGE') || define('INDEXPAGE', false);
    defined('RESPAGE') || define('RESPAGE', true);
    defined('TWIG_CACHE') || define('TWIG_CACHE', __DIR__ . '/../storage/twig-cache');

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

    // Init Sentry.
    $sentry_dsn = ConfigService::getInstance()->get('SENTRY_DSN');
    if (!empty($sentry_dsn)) {
      $version = shell_exec('git log --pretty="%H" -n1 HEAD');
      \Sentry\init([
        'dsn' => $sentry_dsn,
        'release' => $version,
      ]);
    }

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

      if (ConfigService::getInstance()->get('MODE', 'production') === 'production') {
        $message = 'An error occurred. Contact the administrator.';
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
    $this->container->registerInstance(ConfigService::class , $this->config);
    $this->container->registerInstance(DatabaseService::class, $this->database);

    if ($this->config->get('ERROR_LOG', true)) {
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

    // Register services in the IoC-container by conventions.
    $directories = [
      'Controllers',
      'Models',
      'Services',
      'Repositories',
    ];

    foreach ($directories as $directory) {
      $files = Functions::globRec(__DIR__ . '/' . $directory . '/*.php');
      $classes = array_map(function ($file) {
        $file = str_replace(__DIR__, '', $file);
        $file = preg_replace('#^(.+)\\.php$#', 'Imageboard$1', $file);
        $file = str_replace('/', '\\', $file);
        return $file;
      }, $files);

      foreach ($classes as $class) {
        $this->container->registerType($class, $class);
      }
    }

    if ($this->config->get('CACHE') === 'redis') {
      // Lazy create Redis cache.
      $this->container->registerCallback(CacheInterface::class, function ($container) {
        return new RedisCache($this->config->get('CACHE_REDIS_HOST'));
      });
    } else {
      // Disable cache.
      $this->container->registerType(CacheInterface::class, NoCache::class);
    }

    if (!empty($this->config->get('ONESIGNAL_APPID', ''))
      && !empty($this->config->get('ONESIGNAL_KEY', ''))) {
      $this->container->registerType(NotificationService::class, OneSignalService::class);
    } else {
      $this->container->registerType(NotificationService::class, StubNotificationService::class);
    }
  }

  /**
   * Handles server request and outputs response.
   */
  function handleRequest()
  {
    // Use routing handler.
    /** @var RoutingService $handler */
    $handler = $this->container->get(RoutingService::class);

    /** @var UserRepository $user_repository */
    $user_repository = $this->container->get(UserRepository::class);

    /** @var UserService $user_service */
    $user_service = $this->container->get(UserService::class);

    /** @var TokenService $token_service */
    $token_service = $this->container->get(TokenService::class);

    /** @var RendererService $renderer */
    $renderer = $this->container->get(RendererService::class);

    /** @var LoggerInterface $logger */
    $logger = $this->container->get(LoggerInterface::class);

    // Use auth middleware.
    $auth_middleware = new AuthMiddleware(
      $user_repository,
      $user_service,
      $token_service,
      $renderer
    );
    $handler = new RequestHandler($auth_middleware, $handler);

    // Use CORS handler.
    $allowed_methods = ['OPTIONS', 'GET', 'POST'];
    $allowed_headers = ['Content-Type', 'X-Token'];
    $cors_middleware = new CorsMiddleware('*', $allowed_methods, $allowed_headers, []);
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
  }
}
