<?php

namespace TinyIB\Repository;

interface RepositoryInterface
{
    /**
     * @param array $conditions
     * @param string|null $order
     *
     * @return array
     */
    public function getAll(array $conditions = [], $order = null, $columns = '*');

    /**
     * @param array $conditions
     * @param string|null $order
     * @param int $take
     * @param int $skip
     * @param string $columns
     *
     * @return array
     */
    public function getRange(array $conditions, $order, $take, $skip = 0, $columns = '*');

    /**
     * @param array $conditions
     * @param string|null $order
     * @param string $columns
     *
     * @return mixed
     */
    public function getOne(array $conditions, $order = null, $columns = '*');

    /**
     * @param array $conditions
     * @param string $columns
     *
     * @return int
     */
    public function getCount(array $conditions, $columns = '*');

    /**
     * @param mixed $model
     *
     * @return int Row affected count.
     */
    public function insert($model);

    /**
     * @param array $conditions
     * @param mixed $model
     *
     * @return int Row affected count.
     */
    public function update(array $conditions, $data);

    /**
     * @param array $conditions
     *
     * @return int Row affected count.
     */
    public function delete(array $conditions);

    /**
     * Returns ID of the last inserted row.
     *
     * @return string
     *   ID.
     */
    public function getLastInsertId() : string;
}
