<?php

namespace TinyIB\Tests;

use PHPUnit\Framework\TestCase;
use TinyIB\Cache\InMemoryCache;
use TinyIB\Controller\ManageController;
use TinyIB\Controller\PostController;
use TinyIB\Controller\SettingsController;
use TinyIB\Service\CryptographyService;
use TinyIB\Service\PostService;
use TinyIB\Service\RendererService;
use TinyIB\Service\RoutingService;
use TinyIB\Service\RoutingServiceInterface;
use VVatashi\Router\Router;

final class RoutingServiceTest extends TestCase
{
    public function testResolve() : void
    {
        define('TINYIB_NEWTHREAD', 0);
        define('TINYIB_INDEXPAGE', false);
        define('TINYIB_RESPAGE', true);

        define('TINYIB_BOARD', 'test');
        define('TINYIB_BOARDDESC', 'Test');
        define('TINYIB_ALWAYSNOKO', true);
        define('TINYIB_CAPTCHA', '');
        define('TINYIB_REQMOD', '');

        define('TINYIB_LOGO', '');
        define('TINYIB_THREADSPERPAGE', 10);
        define('TINYIB_PREVIEWREPLIES', 3);
        define('TINYIB_TRUNCATE', 15);
        define('TINYIB_TIMEZONE', 'UTC');

        define('TINYIB_DELAY', 1);
        define('TINYIB_MAXTHREADS', 100);
        define('TINYIB_MAXREPLIES', 0);

        define('TINYIB_DICE_ENABLED', true);
        define('TINYIB_DICE_MAX_COUNT', 20);
        define('TINYIB_DICE_MAX_VALUE', 10000);

        define('TINYIB_MAXKB', 20480);
        define('TINYIB_MAXKBDESC', '20 MB');
        define('TINYIB_THUMBNAIL', 'imagemagick');
        define('TINYIB_NOFILEOK', false);
        define('TINYIB_FILE_ALLOW_DUPLICATE', true);
        define('TINYIB_FILE_ANIM_GIF_THUMB', false);
        define('TINYIB_FILE_SHOW_ORIG_NAME', false);
        define('TINYIB_FILE_OPTIMIZE_PNG', false);
        define('TINYIB_FILE_MAXW', 8192);
        define('TINYIB_FILE_MAXH', 8192);

        define('TINYIB_MAXWOP', 250);
        define('TINYIB_MAXHOP', 250);

        define('TINYIB_MAXW', 250);
        define('TINYIB_MAXH', 250);

        define('TINYIB_DBMIGRATE', false);

        $router = new Router();
        $cache = new InMemoryCache();

        $ban_repository = new BanRepositoryMock();
        $post_repository = new PostRepositoryMock();

        $twig_loader = new \Twig_Loader_Filesystem(__DIR__ . '/../templates');
        $twig = new \Twig_Environment($twig_loader, [
            'autoescape' => false,
            'debug' => true,
        ]);
        $twig->addGlobal('embeds', []);
        $twig->addGlobal('uploads', []);
        $twig->addGlobal('is_installed_via_git', false);
        $renderer = new RendererService($cache, $post_repository, $twig);

        $cryptography_service = new CryptographyService();
        $post_service = new PostService($cryptography_service);

        $manage_controller = new ManageController($cache, $ban_repository, $post_repository, $renderer);
        $post_controller = new PostController($cache, $ban_repository, $post_repository, $post_service, $renderer);
        $settings_controller = new SettingsController($cache, $renderer);

        $routing_service = new RoutingService(
            $router,
            $cache,
            $renderer,
            $manage_controller,
            $post_controller,
            $settings_controller
        );
        $this->assertNotNull($routing_service);
        $this->assertInstanceOf(RoutingServiceInterface::class, $routing_service);
        $this->assertInstanceOf(RoutingService::class, $routing_service);

        $response = $routing_service->resolve('');
        $this->assertEquals(200, $response->getStatusCode());

        $response = $routing_service->resolve('0');
        $this->assertEquals(200, $response->getStatusCode());

        $response = $routing_service->resolve('1');
        $this->assertEquals(200, $response->getStatusCode());

        $response = $routing_service->resolve('2');
        $this->assertEquals(200, $response->getStatusCode());

        $response = $routing_service->resolve('res/1');
        $this->assertEquals(200, $response->getStatusCode());

        $response = $routing_service->resolve('res/2');
        $this->assertEquals(200, $response->getStatusCode());

        $response = $routing_service->resolve('res/3');
        $this->assertEquals(200, $response->getStatusCode());

        $response = $routing_service->resolve('manage');
        $this->assertEquals(200, $response->getStatusCode());

        $response = $routing_service->resolve('manage/rebuildall');
        $this->assertEquals(200, $response->getStatusCode());

        $response = $routing_service->resolve('manage/approve/1');
        $this->assertEquals(200, $response->getStatusCode());

        $response = $routing_service->resolve('manage/approve/2');
        $this->assertEquals(200, $response->getStatusCode());

        $response = $routing_service->resolve('manage/approve/3');
        $this->assertEquals(200, $response->getStatusCode());

        $response = $routing_service->resolve('manage/bans');
        $this->assertEquals(200, $response->getStatusCode());

        $response = $routing_service->resolve('manage/delete/1');
        $this->assertEquals(200, $response->getStatusCode());

        $response = $routing_service->resolve('manage/delete/2');
        $this->assertEquals(200, $response->getStatusCode());

        $response = $routing_service->resolve('manage/delete/3');
        $this->assertEquals(200, $response->getStatusCode());

        $response = $routing_service->resolve('manage/logout');
        $this->assertEquals(200, $response->getStatusCode());

        $response = $routing_service->resolve('manage/moderate');
        $this->assertEquals(200, $response->getStatusCode());

        $response = $routing_service->resolve('manage/moderate/1');
        $this->assertEquals(200, $response->getStatusCode());

        $response = $routing_service->resolve('manage/moderate/2');
        $this->assertEquals(200, $response->getStatusCode());

        $response = $routing_service->resolve('manage/rawpost');
        $this->assertEquals(200, $response->getStatusCode());

        $response = $routing_service->resolve('manage/sticky/1');
        $this->assertEquals(200, $response->getStatusCode());

        $response = $routing_service->resolve('manage/sticky/2');
        $this->assertEquals(200, $response->getStatusCode());

        $response = $routing_service->resolve('manage/sticky/3');
        $this->assertEquals(200, $response->getStatusCode());

        $response = $routing_service->resolve('manage/update');
        $this->assertEquals(200, $response->getStatusCode());

        /*$response = $routing_service->resolve('post/create');
        $this->assertEquals(200, $response->getStatusCode());

        $response = $routing_service->resolve('post/delete');
        $this->assertEquals(200, $response->getStatusCode());*/

        $response = $routing_service->resolve('settings');
        $this->assertEquals(200, $response->getStatusCode());
    }
}
