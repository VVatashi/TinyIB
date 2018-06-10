<?php

namespace TinyIB\Service;

interface PostServiceInterface
{
    /**
     * Processes poster name.
     *
     * @param string $name
     *   Poster name.
     *
     * @return array
     *   Array keys:
     *     name - processed poster name;
     *     tripcode - processed poster tripcode.
     */
    function processName(string $name) : array;
}
