<?php

namespace Imageboard\Tests\Unit\Command;

use Imageboard\Command\{DeleteUser, DeleteUserHandler};
use Imageboard\Exception\NotFoundException;
use Imageboard\Model\User;
use PHPUnit\Framework\TestCase;

final class DeleteUserHandlerTest extends TestCase
{
  /** @var DeleteUserHandler */
  protected $handler;

  function setUp(): void
  {
    User::truncate();

    $user = User::createUser('admin@example.com', 'admin@example.com', User::ROLE_ADMINISTRATOR);
    $this->handler = new DeleteUserHandler($user);
  }

  protected function createItem(): User {
    return User::createUser('test@example.com', 'test@example.com', User::ROLE_USER);
  }

  function test_handle_whenNotFound_shouldThrow(): void
  {
    $item_id = 1000;
    $command = new DeleteUser($item_id);

    $this->expectException(NotFoundException::class);

    $this->handler->handle($command);
  }

  function test_handle_whenFound_shouldDelete(): void
  {
    $item = $this->createItem();
    $command = new DeleteUser($item->id);

    $this->handler->handle($command);

    $item = User::find($item->id);
    $this->assertNull($item);
  }
}
