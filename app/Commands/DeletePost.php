<?php

namespace Imageboard\Commands;

/**
 * @property-read int $id
 */
class DeletePost extends Command
{
    protected $id;

    public function __construct(int $id)
    {
        $this->id = $id;
    }
}
