<?php

namespace TinyIB\Service;

use TinyIB\Cache\CacheInterface;
use TinyIB\Controller\ManageControllerInterface;
use TinyIB\Controller\PostControllerInterface;
use TinyIB\Controller\SettingsControllerInterface;
use TinyIB\Request;
use TinyIB\Response;
use TinyIB\Service\RendererServiceInterface;
use VVatashi\Router\RouterInterface;

class RoutingService implements RoutingServiceInterface
{
    /** @var \VVatashi\Router\RouterInterface $router */
    protected $router;

    /** @var \TinyIB\Cache\CacheInterface $cache */
    protected $cache;

    /** @var \TinyIB\Service\RendererServiceInterface $renderer */
    protected $renderer;

    /** @var \TinyIB\Controller\ManageControllerInterface $manage_controller */
    protected $manage_controller;

    /** @var \TinyIB\Controller\PostControllerInterface $post_controller */
    protected $post_controller;

    /** @var \TinyIB\Controller\SettingsControllerInterface $settings_controller */
    protected $settings_controller;

    /**
     * Creates a new RoutingService instance.
     */
    public function __construct(
        RouterInterface $router,
        CacheInterface $cache,
        RendererServiceInterface $renderer,
        ManageControllerInterface $manage_controller,
        PostControllerInterface $post_controller,
        SettingsControllerInterface $settings_controller
    ) {
        $this->router = $router;
        $this->cache = $cache;
        $this->renderer = $renderer;
        $this->manage_controller = $manage_controller;
        $this->post_controller = $post_controller;
        $this->settings_controller = $settings_controller;

        $this->router->add('manage', [$this->manage_controller, 'status']);
        $this->router->add('manage/rebuildall', [$this->manage_controller, 'rebuildAll']);
        $this->router->add('manage/approve/:id', [$this->manage_controller, 'approve']);

        $this->router->add('manage/bans', function (Request $request) {
            $data = $request->getData();
            $query = $request->getQuery();
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

        $this->router->add('res/:id', function (Request $request) {
            $id = (int)explode('/', $request->getPath())[1];
            $key = TINYIB_BOARD . ':thread:' . $id;
            $data = $this->cache->get($key);
            if (!isset($data)) {
                $data = $this->renderer->renderThreadPage($id);
                $this->cache->set($key, $data, 4 * 60 * 60);
            }

            return Response::ok($data);
        });

        $this->router->add(':page', function (Request $request) {
            $page = (int)explode('/', $request->getPath())[0];
            $key = TINYIB_BOARD . ':page:' . $page;
            $data = $this->cache->get($key);
            if (!isset($data)) {
                $data = $this->renderer->renderBoardPage($page);
                $this->cache->set($key, $data, 4 * 60 * 60);
            }

            return Response::ok($data);
        });

        $this->router->add('', function (Request $request) {
            $key = TINYIB_BOARD . ':page:0';
            $data = $this->cache->get($key);
            if (!isset($data)) {
                $data = $this->renderer->renderBoardPage(0);
                $this->cache->set($key, $data, 4 * 60 * 60);
            }

            return Response::ok($data);
        });
    }

    /**
     * {@inheritDoc}
     */
    public function resolve(Request $request) : Response
    {
        $path = $request->getPath();
        $handler = $this->router->resolve($path);
        if (!isset($handler)) {
            return Response::notFound('The requested page is not found.');
        }

        return $handler($request);
    }
}
