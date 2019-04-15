<?php

namespace Imageboard\Service;

use FastRoute\{Dispatcher, RouteCollector};
use GuzzleHttp\Psr7\Response;
use Imageboard\Controller\Admin\{
  BanController as AdminBans,
  DashboardController as AdminDashboard,
  ModLogController as AdminModLog,
  PostController as AdminPosts,
  SystemController as AdminSystem,
  UserController as AdminUsers
};
use Imageboard\Controller\Api\{
  EmbedController as EmbedApi,
  PostController as PostApi,
  TokenController as TokenApi
};
use Imageboard\Controller\Mobile\MobilePostController as MobilePosts;
use Imageboard\Controller\{
  AuthController as Auth,
  CaptchaController as Captcha,
  PostController as Posts,
  SettingsController as Settings
};
use Imageboard\Exception\{HttpException, NotFoundException};
use Psr\Container\ContainerInterface;
use Psr\Http\Message\{ServerRequestInterface, ResponseInterface};
use Psr\Http\Server\RequestHandlerInterface;

class RoutingService implements RequestHandlerInterface
{
  /** @var ContainerInterface */
  protected $container;

  /** @var Dispatcher */
  protected $dispatcher;

  /** @var \Imageboard\Service\ConfigService */
  protected $config;

  /**
   * Creates a new RoutingService instance.
   *
   * @param \Psr\Container\ContainerInterface $container
   * @param \Imageboard\Service\ConfigService $config
   */
  function __construct(
    ContainerInterface $container,
    ConfigService $config
  ) {
    $this->container = $container;
    $this->config = $config;

    $this->dispatcher = \FastRoute\simpleDispatcher(function (RouteCollector $routes) {
      $routes->addGroup('/api', function (RouteCollector $routes) {
        $routes->addGroup('/auth', function (RouteCollector $routes) {
          $routes->addRoute('GET',  '', [TokenApi::class, 'token']);
          $routes->addRoute('POST', '', [TokenApi::class, 'createToken']);
        });

        $routes->addGroup('/posts', function (RouteCollector $routes) {
          $routes->addRoute('GET', '/{id:\d+}', [PostApi::class, 'post']);
        });

        $routes->addGroup('/threads', function (RouteCollector $routes) {
          $routes->addRoute('GET',  '',                [PostApi::class, 'threads']);
          $routes->addRoute('POST', '',                [PostApi::class, 'createThread']);
          $routes->addRoute('GET',  '/{id:\d+}/posts', [PostApi::class, 'threadPosts']);
          $routes->addRoute('POST', '/{id:\d+}/posts', [PostApi::class, 'createPost']);
        });

        $routes->addGroup('/embed', function (RouteCollector $routes) {
          $routes->addRoute('GET', '', [EmbedApi::class, 'embed']);
        });
      });

      $routes->addGroup('/auth', function (RouteCollector $routes) {
        $routes->addRoute('GET',  '/register', [Auth::class, 'registerForm']);
        $routes->addRoute('POST', '/register', [Auth::class, 'register']);
        $routes->addRoute('GET',  '/login',    [Auth::class, 'loginForm']);
        $routes->addRoute('POST', '/login',    [Auth::class, 'login']);
        $routes->addRoute('GET',  '/logout',   [Auth::class, 'logout']);
      });

      $routes->addGroup('/admin', function (RouteCollector $routes) {
        $routes->addRoute('GET',  '',                    [AdminDashboard::class, 'index']);
        $routes->addRoute('GET',  '/system',             [AdminSystem::class, 'index']);
        $routes->addRoute('POST', '/system/clear-cache', [AdminSystem::class, 'clearCache']);

        $routes->addGroup('/bans', function (RouteCollector $routes) {
          $routes->addRoute('GET',  '',                 [AdminBans::class, 'list']);
          $routes->addRoute('GET',  '/create',          [AdminBans::class, 'createForm']);
          $routes->addRoute('POST', '/create',          [AdminBans::class, 'create']);
          $routes->addRoute('POST', '/{id:\d+}/delete', [AdminBans::class, 'delete']);
        });

        $routes->addGroup('/modlog', function (RouteCollector $routes) {
          $routes->addRoute('GET', '', [AdminModLog::class, 'list']);
        });

        $routes->addGroup('/posts', function (RouteCollector $routes) {
          $routes->addRoute('GET',   '',                 [AdminPosts::class, 'list']);
          $routes->addRoute('GET',   '/{id:\d+}',        [AdminPosts::class, 'show']);
          $routes->addRoute('POST',  '/{id:\d+}/delete', [AdminPosts::class, 'delete']);
        });

        $routes->addGroup('/users', function (RouteCollector $routes) {
          $routes->addRoute('GET',  '',                 [AdminUsers::class, 'list']);
          $routes->addRoute('GET',  '/create',          [AdminUsers::class, 'createForm']);
          $routes->addRoute('POST', '/create',          [AdminUsers::class, 'create']);
          $routes->addRoute('GET',  '/{id:\d+}/edit',   [AdminUsers::class, 'editForm']);
          $routes->addRoute('POST', '/{id:\d+}/edit',   [AdminUsers::class, 'edit']);
          $routes->addRoute('POST', '/{id:\d+}/delete', [AdminUsers::class, 'delete']);
        });
      });

      $routes->addGroup('/ajax', function (RouteCollector $routes) {
        $routes->addGroup('/admin', function (RouteCollector $routes) {
          $routes->addGroup('/bans', function (RouteCollector $routes) {
            $routes->addRoute('GET', '', [AdminBans::class, 'ajaxList']);
          });

          $routes->addGroup('/modlog', function (RouteCollector $routes) {
            $routes->addRoute('GET', '', [AdminModLog::class, 'ajaxList']);
          });

          $routes->addGroup('/posts', function (RouteCollector $routes) {
            $routes->addRoute('GET', '', [AdminPosts::class, 'ajaxList']);
          });

          $routes->addGroup('/users', function (RouteCollector $routes) {
            $routes->addRoute('GET', '', [AdminUsers::class, 'ajaxList']);
          });
        });

        $routes->addGroup('/mobile', function (RouteCollector $routes) {
          $routes->addRoute('GET',  '/thread/{id:\d+}', [MobilePosts::class, 'ajaxThread']);
          $routes->addRoute('POST', '/post/create',     [MobilePosts::class, 'ajaxCreatePost']);
        });

        $routes->addRoute('GET',  '/post/{id:\d+}',   [Posts::class, 'ajaxPost']);
        $routes->addRoute('GET',  '/thread/{id:\d+}', [Posts::class, 'ajaxThread']);
        $routes->addRoute('POST', '/post/create',     [Posts::class, 'ajaxCreatePost']);
      });

      $routes->addGroup('/mobile', function (RouteCollector $routes) {
        $routes->addRoute('GET',  '',                 [MobilePosts::class, 'index']);
        $routes->addRoute('GET',  '/thread/{id:\d+}', [MobilePosts::class, 'thread']);
        $routes->addRoute('POST', '/post/create',     [MobilePosts::class, 'createPost']);
      });

      $routes->addRoute('GET', '/captcha',  [Captcha::class,  'captcha']);
      $routes->addRoute('GET', '/settings', [Settings::class, 'settings']);

      $routes->addRoute('GET',  '/',             [Posts::class, 'board']);
      $routes->addRoute('GET',  '/{page:\d+}',   [Posts::class, 'board']);
      $routes->addRoute('GET',  '/res/{id:\d+}', [Posts::class, 'thread']);
      $routes->addRoute('POST', '/post/create',  [Posts::class, 'create']);
      $routes->addRoute('POST', '/post/delete',  [Posts::class, 'delete']);
    });
  }

