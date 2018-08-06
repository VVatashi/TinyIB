<?php

namespace TinyIB\Repository;

use TinyIB\Model\BanInterface;

interface BanRepositoryInterface extends RepositoryInterface
{
    /**
     * Returns ban by ID.
     *
     * @param integer $id
     *
     * @return \TinyIB\Model\BanInterface|null
     */
    public function banByID(int $id);

    /**
     * Returns ban by IP.
     *
     * @param string $ip
     *
     * @return \TinyIB\Model\BanInterface|null
     */
    public function banByIP(string $ip);

    /**
     * Returns all bans.
     *
     * @return \TinyIB\Model\BanInterface[]
     */
    public function allBans() : array;

    /**
     * Creates a new ban.
     *
     * @param \TinyIB\Model\BanInterface $ban
     *
     * @return int
     *   Ban ID.
     */
    public function insertBan(BanInterface $ban) : int;

    /**
     * Removes expired bans.
     */
    public function clearExpiredBans();

    /**
     * Removes ban by ID.
     *
     * @param integer $id
     */
    public function deleteBanByID(int $id);
}
