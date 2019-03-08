<?php

namespace Imageboard\Tests\Functional\Controller\Admin;

use GuzzleHttp\Psr7\ServerRequest;
use Imageboard\Command\CommandDispatcher;
use Imageboard\Controller\Admin\{
  ModLogControllerInterface,
  ModLogController
};
use Imageboard\Exception\AccessDeniedException;
use Imageboard\Model\{ModLog, User};
use Imageboard\Service\RendererService;
use Imageboard\Query\QueryDispatcher;
use PHPUnit\Framework\TestCase;

final class ModLogControllerTest extends TestCase
{
  /** @var ModLogControllerInterface */
  protected $controller;

  function setUp() : void
  {
    global $container;

    ModLog::truncate();
    User::truncate();

    $command_dispatcher = new CommandDispatcher($container);
    $query_dispatcher = new QueryDispatcher($container);
    $renderer = new RendererService();
    $this->controller = new ModLogController(
      $command_dispatcher,
      $query_dispatcher,
      $renderer
    );
  }

  protected function createUser(): User {
    return User::createUser('user@example.com', 'user@example.com', User::ROLE_USER);
  }

  protected function createAdmin(): User {
    return User::createUser('admin@example.com', 'admin@example.com', User::ROLE_ADMINISTRATOR);
  }

  function test_list_asAnonнmous_shouldThrow() : void
  {
    $user = User::anonymous();
    $request = (new ServerRequest('GET', '/admin/modlog'))
      ->withAttribute('user', $user);

    $this->expectException(AccessDeniedException::class);

    $this->controller->list($request);
  }

  function test_list_asUser_shouldThrow() : void
  {
    $user = $this->createUser();
    $request = (new ServerRequest('GET', '/admin/modlog'))
      ->withAttribute('user', $user);

    $this->expectException(AccessDeniedException::class);

    $this->controller->list($request);
  }

  function test_list_asAdmin_shouldReturnContent() : void
  {
    $user = $this->createAdmin();
    $request = (new ServerRequest('GET', '/admin/modlog'))
      ->withAttribute('user', $user);

    $content = $this->controller->list($request);

    $this->assertIsString($content);
    $this->assertNotEmpty($content);
  }
}
