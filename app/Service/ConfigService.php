<?php

namespace Imageboard\Service;

use Imageboard\Exception\ConfigServiceException;

/**
 * Class ConfigService
 *
 * @package Imageboard\Service
 */
class ConfigService implements ConfigServiceInterface
{
  const CONFIG_PREFIX = 'TINYIB_';
  const PARAM_GET = 'get';

  /**
   * @var string
   */
  protected $_configPath = __DIR__ . "./../../settings.php";

  /**
   * @var array
   */
  protected $_config;

  /**
   * @var ConfigService
   */
  private static $instance;

  public static function getInstance(): ConfigService {
    return static::$instance = static::$instance ?? new static();
  }

  /**
   * ConfigService constructor.
   *
   * @throws \Imageboard\Exception\ConfigServiceException
   */
  public function __construct() {
    if(!@require_once($this->_configPath)) {
      throw new ConfigServiceException(
        "Please copy the file settings.default.php to settings.php",
        0,
        null,
        self::class
      );
    }

    foreach (get_defined_constants() as $key => $value) {
      if(strtoupper(substr( $key, 0, strlen(self::CONFIG_PREFIX) )) == self::CONFIG_PREFIX) {
        $this->_config[$key] = $value;
      }
    }
  }

  /**
   * @property  string $bar
   *
   * @param string $name
   * @param array  $params
   *
   * @return mixed
   * @throws \Imageboard\Exception\ConfigServiceException
   */
  public function __call(string $name, array $params) {
    // TODO: PhpStorm validator fix "PhpUndefinedMethodInspection"

    if(!strtolower(substr($name, 0, strlen(self::PARAM_GET))) == self::PARAM_GET) {
      throw new ConfigServiceException(
        "Cannot find method. Are you drunk?",
        0,
        null,
        self::class);
    }

    // Get key
    $regexp = '!([A-Z][A-Z0-9]*(?=$|[A-Z][a-z0-9])|[A-Za-z][a-z0-9]+)!';
    preg_match_all($regexp, substr($name, 2), $matches);

    $ret = $matches[0];
    foreach ($ret as &$match) {
      $match = strtoupper($match);
    }

    return $this->get(self::CONFIG_PREFIX . implode('_', $ret));
  }

  /**
   * {@inheritDoc}
   */
  public function get(string $key, $default = false) {
    return $this->_config[$key] ?? $default;
  }

  /**
   * {@inheritDoc}
   */
  public function setIfNotExists(string $key, $value) {
    if(!array_key_exists($this->_config[$key], $this->_config)) {
      $this->_config[$key] = $value;
    }

    return $this;
  }
}
