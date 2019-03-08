<?php

namespace Imageboard\Tests\Functional\Controller\Admin;

use GuzzleHttp\Psr7\ServerRequest;
use Imageboard\Command\CommandDispatcher;
use Imageboard\Controller\Admin\PostController;
use Imageboard\Exception\{AccessDeniedException, NotFoundException};
use Imageboard\Model\{Post, User};
use Imageboard\Query\QueryDispatcher;
use Imageboard\Service\RendererService;
use PHPUnit\Framework\TestCase;

final class PostControllerTest extends TestCase
{
  /** @var PostControllerInterface */
  protected $controller;

  function setUp(): void
  {
    global $container;

    Post::truncate();
    User::truncate();

    $command_dispatcher = new CommandDispatcher($container);
    $query_dispatcher = new QueryDispatcher($container);
    $renderer = new RendererService();
    $this->controller = new PostController(
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

  protected function createPost(): Post {
    return Post::create([
      'ip' => '',
      'name' => '',
      'tripcode' => '',
      'email' => '',
      'subject' => '',
      'message' => '',
      'password' => '',
    ]);
  }

  function test_list_asAnonymous_shouldThrow(): void
  {
    $user = User::anonymous();
    $request = (new ServerRequest('GET', '/admin/posts'))
      ->withAttribute('user', $user);

    $this->expectException(AccessDeniedException::class);

    $this->controller->list($request);
  }

  function test_list_asUser_shouldThrow(): void
  {
    $user = $this->createUser();
    $request = (new ServerRequest('GET', '/admin/posts'))
      ->withAttribute('user', $user);

    $this->expectException(AccessDeniedException::class);

    $this->controller->list($request);
  }

  function test_list_asAdmin_shouldReturnContent(): void
  {
    $user = $this->createAdmin();
    $request = (new ServerRequest('GET', '/admin/posts'))
      ->withAttribute('user', $user);

    $content = $this->controller->list($request);

    $this->assertIsString($content);
    $this->assertNotEmpty($content);
  }

  function test_show_asAnonymous_shouldThrow(): void
  {
    $item = $this->createPost();
    $user = User::anonymous();
    $request = (new ServerRequest('GET', "/admin/posts/{$item->id}"))
      ->withAttribute('user', $user);

    $this->expectException(AccessDeniedException::class);

    $this->controller->show($request, ['id' => $item->id]);
  }

  function test_show_asUser_shouldThrow(): void
  {
    $item = $this->createPost();
    $user = $this->createUser();
    $request = (new ServerRequest('GET', "/admin/posts/{$item->id}"))
      ->withAttribute('user', $user);

    $this->expectException(AccessDeniedException::class);

    $this->controller->show($request, ['id' => $item->id]);
  }

  function test_show_asAdmin_shouldReturnContent(): void
  {
    $item = $this->createPost();
    $user = $this->createAdmin();
    $request = (new ServerRequest('GET', "/admin/posts/{$item->id}"))
      ->withAttribute('user', $user);

    $content = $this->controller->show($request, ['id' => $item->id]);

    $this->assertIsString($content);
    $this->assertNotEmpty($content);
  }

  function test_show_whenNotFound_shouldThrow(): void
  {
    $item_id = 1;
    $user = $this->createAdmin();
    $request = (new ServerRequest('GET', "/admin/posts/$item_id"))
      ->withAttribute('user', $user);

    $this->expectException(NotFoundException::class);

    $this->controller->show($request, ['id' => $item_id]);
  }

  function test_delete_asAnonymous_shouldThrow(): void
  {
    $item = $this->createPost();
    $user = User::anonymous();
    $request = (new ServerRequest('POST', "/admin/posts/{$item->id}/delete"))
      ->withAttribute('user', $user);

    $this->expectException(AccessDeniedException::class);

    $this->controller->delete($request, ['id' => $item->id]);
  }

  function test_delete_asUser_shouldThrow(): void
  {
    $item = $this->createPost();
    $user = $this->createUser();
    $request = (new ServerRequest('POST', "/admin/posts/{$item->id}/delete"))
      ->withAttribute('user', $user);

    $this->expectException(AccessDeniedException::class);

    $this->controller->delete($request, ['id' => $item->id]);
  }

  function test_delete_asAdmin_shouldDeleteAndReturnRedirect(): void
  {
    $item = $this->createPost();
    $user = $this->createAdmin();
    $request = (new ServerRequest('POST', "/admin/posts/{$item->id}/delete"))
      ->withAttribute('user', $user);

    $response = $this->controller->delete($request, ['id' => $item->id]);

    $item = Post::find($item->id);
    $this->assertNull($item);

    $status = $response->getStatusCode();
    $this->assertEquals(302, $status);
  }

  function test_delete_whenNotFound_shouldThrow(): void
  {
    $item_id = 1;
    $user = $this->createAdmin();
    $request = (new ServerRequest('POST', "/admin/posts/$item_id/delete"))
      ->withAttribute('user', $user);

    $this->expectException(NotFoundException::class);

    $this->controller->delete($request, ['id' => $item_id]);
  }
}
