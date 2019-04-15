<?php

namespace Imageboard\Middleware;

use GuzzleHttp\Psr7\Response;
use Imageboard\Model\{Token, CurrentUserInterface, User};
use Imageboard\Service\RendererService;
use Psr\Http\Message\{ServerRequestInterface, ResponseInterface};
use Psr\Http\Server\{MiddlewareInterface, RequestHandlerInterface};
use VVatashi\DI\Container;
use Imageboard\Service\ConfigService;

/**
 * Auth middleware.
 *
 * Sets user attribute on a request.
 */
class AuthMiddleware implements MiddlewareInterface
{
  /** @var Container */
  protected $container;

  /** @var RendererService */
  protected $renderer;

  public function __construct(
    Container $container,
    RendererService $renderer
  ) {
    $this->container = $container;
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
      $token = $request->getHeaderLine('X-Token');
      $token = Token::checkToken($token);
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

    // Disallow anonymous user acceess.
    if ($user->role === 0) {
      $path = $request->getUri()->getPath();
      $base_path = ConfigService::getInstance()->get('BASE_PATH', '');
      if (!preg_match('#^' . preg_quote($base_path) . '/(auth|captcha|api/auth)#', $path)) {
        if ($request->getHeaderLine('Accept') === 'application/json') {
          $content = json_encode(['error' => 'Auth required']);
          return new Response(403, ['Content-Type' => 'application/json'], $content);
        }

        return new Response(302, ['Location' => "$base_path/auth/login"]);
      }
    }

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
