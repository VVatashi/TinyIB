<?php

namespace Imageboard\Tests\Functional\Query;

use Imageboard\Model\Ban;
use Imageboard\Query\{ListBans, ListBansHandler};
use PHPUnit\Framework\TestCase;

final class ListBansHandlerTest extends TestCase
{
  /** @var ListBansHandler */
  protected $handler;

  function setUp(): void
  {
    global $container;

    Ban::truncate();

    $pdo = $container->get(\PDO::class);
    $this->handler = new ListBansHandler($pdo);
  }

  protected function createItem(): Ban
  {
    return Ban::createBan('123.0.0.1', 60 * 60, 'Test');
  }

  function test_count_shouldReturnCount(): void
  {
    $count = 3;
    for ($i = 0; $i < $count; ++$i) {
      $this->createItem();
    }
    $command = new ListBans(0, 50);

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
    $command = new ListBans(0, 50);

    $items = $this->handler->handle($command);

    $this->assertIsArray($items);
    $this->assertCount($count, $items);
  }
}
