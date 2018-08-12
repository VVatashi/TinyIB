<?php

namespace TinyIB\Tests\Unit;

use GuzzleHttp\Psr7\ServerRequest;
use PHPUnit\Framework\TestCase;
use TinyIB\Service\RoutingService;
use TinyIB\Service\RoutingServiceInterface;
use TinyIB\Tests\Mock\ManageControllerMock;
use TinyIB\Tests\Mock\PostControllerMock;
use TinyIB\Tests\Mock\SettingsControllerMock;
use VVatashi\Router\Router;

final class RoutingServiceTest extends TestCase
{
    public static function setUpBeforeClass()
    {
        define('TINYIB_BOARD', 'b');
        define('TINYIB_THREADSPERPAGE', 5);
        define('TINYIB_INDEXPAGE', false);
        define('TINYIB_RESPAGE', true);
        define('TINYIB_LOGO', '');
        define('TINYIB_BOARDDESC', '');
        define('TINYIB_REQMOD', false);
        define('TINYIB_MAXWOP', 250);
        define('TINYIB_MAXHOP', 250);
        define('TINYIB_MAXW', 250);
        define('TINYIB_MAXH', 250);
        define('TINYIB_CAPTCHA', '');
    }

    public function resolveProvider() : array
    {
        return [
            ['', true],
            ['0', true],
            ['1', true],
            ['2', true],
            ['res/1', true],
            ['res/2', true],
            ['res/3', true],
            ['manage', true],
            ['manage/rebuildall', true],
            ['manage/approve/1', true],
            ['manage/approve/2', true],
            ['manage/approve/3', true],
            ['manage/bans', true],
            ['manage/delete/1', true],
            ['manage/delete/2', true],
            ['manage/delete/3', true],
            ['manage/logout', true],
            ['manage/moderate', true],
            ['manage/moderate/1', true],
            ['manage/moderate/2', true],
            ['manage/moderate/3', true],
            ['manage/rawpost', true],
            ['manage/sticky/1', true],
            ['manage/sticky/2', true],
            ['manage/sticky/3', true],
            ['manage/update', true],
            ['post/create', true],
            ['post/delete', true],
            ['settings', true],
        ];
    }

    /**
     * @dataProvider resolveProvider
     */
    public function testResolve($path, $exists) : void
    {
        $router = new Router();

        $manage_controller = new ManageControllerMock();
        $post_controller = new PostControllerMock();
        $settings_controller = new SettingsControllerMock();

        $routing_service = new RoutingService(
            $router,
            $manage_controller,
            $post_controller,
            $settings_controller
        );
        $this->assertNotNull($routing_service);
        $this->assertInstanceOf(RoutingServiceInterface::class, $routing_service);
        $this->assertInstanceOf(RoutingService::class, $routing_service);

        $request = new ServerRequest('GET', $path);
        $response = $routing_service->resolve($request);
        if ($exists) {
            $this->assertNotEquals(404, $response->getStatusCode());
        } else {
            $this->assertEquals(404, $response->getStatusCode());
        }
    }
}
