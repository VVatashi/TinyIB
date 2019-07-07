<?php

namespace Imageboard\Services\Cache;

/**
 * CacheInterface stub.
 */
class NoCache implements CacheInterface
{
  /**
   * {@inheritDoc}
   */
  function exists(string $key): bool
  {
    return false;
  }

  /**
   * {@inheritDoc}
   */
  function get(string $key)
  {
    return null;
  }

  /**
   * {@inheritDoc}
   */
  function set(string $key, string $value, $expire = null): string
  {
    return $value;
  }

  /**
   * {@inheritDoc}
   */
  function delete(string $key)
  {
    return null;
  }

  /**
   * {@inheritDoc}
   */
  function deletePattern(string $pattern): int
  {
    return 0;
  }
}
