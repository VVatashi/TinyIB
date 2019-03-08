<?php

namespace Imageboard\Tests\Functional\Query;

use Imageboard\Model\User;
use Imageboard\Query\{ListUsers, ListUsersHandler};
use PHPUnit\Framework\TestCase;

final class ListUsersHandlerTest extends TestCase
{
  /** @var ListUsersHandler */
  protected $handler;

  function setUp(): void
  {
    global $container;

    User::truncate();

    $pdo = $container->get(\PDO::class);
    $this->handler = new ListUsersHandler($pdo);
  }

  protected function createItem(int $id): User
  {
    return User::createUser("test$id@example.com", "test$id@example.com", User::ROLE_USER);
  }

  function test_count_shouldReturnCount(): void
  {
    $count = 3;
    for ($i = 0; $i < $count; ++$i) {
      $this->createItem($i);
    }
    $command = new ListUsers(0, 50);

    $result = $this->handler->count($command);

    $this->assertIsInt($result);
    $this->assertEquals($count, $result);
  }

  function test_handle_shouldReturnItems(): void
  {
    $count = 5;
    for ($i = 0; $i < $count; ++$i) {
      $this->createItem($i);
    }
    $command = new ListUsers(0, 50);

    $items = $this->handler->handle($command);

    $this->assertIsArray($items);
    $this->assertCount($count, $items);
  }
}
