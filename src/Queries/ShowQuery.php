<?php

namespace TinyIB\Queries;

/**
 * @property-read int $id
 */
class ShowQuery extends Query
{
    protected $id;

    public function __construct(int $id)
    {
        $this->id = $id;
    }

    /**
     * {@inheritDoc}
     */
    protected function getProperties() : array
    {
        return ['id'];
    }
}
