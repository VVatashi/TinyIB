<?php

namespace Imageboard\Query;

/**
 * @property-read int $skip
 * @property-read int $take
 */
class ListQuery extends Query
{
  /** @var int */
  protected $skip;

  /** @var int */
  protected $take;

  function __construct(int $skip, int $take)
  {
    $this->skip = $skip;
    $this->take = $take;
  }

  /**
   * {@inheritDoc}
   */
  protected function getProperties() : array
  {
    return ['skip', 'take'];
  }
}
