<?php

namespace Imageboard\Tests\Functional\Command;

use Imageboard\Command\{CreateToken, CreateTokenHandler};
use Imageboard\Exception\{NotFoundException, ValidationException};
use Imageboard\Model\{Token, User};
use PHPUnit\Framework\TestCase;

final class CreateTokenHandlerTest extends TestCase
{
  /** @var CreateTokenHandler */
  protected $handler;

  function setUp(): void
  {
    Token::truncate();
    User::truncate();

    $this->handler = new CreateTokenHandler();
  }

  function test_handle_shouldCreate(): void
  {
    User::createUser('test@example.com', 'test');

    $data = [
      'email' => 'test@example.com',
      'password' => 'test',
    ];
    $command = new CreateToken($data);

    $item = $this->handler->handle($command);
    $this->assertNotNull($item);
  }

  function test_handle_withInvalidEmail_shouldThrow(): void
  {
    User::createUser('test@example.com', 'test');

    $data = [
      'email' => 'another@example.com',
      'password' => 'test',
    ];
    $command = new CreateToken($data);

    $this->expectException(NotFoundException::class);

    $this->handler->handle($command);
  }

  function test_handle_withInvalidPassword_shouldThrow(): void
  {
    User::createUser('test@example.com', 'test');

    $data = [
      'email' => 'test@example.com',
      'password' => 'another',
    ];
    $command = new CreateToken($data);

    $this->expectException(ValidationException::class);

    $this->handler->handle($command);
  }
}
