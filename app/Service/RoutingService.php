<?php

namespace Imageboard\Service;

use FastRoute\Dispatcher;
use FastRoute\RouteCollector;
use GuzzleHttp\Psr7\Response;
use Imageboard\Controller\Admin\{
    ModLogControllerInterface,
    UserCrudControllerInterface
};
use Imageboard\Controller\Mobile\MobilePostControllerInterface;
use Imageboard\Controller\{
    ApiControllerInterface,
    AuthControllerInterface,
    CaptchaControllerInterface,
    ManageControllerInterface,
    PostControllerInterface,
    SettingsControllerInterface
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
                $routes->addRoute('GET', '/embed', [ApiControllerInterface::class, 'embed']);
            });

            $routes->addGroup('/auth', function (RouteCollector $routes) {
                $routes->addRoute('GET',  '/register', [AuthControllerInterface::class, 'registerForm']);
                $routes->addRoute('POST', '/register', [AuthControllerInterface::class, 'register']);
                $routes->addRoute('GET',  '/login',    [AuthControllerInterface::class, 'loginForm']);
                $routes->addRoute('POST', '/login',    [AuthControllerInterface::class, 'login']);
                $routes->addRoute('GET',  '/logout',   [AuthControllerInterface::class, 'logout']);
            });

            $routes->addGroup('/admin', function (RouteCollector $routes) {
                $routes->addGroup('/modlog', function (RouteCollector $routes) {
                    $routes->addRoute('GET',  '', [ModLogControllerInterface::class, 'list']);
                });

                $routes->addGroup('/user', function (RouteCollector $routes) {
                    $routes->addRoute('GET',  '',                        [UserCrudControllerInterface::class, 'list']);
                    $routes->addRoute('GET',  '/create',                 [UserCrudControllerInterface::class, 'createForm']);
                    $routes->addRoute('POST', '/create/submit',          [UserCrudControllerInterface::class, 'create']);
                    $routes->addRoute('GET',  '/{id:\d+}',               [UserCrudControllerInterface::class, 'show']);
                    $routes->addRoute('GET',  '/{id:\d+}/edit',          [UserCrudControllerInterface::class, 'editForm']);
                    $routes->addRoute('POST', '/{id:\d+}/edit/submit',   [UserCrudControllerInterface::class, 'edit']);
                    $routes->addRoute('GET',  '/{id:\d+}/delete',        [UserCrudControllerInterface::class, 'deleteConfirm']);
                    $routes->addRoute('POST', '/{id:\d+}/delete/submit', [UserCrudControllerInterface::class, 'delete']);
                });
            });

            $routes->addGroup('/manage', function (RouteCollector $routes) {
                $routes->addRoute('GET',  '',                    [ManageControllerInterface::class, 'status']);
                $routes->addRoute('GET',  '/rebuildall',         [ManageControllerInterface::class, 'rebuildAll']);
                $routes->addRoute('GET',  '/approve/{id:\d+}',   [ManageControllerInterface::class, 'approve']);
                $routes->addRoute('GET',  '/bans',               [ManageControllerInterface::class, 'listBans']);
                $routes->addRoute('POST', '/bans',               [ManageControllerInterface::class, 'addBan']);
                $routes->addRoute('GET',  '/bans/{id:\d+}/lift', [ManageControllerInterface::class, 'liftBan']);
                $routes->addRoute('GET',  '/delete/{id:\d+}',    [ManageControllerInterface::class, 'delete']);
                $routes->addRoute('GET',  '/logout',             [ManageControllerInterface::class, 'logout']);
                $routes->addRoute('GET',  '/moderate',           [ManageControllerInterface::class, 'moderate']);
                $routes->addRoute('GET',  '/moderate/{id:\d+}',  [ManageControllerInterface::class, 'moderate']);
                $routes->addRoute('GET',  '/rawpost',            [ManageControllerInterface::class, 'rawPost']);
                $routes->addRoute('GET',  '/sticky/{id:\d+}',    [ManageControllerInterface::class, 'setSticky']);
                $routes->addRoute('GET',  '/update',             [ManageControllerInterface::class, 'update']);
            });

            $routes->addGroup('/ajax', function (RouteCollector $routes) {
                $routes->addGroup('/mobile', function (RouteCollector $routes) {
                    $routes->addRoute('GET',  '/thread/{id:\d+}', [MobilePostControllerInterface::class, 'ajaxThread']);
                    $routes->addRoute('POST', '/post/create',     [MobilePostControllerInterface::class, 'ajaxCreatePost']);
                });

                $routes->addRoute('POST', '/post/create',  [PostControllerInterface::class, 'ajaxCreatePost']);
            });

            $routes->addGroup('/mobile', function (RouteCollector $routes) {
                $routes->addRoute('GET',  '',                 [MobilePostControllerInterface::class, 'index']);
                $routes->addRoute('GET',  '/thread/{id:\d+}', [MobilePostControllerInterface::class, 'thread']);
                $routes->addRoute('POST', '/post/create',     [MobilePostControllerInterface::class, 'createPost']);
            });

            $routes->addRoute('GET', '/captcha',  [CaptchaControllerInterface::class,  'captcha']);
            $routes->addRoute('GET', '/settings', [SettingsControllerInterface::class, 'settings']);

            $routes->addRoute('GET',  '/',             [PostControllerInterface::class, 'board']);
            $routes->addRoute('GET',  '/{page:\d+}',   [PostControllerInterface::class, 'board']);
            $routes->addRoute('GET',  '/res/{id:\d+}', [PostControllerInterface::class, 'thread']);
            $routes->addRoute('POST', '/post/create',  [PostControllerInterface::class, 'create']);
            $routes->addRoute('POST', '/post/delete',  [PostControllerInterface::class, 'delete']);
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
                }

                return $result;
        }
    }
}
