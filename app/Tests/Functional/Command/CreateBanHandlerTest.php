<?php

namespace Imageboard\Tests\Functional\Command;

use Imageboard\Command\{CreateBan, CreateBanHandler};
use Imageboard\Model\Ban;
use PHPUnit\Framework\TestCase;

final class CreateBanHandlerTest extends TestCase
{
  /** @var CreateBanHandler */
  protected $handler;

  function setUp(): void
  {
    Ban::truncate();

    $this->handler = new CreateBanHandler();
  }

  function test_handle_shouldCreate(): void
  {
    $data = [
      'ip' => '123.0.0.1',
      'expires_in' => 60 * 60,
      'reason' => 'test',
    ];
    $command = new CreateBan($data);

    $this->handler->handle($command);

    $item = Ban::where('ip', $data['ip'])->first();
    $this->assertNotNull($item);
  }
}
