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
    public function getAll($conditions = [], $order = null, $columns = '*');

    /**
     * @param array $conditions
     * @param string|null $order
     * @param int $take
     * @param int $skip
     * @param string $columns
     *
     * @return array
     */
    public function getRange($conditions, $order, $take, $skip = 0, $columns = '*');

    /**
     * @param array $conditions
     * @param string|null $order
     * @param string $columns
     *
     * @return array
     */
    public function getOne($conditions, $order = null, $columns = '*');

    /**
     * @param array $conditions
     * @param string $columns
     *
     * @return int
     */
    public function getCount($conditions, $columns = '*');

    /**
     * @param array $data
     *
     * @return int Row affected count.
     */
    public function insert($data);

    /**
     * @param array $conditions
     * @param array $data
     *
     * @return int Row affected count.
     */
    public function update($conditions, $data);

    /**
     * @param array $conditions
     *
     * @return int Row affected count.
     */
    public function delete($conditions);

    /**
     * @return bool
     */
    public function inTransaction();

    /**
     * @return bool
     */
    public function beginTransaction();

    /**
     * @return bool
     */
    public function commit();

    /**
     * Returns ID of the last inserted row.
     *
     * @return string
     *   ID.
     */
    public function getLastInsertId() : string;
}
