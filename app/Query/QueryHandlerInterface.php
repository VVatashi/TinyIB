<?php

namespace Imageboard\Query;

/**
 * @method count($query)
 */
interface QueryHandlerInterface
{
  /**
   * Executes query.
   *
   * @param QueryInterface $query
   *
   * @return array
   */
  function handle($query);
}
