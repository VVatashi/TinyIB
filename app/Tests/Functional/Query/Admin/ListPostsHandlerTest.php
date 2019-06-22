<?php

namespace Imageboard\Tests\Functional\Query\Admin;

use Imageboard\Model\Post;
use Imageboard\Query\Admin\{ListPosts, ListPostsHandler};
use Imageboard\Service\ConfigService;
use PHPUnit\Framework\TestCase;

final class ListPostsHandlerTest extends TestCase
{
  /** @var ListPostsHandler */
  protected $handler;

  function setUp(): void
  {
    global $container, $database;

    $connection = $database->getConnection();
    $builder = $connection->createQueryBuilder();
    $posts = ConfigService::getInstance()->get('DBPOSTS');
    $builder->delete($posts)->execute();

    $pdo = $container->get(\PDO::class);
    $this->handler = new ListPostsHandler($pdo);
  }

  protected function createItem(): Post
  {
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

  function test_count_shouldReturnCount(): void
  {
    $count = 3;
    for ($i = 0; $i < $count; ++$i) {
      $this->createItem();
    }
    $command = new ListPosts(0, 50);

    $result = $this->handler->count($command);

    $this->assertIsInt($result);
    $this->assertEquals($count, $result);
  }

  function test_handle_shouldReturnItems(): void
  {
    $count = 5;
    for ($i = 0; $i < $count; ++$i) {
      $this->createItem();
    }
    $command = new ListPosts(0, 50);

    $items = $this->handler->handle($command);

    $this->assertIsArray($items);
    $this->assertCount($count, $items);
  }
}
