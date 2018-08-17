<?php

namespace TinyIB\Model;

trait ImmutableTrait
{
    /**
     * Creates a copy of this instance with the specified property value.
     *
     * @param string $property
     * @param mixed $value
     *
     * @return self
     */
    protected function with(string $property, $value)
    {
        $instance = clone $this;
        $instance->$property = $value;
        return $instance;
    }
}
