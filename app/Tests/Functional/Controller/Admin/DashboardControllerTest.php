<?php

namespace Imageboard\Tests\Functional\Controller\Admin;

use GuzzleHttp\Psr7\ServerRequest;
use Imageboard\Command\CommandDispatcher;
use Imageboard\Controller\Admin\DashboardController;
use Imageboard\Exception\AccessDeniedException;
use Imageboard\Query\QueryDispatcher;
use Imageboard\Service\{ConfigService, RendererService};
use Imageboard\Tests\Functional\TestWithUsers;

final class DashboardControllerTest extends TestWithUsers
{
  /** @var DashboardController */
  protected $controller;

  function setUp() : void
  {
    parent::setUp();

    global $container, $database;

    $connection = $database->getConnection();
    $builder = $connection->createQueryBuilder();
    $builder->delete('users')->execute();

    $config = new ConfigService();
    $command_dispatcher = new CommandDispatcher($container);
    $query_dispatcher = new QueryDispatcher($container);

    $renderer = new RendererService($config);

    $this->controller = new DashboardController($config, $command_dispatcher, $query_dispatcher, $renderer);
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
