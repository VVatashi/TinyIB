<?php

namespace Imageboard\Middleware;

use Imageboard\Model\User;
use Imageboard\Service\RendererServiceInterface;
use Psr\Http\Message\{ServerRequestInterface, ResponseInterface};
use Psr\Http\Server\{MiddlewareInterface, RequestHandlerInterface};

/**
 * Auth middleware.
 *
 * Sets user attribute on a request.
 */
class AuthMiddleware implements MiddlewareInterface
{
  /** @var RendererServiceInterface */
  protected $renderer;

  public function __construct(RendererServiceInterface $renderer)
  {
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
    }

    // If there is no user ID in the session,
    // store anonymous user instance in the request.
    if (!isset($user)) {
      $user = User::anonymous();
    }

    // Store current user to a Twig global variable.
    $this->renderer->registerGlobal('user', $user);

    // Store current user to the request object.
    $request = $request->withAttribute('user', $user);
    return $handler->handle($request);
  }
}
