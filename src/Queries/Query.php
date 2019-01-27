<?php

namespace TinyIB\Queries;

class Query implements QueryInterface
{
    public function __get(string $name)
    {
        return property_exists($this, $name) ? $this->$name : null;
    }
}
