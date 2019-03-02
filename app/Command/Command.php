<?php

namespace Imageboard\Command;

class Command implements CommandInterface
{
  function __get(string $name)
  {
    return property_exists($this, $name) ? $this->$name : null;
  }
}
