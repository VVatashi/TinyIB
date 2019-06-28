<?php

namespace Imageboard\Model;

use Imageboard\Exception\ValidationException;

/**
 * @property-read int $id
 * @property-read int $created_at
 * @property-read int $updated_at
 * @property-read string $message
 * @property-read int $user_id
 */
class ModLog extends Model
{
  /** @var null|int */
  protected $id = null;

  /** @var int */
  protected $created_at = 0;

  /** @var int */
  protected $updated_at = 0;

  /** @var string */
  protected $message = '';

  /** @var null|int */
  protected $user_id = 0;

  /**
   * ModLog constructor.
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
      $this->setMessage($attributes['message'] ?? '');
      $this->setUser($attributes['user_id'] ?? null);
    }
  }

  /**
   * @param null|int $id
   *
   * @return ModLog
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
   * @return ModLog
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
   * @param int $updated_at
   *
   * @return ModLog
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
   * @param string $message
   *
   * @return ModLog
   */
  function setMessage(string $message): self
  {
    $this->message = $message;
    return $this;
  }

  /**
   * @param null|int $user_id
   *
   * @return ModLog
   *
   * @throws ValidationException
   */
  function setUser($user_id): self
  {
    if (isset($user_id) && $user_id <= 0) {
      throw new ValidationException('User ID should be NULL or positive integer');
    }

    $this->user_id = $user_id;
    return $this;
  }
}
