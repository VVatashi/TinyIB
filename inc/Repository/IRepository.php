<?php

namespace TinyIB\Repository;

interface IRepository
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
     * @param integer $take
     * @param integer $skip
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
     * @return integer
     */
    public function getCount($conditions, $columns = '*');

    /**
     * @param array $data
     */
    public function insert($data);

    /**
     * @param array $conditions
     * @param array $data
     */
    public function update($conditions, $data);

    /**
     * @param array $conditions
     */
    public function delete($conditions);
}
