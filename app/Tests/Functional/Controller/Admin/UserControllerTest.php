<?php

namespace Imageboard\Tests\Functional\Controller\Admin;

use GuzzleHttp\Psr7\ServerRequest;
use Imageboard\Controller\Admin\UserController;
use Imageboard\Exception\{AccessDeniedException, NotFoundException};
use Imageboard\Model\User;
use Imageboard\Service\{ConfigService, RendererService, UserService};
use Imageboard\Tests\Functional\TestWithUsers;

final class UserControllerTest extends TestWithUsers
{
  /** @var UserController */
  protected $controller;

  function setUp(): void
  {
    parent::setUp();

    global $database;

    $connection = $database->getConnection();
    $builder = $connection->createQueryBuilder();
    $builder->delete('users')->execute();

    $config = new ConfigService();
    $renderer = new RendererService($config);

    $this->controller = new UserController(
      $config,
      $this->user_repository,
      $this->user_service,
      $this->session,
      $renderer
    );
  }

  protected function createItem(): User {
    return $this->user_service->create(
      'test@example.com',
      'test@example.com',
      User::ROLE_USER
    );
  }

  function test_list_asAnonymous_shouldThrow(): void
  {
    $user = $this->createAnonymous();
    $request = (new ServerRequest('GET', '/admin/users'))
      ->withAttribute('user', $user);

    $this->expectException(AccessDeniedException::class);

    $this->controller->list($request);
  }

  function test_list_asUser_shouldThrow(): void
  {
    $user = $this->createUser();
    $request = (new ServerRequest('GET', '/admin/users'))
      ->withAttribute('user', $user);

    $this->expectException(AccessDeniedException::class);

    $this->controller->list($request);
  }

  function test_list_asAdmin_shouldReturnContent(): void
  {
    $user = $this->createAdmin();
    $request = (new ServerRequest('GET', '/admin/users'))
      ->withAttribute('user', $user);

    $content = $this->controller->list($request);

    $this->assertIsString($content);
    $this->assertNotEmpty($content);
  }

  function test_createForm_asAnonymous_shouldThrow(): void
  {
    $user = $this->createAnonymous();
    $request = (new ServerRequest('GET', '/admin/users/create'))
      ->withAttribute('user', $user);

    $this->expectException(AccessDeniedException::class);

    $this->controller->createForm($request);
  }

  function test_createForm_asUser_shouldThrow(): void
  {
    $user = $this->createUser();
    $request = (new ServerRequest('GET', '/admin/users/create'))
      ->withAttribute('user', $user);

    $this->expectException(AccessDeniedException::class);

    $this->controller->createForm($request);
  }

  function test_createForm_asAdmin_shouldReturnContent(): void
  {
    $user = $this->createAdmin();
    $request = (new ServerRequest('GET', '/admin/users/create'))
      ->withAttribute('user', $user);

    $content = $this->controller->createForm($request);

    $this->assertIsString($content);
    $this->assertNotEmpty($content);
  }

  function test_create_asAnonymous_shouldThrow(): void
  {
    $user = $this->createAnonymous();
    $data = [
      'email' => 'test@example.com',
      'password' => 'test@example.com',
      'role' => User::ROLE_USER,
    ];
    $request = (new ServerRequest('POST', '/admin/users/create'))
      ->withAttribute('user', $user)
      ->withParsedBody($data);

    $this->expectException(AccessDeniedException::class);

    $this->controller->create($request);
  }

  function test_create_asUser_shouldThrow(): void
  {
    $user = $this->createUser();
    $data = [
      'email' => 'test@example.com',
      'password' => 'test@example.com',
      'role' => User::ROLE_USER,
    ];
    $request = (new ServerRequest('POST', '/admin/users/create'))
      ->withAttribute('user', $user)
      ->withParsedBody($data);

    $this->expectException(AccessDeniedException::class);

    $this->controller->create($request);
  }

  function test_create_asAdmin_shouldCreateAndReturnRedirect(): void
  {
    $user = $this->createAdmin();
    $data = [
      'email' => 'test@example.com',
      'password' => 'test@example.com',
      'role' => User::ROLE_USER,
    ];
    $request = (new ServerRequest('POST', '/admin/users/create'))
      ->withAttribute('user', $user)
      ->withParsedBody($data);

    $response = $this->controller->create($request);

    $status = $response->getStatusCode();
    $this->assertEquals(302, $status);
  }

