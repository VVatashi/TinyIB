<?php

namespace Imageboard\Tests\Functional\Controller\Admin;

use GuzzleHttp\Psr7\ServerRequest;
use Imageboard\Controller\Admin\BanController;
use Imageboard\Exception\{AccessDeniedException, NotFoundException};
use Imageboard\Model\Ban;
use Imageboard\Repositories\{BanRepository};
use Imageboard\Service\{
  ConfigService,
  BanService,
  RendererService
};
use Imageboard\Tests\Functional\TestWithUsers;

final class BanControllerTest extends TestWithUsers
{
  /** @var BanController */
  protected $controller;

  /** @var BanService */
  protected $service;

  function setUp(): void
  {
    parent::setUp();

    global $database;

    $connection = $database->getConnection();
    $builder = $connection->createQueryBuilder();
    $builder->delete('users')->execute();

    $config = new ConfigService();
    $bans = $config->get('DBBANS', 'bans');
    $builder->delete($bans)->execute();

    $repository = new BanRepository($config, $database);
    $this->service = new BanService(
      $repository,
      $this->modlog_service,
      $this->user_service
    );

    $renderer = new RendererService($config);

    $this->controller = new BanController(
      $config,
      $repository,
      $this->service,
      $this->user_service,
      $renderer
    );
  }

  protected function createBan(): Ban
  {
    return $this->service->create('123.0.0.1', 60 * 60, 'Test');
  }

  function test_list_asAnonymous_shouldThrow(): void
  {
    $user = $this->createAnonymous();
    $request = (new ServerRequest('GET', '/admin/bans'))
      ->withAttribute('user', $user);

    $this->expectException(AccessDeniedException::class);

    $this->controller->list($request);
  }

  function test_list_asUser_shouldThrow(): void
  {
    $user = $this->createUser();
    $_SESSION['user'] = $user->id;
    $request = (new ServerRequest('GET', '/admin/bans'))
      ->withAttribute('user', $user);

    $this->expectException(AccessDeniedException::class);

    $this->controller->list($request);
  }

  function test_list_asAdmin_shouldReturnContent(): void
  {
    $user = $this->createAdmin();
    $_SESSION['user'] = $user->id;
    $request = (new ServerRequest('GET', '/admin/bans'))
      ->withAttribute('user', $user);

    $content = $this->controller->list($request);

    $this->assertIsString($content);
    $this->assertNotEmpty($content);
  }

  function test_createForm_asAnonymous_shouldThrow(): void
  {
    $user = $this->createAnonymous();
    $request = (new ServerRequest('GET', '/admin/bans/create'))
      ->withAttribute('user', $user);

    $this->expectException(AccessDeniedException::class);

    $this->controller->createForm($request);
  }

  function test_createForm_asUser_shouldThrow(): void
  {
    $user = $this->createUser();
    $_SESSION['user'] = $user->id;
    $request = (new ServerRequest('GET', '/admin/bans/create'))
      ->withAttribute('user', $user);

    $this->expectException(AccessDeniedException::class);

    $this->controller->createForm($request);
  }

  function test_createForm_asAdmin_shouldReturnContent(): void
  {
    $user = $this->createAdmin();
    $_SESSION['user'] = $user->id;
    $request = (new ServerRequest('GET', '/admin/bans/create'))
      ->withAttribute('user', $user);

    $content = $this->controller->createForm($request);

    $this->assertIsString($content);
    $this->assertNotEmpty($content);
  }

  function test_create_asAnonymous_shouldThrow(): void
  {
    $user = $this->createAnonymous();
    $data = [
      'ip' => '123.0.0.1',
      'expires_in' => 60 * 60,
      'reason' => 'Test',
    ];
    $request = (new ServerRequest('POST', '/admin/bans/create'))
      ->withAttribute('user', $user)
      ->withParsedBody($data);

    $this->expectException(AccessDeniedException::class);

    $this->controller->create($request);
  }

  function test_create_asUser_shouldThrow(): void
  {
    $user = $this->createUser();
    $_SESSION['user'] = $user->id;
    $data = [
      'ip' => '123.0.0.1',
      'expires_in' => 60 * 60,
      'reason' => 'Test',
    ];
    $request = (new ServerRequest('POST', '/admin/bans/create'))
      ->withAttribute('user', $user)
      ->withParsedBody($data);

    $this->expectException(AccessDeniedException::class);

    $this->controller->create($request);
  }

  function test_create_asAdmin_shouldCreateAndReturnRedirect(): void
  {
    $user = $this->createAdmin();
    $_SESSION['user'] = $user->id;
    $data = [
      'ip' => '123.0.0.1',
      'expires_in' => 60 * 60,
      'reason' => 'Test',
    ];
    $request = (new ServerRequest('POST', '/admin/bans/create'))
      ->withAttribute('user', $user)
      ->withParsedBody($data);

    $response = $this->controller->create($request);

    $status = $response->getStatusCode();
    $this->assertEquals(302, $status);
  }

  function test_delete_asAnonymous_shouldThrow(): void
  {
    $item = $this->createBan();
    $user = $this->createAnonymous();
    $request = (new ServerRequest('POST', "/admin/bans/{$item->id}/delete"))
      ->withAttribute('user', $user);

    $this->expectException(AccessDeniedException::class);

    $this->controller->delete($request, ['id' => $item->id]);
  }

  function test_delete_asUser_shouldThrow(): void
  {
    $item = $this->createBan();
    $user = $this->createUser();
    $_SESSION['user'] = $user->id;
    $request = (new ServerRequest('POST', "/admin/bans/{$item->id}/delete"))
      ->withAttribute('user', $user);

    $this->expectException(AccessDeniedException::class);

    $this->controller->delete($request, ['id' => $item->id]);
  }

  function test_delete_asAdmin_shouldDeleteAndReturnRedirect(): void
  {
    $item = $this->createBan();
    $user = $this->createAdmin();
    $_SESSION['user'] = $user->id;
    $request = (new ServerRequest('POST', "/admin/bans/{$item->id}/delete"))
      ->withAttribute('user', $user);

    $response = $this->controller->delete($request, ['id' => $item->id]);

    $status = $response->getStatusCode();
    $this->assertEquals(302, $status);
  }

  function test_delete_whenNotFound_shouldThrow(): void
  {
    $item_id = 1;
    $user = $this->createAdmin();
    $_SESSION['user'] = $user->id;
    $request = (new ServerRequest('POST', "/admin/bans/$item_id/delete"))
      ->withAttribute('user', $user);

    $this->expectException(NotFoundException::class);

    $this->controller->delete($request, ['id' => $item_id]);
  }
}
