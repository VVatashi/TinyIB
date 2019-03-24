<?php

namespace Imageboard\Tests\Functional\Query\Admin;

use Imageboard\Model\ModLog;
use Imageboard\Query\Admin\{ListModLog, ListModLogHandler};
use PHPUnit\Framework\TestCase;

final class ListModLogHandlerTest extends TestCase
{
  /** @var ListModLogHandler */
  protected $handler;

  function setUp(): void
  {
    global $container;

    ModLog::truncate();

    $pdo = $container->get(\PDO::class);
    $this->handler = new ListModLogHandler($pdo);
  }

  protected function createItem(): ModLog
  {
    return ModLog::create([
      'message' => 'Test',
    ]);
  }

  function test_count_shouldReturnCount(): void
  {
    $count = 3;
    for ($i = 0; $i < $count; ++$i) {
      $this->createItem();
    }
    $command = new ListModLog(0, 50);

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
    $command = new ListModLog(0, 50);

    $items = $this->handler->handle($command);

    $this->assertIsArray($items);
    $this->assertCount($count, $items);
  }
}
