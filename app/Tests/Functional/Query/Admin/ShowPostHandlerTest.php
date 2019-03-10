<?php

namespace Imageboard\Tests\Functional\Query\Admin;

use Imageboard\Model\Post;
use Imageboard\Exception\NotFoundException;
use Imageboard\Query\Admin\{ShowPost, ShowPostHandler};
use PHPUnit\Framework\TestCase;

final class ShowPostHandlerTest extends TestCase
{
  /** @var ShowPostHandler */
  protected $handler;

  function setUp(): void
  {
    global $container;

    Post::truncate();

    $pdo = $container->get(\PDO::class);
    $this->handler = new ShowPostHandler($pdo);
  }

  function test_handle_whenNotFound_shouldThrow(): void
  {
    $item_id = 1;
    $command = new ShowPost($item_id);

    $this->expectException(NotFoundException::class);

    $this->handler->handle($command);
  }

  function test_handle_whenFound_shouldReturnItem(): void
  {
    $item = Post::create([
      'ip' => '',
      'name' => '',
      'tripcode' => '',
      'email' => '',
      'subject' => '',
      'message' => '',
      'password' => '',
    ]);
    $command = new ShowPost($item->id);

    $data = $this->handler->handle($command);

    $this->assertIsArray($data);
  }
}
