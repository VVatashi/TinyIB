<?php

namespace Imageboard\Model;

use Imageboard\Exception\ValidationException;

/**
 * @property-read int $id
 * @property-read int $post_id
 * @property-read int $target_id
 */
class RefMap extends Model
{
  /** @var null|int */
  protected $id = null;

  /** @var int */
  protected $post_id = 0;

  /** @var int */
  protected $target_id = 0;

  /**
   * RefMap constructor.
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
      $this->setTargetId($attributes['target_id'] ?? 0);
    }
  }

  /**
   * @param null|int $id
   *
   * @return RefMap
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
   * @return RefMap
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
   * @param int $target_id
   *
   * @return RefMap
   *
   * @throws ValidationException
   */
  function setTargetId(int $target_id): self
  {
    if ($target_id <= 0) {
      throw new ValidationException('Target post ID should be positive integer');
    }

    $this->target_id = $target_id;
    return $this;
  }
}
