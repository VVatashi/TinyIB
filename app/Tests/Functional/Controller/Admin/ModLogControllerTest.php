<?php

namespace Imageboard\Tests\Functional\Controller\Admin;

use GuzzleHttp\Psr7\ServerRequest;
use Imageboard\Command\CommandDispatcher;
use Imageboard\Controller\Admin\ModLogController;
use Imageboard\Exception\AccessDeniedException;
use Imageboard\Model\User;
use Imageboard\Query\QueryDispatcher;
use Imageboard\Repositories\ModLogRepository;
use Imageboard\Service\{ConfigService, RendererService};
use PHPUnit\Framework\TestCase;

final class ModLogControllerTest extends TestCase
{
  /** @var ModLogController */
  protected $controller;

  function setUp() : void
  {
    global $container, $database;

    $connection = $database->getConnection();
    $builder = $connection->createQueryBuilder();
    $builder->delete('mod_log');

    User::truncate();

    $config = new ConfigService();
    $command_dispatcher = new CommandDispatcher($container);
    $query_dispatcher = new QueryDispatcher($container);
    $modlog_repository = new ModLogRepository($database);

    $renderer = new RendererService($config);
    $this->controller = new ModLogController(
      $config,
      $command_dispatcher,
      $query_dispatcher,
      $renderer,
      $modlog_repository
    );
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

  function test_list_asAnonymous_shouldThrow() : void
  {
    $user = $this->createAnonymous();
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
