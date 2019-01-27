<?php

namespace TinyIB\Queries;

/**
 * @property-read int $id
 */
class ShowPost extends Query
{
    protected $id;

    public function __construct(int $id)
    {
        $this->id = $id;
    }
}
