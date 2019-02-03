<?php

namespace TinyIB\Queries;

/**
 * @property-read int $skip
 * @property-read int $take
 */
class ListQuery extends Query
{
    protected $skip;
    protected $take;

    public function __construct(int $skip, int $take)
    {
        $this->skip = $skip;
        $this->take = $take;
    }

    /**
     * {@inheritDoc}
     */
    protected function getProperties() : array
    {
        return ['skip', 'take'];
    }
}
