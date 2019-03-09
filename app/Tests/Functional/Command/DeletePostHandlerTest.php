<?php

namespace Imageboard\Tests\Unit\Command;

use Imageboard\Command\{DeletePost, DeletePostHandler};
use Imageboard\Exception\NotFoundException;
use Imageboard\Model\{Post, User};
use PHPUnit\Framework\TestCase;

final class DeletePostHandlerTest extends TestCase
{
  /** @var DeletePostHandler */
  protected $handler;

  function setUp(): void
  {
    Post::truncate();
    User::truncate();

    $user = User::createUser('admin@example.com', 'admin@example.com', User::ROLE_ADMINISTRATOR);
    $this->handler = new DeletePostHandler($user);
  }

  protected function createItem(): Post {
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

  function test_handle_whenNotFound_shouldThrow(): void
  {
    $item_id = 1;
    $command = new DeletePost($item_id);

    $this->expectException(NotFoundException::class);

    $this->handler->handle($command);
  }

  function test_handle_whenFound_shouldDelete(): void
  {
    $item = $this->createItem();
    $command = new DeletePost($item->id);

    $this->handler->handle($command);

    $item = Post::find($item->id);
    $this->assertNull($item);
  }
}
