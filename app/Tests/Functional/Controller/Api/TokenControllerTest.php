<?php

namespace Imageboard\Tests\Functional\Controller\Api;

use GuzzleHttp\Psr7\ServerRequest;
use Imageboard\Controller\Api\TokenController;
use Imageboard\Exception\NotFoundException;
use Imageboard\Model\User;
use Imageboard\Repositories\TokenRepository;
use Imageboard\Service\TokenService;
use PHPUnit\Framework\TestCase;

final class TokenControllerTest extends TestCase
{
  /** @var TokenController */
  protected $controller;

  /** @var TokenService */
  protected $service;

  function setUp(): void
  {
    global $database;

    $connection = $database->getConnection();
    $builder = $connection->createQueryBuilder();
    $builder->delete('tokens')->execute();

    User::truncate();

    $repository = new TokenRepository($database);
    $this->service = new TokenService($repository);
    $this->controller = new TokenController($this->service);
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
    $token = $this->service->createToken($user->id);
    $request = (new ServerRequest('GET', '/api/auth'))
      ->withHeader('X-Token', $token->token);

    $item = $this->controller->token($request);

    $this->assertNotNull($item);
  }

  function test_token_revoked_shouldThrow(): void
  {
    $user = User::createUser('test@example.com', 'test');
    $token = $this->service->createToken($user->id);
    $this->service->revokeToken($token->token);
    $request = (new ServerRequest('GET', '/api/auth'))
      ->withHeader('X-Token', $token->token);

    $this->expectException(NotFoundException::class);

    $this->controller->token($request);
  }
}
