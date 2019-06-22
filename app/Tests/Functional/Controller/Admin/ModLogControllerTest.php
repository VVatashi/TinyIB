<?php

namespace Imageboard\Tests\Functional\Controller\Admin;

use GuzzleHttp\Psr7\ServerRequest;
use Imageboard\Command\CommandDispatcher;
use Imageboard\Controller\Admin\ModLogController;
use Imageboard\Exception\AccessDeniedException;
use Imageboard\Query\QueryDispatcher;
use Imageboard\Service\{ConfigService, RendererService};
use Imageboard\Tests\Functional\TestWithUsers;

final class ModLogControllerTest extends TestWithUsers
{
  /** @var ModLogController */
  protected $controller;

  function setUp() : void
  {
    parent::setUp();

    global $container, $database;

    $connection = $database->getConnection();
    $builder = $connection->createQueryBuilder();
    $builder->delete('mod_log')->execute();
    $builder->delete('users')->execute();

    $config = new ConfigService();
    $command_dispatcher = new CommandDispatcher($container);
    $query_dispatcher = new QueryDispatcher($container);

    $renderer = new RendererService($config);

    $this->controller = new ModLogController(
      $config,
      $command_dispatcher,
      $query_dispatcher,
      $renderer,
      $this->modlog_repository
    );
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
