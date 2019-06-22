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
   * @throws ValidationException
   */
  function setId($id)
  {
    if (isset($id) && $id <= 0) {
      throw new ValidationException('ID should be NULL or positive integer');
    }

    $this->id = $id;
  }

  /**
   * @param int $created_at
   *
   * @throws ValidationException
   */
  function setCreatedAt(int $created_at)
  {
    if ($created_at < 0) {
      throw new ValidationException('Created at should not be less than zero');
    }

    $this->created_at = $created_at;
  }

  /**
   * @param int $created_at
   *
   * @throws ValidationException
   */
  function setUpdatedAt(int $updated_at)
  {
    if ($updated_at < 0) {
      throw new ValidationException('Updated at should not be less than zero');
    }

    $this->updated_at = $updated_at;
  }

  /**
   * @param int $expires_at
   *
   * @throws ValidationException
   */
  function setExpiresAt(int $expires_at)
  {
    if ($expires_at < 0) {
      throw new ValidationException('Expires at should not be less than zero');
    }

    $this->expires_at = $expires_at;
  }

  /**
   * @param string $token
   */
  function setToken(string $token)
  {
    if (empty($token)) {
      throw new ValidationException('Token should not be empty');
    }

    $this->token = $token;
  }

  /**
   * @param int $user_id
   */
  function setUser($user_id)
  {
    if ($user_id <= 0) {
      throw new ValidationException('User ID should be positive integer');
    }

    $this->user_id = $user_id;
  }
}
