<?php

namespace TinyIB\Repository;

interface IBanRepository extends IRepository
{
    /**
     * @param integer $id
     *
     * @return array
     */
    public function banByID($id);

    /**
     * @param string $ip
     *
     * @return array
     */
    public function banByIP($ip);

    /**
     * @return array
     */
    public function allBans();

    /**
     * @param array $ban
     *
     * @return array
     */
    public function insertBan($ban);

    public function clearExpiredBans();

    /**
     * @param integer $id
     */
    public function deleteBanByID($id);
}
