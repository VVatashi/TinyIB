<?php

namespace Imageboard\Query;

/**
 * @property-read int $id
 */
class Post extends Query
{
  /** @var int */
  protected $id;

  function __construct(int $id)
  {
    $this->id = $id;
  }

  /**
   * {@inheritDoc}
   */
  protected function getProperties() : array
  {
    return ['id'];
  }
}
