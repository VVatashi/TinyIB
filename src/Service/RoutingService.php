<?php

namespace TinyIB\Service;

use GuzzleHttp\Psr7\Response;
use Psr\Http\Message\ResponseInterface;
use Psr\Http\Message\ServerRequestInterface;
use TinyIB\Cache\CacheInterface;
use TinyIB\Controller\CaptchaControllerInterface;
use TinyIB\Controller\ManageControllerInterface;
use TinyIB\Controller\PostControllerInterface;
use TinyIB\Controller\SettingsControllerInterface;
use VVatashi\Router\RouterInterface;

class RoutingService implements RoutingServiceInterface
{
    /** @var \VVatashi\Router\RouterInterface $router */
    protected $router;

    /** @var \TinyIB\Controller\ManageControllerInterface $manage_controller */
    protected $manage_controller;

    /** @var \TinyIB\Controller\PostControllerInterface $post_controller */
    protected $post_controller;

    /** @var \TinyIB\Controller\SettingsControllerInterface $settings_controller */
    protected $settings_controller;

    /** @var \TinyIB\Controller\CaptchaControllerInterface $captcha_controller */
    protected $captcha_controller;

    /**
     * Creates a new RoutingService instance.
     */
    public function __construct(
        RouterInterface $router,
        ManageControllerInterface $manage_controller,
        PostControllerInterface $post_controller,
        SettingsControllerInterface $settings_controller,
        CaptchaControllerInterface $captcha_controller
    ) {
        $this->router = $router;
        $this->manage_controller = $manage_controller;
        $this->post_controller = $post_controller;
        $this->settings_controller = $settings_controller;
        $this->captcha_controller = $captcha_controller;

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

        $this->router->add('post/create', [$this->post_controller, 'create']);
        $this->router->add('post/delete', [$this->post_controller, 'delete']);

        $this->router->add('settings', [$this->settings_controller, 'settings']);

        $this->router->add('captcha', [$this->captcha_controller, 'captcha']);

        $this->router->add('res/:id', [$this->post_controller, 'thread']);
        $this->router->add(':page', [$this->post_controller, 'board']);
        $this->router->add('', [$this->post_controller, 'board']);
    }

    /**
     * {@inheritDoc}
     */
    public function resolve(ServerRequestInterface $request) : ResponseInterface
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

        $uri = $uri->withPath('/' . $path);
        $request = $request->withUri($uri);

        $handler = $this->router->resolve($path);
        if (!isset($handler)) {
            return new Response(404);
        }

        return $handler($request);
    }
}
