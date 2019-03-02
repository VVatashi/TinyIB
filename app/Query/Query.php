<?php

namespace Imageboard\Query;

abstract class Query implements QueryInterface
{
    /**
     * Returns property if it is exists.
     */
    public function __get(string $name)
    {
        return property_exists($this, $name) ? $this->$name : null;
    }

    /**
     * Returns array of property names.
     *
     * @return string[]
     */
    protected abstract function getProperties() : array;

    /**
     * {@inheritDoc}
     */
    public function toArray() : array
    {
        $properties = [];
        $property_names = $this->getProperties();
        foreach ($property_names as $property_name) {
            $properties[$property_name] = $this->$property_name;
        }

        return $properties;
    }
}
