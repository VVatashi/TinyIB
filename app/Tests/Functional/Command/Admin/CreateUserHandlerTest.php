<?php

namespace Imageboard\Tests\Functional\Command\Admin;

use Imageboard\Command\Admin\{CreateUser, CreateUserHandler};
use Imageboard\Model\User;
use Imageboard\Repositories\ModLogRepository;
use Imageboard\Service\ModLogService;
use PHPUnit\Framework\TestCase;

final class CreateUserHandlerTest extends TestCase
{
  /** @var CreateUserHandler */
  protected $handler;

  function setUp(): void
  {
    global $database;

    User::truncate();

    $user = User::createUser('admin@example.com', 'admin@example.com', User::ROLE_ADMINISTRATOR);
    $modlog_repository = new ModLogRepository($database);
    $modlog_service = new ModLogService($modlog_repository);
    $this->handler = new CreateUserHandler($modlog_service, $user);
  }

  function test_handle_shouldCreate(): void
  {
    $data = [
      'email' => 'test@example.com',
      'password' => '123456',
      'role' => User::ROLE_USER,
    ];
    $command = new CreateUser($data);

    $this->handler->handle($command);

    $item = User::where('email', $data['email'])->first();
    $this->assertNotNull($item);
  }
}
