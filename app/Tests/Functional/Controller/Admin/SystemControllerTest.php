<?php

namespace Imageboard\Tests\Functional\Controller\Admin;

use GuzzleHttp\Psr7\ServerRequest;
use Imageboard\Command\CommandDispatcher;
use Imageboard\Controller\Admin\SystemController;
use Imageboard\Exception\AccessDeniedException;
use Imageboard\Model\User;
use Imageboard\Query\QueryDispatcher;
use Imageboard\Service\{ConfigService, RendererService};
use PHPUnit\Framework\TestCase;

final class SystemControllerTest extends TestCase
{
  /** @var SystemController */
  protected $controller;

  function setUp() : void
  {
    global $container;

    User::truncate();

    $config = new ConfigService();
    $command_dispatcher = new CommandDispatcher($container);
    $query_dispatcher = new QueryDispatcher($container);
    $renderer = new RendererService($config);
    $this->controller = new SystemController($config, $command_dispatcher, $query_dispatcher, $renderer);
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
