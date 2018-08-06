<?php

namespace TinyIB\Service;

use TinyIB\Model\BanInterface;

interface BanServiceInterface
{
    /**
     * Returns all bans.
     *
     * @return \TinyIB\Model\BanInterface[]
     */
    public function getAll() : array;

    /**
     * Loads a single ban model by the ID.
     *
     * @param integer $id
     *
     * @return \TinyIB\Model\BanInterface|null
     */
    public function getByID(int $id);

    /**
     * Loads a single ban model by the IP.
     *
     * @param string $ip
     *
     * @return \TinyIB\Model\BanInterface|null
     */
    public function getByIP(string $ip);

    /**
     * Returns count of all bans.
     */
    public function getCount() : int;

    /**
     * Creates a new ban.
     *
     * @param string $ip
     * @param int $expires_at
     * @param string $reason
     *
     * @return BanInterface
     *   Ban model.
     */
    public function create(string $ip, int $expires_at = 0, string $reason = '') : BanInterface;

    /**
     * Lifts ban by the ID.
     *
     * @param $id
     */
    public function liftByID(int $id);

    /**
     * Removes expired bans.
     */
    public function removeExpired();
}
