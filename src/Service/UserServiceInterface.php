<?php

namespace TinyIB\Service;

use TinyIB\Model\UserInterface;

interface UserServiceInterface
{
    /**
     * Registers user.
     *
     * @param string $email
     *   User email.
     *
     * @param string $password
     *   User password.
     *
     * @return \TinyIB\Model\UserInterface
     *   User object instance.
     *
     * @throws \Exception
     *   On validation errors.
     */
    public function register(string $email, string $password) : UserInterface;

    /**
     * Logs in user.
     *
     * @param string $email
     *   User email.
     *
     * @param string $password
     *   User password.
     *
     * @return \TinyIB\Model\UserInterface
     *   User object instance.
     *
     * @throws \Exception
     *   On validation errors.
     */
    public function login(string $email, string $password) : UserInterface;

    /**
     * Logs out current user.
     */
    public function logout();
}
