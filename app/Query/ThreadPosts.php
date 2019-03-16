<?php

namespace Imageboard\Query;

/**
 * @property-read int $thread_id
 * @property-read int $after
 */
class ThreadPosts extends Query
{
  /** @var int */
  protected $thread_id;

  /** @var int */
  protected $after;

  function __construct(int $thread_id, int $after = 0)
  {
    $this->thread_id = $thread_id;
    $this->after = $after;
  }

  /**
   * {@inheritDoc}
   */
  protected function getProperties() : array
  {
    return ['thread_id', 'after'];
  }
}
