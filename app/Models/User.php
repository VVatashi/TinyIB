<?php

namespace Imageboard\Models;

use Imageboard\Exceptions\ValidationException;

/**
 * @property-read int $id
 * @property-read int $created_at
 * @property-read int $updated_at
 * @property-read int $deleted_at
 * @property-read string $email
 * @property-read string $password_hash
 * @property-read int $role
 */
class User extends Model
{
  const ROLE_ANONYMOUS = 0;
  const ROLE_USER = 1;
  const ROLE_MODERATOR = 2;
  const ROLE_ADMINISTRATOR = 3;

  /**
   * User constructor.
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
      $this->setEmail($attributes['email'] ?? '');
      $this->setPasswordHash($attributes['password_hash'] ?? '');
      $this->setRole($attributes['role'] ?? 0);
    }
  }

  /**
   * @param null|int $id
   *
   * @return User
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
   * @return User
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
   * @return User
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
   * @return User
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
   * @param string $email
   *
   * @return User
   *
   * @throws ValidationException
   */
  function setEmail(string $email): self
  {
    if (empty($email)) {
      throw new ValidationException('Email hash should not be empty');
    }

    $this->email = $email;
    return $this;
  }

  /**
   * @param string $password_hash
   *
   * @return User
   *
   * @throws ValidationException
   */
  function setPasswordHash(string $password_hash): self
  {
    if (empty($password_hash)) {
      throw new ValidationException('Password hash should not be empty');
    }

    $this->password_hash = $password_hash;
    return $this;
  }

  /**
   * @param string $password
   *
   * @return User
   */
  function setPassword(string $password): self
  {
    $this->password_hash = password_hash($password, PASSWORD_BCRYPT);
    return $this;
  }

  /**
   * @param int $role
   *
   * @return User
   *
   */
  function setRole(int $role): self
  {
    $this->role = $role;
    return $this;
  }

  /**
   * @param string $password
   *
   * @return bool
   */
  function checkPassword(string $password): bool
  {
    return password_verify($password, $this->password_hash);
  }

  /**
   * Checks if this user is an anonymous.
   *
   * @return bool
   */
  function isAnonymous(): bool
  {
    return $this->id === 0;
  }

  /**
   * Checks if this user is a moderator.
   *
   * @return bool
   */
  function isMod(): bool
  {
    /** @todo Role system. */
    return $this->role >= static::ROLE_MODERATOR;
  }

  /**
   * Checks if this user is an admin.
   *
   * @return bool
   */
  function isAdmin(): bool
  {
    /** @todo Role system. */
    return $this->role >= static::ROLE_ADMINISTRATOR;
  }
}
