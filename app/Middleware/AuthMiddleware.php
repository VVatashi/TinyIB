<?php

namespace Imageboard\Middleware;

use Imageboard\Repositories\UserRepository;
use Imageboard\Services\{
  RendererService,
  TokenService,
  UserService
};
use Psr\Http\Message\{ServerRequestInterface, ResponseInterface};
use Psr\Http\Server\{MiddlewareInterface, RequestHandlerInterface};

/**
 * Auth middleware.
 *
 * Sets user attribute on a request.
 */
class AuthMiddleware implements MiddlewareInterface
{
  /** @var UserRepository */
  protected $user_repository;

  /** @var UserService */
  protected $user_service;

  /** @var TokenService */
  protected $token_service;

  /** @var RendererService */
  protected $renderer;

  public function __construct(
    UserRepository  $user_repository,
    UserService     $user_service,
    TokenService    $token_service,
    RendererService $renderer
  ) {
    $this->user_repository = $user_repository;
    $this->user_service    = $user_service;
    $this->token_service   = $token_service;
    $this->renderer        = $renderer;
  }

  /**
   * {@inheritDoc}
   */
  public function process(
    ServerRequestInterface $request,
    RequestHandlerInterface $handler
  ): ResponseInterface {
    $user = $this->user_service->getCurrentUser();
    if ($request->hasHeader('X-Token')) {
      // Try to auth with a token.
      $token_str = $request->getHeaderLine('X-Token');
      $token = $this->token_service->getByToken($token_str);
      if (isset($token)) {
        $user_id = $token->user_id;
        $user = $this->user_repository->getById($user_id);
      }
    }

    // Store current user to a Twig global variable.
    $this->renderer->registerGlobal('user', $user);

    // Store current user to the request object.
    $request = $request->withAttribute('user', $user);
    $response = $handler->handle($request);

    if (isset($token)) {
      $timestamp = $token->expires_at;
      $response = $response->withHeader('X-Token-Expires-At', $timestamp);
      $response = $response->withHeader('X-Token-Expires-In', $timestamp - time());
    }

    return $response;
  }
}
