<?php

namespace Imageboard\Tests\Functional\Controller;

use GuzzleHttp\Psr7\ServerRequest;
use Imageboard\Controller\AuthController;
use Imageboard\Service\{CaptchaService, ConfigService, RendererService};
use Imageboard\Tests\Functional\TestWithUsers;
use Psr\Http\Message\ResponseInterface;

final class AuthControllerTest extends TestWithUsers
{
  /** @var AuthController */
  protected $controller;

  function setUp(): void
  {
    parent::setUp();

    global $_SESSION, $database;
    $_SESSION = [];

    $connection = $database->getConnection();
    $builder = $connection->createQueryBuilder();
    $builder->delete('users')->execute();

    $config = new ConfigService();
    $captcha = new CaptchaService();
    $renderer = new RendererService($config);
    $this->controller = new AuthController(
      $captcha,
      $this->user_service,
      $renderer,
      $config
    );
  }

  function test_logout_shouldLogoutAndRedirect(): void
  {
    $user = $this->user_service->create('test@example.com', 'test');
    $_SESSION['user'] = $user->id;

    $request = (new ServerRequest('GET', '/auth/logout'))
      ->withAttribute('user', $user);

    // Check response.
    $response = $this->controller->logout($request);
    $this->assertInstanceOf(ResponseInterface::class, $response);

    // Should set redirect.
    $status = $response->getStatusCode();
    $this->assertEquals(302, $status);

    // Should remove user from the session.
    $this->assertEquals(false, isset($_SESSION['user']));
  }

  function test_loginForm_shouldReturnContent(): void
  {
    $user = $this->user_service->getAnonymous();
    $request = (new ServerRequest('GET', '/auth/login'))
      ->withAttribute('user', $user);

    // Check response.
    $response = $this->controller->loginForm($request);
    $this->assertIsString($response);
  }

  function test_submitLoginForm_shouldLoginAndRedirect(): void
  {
    $this->user_service->create('test@example.com', 'test');
    $user = $this->user_service->getAnonymous();
    $request = (new ServerRequest('POST', '/auth/login'))
      ->withAttribute('user', $user)
      ->withParsedBody([
        'email' => 'test@example.com',
        'password' => 'test',
      ]);

    // Check response.
    $response = $this->controller->login($request);
    $this->assertInstanceOf(ResponseInterface::class, $response);

    // Should set redirect.
    $status = $response->getStatusCode();
    $this->assertEquals(302, $status);

    // Should not set error.
    $this->assertEquals(false, isset($_SESSION['error']));

    // Should set user ID.
    $this->assertEquals(true, isset($_SESSION['user']));
  }

  function test_submitLoginForm_withIncorrectPassword_shouldSetErrorAndRedirect(): void
  {
    $this->user_service->create('test@example.com', 'test');
    $user = $this->user_service->getAnonymous();
    $request = (new ServerRequest('POST', '/auth/login'))
      ->withAttribute('user', $user)
      ->withParsedBody([
        'email' => 'test@example.com',
        'password' => 'another',
      ]);

    // Check response.
    $response = $this->controller->login($request);
    $this->assertInstanceOf(ResponseInterface::class, $response);

    // Should set redirect.
    $status = $response->getStatusCode();
    $this->assertEquals(302, $status);

    // Should set error.
    $this->assertEquals(true, isset($_SESSION['error']));

    // Should not set user.
    $this->assertEquals(false, isset($_SESSION['user']));
  }

  function test_registerForm_shouldReturnContent(): void
  {
    $user = $this->user_service->getAnonymous();
    $request = (new ServerRequest('GET', '/auth/register'))
      ->withAttribute('user', $user);

    // Check response.
    $response = $this->controller->registerForm($request);
    $this->assertIsString($response);
  }

  function test_submitRegisterForm_shouldRegisterAndRedirect(): void
  {
    $user = $this->user_service->getAnonymous();
    $request = (new ServerRequest('POST', '/auth/register'))
      ->withAttribute('user', $user)
      ->withParsedBody([
        'email' => 'another@example.com',
        'password' => 'another',
      ]);

    // Check response.
    $response = $this->controller->register($request);
    $this->assertInstanceOf(ResponseInterface::class, $response);

    // Should set redirect.
    $status = $response->getStatusCode();
    $this->assertEquals(302, $status);

    // Should not set error.
    $this->assertEquals(false, isset($_SESSION['error']));

    // Should set user.
    $this->assertEquals(true, isset($_SESSION['user']));
  }

  function test_submitRegisterForm_withExistingEmail_shouldSetErrorAndRedirect(): void
  {
    $this->user_service->create('test@example.com', 'test');
    $user = $this->user_service->getAnonymous();
    $request = (new ServerRequest('POST', '/auth/register'))
      ->withAttribute('user', $user)
      ->withParsedBody([
        'email' => 'test@example.com',
        'password' => 'another',
      ]);

    // Check response.
    $response = $this->controller->register($request);
    $this->assertInstanceOf(ResponseInterface::class, $response);

    // Should set redirect.
    $status = $response->getStatusCode();
    $this->assertEquals(302, $status);

    // Should set error.
    $this->assertEquals(true, isset($_SESSION['error']));

    // Should not set user.
    $this->assertEquals(false, isset($_SESSION['user']));
  }
}
