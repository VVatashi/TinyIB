<?php

namespace Imageboard\Command;

class Command implements CommandInterface
{
    public function __get(string $name)
    {
        return property_exists($this, $name) ? $this->$name : null;
    }
}
