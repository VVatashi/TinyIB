<?php

namespace Imageboard\Tests\Unit\Command\Admin;

use Imageboard\Command\Admin\{DeletePost, DeletePostHandler};
use Imageboard\Exception\NotFoundException;
use Imageboard\Model\{Post, User};
use Imageboard\Service\ConfigService;
use Imageboard\Tests\Functional\TestWithUsers;

final class DeletePostHandlerTest extends TestWithUsers
{
  /** @var DeletePostHandler */
  protected $handler;

  function setUp(): void
  {
    parent::setUp();

    global $database;

    $connection = $database->getConnection();
    $builder = $connection->createQueryBuilder();
    $builder->delete('users')->execute();

    $posts = ConfigService::getInstance()->get('DBPOSTS');
    $builder->delete($posts)->execute();

    $this->handler = new DeletePostHandler($this->modlog_service, $this->user_service);
    $this->user_service->create('admin@example.com', 'admin@example.com', User::ROLE_ADMINISTRATOR);
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
