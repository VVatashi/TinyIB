<?php

namespace Imageboard\Query;

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
