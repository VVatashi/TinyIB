<?php

namespace TinyIB\Service;

use TinyIB\Model\BanInterface;

interface BanServiceInterface
{
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
