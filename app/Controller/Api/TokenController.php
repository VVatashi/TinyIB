<?php

namespace Imageboard\Controller\Api;

use GuzzleHttp\Psr7\Response;
use Imageboard\Controller\ControllerInterface;
use Imageboard\Exception\NotFoundException;
use Imageboard\Model\{Token, User};
use Imageboard\Repositories\UserRepository;
use Imageboard\Service\{TokenService, UserService};
use Psr\Http\Message\{ServerRequestInterface, ResponseInterface};

class TokenController implements ControllerInterface
{
  /** @var UserRepository */
  protected $user_repository;

  /** @var UserService */
  protected $user_service;

  /** @var TokenService */
  protected $token_service;

  /**
   * TokenController constructor.
   *
   * @param UserRepository $user_repository
   * @param UserService $user_service
   * @param TokenService $token_service
   */
  function __construct(
    UserRepository $user_repository,
    UserService $user_service,
    TokenService $token_service
  ) {
    $this->user_repository = $user_repository;
    $this->user_service = $user_service;
    $this->token_service = $token_service;
  }

  protected function mapToViewModel(Token $token, User $user): array {
    return [
      'token'      => $token->token,
      'created_at' => $token->created_at,
      'expires_at' => $token->expires_at,
      'expires_in' => $token->expires_at - time(),
      'user_id'    => $token->user_id,
      'user_email' => $user->email,
      'user_role'  => $user->role,
    ];
  }

  /**
   * Creates auth token.
   *
   * @param ServerRequestInterface $request
   *
   * @return array Token view model.
   */
  function createToken(ServerRequestInterface $request): ResponseInterface
  {
    if ($request->getHeaderLine('Content-Type') === 'application/json') {
      $data = json_decode((string)$request->getBody(), true);
    } else {
      $data = $request->getParsedBody();
    }

    $email = $data['email'] ?? '';
    $password = $data['password'] ?? '';

    try {
      $user = $this->user_service->login($email, $password);
      $token = $this->token_service->create($user->id);
    } catch (\Exception $exception) {
      return new Response(400, [], json_encode([
        'error' => $exception->getMessage(),
      ]));
    }

    $view_model = $this->mapToViewModel($token, $user);
    return new Response(201, [], json_encode($view_model));
  }

  /**
   * Returns current auth token info.
   *
   * @param ServerRequestInterface $request
   *
   * @return array Token view model.
   *
   * @throws NotFoundException
   */
  function token(ServerRequestInterface $request): array
  {
    $token_str = $request->getHeaderLine('X-Token');
    $token = $this->token_service->getByToken($token_str);
    if (!isset($token) || $token->expires_at < time()) {
      throw new NotFoundException();
    }

    $user = $this->user_repository->getById($token->user_id);
    $view_model = $this->mapToViewModel($token, $user);
    return $view_model;
  }
}
