<?php

namespace Imageboard\Tests\Functional\Controller\Admin;

use GuzzleHttp\Psr7\ServerRequest;
use Imageboard\Cache\NoCache;
use Imageboard\Command\CommandDispatcher;
use Imageboard\Controller\Admin\SystemController;
use Imageboard\Exception\AccessDeniedException;
use Imageboard\Query\QueryDispatcher;
use Imageboard\Service\{ConfigService, SystemService, RendererService};
use Imageboard\Tests\Functional\TestWithUsers;

final class SystemControllerTest extends TestWithUsers
{
  /** @var SystemController */
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

    $cache = new NoCache();
    $service = new SystemService($cache, $config);

    $renderer = new RendererService($config);

    $this->controller = new SystemController(
      $config,
      $command_dispatcher,
      $query_dispatcher,
      $service,
      $renderer
    );
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
