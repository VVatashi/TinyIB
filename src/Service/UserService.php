<?php

namespace TinyIB\Service;

use TinyIB\Model\User;
use TinyIB\Model\UserInterface;
use TinyIB\Repository\UserRepositoryInterface;

class UserService implements UserServiceInterface
{
    /** @var UserRepositoryInterface $repository */
    protected $repository;

    /**
     * Creates a new UserService instance.
     */
    public function __construct(
        UserRepositoryInterface $repository
    ) {
        $this->repository = $repository;
    }

    /**
     * {@inheritDoc}
     */
    public function register(string $email, string $password) : UserInterface
    {
        if (empty($email)) {
            throw new \Exception('Email should not be empty');
        }

        if (empty($password)) {
            throw new \Exception('Password should not be empty');
        }

        $user = $this->repository->getOne(['email' => $email]);
        if (isset($user)) {
            throw new \Exception('User with this email address is already exists');
        }

        $user = new User(0, $email, '', 0);
        $user = $user->withPassword($password);
        $this->repository->insert($user);
        return $this->repository->getOne(['email' => $email]);
    }

    /**
     * {@inheritDoc}
     */
    public function login(string $email, string $password) : UserInterface
    {
        if (empty($email)) {
            throw new \Exception('Email should not be empty');
        }

        if (empty($password)) {
            throw new \Exception('Password should not be empty');
        }

        $user = $this->repository->getOne(['email' => $email]);
        if (!isset($user)) {
            throw new \Exception('User with this email address is not exists');
        }

        /** @var \TinyIB\Model\UserInterface $user */
        if (!$user->checkPassword($password)) {
            throw new \Exception('Incorrect password');
        }

        if ($user->getRole() === 0) {
            throw new \Exception('User is not activated');
        }

        $_SESSION['user'] = $user;
        return $user;
    }

    /**
     * {@inheritDoc}
     */
    public function logout()
    {
        unset($_SESSION['user']);
    }
}
