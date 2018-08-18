<?php

namespace TinyIB\Model;

interface UserInterface
{
    /**
     * @return int
     */
    public function getID() : int;

    /**
     * @return string
     */
    public function getEmail() : string;

    /**
     * @param string $email
     *
     * @return self
     */
    public function withEmail(string $email) : UserInterface;

    /**
     * @return string
     */
    public function getPasswordHash() : string;

    /**
     * @param string $password
     *
     * @return bool
     */
    public function checkPassword(string $password) : bool;

    /**
     * @param string $password
     *
     * @return self
     */
    public function withPassword(string $password) : UserInterface;

    /**
     * @return int
     */
    public function getRole() : int;

    /**
     * @param int $role
     *
     * @return self
     */
    public function withRole(int $role) : UserInterface;

    /**
     * Checks if this user is an anonymous.
     *
     * @return bool
     */
    public function isAnonymous() : bool;

    /**
     * Checks if this user is a moderator.
     *
     * @return bool
     */
    public function isMod() : bool;

    /**
     * Checks if this user is an admin.
     *
     * @return bool
     */
    public function isAdmin() : bool;
}
