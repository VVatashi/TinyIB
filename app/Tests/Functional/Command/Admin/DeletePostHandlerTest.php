<?php

namespace Imageboard\Tests\Unit\Command\Admin;

use Imageboard\Command\Admin\{DeletePost, DeletePostHandler};
use Imageboard\Exception\NotFoundException;
use Imageboard\Model\{Post, User};
use Imageboard\Repositories\ModLogRepository;
use Imageboard\Service\ModLogService;
use PHPUnit\Framework\TestCase;

final class DeletePostHandlerTest extends TestCase
{
  /** @var DeletePostHandler */
  protected $handler;

  function setUp(): void
  {
    global $database;

    Post::truncate();
    User::truncate();

    $user = User::createUser('admin@example.com', 'admin@example.com', User::ROLE_ADMINISTRATOR);
    $modlog_repository = new ModLogRepository($database);
    $modlog_service = new ModLogService($modlog_repository);
    $this->handler = new DeletePostHandler($modlog_service, $user);
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
