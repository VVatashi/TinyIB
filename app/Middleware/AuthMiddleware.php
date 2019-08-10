<?php

namespace Imageboard\Middleware;

use GuzzleHttp\Psr7\Response;
use Imageboard\Repositories\UserRepository;
use Imageboard\Services\{
  RendererService,
  TokenService,
  UserService,
  ConfigService
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
    $this->renderer->registerGlobal('ip', $_SERVER['REMOTE_ADDR'] ?? '');
    $this->renderer->registerGlobal('ip_hash', base64_encode(md5($_SERVER['REMOTE_ADDR'] ?? '', true)));

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
      $timestamp = $token->expires_at;
      $response = $response->withHeader('X-Token-Expires-At', $timestamp);
      $response = $response->withHeader('X-Token-Expires-In', $timestamp - time());
    }

    return $response;
  }
}
