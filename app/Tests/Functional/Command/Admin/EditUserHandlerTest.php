<?php

namespace Imageboard\Tests\Functional\Command\Admin;

use Imageboard\Command\Admin\{EditUser, EditUserHandler};
use Imageboard\Model\User;
use Imageboard\Repositories\ModLogRepository;
use Imageboard\Service\ModLogService;
use PHPUnit\Framework\TestCase;

final class EditUserHandlerTest extends TestCase
{
  /** @var EditUserHandler */
  protected $handler;

  function setUp(): void
  {
    global $database;

    User::truncate();

    $user = User::createUser('admin@example.com', 'admin@example.com', User::ROLE_ADMINISTRATOR);
    $modlog_repository = new ModLogRepository($database);
    $modlog_service = new ModLogService($modlog_repository);
    $this->handler = new EditUserHandler($modlog_service, $user);
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
