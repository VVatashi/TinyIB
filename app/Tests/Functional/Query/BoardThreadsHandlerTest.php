<?php

namespace Imageboard\Tests\Functional\Query\Admin;

use Imageboard\Model\Post;
use Imageboard\Query\{BoardThreads, BoardThreadsHandler};
use Imageboard\Service\ConfigService;
use PHPUnit\Framework\TestCase;

final class BoardThreadsHandlerTest extends TestCase
{
  /** @var BoardThreadsHandler */
  protected $handler;

  function setUp(): void
  {
    global $container, $database;

    $connection = $database->getConnection();
    $builder = $connection->createQueryBuilder();
    $posts = ConfigService::getInstance()->get('DBPOSTS');
    $builder->delete($posts)->execute();

    $pdo = $container->get(\PDO::class);
    $this->handler = new BoardThreadsHandler($pdo);
  }

  protected function createItem(): Post
  {
    return Post::create([
      'parent_id' => 0,
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
    $count = 5;
    for ($i = 0; $i < $count; ++$i) {
      $this->createItem();
    }
    $command = new BoardThreads();

    $items = $this->handler->handle($command);

    $this->assertIsArray($items);
    $this->assertCount($count, $items);
  }
}
