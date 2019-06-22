<?php

namespace Imageboard\Model;

use Imageboard\Exception\ValidationException;

/**
 * @property-read int $id
 * @property-read int $created_at
 * @property-read int $updated_at
 * @property-read int $deleted_at
 * @property-read int $expires_at
 * @property-read string $ip
 * @property-read string $reason
 */
class Ban extends Model
{
  /** @var null|int */
  protected $id = null;

  /** @var int */
  protected $created_at = 0;

  /** @var int */
  protected $updated_at = 0;

  /** @var int */
  protected $deleted_at = 0;

  /** @var int */
  protected $expires_at = 0;

  /** @var string */
  protected $ip = '';

  /** @var string */
  protected $reason = '';

  /**
   * Ban constructor.
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
      $this->setDeletedAt($attributes['deleted_at'] ?? null);
      $this->setExpiresAt($attributes['expires_at'] ?? 0);
      $this->setIp($attributes['ip'] ?? '');
      $this->setReason($attributes['reason'] ?? '');
    }
  }

  /**
   * @param null|int $id
   *
   * @return Ban
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
   * @return Ban
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
   * @return Ban
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
   * @param null|int $deleted_at
   *
   * @return Ban
   *
   * @throws ValidationException
   */
  function setDeletedAt($deleted_at): self
  {
    if (isset($deleted_at) && $deleted_at <= 0) {
      throw new ValidationException('Deleted at should be NULL or positive integer');
    }

    $this->deleted_at = $deleted_at;
    return $this;
  }

  /**
   * @param int $expires_at
   *
   * @return Ban
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
   * @param string $ip
   *
   * @return Ban
   *
   * @throws ValidationException
   */
  function setIp(string $ip): self
  {
    if (!preg_match('
/^
  (?:
    (?:
      25[0-5]|
      2[0-4][0-9]|
      1?[0-9][0-9]?
    )
    \.
  ){3}
  (?:
    25[0-5]|
    2[0-4][0-9]|
    1?[0-9][0-9]?
  )
$/x', $ip)) {
      throw new ValidationException('IP is invalid');
    }

    $this->ip = $ip;
    return $this;
  }

  /**
   * @param string $reason
   *
   * @return Ban
   */
  function setReason(string $reason): self
  {
    $this->reason = $reason;
    return $this;
  }

  /**
   * Checks if ban is permanent.
   *
   * @return bool
   */
  function isPermanent() : bool
  {
    return $this->expires_at === 0;
  }

  /**
   * Checks if ban is expired.
   *
   * @return bool
   */
  function isExpired() : bool
  {
    return !$this->isPermanent() && $this->expires_at < time();
  }

  /**
   * Checks if ban has a reason phrase.
   *
   * @return bool
   */
  function hasReason() : bool
  {
    return !empty($this->reason);
  }
}
