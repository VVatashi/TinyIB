<?php

namespace Imageboard\Service;

use FastRoute\{Dispatcher, RouteCollector};
use GuzzleHttp\Psr7\Response;
use Imageboard\Controller\Admin\{
    BanControllerInterface as AdminBans,
    DashboardControllerInterface as AdminDashboard,
    ModLogControllerInterface as AdminModLog,
    PostControllerInterface as AdminPosts,
    SystemControllerInterface as AdminSystem,
    UserControllerInterface as AdminUsers
};
use Imageboard\Controller\Mobile\MobilePostControllerInterface as MobilePosts;
use Imageboard\Controller\{
    ApiControllerInterface as Api,
    AuthControllerInterface as Auth,
    CaptchaControllerInterface as Captcha,
    PostControllerInterface as Posts,
    SettingsControllerInterface as Settings
};
use Imageboard\Exception\{HttpException, NotFoundException};
use Psr\Container\ContainerInterface;
use Psr\Http\Message\{ServerRequestInterface, ResponseInterface};
use Psr\Http\Server\RequestHandlerInterface;

class RoutingService implements RoutingServiceInterface, RequestHandlerInterface
{
    /** @var ContainerInterface */
    protected $container;

    /** @var Dispatcher */
    protected $dispatcher;

    /**
     * Creates a new RoutingService instance.
     */
    public function __construct(
        ContainerInterface $container
    ) {
        $this->container = $container;

        $this->dispatcher = \FastRoute\simpleDispatcher(function (RouteCollector $routes) {
            $routes->addGroup('/api', function (RouteCollector $routes) {
                $routes->addRoute('GET',  '/threads',                [Api::class, 'threads']);
                $routes->addRoute('GET',  '/threads/{id:\d+}/posts', [Api::class, 'threadPosts']);
                $routes->addRoute('POST', '/posts',                  [Api::class, 'createPost']);
                $routes->addRoute('GET',  '/embed',                  [Api::class, 'embed']);
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

                $routes->addRoute('POST', '/post/create',  [Posts::class, 'ajaxCreatePost']);
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
     * {@inheritDoc}
     */
    public function handle(ServerRequestInterface $request) : ResponseInterface
    {
        $uri = $request->getUri();
        $method = $request->getMethod();
        $path = $uri->getPath();

        // Remove board prefix.
        $prefix = '/' . TINYIB_BOARD;
        $prefix_length = strlen($prefix);
        if (strncmp($path, $prefix, $prefix_length) === 0) {
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
