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
  public function get(string $key, $default = '');
}
