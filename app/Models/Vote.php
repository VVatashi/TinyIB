<?php

namespace Imageboard\Models;

use Imageboard\Exceptions\ValidationException;

/**
 * @property-read int $id
 * @property-read int $post_id
 * @property-read int $user_id
 * @property-read int $score
 */
class Vote extends Model
{
  /** @var null|int */
  protected $id = null;

  /** @var int */
  protected $post_id = 0;

  /** @var int */
  protected $user_id = 0;

  /** @var int */
  protected $score = 0;

  /**
   * Vote constructor.
   *
   * @param array $attributes
   * @param bool  $validate
   */
  function __construct(array $attributes = [], bool $validate = true)
  {
    parent::__construct($attributes);

    if ($validate) {
      $this->setId($attributes['id'] ?? null);
      $this->setPostId($attributes['post_id'] ?? 0);
      $this->setUserId($attributes['user_id'] ?? 0);
      $this->setScore($attributes['score'] ?? 0);
    }
  }

  /**
   * @param null|int $id
   *
   * @return Vote
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
   * @param int $post_id
   *
   * @return Vote
   *
   * @throws ValidationException
   */
  function setPostId(int $post_id): self
  {
    if ($post_id <= 0) {
      throw new ValidationException('Post ID should be positive integer');
    }

    $this->post_id = $post_id;
    return $this;
  }

  /**
   * @param int $user_id
   *
   * @return Vote
   *
   * @throws ValidationException
   */
  function setUserId(int $user_id): self
  {
    if ($user_id <= 0) {
      throw new ValidationException('User ID should be positive integer');
    }

    $this->user_id = $user_id;
    return $this;
  }

  /**
   * @param int $score
   *
   * @return Vote
   *
   * @throws ValidationException
   */
  function setScore(int $score): self
  {
    $this->score = $score;
    return $this;
  }
}
