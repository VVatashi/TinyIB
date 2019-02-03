<?php

namespace TinyIB\Queries;

interface QueryInterface
{
    /**
     * Returns array of properties.
     */
    function toArray() : array;
}
