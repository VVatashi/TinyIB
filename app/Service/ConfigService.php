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
  const HASH_SYMBOL = '#';

  /**
   * @var string
   */
  protected $_configPath;

  /**
   * @var array
   */
  protected $_config = [];

  /**
   * @var ConfigService
   */
  private static $instance;

  public static function getInstance(): ConfigService {
    return static::$instance = static::$instance ?? new static();
  }

  public function __construct ()
  {
    $this->_configPath = __DIR__ . "/../../.env";

    if(strtolower(getenv("ENVIRONMENT")) == "test") {
      $this->_configPath .= ".testing";
    }
  }

  /**
   * Reset internal config array
   *
   * @return $this
   */
  public function resetConfig() {
    $this->_config = [];

    return $this;
  }

  /**
   * Set config path
   *
   * @param string $path
   *
   * @return $this
   */
  public function setConfigPath(string $path) {
    $this->_configPath = $path;

    return $this;
  }

  /**
   * Cleanup array
   *
   * @param string $value
   *
   * @return string
   */
  protected function removeComment(string $value) {
    $temp = preg_split('/(#)/', $value, -1, PREG_SPLIT_DELIM_CAPTURE);
    $hashArray = [];

    foreach ($temp as $item) {

      // Remove useless spaces and tabs
      $item = trim($item);

      // Ignore any string after comment
      $isEmptyOrComment = strlen($item) > 0 && $item[0] != self::HASH_SYMBOL;

      if(!$isEmptyOrComment) {
        break;
      }

      // Add trimmed value
      $hashArray[] = $item;
    }

    return implode("", $hashArray);
  }

  protected function importEnvData(string $data) {
    // Processing line-by-line
    foreach (\mb_split("\n", $data) as $line) {
      $splited = mb_split("=", $line);

      $isSplitted = !isset($splited[0]);

      $key = $this->removeComment($splited[0]);
      $emptyLine = strlen($key) < 1;

      // Ignore empty keys
      if($isSplitted || $emptyLine) continue;

      $value = isset($splited[1]) && $this->removeComment($splited[1])
        ? $this->removeComment($splited[1]) : "";

      $value_low = strtolower($value);

      // Normalize value type.
      if ($value_low === 'null') {
        $value = null;
      } elseif ($value_low === 'true') {
        $value = true;
      } elseif ($value_low === 'false') {
        $value = false;
      } elseif (is_integer($value)) {
        $value = (int)$value;
      }

      $this->_config[$key] = $value;
    }
  }

  /**
   * @throws \Imageboard\Exception\ConfigServiceException
   */
  protected function _setupConfig() {
    // Do not rewrite config
    if(count($this->_config) > 0) return;

    // Stop application on missing configuration file
    $isConfigFileExists = file_exists($this->_configPath);

    if(!$isConfigFileExists) {
      throw new ConfigServiceException(
        "Please copy the file .env.sample to .env",
        0,
        null,
        self::class
      );
    }

    // Normalize file endings
    $data = str_replace("\r\n", "\n", file_get_contents($this->_configPath));
    $this->importEnvData($data);
  }

  /**
   * {@inheritDoc}
   * @throws \Imageboard\Exception\ConfigServiceException
   */
  public function get(string $key, $default = '') {
    $this->_setupConfig();
    $result = $this->_config[$key] ?? $default;
    return $result;
  }
}
