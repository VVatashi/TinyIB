<?php

namespace Imageboard\Model;

use Imageboard\Service\ConfigService;

trait ModelTrait
{
  protected function config($key, $default = null) {
    return ConfigService::getInstance()->get($key, $default);
  }
}
