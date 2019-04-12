<?php

namespace Imageboard\Tests\Functional\Controller\Admin;

use GuzzleHttp\Psr7\ServerRequest;
use Imageboard\Controller\Admin\{
  DashboardControllerInterface,
  DashboardController
};
use Imageboard\Exception\AccessDeniedException;
use Imageboard\Model\User;
use Imageboard\Service\ConfigService;
use Imageboard\Service\RendererService;
use PHPUnit\Framework\TestCase;

final class DashboardControllerTest extends TestCase
{
  /** @var DashboardControllerInterface */
  protected $controller;

  function setUp() : void
  {
    User::truncate();

    $config = new ConfigService();
    $renderer = new RendererService($config);
    $this->controller = new DashboardController($renderer);
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
    $request = (new ServerRequest('GET', '/admin'))
      ->withAttribute('user', $user);

    $this->expectException(AccessDeniedException::class);

    $this->controller->index($request);
  }

  function test_index_asUser_shouldThrow() : void
  {
    $user = $this->createUser();
    $request = (new ServerRequest('GET', '/admin'))
      ->withAttribute('user', $user);

    $this->expectException(AccessDeniedException::class);

    $this->controller->index($request);
  }

  function test_index_asAdmin_shouldReturnContent() : void
  {
    $user = $this->createAdmin();
    $request = (new ServerRequest('GET', '/admin'))
      ->withAttribute('user', $user);

    $content = $this->controller->index($request);

    $this->assertIsString($content);
    $this->assertNotEmpty($content);
  }
}
