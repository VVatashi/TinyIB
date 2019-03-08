<?php

namespace Imageboard\Tests\Functional\Controller\Admin;

use GuzzleHttp\Psr7\ServerRequest;
use Imageboard\Controller\Admin\{
  DashboardControllerInterface,
  DashboardController
};
use Imageboard\Exception\AccessDeniedException;
use Imageboard\Model\User;
use Imageboard\Service\RendererService;
use PHPUnit\Framework\TestCase;

final class DashboardControllerTest extends TestCase
{
  /** @var DashboardControllerInterface */
  protected $controller;

  function setUp() : void
  {
    User::truncate();

    $renderer = new RendererService();
    $this->controller = new DashboardController($renderer);
  }

  protected function createUser(): User {
    return User::createUser('user@example.com', 'user@example.com', User::ROLE_USER);
  }

  protected function createAdmin(): User {
    return User::createUser('admin@example.com', 'admin@example.com', User::ROLE_ADMINISTRATOR);
  }

  function test_index_asAnonymous_shouldThrow() : void
  {
    $user = User::anonymous();
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
