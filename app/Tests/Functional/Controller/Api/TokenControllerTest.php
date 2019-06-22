<?php

namespace Imageboard\Tests\Functional\Controller\Api;

use GuzzleHttp\Psr7\ServerRequest;
use Imageboard\Controller\Api\TokenController;
use Imageboard\Exception\NotFoundException;
use Imageboard\Model\User;
use Imageboard\Repositories\TokenRepository;
use Imageboard\Service\TokenService;
use Imageboard\Tests\Functional\TestWithUsers;

final class TokenControllerTest extends TestWithUsers
{
  /** @var TokenController */
  protected $controller;

  /** @var TokenService */
  protected $service;

  function setUp(): void
  {
    parent::setUp();

    global $database;

    $connection = $database->getConnection();
    $builder = $connection->createQueryBuilder();
    $builder->delete('tokens')->execute();
    $builder->delete('users')->execute();

    $repository = new TokenRepository($database);
    $this->service = new TokenService($repository);
    $this->controller = new TokenController(
      $this->user_repository,
      $this->user_service,
      $this->service
    );
  }

  function test_createToken_shouldCreateItem(): void
  {
    $data = [
      'email' => 'test@example.com',
      'password' => 'test',
    ];
    $this->user_service->create($data['email'], $data['password']);
    $request = (new ServerRequest('POST', '/api/auth'))
      ->withParsedBody($data);

    $response = $this->controller->createToken($request);

    $status = $response->getStatusCode();
    $this->assertEquals(201, $status);
  }

  function test_token_shouldReturnItem(): void
  {
    $user = $this->user_service->create('test@example.com', 'test');
    $token = $this->service->create($user->id);
    $request = (new ServerRequest('GET', '/api/auth'))
      ->withHeader('X-Token', $token->token);

    $item = $this->controller->token($request);

    $this->assertNotNull($item);
  }

  function test_token_revoked_shouldThrow(): void
  {
    $user = $this->user_service->create('test@example.com', 'test');
    $token = $this->service->create($user->id);
    $this->service->revokeToken($token->token);
    $request = (new ServerRequest('GET', '/api/auth'))
      ->withHeader('X-Token', $token->token);

    $this->expectException(NotFoundException::class);

    $this->controller->token($request);
  }
}
