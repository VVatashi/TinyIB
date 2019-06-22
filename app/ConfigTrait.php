<?php

namespace Imageboard;

use Imageboard\Service\ConfigService;

trait ConfigTrait
{
  protected function config($key, $default = null) {
    return ConfigService::getInstance()->get($key, $default);
  }
}
