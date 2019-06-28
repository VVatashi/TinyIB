<?php

namespace Imageboard\Tests\Functional\Controller\Admin;

use GuzzleHttp\Psr7\ServerRequest;
use Imageboard\Controller\Admin\ModLogController;
use Imageboard\Exception\AccessDeniedException;
use Imageboard\Service\{ConfigService, RendererService};
use Imageboard\Tests\Functional\TestWithUsers;

final class ModLogControllerTest extends TestWithUsers
{
  /** @var ModLogController */
  protected $controller;

  function setUp() : void
  {
    parent::setUp();

    global $database;

    $connection = $database->getConnection();
    $builder = $connection->createQueryBuilder();
    $builder->delete('mod_log')->execute();
    $builder->delete('users')->execute();

    $config = new ConfigService();
    $renderer = new RendererService($config);

    $this->controller = new ModLogController(
      $config,
      $this->modlog_repository,
      $this->user_service,
      $renderer
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
    $_SESSION['user'] = $user->id;
    $request = (new ServerRequest('GET', '/admin/modlog'))
      ->withAttribute('user', $user);

    $this->expectException(AccessDeniedException::class);

    $this->controller->list($request);
  }

  function test_list_asAdmin_shouldReturnContent() : void
  {
    $user = $this->createAdmin();
    $_SESSION['user'] = $user->id;
    $request = (new ServerRequest('GET', '/admin/modlog'))
      ->withAttribute('user', $user);

    $content = $this->controller->list($request);

    $this->assertIsString($content);
    $this->assertNotEmpty($content);
  }
}
