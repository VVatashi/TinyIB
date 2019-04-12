<?php

namespace Imageboard\Tests\Functional\Controller\Api;

use GuzzleHttp\Psr7\ServerRequest;
use Imageboard\Command\CommandDispatcher;
use Imageboard\Controller\Api\TokenController;
use Imageboard\Exception\NotFoundException;
use Imageboard\Model\{Token, User};
use Imageboard\Query\QueryDispatcher;
use PHPUnit\Framework\TestCase;

final class TokenControllerTest extends TestCase
{
  /** @var TokenController */
  protected $controller;

  function setUp(): void
  {
    global $container;

    Token::truncate();
    User::truncate();

    $command_dispatcher = new CommandDispatcher($container);
    $query_dispatcher = new QueryDispatcher($container);
    $this->controller = new TokenController(
      $command_dispatcher,
      $query_dispatcher
    );
  }

  function test_createToken_shouldCreateItem(): void
  {
    $data = [
      'email' => 'test@example.com',
      'password' => 'test',
    ];
    User::createUser($data['email'], $data['password']);
    $request = (new ServerRequest('POST', '/api/auth'))
      ->withParsedBody($data);

    $response = $this->controller->createToken($request);

    $status = $response->getStatusCode();
    $this->assertEquals(201, $status);
  }

  function test_token_shouldReturnItem(): void
  {
    $user = User::createUser('test@example.com', 'test');
    $token = Token::create([
      'token' => 'token',
      'expires_at' => time() + 60 * 60,
      'user_id' => $user->id,
    ]);
    $token->save();
    $request = (new ServerRequest('GET', '/api/auth'))
      ->withHeader('X-Token', $token->token);

    $item = $this->controller->token($request);

    $this->assertNotNull($item);
  }

  function test_token_expired_shouldThrow(): void
  {
    $user = User::createUser('test@example.com', 'test');
    $token = Token::create([
      'token' => 'token',
      'expires_at' => time() - 60 * 60,
      'user_id' => $user->id,
    ]);
    $token->save();
    $request = (new ServerRequest('GET', '/api/auth'))
      ->withHeader('X-Token', $token->token);

    $this->expectException(NotFoundException::class);

    $this->controller->token($request);
  }
}
