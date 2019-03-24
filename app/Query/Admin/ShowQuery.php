<?php

namespace Imageboard\Query\Admin;

use Imageboard\Query\Query;

/**
 * @property-read int $id
 */
class ShowQuery extends Query
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
