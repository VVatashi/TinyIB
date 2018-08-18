<?php

namespace TinyIB\Tests\Unit;

use GuzzleHttp\Psr7\ServerRequest;
use PHPUnit\Framework\TestCase;
use Psr\Http\Message\ResponseInterface;
use TinyIB\Controller\AuthController;
use TinyIB\Controller\AuthControllerInterface;
use TinyIB\Model\User;
use TinyIB\Service\UserService;
use TinyIB\Tests\Mock\RendererServiceMock;
use TinyIB\Tests\Mock\UserRepositoryMock;

final class AuthControllerTest extends TestCase
{
    /** @var \TinyIB\Controller\AuthControllerInterface $controller */
    protected $controller;

    public static function setUpBeforeClass()
    {
        global $_SESSION;

        if (!isset($_SESSION)) {
            $_SESSION = [];
        }

        defined('TINYIB_BOARD') || define('TINYIB_BOARD', 'b');
    }

    public function setUp() : void
    {
        //session_start();

        $renderer = new RendererServiceMock();
        $repository = new UserRepositoryMock();

        // Create user for auth tests.
        $user = new User(1, 'test@example.com', '', 1);
        $user = $user->withPassword('test');
        $repository->insert($user);

        $service = new UserService($repository);
        $this->controller = new AuthController($renderer, $service);
    }

    public function testCreateController() : void
    {
        $this->assertNotNull($this->controller);
        $this->assertInstanceOf(AuthControllerInterface::class, $this->controller);
        $this->assertInstanceOf(AuthController::class, $this->controller);
    }

    public function testLogout() : void
    {
        $request = new ServerRequest('GET', '/auth/logout');
        $request = $request->withAttribute('user', new User(0, '', '', 0));

        $response = $this->controller->logout($request);
        $this->assertNotNull($response);
        $this->assertInstanceOf(ResponseInterface::class, $response);

        // Should remove user from the session.
        $this->assertEquals(false, isset($_SESSION['user']));

        // Check status code.
        // Should redirect.
        $status = $response->getStatusCode();
        $this->assertEquals(302, $status);
    }

    public function testGetLoginForm() : void
    {
        $request = new ServerRequest('GET', '/auth/login');
        $request = $request->withAttribute('user', new User(0, '', '', 0));

        $response = $this->controller->loginForm($request);
        $this->assertNotNull($response);
        $this->assertInstanceOf(ResponseInterface::class, $response);

        // Check status code.
        $status = $response->getStatusCode();
        $this->assertEquals(200, $status);
    }

    public function testSubmitLoginForm() : void
    {
        $request = new ServerRequest('GET', '/auth/login/submit');
        $request = $request->withAttribute('user', new User(0, '', '', 0));
        $request = $request->withParsedBody([
            'email' => 'test@example.com',
            'password' => 'test',
        ]);

        unset($_SESSION['user']);
        $response = $this->controller->login($request);
        $this->assertNotNull($response);
        $this->assertInstanceOf(ResponseInterface::class, $response);

        // Should not set error.
        $this->assertEquals(false, isset($_SESSION['error']));

        // Should set user.
        $this->assertEquals(true, isset($_SESSION['user']));

        // Check status code.
        // Should redirect.
        $status = $response->getStatusCode();
        $this->assertEquals(302, $status);
    }

    public function testSubmitLoginFormWithIncorrectPassword() : void
    {
        $request = new ServerRequest('GET', '/auth/login/submit');
        $request = $request->withAttribute('user', new User(0, '', '', 0));
        $request = $request->withParsedBody([
            'email' => 'test@example.com',
            'password' => 'another',
        ]);

        unset($_SESSION['user']);
        $response = $this->controller->login($request);
        $this->assertNotNull($response);
        $this->assertInstanceOf(ResponseInterface::class, $response);

        // Should set error.
        $this->assertEquals(true, isset($_SESSION['error']));

        // Should not set user.
        $this->assertEquals(false, isset($_SESSION['user']));

        // Check status code.
        // Should redirect.
        $status = $response->getStatusCode();
        $this->assertEquals(302, $status);
    }

    public function testGetRegisterForm() : void
    {
        $request = new ServerRequest('GET', '/auth/register');
        $request = $request->withAttribute('user', new User(0, '', '', 0));

        $response = $this->controller->registerForm($request);
        $this->assertNotNull($response);
        $this->assertInstanceOf(ResponseInterface::class, $response);

        // Check status code.
        $status = $response->getStatusCode();
        $this->assertEquals(200, $status);
    }

    public function testSubmitRegisterForm() : void
    {
        $request = new ServerRequest('GET', '/auth/login/submit');
        $request = $request->withAttribute('user', new User(0, '', '', 0));
        $request = $request->withParsedBody([
            'email' => 'another@example.com',
            'password' => 'another',
        ]);

        unset($_SESSION['user']);
        $response = $this->controller->register($request);
        $this->assertNotNull($response);
        $this->assertInstanceOf(ResponseInterface::class, $response);

        // Should not set error.
        //$this->assertEquals(false, isset($_SESSION['error']));

        // Should set user.
        //$this->assertEquals(true, isset($_SESSION['user']));

        // Check status code.
        // Should redirect.
        $status = $response->getStatusCode();
        $this->assertEquals(302, $status);
    }

    public function testSubmitRegisterFormWithExistingEmail() : void
    {
        $request = new ServerRequest('GET', '/auth/login/submit');
        $request = $request->withAttribute('user', new User(0, '', '', 0));
        $request = $request->withParsedBody([
            'email' => 'test@example.com',
            'password' => 'another',
        ]);

        unset($_SESSION['user']);
        $response = $this->controller->register($request);
        $this->assertNotNull($response);
        $this->assertInstanceOf(ResponseInterface::class, $response);

        // Should set error.
        $this->assertEquals(true, isset($_SESSION['error']));

        // Should not set user.
        $this->assertEquals(false, isset($_SESSION['user']));

        // Check status code.
        // Should redirect.
        $status = $response->getStatusCode();
        $this->assertEquals(302, $status);
    }
}
