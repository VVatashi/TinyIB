<?php

namespace Imageboard\Tests\Functional\Query\Admin;

use Imageboard\Model\Post;
use Imageboard\Query\{ThreadPosts, ThreadPostsHandler};
use Imageboard\Service\ConfigService;
use PHPUnit\Framework\TestCase;

final class ThreadPostsHandlerTest extends TestCase
{
  /** @var ThreadPostsHandler */
  protected $handler;

  function setUp(): void
  {
    global $container, $database;

    $connection = $database->getConnection();
    $builder = $connection->createQueryBuilder();
    $posts = ConfigService::getInstance()->get('DBPOSTS');
    $builder->delete($posts)->execute();

    $pdo = $container->get(\PDO::class);
    $this->handler = new ThreadPostsHandler($pdo);
  }

  protected function createItem(int $parent_id = 0): Post
  {
    return Post::create([
      'parent_id' => $parent_id,
      'ip' => '',
      'name' => '',
      'tripcode' => '',
      'email' => '',
      'subject' => '',
      'message' => '',
      'password' => '',
    ]);
  }

  function test_handle_shouldReturnItems(): void
  {
    $thread = $this->createItem();
    $id = $thread->id;

    $count = 5;
    for ($i = 0; $i < $count; ++$i) {
      $this->createItem($id);
    }
    $command = new ThreadPosts($id);

    $items = $this->handler->handle($command);

    $this->assertIsArray($items);
    $this->assertCount($count + 1, $items);
  }
}
