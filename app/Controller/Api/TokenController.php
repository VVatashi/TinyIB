<?php

namespace Imageboard\Controller\Api;

use GuzzleHttp\Psr7\Response;
use Imageboard\Command\{CommandDispatcher, CreateToken};
use Imageboard\Query\{QueryDispatcher, Token};
use Psr\Http\Message\{ServerRequestInterface, ResponseInterface};

class TokenController implements TokenControllerInterface
{
  /** @var CommandDispatcher */
  protected $command_dispatcher;

  /** @var QueryDispatcher */
  protected $query_dispatcher;

  function __construct(
    CommandDispatcher $command_dispatcher,
    QueryDispatcher $query_dispatcher
  ) {
    $this->command_dispatcher = $command_dispatcher;
    $this->query_dispatcher = $query_dispatcher;
  }

  /**
   * {@inheritDoc}
   */
  function createToken(ServerRequestInterface $request) : ResponseInterface
  {
    if ($request->getHeaderLine('Content-Type') === 'application/json') {
      $data = json_decode((string)$request->getBody(), true);
    } else {
      $data = $request->getParsedBody();
    }

    $command = new CreateToken($data);
    $handler = $this->command_dispatcher->getHandler($command);

    try {
      $token = $handler->handle($command);
    } catch (\Exception $exception) {
      return new Response(400, [], json_encode([
        'error' => $exception->getMessage(),
      ]));
    }

    $expires_at = $token->expires_at->timestamp;
    return new Response(201, [], json_encode([
      'token' => $token->token,
      'created_at' => $token->created_at->timestamp,
      'expires_at' => $expires_at,
      'expires_in' => $expires_at - time(),
      'user_id' => $token->user_id,
      'user_email' => $token->user->email,
      'user_role' => $token->user->role,
    ]));
  }

  /**
   * {@inheritDoc}
   */
  function token(ServerRequestInterface $request) : array
  {
    $token = $request->getHeaderLine('X-Token');
    $query = new Token($token);
    $handler = $this->query_dispatcher->getHandler($query);
    return $handler->handle($query);
  }
}
