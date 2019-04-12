<?php

namespace Imageboard\Tests\Functional\Controller\Admin;

use GuzzleHttp\Psr7\ServerRequest;
use Imageboard\Command\CommandDispatcher;
use Imageboard\Controller\Admin\BanController;
use Imageboard\Exception\{AccessDeniedException, NotFoundException};
use Imageboard\Model\{Ban, CurrentUserInterface, User};
use Imageboard\Query\QueryDispatcher;
use Imageboard\Service\ConfigService;
use Imageboard\Service\RendererService;
use PHPUnit\Framework\TestCase;

final class BanControllerTest extends TestCase
{
  /** @var BanControllerInterface */
  protected $controller;

  function setUp(): void
  {
    global $container;

    Ban::truncate();
    User::truncate();

    $command_dispatcher = new CommandDispatcher($container);
    $query_dispatcher = new QueryDispatcher($container);
    $config = new ConfigService();
    $renderer = new RendererService($config);


    $this->controller = new BanController(
      $command_dispatcher,
      $query_dispatcher,
      $renderer,
      $config
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

  protected function createBan(): Ban
  {
    return Ban::createBan('123.0.0.1', 60 * 60, 'Test');
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
    $request = (new ServerRequest('GET', '/admin/bans'))
      ->withAttribute('user', $user);

    $this->expectException(AccessDeniedException::class);

    $this->controller->list($request);
  }

  function test_list_asAdmin_shouldReturnContent(): void
  {
    $user = $this->createAdmin();
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
    $request = (new ServerRequest('GET', '/admin/bans/create'))
      ->withAttribute('user', $user);

    $this->expectException(AccessDeniedException::class);

    $this->controller->createForm($request);
  }

  function test_createForm_asAdmin_shouldReturnContent(): void
  {
    $user = $this->createAdmin();
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
    $data = [
      'ip' => '123.0.0.1',
      'expires_in' => 60 * 60,
      'reason' => 'Test',
    ];
    $request = (new ServerRequest('POST', '/admin/bans/create'))
      ->withAttribute('user', $user)
      ->withParsedBody($data);

    $response = $this->controller->create($request);

    $item = Ban::where('ip', $data['ip'])->first();
    $this->assertNotNull($item);

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
    $request = (new ServerRequest('POST', "/admin/bans/{$item->id}/delete"))
      ->withAttribute('user', $user);

    $this->expectException(AccessDeniedException::class);

    $this->controller->delete($request, ['id' => $item->id]);
  }

  function test_delete_asAdmin_shouldDeleteAndReturnRedirect(): void
  {
    $item = $this->createBan();
    $user = $this->createAdmin();
    $request = (new ServerRequest('POST', "/admin/bans/{$item->id}/delete"))
      ->withAttribute('user', $user);

    $response = $this->controller->delete($request, ['id' => $item->id]);

    $item = Ban::find($item->id);
    $this->assertNull($item);

    $status = $response->getStatusCode();
    $this->assertEquals(302, $status);
  }

  function test_delete_whenNotFound_shouldThrow(): void
  {
    $item_id = 1;
    $user = $this->createAdmin();
    $request = (new ServerRequest('POST', "/admin/bans/$item_id/delete"))
      ->withAttribute('user', $user);

    $this->expectException(NotFoundException::class);

    $this->controller->delete($request, ['id' => $item_id]);
  }
}
