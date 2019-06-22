<?php

namespace Imageboard\Middleware;

use Imageboard\Model\{Token, CurrentUserInterface, User};
use Imageboard\Service\{RendererService, TokenService};
use Psr\Http\Message\{ServerRequestInterface, ResponseInterface};
use Psr\Http\Server\{MiddlewareInterface, RequestHandlerInterface};
use VVatashi\DI\Container;

/**
 * Auth middleware.
 *
 * Sets user attribute on a request.
 */
class AuthMiddleware implements MiddlewareInterface
{
  /** @var Container */
  protected $container;

  /** @var TokenService */
  protected $token_service;

  /** @var RendererService */
  protected $renderer;

  public function __construct(
    Container $container,
    TokenService $token_service,
    RendererService $renderer
  ) {
    $this->container = $container;
    $this->token_service = $token_service;
    $this->renderer = $renderer;
  }

  /**
   * {@inheritDoc}
   */
  public function process(
    ServerRequestInterface $request,
    RequestHandlerInterface $handler
  ): ResponseInterface {
    if (isset($_SESSION['user'])) {
      // Try to load user.
      $user = User::find($_SESSION['user']);
    } elseif ($request->hasHeader('X-Token')) {
      // Try to auth with a token.
      $token_str = $request->getHeaderLine('X-Token');
      $token = $this->token_service->getByToken($token_str);
      if (isset($token)) {
        $user = $token->user;
      }
    }

    // If there is no user ID in the session,
    // store anonymous user instance in the request.
    if (!isset($user)) {
      $user = User::anonymous();
    }

    // Store current user to a Twig global variable.
    $this->renderer->registerGlobal('user', $user);

    // Store current user to a container.
    $this->container->registerInstance(CurrentUserInterface::class, $user);

    // Store current user to the request object.
    $request = $request->withAttribute('user', $user);
    $response = $handler->handle($request);

    if (isset($token)) {
      $timestamp = is_int($token->expires_at)
        ? $token->expires_at
        : $token->expires_at->timestamp;
      $response = $response->withHeader('X-Token-Expires-At', $timestamp);
      $response = $response->withHeader('X-Token-Expires-In', $timestamp - time());
    }

    return $response;
  }
}
