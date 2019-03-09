<?php

namespace Imageboard\Query;

use DateTime;

/**
 * @property-read int $skip
 * @property-read int $take
 * @property-read int $date_from
 * @property-read int $date_to
 */
class ListQuery extends Query
{
  /** @var int */
  protected $skip;

  /** @var int */
  protected $take;

  /** @var int */
  protected $date_from;

  /** @var int */
  protected $date_to;

  function __construct(int $skip, int $take, DateTime $date_from = null, DateTime $date_to = null)
  {
    $this->skip = $skip;
    $this->take = $take;
    $this->date_from = isset($date_from) ? $date_from->getTimestamp() : 0;
    $this->date_to = isset($date_to) ? $date_to->getTimestamp() : PHP_INT_MAX;
  }

  /**
   * {@inheritDoc}
   */
  protected function getProperties() : array
  {
    return ['skip', 'take', 'date_from', 'date_to'];
  }
}
