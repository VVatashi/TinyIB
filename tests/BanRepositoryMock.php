<?php

namespace TinyIB\Tests;

use TinyIB\Model\Ban;
use TinyIB\Model\BanInterface;
use TinyIB\Repository\BanRepositoryInterface;

class BanRepositoryMock implements BanRepositoryInterface
{
    /**
     * {@inheritDoc}
     */
    public function getAll($conditions = [], $order = null, $columns = '*')
    {
        return [];
    }

    /**
     * {@inheritDoc}
     */
    public function getRange($conditions, $order, $take, $skip = 0, $columns = '*')
    {
        return [];
    }

    /**
     * {@inheritDoc}
     */
    public function getOne($conditions, $order = null, $columns = '*')
    {
        return [];
    }

    /**
     * {@inheritDoc}
     */
    public function getCount($conditions, $columns = '*')
    {
        return 0;
    }

    /**
     * {@inheritDoc}
     */
    public function insert($data)
    {
        return 0;
    }

    /**
     * {@inheritDoc}
     */
    public function update($conditions, $data)
    {
        return 0;
    }

    /**
     * {@inheritDoc}
     */
    public function delete($conditions)
    {
        return 0;
    }

    /**
     * {@inheritDoc}
     */
    public function inTransaction()
    {
        return false;
    }

    /**
     * {@inheritDoc}
     */
    public function beginTransaction()
    {
        return true;
    }

    /**
     * {@inheritDoc}
     */
    public function commit()
    {
        return true;
    }

    /**
     * {@inheritDoc}
     */
    public function banByID(int $id)
    {
        return new Ban(0, '', 0, 0, '');
    }

    /**
     * {@inheritDoc}
     */
    public function banByIP(string $ip)
    {
        return new Ban(0, '', 0, 0, '');
    }

    /**
     * {@inheritDoc}
     */
    public function allBans() : array
    {
        return new Ban(0, '', 0, 0, '');
    }

    /**
     * {@inheritDoc}
     */
    public function insertBan(BanInterface $ban) : int
    {
        return 0;
    }

    /**
     * {@inheritDoc}
     */
    public function clearExpiredBans()
    {
    }

    /**
     * {@inheritDoc}
     */
    public function deleteBanByID(int $id)
    {
    }
}