  function test_editForm_asAnonymous_shouldThrow(): void
  {
    $item = $this->createItem();
    $user = $this->createAnonymous();
    $request = (new ServerRequest('GET', "/admin/users/{$item->id}"))
      ->withAttribute('user', $user);

    $this->expectException(AccessDeniedException::class);

    $this->controller->editForm($request, ['id' => $item->id]);
  }

  function test_editForm_asUser_shouldThrow(): void
  {
    $item = $this->createItem();
    $user = $this->createUser();
    $request = (new ServerRequest('GET', "/admin/users/{$item->id}"))
      ->withAttribute('user', $user);

    $this->expectException(AccessDeniedException::class);

    $this->controller->editForm($request, ['id' => $item->id]);
  }

  function test_editForm_asAdmin_shouldReturnContent(): void
  {
    $item = $this->createItem();
    $user = $this->createAdmin();
    $request = (new ServerRequest('GET', "/admin/users/{$item->id}"))
      ->withAttribute('user', $user);

    $content = $this->controller->editForm($request, ['id' => $item->id]);

    $this->assertIsString($content);
    $this->assertNotEmpty($content);
  }

  function test_edit_asAnonymous_shouldThrow(): void
  {
    $item = $this->createItem();
    $user = $this->createAnonymous();
    $data = [
      'id' => $item->id,
      'email' => 'new@example.com',
      'password' => '123456',
      'role' => User::ROLE_USER,
    ];
    $request = (new ServerRequest('POST', "/admin/users/{$item->id}/edit"))
      ->withAttribute('user', $user)
      ->withParsedBody($data);

    $this->expectException(AccessDeniedException::class);

    $this->controller->edit($request, ['id' => $item->id]);
  }

  function test_edit_asUser_shouldThrow(): void
  {
    $item = $this->createItem();
    $user = $this->createUser();
    $data = [
      'id' => $item->id,
      'email' => 'new@example.com',
      'password' => '123456',
      'role' => User::ROLE_USER,
    ];
    $request = (new ServerRequest('POST', "/admin/users/{$item->id}/edit"))
      ->withAttribute('user', $user)
      ->withParsedBody($data);

    $this->expectException(AccessDeniedException::class);

    $this->controller->edit($request, ['id' => $item->id]);
  }

  function test_edit_asAdmin_shouldUpdateAndReturnRedirect(): void
  {
    $item = $this->createItem();
    $user = $this->createAdmin();
    $data = [
      'id' => $item->id,
      'email' => 'new@example.com',
      'password' => 'new@example.com',
      'role' => User::ROLE_USER,
    ];
    $request = (new ServerRequest('POST', "/admin/users/{$item->id}/edit"))
      ->withAttribute('user', $user)
      ->withParsedBody($data);

    $response = $this->controller->edit($request, ['id' => $item->id]);

    $status = $response->getStatusCode();
    $this->assertEquals(302, $status);
  }

  function test_delete_asAnonymous_shouldThrow(): void
  {
    $item = $this->createItem();
    $user = $this->createAnonymous();
    $request = (new ServerRequest('POST', "/admin/users/{$item->id}/delete"))
      ->withAttribute('user', $user);

    $this->expectException(AccessDeniedException::class);

    $this->controller->delete($request, ['id' => $item->id]);
  }

  function test_delete_asUser_shouldThrow(): void
  {
    $item = $this->createItem();
    $user = $this->createUser();
    $request = (new ServerRequest('POST', "/admin/users/{$item->id}/delete"))
      ->withAttribute('user', $user);

    $this->expectException(AccessDeniedException::class);

    $this->controller->delete($request, ['id' => $item->id]);
  }

  function test_delete_asAdmin_shouldDeleteAndReturnRedirect(): void
  {
    $item = $this->createItem();
    $user = $this->createAdmin();
    $request = (new ServerRequest('POST', "/admin/users/{$item->id}/delete"))
      ->withAttribute('user', $user);

    $response = $this->controller->delete($request, ['id' => $item->id]);

    $status = $response->getStatusCode();
    $this->assertEquals(302, $status);
  }

  function test_delete_whenNotFound_shouldThrow(): void
  {
    $item_id = 1000;
    $user = $this->createAdmin();
    $request = (new ServerRequest('POST', "/admin/users/$item_id/delete"))
      ->withAttribute('user', $user);

    $this->expectException(NotFoundException::class);

    $this->controller->delete($request, ['id' => $item_id]);
  }
}
