<?php

namespace Imageboard\Middleware;

use Imageboard\Model\User;
use Psr\Http\Message\{ServerRequestInterface, ResponseInterface};
use Psr\Http\Server\{MiddlewareInterface, RequestHandlerInterface};

/**
 * Auth middleware.
 *
 * Sets user attribute on a request.
 */
class AuthMiddleware implements MiddlewareInterface
{
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
    }

    // If there is no user ID in the session,
    // store anonymous user instance in the request.
    if (!isset($user)) {
      $user = User::anonymous();
    }

    $request = $request->withAttribute('user', $user);
    return $handler->handle($request);
  }
}
