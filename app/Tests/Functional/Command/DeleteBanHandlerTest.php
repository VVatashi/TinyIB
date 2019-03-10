<?php

namespace Imageboard\Tests\Functional\Command;

use Imageboard\Command\Admin\{DeleteBan, DeleteBanHandler};
use Imageboard\Exception\NotFoundException;
use Imageboard\Model\{Ban, User};
use PHPUnit\Framework\TestCase;

final class DeleteBanHandlerTest extends TestCase
{
  /** @var DeleteBanHandler */
  protected $handler;

  function setUp(): void
  {
    Ban::truncate();
    User::truncate();

    $user = User::createUser('admin@example.com', 'admin@example.com', User::ROLE_ADMINISTRATOR);
    $this->handler = new DeleteBanHandler($user);
  }

  protected function createItem(): Ban {
    return Ban::createBan('123.0.0.1', 60 * 60, 'Test');
  }

  function test_handle_whenNotFound_shouldThrow(): void
  {
    $item_id = 1;
    $command = new DeleteBan($item_id);

    $this->expectException(NotFoundException::class);

    $this->handler->handle($command);
  }

  function test_handle_whenFound_shouldDelete(): void
  {
    $item = $this->createItem();
    $command = new DeleteBan($item->id);

    $this->handler->handle($command);

    $item = Ban::find($item->id);
    $this->assertNull($item);
  }
}
