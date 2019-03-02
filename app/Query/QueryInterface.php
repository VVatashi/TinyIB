<?php

namespace Imageboard\Query;

interface QueryInterface
{
  /**
   * Returns array of properties.
   */
  function toArray() : array;
}
