<?php

namespace Imageboard\Service;

/**
 * Interface ConfigServiceInterface
 *
 * @package Imageboard\Service
 */
interface ConfigServiceInterface
{
  /**
   * Get value
   *
   * @param string $key
   * @param        $default
   *
   * @return mixed
   */
  public function get(string $key, $default = false);

  /**
   * Set value if not exists
   *
   * @param string $key
   * @param        $value
   *
   * @return mixed
   */
  public function setIfNotExists(string $key, $value);
}
