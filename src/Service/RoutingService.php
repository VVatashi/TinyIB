<?php

namespace TinyIB\Service;

use GuzzleHttp\Psr7\Response;
use Psr\Http\Message\ResponseInterface;
use Psr\Http\Message\ServerRequestInterface;
use Psr\Http\Server\RequestHandlerInterface;
use TinyIB\Cache\CacheInterface;
use TinyIB\Controller\Admin\UserCrudControllerInterface;
use TinyIB\Controller\Amp\AmpPostControllerInterface;
use TinyIB\Controller\Mobile\MobilePostControllerInterface;
use TinyIB\Controller\AuthControllerInterface;
use TinyIB\Controller\CaptchaControllerInterface;
use TinyIB\Controller\ManageControllerInterface;
use TinyIB\Controller\PostControllerInterface;
use TinyIB\Controller\SettingsControllerInterface;
use TinyIB\NotFoundException;
use VVatashi\Router\RouterInterface;

class RoutingService implements RoutingServiceInterface, RequestHandlerInterface
{
    /** @var \VVatashi\Router\RouterInterface $router */
    protected $router;

    /** @var \TinyIB\Controller\AuthControllerInterface $auth_controller */
    protected $auth_controller;

    /** @var \TinyIB\Controller\UserCrudControllerInterface $user_crud_controller */
    protected $user_crud_controller;

    /** @var \TinyIB\Controller\ManageControllerInterface $manage_controller */
    protected $manage_controller;

    /** @var \TinyIB\Controller\PostControllerInterface $post_controller */
    protected $post_controller;

    /** @var \TinyIB\Controller\Amp\AmpPostControllerInterface $amp_post_controller */
    protected $amp_post_controller;

    /** @var \TinyIB\Controller\Mobile\MobilePostControllerInterface $mobile_post_controller */
    protected $mobile_post_controller;

    /** @var \TinyIB\Controller\SettingsControllerInterface $settings_controller */
    protected $settings_controller;

    /** @var \TinyIB\Controller\CaptchaControllerInterface $captcha_controller */
    protected $captcha_controller;

    /**
     * Creates a new RoutingService instance.
     */
    public function __construct(
        RouterInterface $router,
        AuthControllerInterface $auth_controller,
        UserCrudControllerInterface $user_crud_controller,
        CaptchaControllerInterface $captcha_controller,
        ManageControllerInterface $manage_controller,
        PostControllerInterface $post_controller,
        AmpPostControllerInterface $amp_post_controller,
        MobilePostControllerInterface $mobile_post_controller,
        SettingsControllerInterface $settings_controller
    ) {
        $this->router = $router;
        $this->auth_controller = $auth_controller;
        $this->user_crud_controller = $user_crud_controller;
        $this->captcha_controller = $captcha_controller;
        $this->manage_controller = $manage_controller;
        $this->post_controller = $post_controller;
        $this->amp_post_controller = $amp_post_controller;
        $this->mobile_post_controller = $mobile_post_controller;
        $this->settings_controller = $settings_controller;

        $this->router->add('auth/register', [$this->auth_controller, 'registerForm']);
        $this->router->add('auth/register/submit', [$this->auth_controller, 'register']);
        $this->router->add('auth/login', [$this->auth_controller, 'loginForm']);
        $this->router->add('auth/login/submit', [$this->auth_controller, 'login']);
        $this->router->add('auth/logout', [$this->auth_controller, 'logout']);

        $this->router->add('admin/user', [$this->user_crud_controller, 'list']);
        $this->router->add('admin/user/create', [$this->user_crud_controller, 'createForm']);
        $this->router->add('admin/user/create/submit', [$this->user_crud_controller, 'create']);
        $this->router->add('admin/user/:id', [$this->user_crud_controller, 'show']);
        $this->router->add('admin/user/:id/edit', [$this->user_crud_controller, 'editForm']);
        $this->router->add('admin/user/:id/edit/submit', [$this->user_crud_controller, 'edit']);
        $this->router->add('admin/user/:id/delete', [$this->user_crud_controller, 'deleteConfirm']);
        $this->router->add('admin/user/:id/delete/submit', [$this->user_crud_controller, 'delete']);

        $this->router->add('captcha', [$this->captcha_controller, 'captcha']);

        $this->router->add('manage', [$this->manage_controller, 'status']);
        $this->router->add('manage/rebuildall', [$this->manage_controller, 'rebuildAll']);
        $this->router->add('manage/approve/:id', [$this->manage_controller, 'approve']);

        $this->router->add('manage/bans', function (ServerRequestInterface $request) {
            $data = $request->getParsedBody();
            $query = $request->getQueryParams();
            if (!empty($data['ip'])) {
                return $this->manage_controller->addBan($request);
            } elseif (!empty($query['lift'])) {
                return $this->manage_controller->liftBan($request);
            } else {
                return $this->manage_controller->listBans($request);
            }
        });

        $this->router->add('manage/delete/:id', [$this->manage_controller, 'delete']);
        $this->router->add('manage/logout', [$this->manage_controller, 'logout']);
        $this->router->add('manage/moderate', [$this->manage_controller, 'moderate']);
        $this->router->add('manage/moderate/:id', [$this->manage_controller, 'moderate']);
        $this->router->add('manage/rawpost', [$this->manage_controller, 'rawPost']);
        $this->router->add('manage/sticky/:id', [$this->manage_controller, 'setSticky']);
        $this->router->add('manage/update', [$this->manage_controller, 'update']);

        $this->router->add('', [$this->post_controller, 'board']);
        $this->router->add(':page', [$this->post_controller, 'board']);
        $this->router->add('res/:id', [$this->post_controller, 'thread']);
        $this->router->add('post/create', [$this->post_controller, 'create']);
        $this->router->add('post/delete', [$this->post_controller, 'delete']);

        $this->router->add('amp', [$this->amp_post_controller, 'index']);
        $this->router->add('amp/thread/:id', [$this->amp_post_controller, 'thread']);

        $this->router->add('mobile', [$this->mobile_post_controller, 'index']);
        $this->router->add('mobile/thread/:id', [$this->mobile_post_controller, 'thread']);
        $this->router->add('mobile/post/create', [$this->mobile_post_controller, 'createPost']);
        $this->router->add('ajax/mobile/thread/:id', [$this->mobile_post_controller, 'ajaxThread']);

        $this->router->add('settings', [$this->settings_controller, 'settings']);
    }

    /**
     * {@inheritDoc}
     */
    public function handle(ServerRequestInterface $request) : ResponseInterface
    {
        $uri = $request->getUri();
        $path = $uri->getPath();

        // Remove board params.
        $prefix = '/' . TINYIB_BOARD . '/';
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

        $uri = $uri->withPath('/' . $path);
        $request = $request->withUri($uri);

        $handler = $this->router->resolve($path);
        if (!isset($handler)) {
            throw new NotFoundException();
        }

        return $handler($request);
    }
}
