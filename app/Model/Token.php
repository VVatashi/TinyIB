<?php

namespace Imageboard\Model;

/**
 * @property-read int $id
 * @property-read int $created_at
 * @property-read int $updated_at
 * @property-read int $expires_at
 * @property-read string $token
 * @property-read int $user_id
 */
class Token extends Model
{
  /** @var null|int */
  protected $id = null;

  /** @var int */
  protected $created_at = 0;

  /** @var int */
  protected $updated_at = 0;

  /** @var int */
  protected $expires_at = 0;

  /** @var string */
  protected $token = '';

  /** @var int */
  protected $user_id = 0;

  /**
   * Token constructor.
   *
   * @param array $attributes
   * @param bool  $validate
   */
  function __construct(array $attributes = [], bool $validate = true)
  {
    parent::__construct($attributes);

    if ($validate) {
      $this->setId($attributes['id'] ?? null);
      $this->setCreatedAt($attributes['created_at'] ?? 0);
      $this->setUpdatedAt($attributes['updated_at'] ?? 0);
      $this->setExpiresAt($attributes['expires_at'] ?? 0);
      $this->setToken($attributes['token'] ?? '');
      $this->setUser($attributes['user_id'] ?? 0);
    }
  }

  /**
   * @param null|int $id
   *
   * @return Token
   *
   * @throws ValidationException
   */
  function setId($id): self
  {
    if (isset($id) && $id <= 0) {
      throw new ValidationException('ID should be NULL or positive integer');
    }

    $this->id = $id;
    return $this;
  }

  /**
   * @param int $created_at
   *
   * @return Token
   *
   * @throws ValidationException
   */
  function setCreatedAt(int $created_at): self
  {
    if ($created_at < 0) {
      throw new ValidationException('Created at should not be less than zero');
    }

    $this->created_at = $created_at;
    return $this;
  }

  /**
   * @param int $created_at
   *
   * @return Token
   *
   * @throws ValidationException
   */
  function setUpdatedAt(int $updated_at): self
  {
    if ($updated_at < 0) {
      throw new ValidationException('Updated at should not be less than zero');
    }

    $this->updated_at = $updated_at;
    return $this;
  }

  /**
   * @param int $expires_at
   *
   * @return Token
   *
   * @throws ValidationException
   */
  function setExpiresAt(int $expires_at): self
  {
    if ($expires_at < 0) {
      throw new ValidationException('Expires at should not be less than zero');
    }

    $this->expires_at = $expires_at;
    return $this;
  }

  /**
   * @param string $token
   *
   * @return Token
   *
   * @throws ValidationException
   */
  function setToken(string $token): self
  {
    if (empty($token)) {
      throw new ValidationException('Token should not be empty');
    }

    $this->token = $token;
    return $this;
  }

  /**
   * @param int $user_id
   *
   * @return Token
   *
   * @throws ValidationException
   */
  function setUser($user_id): self
  {
    if ($user_id <= 0) {
      throw new ValidationException('User ID should be positive integer');
    }

    $this->user_id = $user_id;
    return $this;
  }
}
