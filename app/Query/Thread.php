<?php

namespace Imageboard\Query;

/**
 * @property-read int $thread_id
 */
class Thread extends Query
{
  /** @var int */
  protected $thread_id;

  function __construct(int $thread_id)
  {
    $this->thread_id = $thread_id;
  }

  /**
   * {@inheritDoc}
   */
  protected function getProperties() : array
  {
    return ['thread_id'];
  }
}
