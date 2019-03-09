<?php

namespace Imageboard\Tests\Functional\Controller\Admin;

use GuzzleHttp\Psr7\ServerRequest;
use Imageboard\Controller\Admin\{
  SystemControllerInterface,
  SystemController
};
use Imageboard\Exception\AccessDeniedException;
use Imageboard\Model\User;
use Imageboard\Service\RendererService;
use PHPUnit\Framework\TestCase;
use Imageboard\Command\CommandDispatcher;

final class SystemControllerTest extends TestCase
{
  /** @var SystemControllerInterface */
  protected $controller;

  function setUp() : void
  {
    global $container;

    User::truncate();

    $command_dispatcher = new CommandDispatcher($container);
    $renderer = new RendererService();
    $this->controller = new SystemController($command_dispatcher, $renderer);
  }

  protected function createAnonymous(): User
  {
    global $container;

    $user = User::anonymous();
    $container->registerInstance(CurrentUserInterface::class, $user);

    return $user;
  }

  protected function createUser(): User
  {
    global $container;

    $user = User::createUser('user@example.com', 'user@example.com', User::ROLE_USER);
    $container->registerInstance(CurrentUserInterface::class, $user);

    return $user;
  }

  protected function createAdmin(): User
  {
    global $container;

    $user = User::createUser('admin@example.com', 'admin@example.com', User::ROLE_ADMINISTRATOR);
    $container->registerInstance(CurrentUserInterface::class, $user);

    return $user;
  }

  function test_index_asAnonymous_shouldThrow() : void
  {
    $user = $this->createAnonymous();
    $request = (new ServerRequest('GET', '/admin/system'))
      ->withAttribute('user', $user);

    $this->expectException(AccessDeniedException::class);

    $this->controller->index($request);
  }

  function test_index_asUser_shouldThrow() : void
  {
    $user = $this->createUser();
    $request = (new ServerRequest('GET', '/admin/system'))
      ->withAttribute('user', $user);

    $this->expectException(AccessDeniedException::class);

    $this->controller->index($request);
  }

  function test_index_asAdmin_shouldReturnContent() : void
  {
    $user = $this->createAdmin();
    $request = (new ServerRequest('GET', '/admin/system'))
      ->withAttribute('user', $user);

    $content = $this->controller->index($request);

    $this->assertIsString($content);
    $this->assertNotEmpty($content);
  }

  function test_clearCache_asAnonymous_shouldThrow() : void
  {
    $user = $this->createAnonymous();
    $request = (new ServerRequest('POST', '/admin/system/clear-cache'))
      ->withAttribute('user', $user);

    $this->expectException(AccessDeniedException::class);

    $this->controller->clearCache($request);
  }

  function test_clearCache_asUser_shouldThrow() : void
  {
    $user = $this->createUser();
    $request = (new ServerRequest('POST', '/admin/system/clear-cache'))
      ->withAttribute('user', $user);

    $this->expectException(AccessDeniedException::class);

    $this->controller->clearCache($request);
  }

  function test_clearCache_asAdmin_shouldReturnRedirect() : void
  {
    $user = $this->createAdmin();
    $request = (new ServerRequest('POST', '/admin/system/clear-cache'))
      ->withAttribute('user', $user);

    $response = $this->controller->clearCache($request);

    $status = $response->getStatusCode();
    $this->assertEquals(302, $status);
  }
}
