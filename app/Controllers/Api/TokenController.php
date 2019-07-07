<?php

namespace Imageboard\Controllers\Api;

use GuzzleHttp\Psr7\Response;
use Imageboard\Controllers\ControllerInterface;
use Imageboard\Exceptions\NotFoundException;
use Imageboard\Models\{Token, User};
use Imageboard\Repositories\UserRepository;
use Imageboard\Services\{TokenService, UserService};
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
   * @api {post} /api/auth Create auth token
   * @apiName Create auth token
   * @apiGroup token
   * @apiVersion 0.1.0
   * @apiDescription Creates new auth token.
   *
   * @apiParam (Body) {String} email    User E-Mail.
   * @apiParam (Body) {String} password User password.
   *
   * @apiParamExample {json} Example
   *  {
   *    "email":    "user@example.com",
   *    "password": "12345678"
   *  }
   *
   * @apiError (Error 400) {String} error Error message.
   *
   * @apiErrorExample {json} User not found
   *  {
   *    "error": "User with this email address does not exist"
   *  }
   *
   * @apiErrorExample {json} Incorrect password
   *  {
   *    "error": "Incorrect password"
   *  }
   *
   * @apiSuccess (Success 200) {String} token      Created token.
   * @apiSuccess (Success 200) {Number} created_at Token creation timestamp.
   * @apiSuccess (Success 200) {Number} expires_at Token expiration timestamp.
   * @apiSuccess (Success 200) {Number} expires_in Token time to live in seconds.
   * @apiSuccess (Success 200) {Number} user_id    User ID.
   * @apiSuccess (Success 200) {String} user_email User E-Mail.
   * @apiSuccess (Success 200) {Number} user_role  User role ID.
   *
   * @apiSuccessExample {json} Example
   *  {
   *    "token":      "q1vBBTXUAtp3JNMc",
   *    "created_at": 1562148385,
   *    "expires_at": 1562151985,
   *    "expires_in": 3600,
   *    "user_id":    1,
   *    "user_email": "user@example.com",
   *    "user_role":  2
   *  }
   */

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
   * @api {get} /api/auth Get current auth token info
   * @apiName Get current auth token info
   * @apiGroup token
   * @apiVersion 0.1.0
   * @apiDescription Returns info about current auth token.
   *
   * @apiHeader {String} X-Token Auth token.
   *
   * @apiHeaderExample {json} Example
   *  {
   *    "X-Token": "q1vBBTXUAtp3JNMc"
   *  }
   *
   * @apiError (Error 404) {String} error Error message.
   *
   * @apiErrorExample {json} Token not found
   *  {
   *    "error": "Not Found"
   *  }
   *
   * @apiSuccess (Success 200) {String} token      Token.
   * @apiSuccess (Success 200) {Number} created_at Token creation timestamp.
   * @apiSuccess (Success 200) {Number} expires_at Token expiration timestamp.
   * @apiSuccess (Success 200) {Number} expires_in Token time to live in seconds.
   * @apiSuccess (Success 200) {Number} user_id    User ID.
   * @apiSuccess (Success 200) {String} user_email User E-Mail.
   * @apiSuccess (Success 200) {Number} user_role  User role ID.
   *
   * @apiSuccessExample {json} Example
   *  {
   *    "token":      "q1vBBTXUAtp3JNMc",
   *    "created_at": 1562148385,
   *    "expires_at": 1562151985,
   *    "expires_in": 2164,
   *    "user_id":    1,
   *    "user_email": "user@example.com",
   *    "user_role":  2
   *  }
   */

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
