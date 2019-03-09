<?php

namespace Imageboard\Tests\Functional\Command;

use Imageboard\Command\{CreateBan, CreateBanHandler};
use Imageboard\Model\{Ban, User};
use PHPUnit\Framework\TestCase;

final class CreateBanHandlerTest extends TestCase
{
  /** @var CreateBanHandler */
  protected $handler;

  function setUp(): void
  {
    Ban::truncate();
    User::truncate();

    $user = User::createUser('admin@example.com', 'admin@example.com', User::ROLE_ADMINISTRATOR);
    $this->handler = new CreateBanHandler($user);
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
