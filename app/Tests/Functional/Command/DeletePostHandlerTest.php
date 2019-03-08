<?php

namespace Imageboard\Tests\Unit\Command;

use Imageboard\Command\{DeletePost, DeletePostHandler};
use Imageboard\Exception\NotFoundException;
use Imageboard\Model\Post;
use PHPUnit\Framework\TestCase;

final class DeletePostHandlerTest extends TestCase
{
  /** @var DeletePostHandler */
  protected $handler;

  function setUp(): void
  {
    Post::truncate();

    $this->handler = new DeletePostHandler();
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
