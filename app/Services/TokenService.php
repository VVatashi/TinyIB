<?php

namespace Imageboard\Services;

use Imageboard\Exceptions\NotFoundException;
use Imageboard\Models\Token;
use Imageboard\Repositories\TokenRepository;

class TokenService
{
  const EXPIRES_IN = 60 * 60;

  /** @var TokenRepository */
  protected $repository;

  function __construct(
    TokenRepository $repository
  ) {
    $this->repository = $repository;
  }

  function create(int $user_id): Token
  {
    $token = base64_encode(random_bytes(12));
    $now = time();
    $token = new Token([
      'created_at' => $now,
      'updated_at' => $now,
      'expires_at' => $now + static::EXPIRES_IN,
      'token'      => $token,
      'user_id'    => $user_id,
    ]);
    return $this->repository->add($token);
  }

  /**
   * @param string $token
   *
   * @return Token
   *
   * @throws NotFoundException
   */
  function revokeToken(string $token): Token
  {
    $token = $this->repository->getByToken($token);
    if (!isset($token)) {
      throw new NotFoundException();
    }

    return $this->repository->remove($token);
  }

  /**
   * @return null|Token
   */
  function getByToken(string $token)
  {
    $token = $this->repository->getByToken($token);
    if (isset($token) && $token->expires_at < time()) {
      return null;
    }

    return $token;
  }
}
