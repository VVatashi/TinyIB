<?php

namespace TinyIB\Tests\Unit;

use GuzzleHttp\Psr7\ServerRequest;
use PHPUnit\Framework\TestCase;
use TinyIB\Service\RoutingService;
use TinyIB\Service\RoutingServiceInterface;
use TinyIB\Tests\Mock\AuthControllerMock;
use TinyIB\Tests\Mock\UserCrudControllerMock;
use TinyIB\Tests\Mock\CaptchaControllerMock;
use TinyIB\Tests\Mock\ManageControllerMock;
use TinyIB\Tests\Mock\PostControllerMock;
use TinyIB\Tests\Mock\AmpPostControllerMock;
use TinyIB\Tests\Mock\MobilePostControllerMock;
use TinyIB\Tests\Mock\SettingsControllerMock;
use VVatashi\Router\Router;

final class RoutingServiceTest extends TestCase
{
    public static function setUpBeforeClass()
    {
        defined('TINYIB_BOARD') || define('TINYIB_BOARD', 'b');
        defined('TINYIB_THREADSPERPAGE') || define('TINYIB_THREADSPERPAGE', 5);
        defined('TINYIB_INDEXPAGE') || define('TINYIB_INDEXPAGE', false);
        defined('TINYIB_RESPAGE') || define('TINYIB_RESPAGE', true);
        defined('TINYIB_LOGO') || define('TINYIB_LOGO', '');
        defined('TINYIB_BOARDDESC') || define('TINYIB_BOARDDESC', '');
        defined('TINYIB_REQMOD') || define('TINYIB_REQMOD', false);
        defined('TINYIB_MAXWOP') || define('TINYIB_MAXWOP', 250);
        defined('TINYIB_MAXHOP') || define('TINYIB_MAXHOP', 250);
        defined('TINYIB_MAXW') || define('TINYIB_MAXW', 250);
        defined('TINYIB_MAXH') || define('TINYIB_MAXH', 250);
        defined('TINYIB_CAPTCHA') || define('TINYIB_CAPTCHA', '');
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

        $auth_controller = new AuthControllerMock();
        $user_crud_controller = new UserCrudControllerMock();
        $captcha_controller = new CaptchaControllerMock();
        $manage_controller = new ManageControllerMock();
        $post_controller = new PostControllerMock();
        $amp_post_controller = new AmpPostControllerMock();
        $mobile_post_controller = new MobilePostControllerMock();
        $settings_controller = new SettingsControllerMock();

        $routing_service = new RoutingService(
            $router,
            $auth_controller,
            $user_crud_controller,
            $captcha_controller,
            $manage_controller,
            $post_controller,
            $amp_post_controller,
            $mobile_post_controller,
            $settings_controller
        );

        $this->assertNotNull($routing_service);
        $this->assertInstanceOf(RoutingServiceInterface::class, $routing_service);
        $this->assertInstanceOf(RoutingService::class, $routing_service);

        $request = new ServerRequest('GET', $path);
        $response = $routing_service->handle($request);
        if ($exists) {
            $this->assertNotEquals(404, $response->getStatusCode());
        } else {
            $this->assertEquals(404, $response->getStatusCode());
        }
    }
}
