<?php

namespace Imageboard\Query;

/**
 * @property-read string $token
 */
class Token extends Query
{
  /** @var string */
  protected $token;

  function __construct(string $token)
  {
    $this->token = $token;
  }

  /**
   * {@inheritDoc}
   */
  protected function getProperties() : array
  {
    return ['token'];
  }
}
