<?php

namespace Imageboard\Tests\Functional\Command;

use Imageboard\Command\{EditUser, EditUserHandler};
use Imageboard\Model\User;
use PHPUnit\Framework\TestCase;

final class EditUserHandlerTest extends TestCase
{
  /** @var EditUserHandler */
  protected $handler;

  function setUp(): void
  {
    User::truncate();

    $this->handler = new EditUserHandler();
  }

  protected function createItem(): User {
    return User::createUser('test@example.com', 'test@example.com', User::ROLE_USER);
  }

  function test_handle_shouldCreate(): void
  {
    $item = $this->createItem();
    $data = [
      'id' => $item->id,
      'email' => 'new@example.com',
      'password' => '123456',
      'role' => User::ROLE_USER,
    ];
    $command = new EditUser($data);

    $this->handler->handle($command);

    $item = User::where('email', $data['email'])->first();
    $this->assertNotNull($item);
  }
}
