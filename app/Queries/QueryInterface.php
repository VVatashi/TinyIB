<?php

namespace Imageboard\Queries;

interface QueryInterface
{
    /**
     * Returns array of properties.
     */
    function toArray() : array;
}
