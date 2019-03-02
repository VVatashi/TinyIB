<?php

namespace Imageboard\Cache;

/**
 * CacheInterface stub.
 */
class NoCache implements CacheInterface
{
  /**
   * {@inheritDoc}
   */
  public function exists(string $key): bool
  {
    return false;
  }

  /**
   * {@inheritDoc}
   */
  public function get(string $key)
  {
    return null;
  }

  /**
   * {@inheritDoc}
   */
  public function set(string $key, string $value, $expire = null): string
  {
    return $value;
  }

  /**
   * {@inheritDoc}
   */
  public function delete(string $key)
  {
    return null;
  }

  /**
   * {@inheritDoc}
   */
  public function deletePattern(string $pattern): int
  {
    return 0;
  }
}
