<?php

namespace Imageboard\Tests\Functional\Query\Admin;

use Imageboard\Model\{Token as TokenModel, User};
use Imageboard\Query\{Token, TokenHandler};
use PHPUnit\Framework\TestCase;

final class TokenHandlerTest extends TestCase
{
  /** @var TokenHandler */
  protected $handler;

  function setUp(): void
  {
    global $container;

    TokenModel::truncate();
    User::truncate();

    $pdo = $container->get(\PDO::class);
    $this->handler = new TokenHandler($pdo);
  }

  protected function createItem(int $user_id, string $token): TokenModel
  {
    return TokenModel::create([
      'token' => $token,
      'expires_at' => time() + 60 * 60,
      'user_id' => $user_id,
    ]);
  }

  function test_handle_shouldReturnItem(): void
  {
    $user = User::createUser('test@example.com', 'test');
    $token = 'test';
    $this->createItem($user->id, $token);
    $command = new Token($token);

    $item = $this->handler->handle($command);

    $this->assertNotNull($item);
  }
}
