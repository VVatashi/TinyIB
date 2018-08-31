<?php

namespace TinyIB\Model;

interface BanInterface
{
    /**
     * Returns ID of the ban.
     *
     * @return int
     *   Ban ID.
     */
    public function getID() : int;

    /**
     * Sets ID for the ban.
     *
     * @param int $id
     *   Ban ID.
     *
     * @return self
     */
    public function withID(int $id) : BanInterface;

    /**
     * Returns IP of the ban.
     *
     * @return string
     *   Ban IP.
     */
    public function getIP() : string;

    /**
     * Sets IP for the ban.
     *
     * @param string $ip
     *   Ban IP.
     *
     * @return self
     */
    public function withIP(string $ip) : BanInterface;

    /**
     * Returns created timestamp of the ban.
     *
     * @return int
     *   Ban created timestamp.
     */
    public function getCreatedDate() : int;

    /**
     * Sets created timestamp for the ban.
     *
     * @param int $created_at
     *   Ban created timestamp.
     *
     * @return self
     */
    public function withCreatedDate(int $created_at) : BanInterface;

    /**
     * Returns expires timestamp of the ban.
     *
     * @return int
     *   Ban expires timestamp.
     */
    public function getExpiresDate() : int;

    /**
     * Sets expires timestamp for the ban.
     *
     * @param int $expires_at
     *   Ban expires timestamp.
     *
     * @return self
     */
    public function withExpiresDate(int $expires_at) : BanInterface;

    /**
     * Checks if ban is a permanent.
     *
     * @return bool
     */
    public function isPermanent() : bool;

    /**
     * Checks if ban is expired.
     *
     * @return bool
     */
    public function isExpired() : bool;

    /**
     * Returns reason string of the ban.
     *
     * @return string
     *   Ban reason string.
     */
    public function getReason() : string;

    /**
     * Checks if ban has a reason phrase.
     */
    public function hasReason() : bool;

    /**
     * Sets IP for the ban.
     *
     * @param string $reason
     *   Ban reason string.
     *
     * @return self
     */
    public function withReason(string $reason) : BanInterface;
}
