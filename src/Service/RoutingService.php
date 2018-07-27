<?php

namespace TinyIB\Service;

use TinyIB\Cache\CacheInterface;
use TinyIB\Controller\ManageControllerInterface;
use TinyIB\Controller\PostControllerInterface;
use TinyIB\Controller\SettingsControllerInterface;
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

    /** @var \TinyIB\Controller\ManageControllerInterface $post_controller */
    protected $post_controller;

    /** @var \TinyIB\Controller\ManageControllerInterface $settings_controller */
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

        $this->router->add('manage', function ($path) {
            return $this->manage_controller->status();
        });

        $this->router->add('manage/rebuildall', function ($path) {
            return $this->manage_controller->rebuildAll();
        });

        $this->router->add('manage/approve/:id', function ($path) {
            $id = (int)explode('/', $path)[2];
            return $this->manage_controller->approve($id);
        });

        $this->router->add('manage/bans', function ($path) {
            $bans = !empty($_GET['bans']) ? $_GET['bans'] : '';
            if (!empty($_POST['ip'])) {
                $ip = $_POST['ip'];
                $expire = isset($_POST['expire']) ? $_POST['expire'] : null;
                $reason = isset($_POST['reason']) ? $_POST['reason'] : null;

                return $this->manage_controller->addBan($bans, $ip, $expire, $reason);
            } elseif (!empty($_GET['lift'])) {
                $lift = $_GET['lift'];

                return $this->manage_controller->liftBan($bans, $lift);
            } else {
                return $this->manage_controller->listBans($bans);
            }
        });

        $this->router->add('manage/delete/:id', function ($path) {
            $id = (int)explode('/', $path)[2];
            return $this->manage_controller->delete($id);
        });

        $this->router->add('manage/logout', function ($path) {
            return $this->manage_controller->logout();
        });

        $this->router->add('manage/moderate', function ($path) {
            return $this->manage_controller->moderate();
        });

        $this->router->add('manage/moderate/:id', function ($path) {
            $id = (int)explode('/', $path)[2];
            return $this->manage_controller->moderate($id);
        });

        $this->router->add('manage/rawpost', function ($path) {
            return $this->manage_controller->rawPost();
        });

        $this->router->add('manage/sticky/:id', function ($path) {
            $id = (int)explode('/', $path)[2];
            $sticky = !empty($_GET['setsticky']) ? (bool)intval($_GET['setsticky']) : false;
            return $this->manage_controller->setSticky($id, $sticky);
        });

        $this->router->add('manage/update', function ($path) {
            return $this->manage_controller->update();
        });

        $this->router->add('post/create', function ($path) {
            $data = array_intersect_key($_POST, array_flip([
                'name',
                'email',
                'subject',
                'message',
                'password',
                'embed',
                'parent',
            ]));
            return $this->post_controller->create($data);
        });

        $this->router->add('post/delete', function ($path) {
            $id = isset($_POST['delete']) ? $_POST['delete'] : null;
            $password = isset($_POST['password']) ? $_POST['password'] : null;
            return $this->post_controller->delete($id, $password);
        });

        $this->router->add('settings', function ($path) {
            return $this->settings_controller->settings();
        });

        $this->router->add('res/:id', function ($path) {
            $id = (int)explode('/', $path)[1];
            $key = TINYIB_BOARD . ':thread:' . $id;
            $data = $this->cache->get($key);
            if (!isset($data)) {
                $data = $this->renderer->renderThreadPage($id);
                $this->cache->set($key, $data, 4 * 60 * 60);
            }

            return Response::ok($data);
        });

        $this->router->add(':page', function ($path) {
            $page = (int)explode('/', $path)[0];
            $key = TINYIB_BOARD . ':page:' . $page;
            $data = $this->cache->get($key);
            if (!isset($data)) {
                $data = $this->renderer->renderBoardPage($page);
                $this->cache->set($key, $data, 4 * 60 * 60);
            }

            return Response::ok($data);
        });

        $this->router->add('', function ($path) {
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
    public function resolve(string $path) : Response
    {
        $handler = $this->router->resolve($path);
        return isset($handler) ? $handler($path) : Response::notFound('The requested page is not found.');
    }
}