  /**
   * Resolves route.
   *
   * @param ResponseInterface $request
   *
   * @return ServerRequestInterface
   *
   * @throws \Imageboard\Exception\HttpException
   */
  function handle(ServerRequestInterface $request): ResponseInterface
  {
    $uri = $request->getUri();
    $method = $request->getMethod();
    $path = $uri->getPath();

    // Remove base url.
    $base_path = $this->config->get('BASE_PATH', '');
    $prefix_length = strlen($base_path);
    if (strncmp($path, $base_path, $prefix_length) === 0) {
      $path = substr($path, $prefix_length);
    }

    // Remove query params.
    $path = strtok($path, '?#');

    // Remove html extension.
    if (substr($path, -5) === '.html') {
      $path = substr($path, 0, -5);
    }

    // Remove trailing slash.
    if (substr($path, -1) === '/') {
      $path = substr($path, 0, -1);
    }

    // Remove first slash.
    if (substr($path, 0, 1) === '/') {
      $path = substr($path, 1);
    }

    $path = '/' . $path;
    $uri = $uri->withPath($path);
    $request = $request->withUri($uri);
    $this->container->registerInstance(ServerRequestInterface::class, $request);

    $result = $this->dispatcher->dispatch($method, $path);
    switch ($result[0]) {
      default:
      case Dispatcher::NOT_FOUND:
        throw new NotFoundException();

      case Dispatcher::METHOD_NOT_ALLOWED:
        throw new HttpException(405, 'Method not allowed');

      case Dispatcher::FOUND:
        $handler = $result[1];
        $args = $result[2];

        // Pass path args as array to controllers.
        $this->container->registerInstance('array', $args);

        [$controller_id, $action] = $handler;

        $controller = $this->container->get($controller_id);
        $args = $this->container->getParameters([$controller, $action]);
        $result = $controller->$action(...$args);
        if (is_string($result)) {
          $result = new Response(200, [], $result);
        } elseif (is_array($result) || is_object($result) && !$result instanceof Response) {
          $result = new Response(200, [
            'Content-Type' => 'application/json',
          ], json_encode($result));
        }

        return $result;
    }
  }
}
