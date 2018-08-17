<?php

namespace TinyIB\Tests\Mock;

use TinyIB\Repository\RepositoryInterface;

class RepositoryMock implements RepositoryInterface
{
    /** @var array $items */
    protected $items;

    /**
     * Checks conditions on an item.
     *
     * @return array
     */
    protected function checkConditions($item, array $conditions = []) : bool
    {
        $reflection = new \ReflectionClass($item);
        foreach ($conditions as $key => $value) {
            $property = $reflection->getProperty($key);
            $property->setAccessible(true);
            if ($property->getValue($item) !== $value) {
                return false;
            }
        }

        return true;
    }

    /**
     * {@inheritDoc}
     */
    public function getAll(array $conditions = [], $order = null, $columns = '*')
    {
        return $this->items;
    }

    /**
     * {@inheritDoc}
     */
    public function getRange(array $conditions, $order, $take, $skip = 0, $columns = '*')
    {
        return $this->items;
    }

    /**
     * {@inheritDoc}
     */
    public function getOne(array $conditions, $order = null, $columns = '*')
    {
        $items = array_filter($this->items, function ($item) use ($conditions) {
            return $this->checkConditions($item, $conditions);
        });
        $item = reset($items);
        return $item !== false ? $item : null;
    }

    /**
     * {@inheritDoc}
     */
    public function getCount(array $conditions, $columns = '*')
    {
        return count($this->items);
    }

    /**
     * {@inheritDoc}
     */
    public function insert($data)
    {
        $this->items[] = $data;
        return 1;
    }

    /**
     * {@inheritDoc}
     */
    public function update(array $conditions, $data)
    {
        return 0;
    }

    /**
     * {@inheritDoc}
     */
    public function delete(array $conditions)
    {
        return 0;
    }

    /**
     * {@inheritDoc}
     */
    public function getLastInsertId() : string
    {
        return '0';
    }
}
