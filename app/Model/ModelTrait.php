<?php

namespace Imageboard\Model;

use Imageboard\Service\ConfigService;

trait ModelTrait
{
  /** @var \Imageboard\Service\ConfigService */
  protected static $config_service = null;

  public function __construct ()
  {
    self::$config_service = new ConfigService();
  }

  /**
   * @return \Imageboard\Service\ConfigService
   */
  protected function config_service() {
    return self::config();
  }

  protected static function config() {
    if (self::$config_service == null) {
      self::$config_service = new ConfigService();
    }

    return self::$config_service;
  }
}
