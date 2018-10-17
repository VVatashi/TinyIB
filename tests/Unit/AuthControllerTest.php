<?php

namespace TinyIB\Tests\Unit;

use GuzzleHttp\Psr7\ServerRequest;
use PHPUnit\Framework\TestCase;
use Psr\Http\Message\ResponseInterface;
use TinyIB\Controller\AuthController;
use TinyIB\Controller\AuthControllerInterface;
use TinyIB\Model\User;
use TinyIB\Tests\Mock\CaptchaServiceMock;
use TinyIB\Tests\Mock\RendererServiceMock;

final class AuthControllerTest extends TestCase
{
    /** @var \TinyIB\Controller\AuthControllerInterface $controller */
    protected $controller;

    public function setUp() : void
    {
        global $_SESSION;
        $_SESSION = [];

        User::where('email', 'test@example.com')->forceDelete();
        User::where('email', 'another@example.com')->forceDelete();

        $test = User::firstOrCreate([
            'email' => 'test@example.com'
        ], [
            'password_hash' => '',
        ]);
        $test->setPassword('test');
        $test->save();

        $captcha_service = new CaptchaServiceMock();
        $renderer = new RendererServiceMock();

        $this->controller = new AuthController($captcha_service, $renderer);
    }

    public function test_сreateInstance() : void
    {
        $this->assertNotNull($this->controller);
        $this->assertInstanceOf(AuthControllerInterface::class, $this->controller);
        $this->assertInstanceOf(AuthController::class, $this->controller);
    }

    public function test_logout_shouldLogoutAndRedirect() : void
    {
        $user = User::where('email', 'test@example.com')->first();
        $_SESSION['user'] = $user->id;

        $request = new ServerRequest('GET', '/auth/logout');
        $request = $request->withAttribute('user', $user);

        // Check response.
        $response = $this->controller->logout($request);
        $this->assertNotNull($response);
        $this->assertInstanceOf(ResponseInterface::class, $response);

        // Should remove user from the session.
        $this->assertEquals(false, isset($_SESSION['user']));

        // Should set redirect.
        $status = $response->getStatusCode();
        $this->assertEquals(302, $status);
    }

    public function test_loginForm_shouldReturnStatus200() : void
    {
        $user = User::anonymous();
        $request = new ServerRequest('GET', '/auth/login');
        $request = $request->withAttribute('user', $user);

        // Check response.
        $response = $this->controller->loginForm($request);
        $this->assertNotNull($response);
        $this->assertInstanceOf(ResponseInterface::class, $response);

        // Check status code.
        $status = $response->getStatusCode();
        $this->assertEquals(200, $status);
    }

    public function test_submitLoginForm_shouldLoginAndRedirect() : void
    {
        $user = User::anonymous();
        $request = new ServerRequest('GET', '/auth/login/submit');
        $request = $request->withAttribute('user', $user);
        $request = $request->withParsedBody([
            'email' => 'test@example.com',
            'password' => 'test',
        ]);

        // Check response.
        $response = $this->controller->login($request);
        $this->assertNotNull($response);
        $this->assertInstanceOf(ResponseInterface::class, $response);

        // Should not set error.
        $this->assertEquals(false, isset($_SESSION['error']));

        // Should set user ID.
        $this->assertEquals(true, isset($_SESSION['user']));

        // Should set redirect.
        $status = $response->getStatusCode();
        $this->assertEquals(302, $status);
    }

    public function test_submitLoginForm_incorrectPassword_shouldSetErrorAndRedirect() : void
    {
        $user = User::anonymous();
        $request = new ServerRequest('GET', '/auth/login/submit');
        $request = $request->withAttribute('user', $user);
        $request = $request->withParsedBody([
            'email' => 'test@example.com',
            'password' => 'another',
        ]);

        // Check response.
        $response = $this->controller->login($request);
        $this->assertNotNull($response);
        $this->assertInstanceOf(ResponseInterface::class, $response);

        // Should set error.
        $this->assertEquals(true, isset($_SESSION['error']));

        // Should not set user.
        $this->assertEquals(false, isset($_SESSION['user']));

        // Should set redirect.
        $status = $response->getStatusCode();
        $this->assertEquals(302, $status);
    }

    public function test_registerForm_shouldReturnStatus200() : void
    {
        $user = User::anonymous();
        $request = new ServerRequest('GET', '/auth/register');
        $request = $request->withAttribute('user', $user);

        // Check response.
        $response = $this->controller->registerForm($request);
        $this->assertNotNull($response);
        $this->assertInstanceOf(ResponseInterface::class, $response);

        // Check status code.
        $status = $response->getStatusCode();
        $this->assertEquals(200, $status);
    }

    public function test_submitRegisterForm_shouldRegisterAndRedirect() : void
    {
        $user = User::anonymous();
        $request = new ServerRequest('GET', '/auth/register/submit');
        $request = $request->withAttribute('user', $user);
        $request = $request->withParsedBody([
            'email' => 'another@example.com',
            'password' => 'another',
        ]);

        // Check response.
        $response = $this->controller->register($request);
        $this->assertNotNull($response);
        $this->assertInstanceOf(ResponseInterface::class, $response);

        // Should not set error.
        //$this->assertEquals(false, isset($_SESSION['error']));

        // Should set user.
        //$this->assertEquals(true, isset($_SESSION['user']));

        // Should set redirect.
        $status = $response->getStatusCode();
        $this->assertEquals(302, $status);
    }

    public function test_submitRegisterForm_withExistingEmail_shouldSetErrorAndRedirect() : void
    {
        $user = User::anonymous();
        $request = new ServerRequest('GET', '/auth/register/submit');
        $request = $request->withAttribute('user', $user);
        $request = $request->withParsedBody([
            'email' => 'test@example.com',
            'password' => 'another',
        ]);

        // Check response.
        $response = $this->controller->register($request);
        $this->assertNotNull($response);
        $this->assertInstanceOf(ResponseInterface::class, $response);

        // Should set error.
        $this->assertEquals(true, isset($_SESSION['error']));

        // Should not set user.
        $this->assertEquals(false, isset($_SESSION['user']));

        // Should set redirect.
        $status = $response->getStatusCode();
        $this->assertEquals(302, $status);
    }
}
