<?php

namespace TinyIB\Model;

class User implements UserInterface
{
    use ImmutableTrait;

    /** @var int $id */
    protected $id;

    /** @var string $email */
    protected $email;

    /** @var string $password_hash */
    protected $password_hash;

    /** @var int $role */
    protected $role;

    /**
     * Creates a new User instance.
     */
    public function __construct(
        int $id,
        string $email,
        string $password_hash,
        int $role = 0
    ) {
        $this->id = $id;
        $this->email = $email;
        $this->password_hash = $password_hash;
        $this->role = $role;
    }

    /**
     * {@inheritDoc}
     */
    public function getID() : int
    {
        return $this->id;
    }

    /**
     * {@inheritDoc}
     */
    public function getEmail() : string
    {
        return $this->email;
    }

    /**
     * {@inheritDoc}
     */
    public function withEmail(string $email) : UserInterface
    {
        return $this->with('email', $email);
    }

    /**
     * @return string
     */
    public function getPasswordHash() : string
    {
        return $this->password_hash;
    }

    /**
     * {@inheritDoc}
     */
    public function checkPassword(string $password) : bool
    {
        return password_verify($password, $this->password_hash);
    }

    /**
     * {@inheritDoc}
     */
    public function withPassword(string $password) : UserInterface
    {
        $password_hash = password_hash($password, PASSWORD_BCRYPT);
        return $this->with('password_hash', $password_hash);
    }

    /**
     * {@inheritDoc}
     */
    public function getRole() : int
    {
        return $this->role;
    }

    /**
     * {@inheritDoc}
     */
    public function withRole(int $role) : UserInterface
    {
        return $this->with('role', $role);
    }

    /**
     * {@inheritDoc}
     */
    public function isAnonymous() : bool
    {
        return $this->id === 0;
    }

    /**
     * {@inheritDoc}
     */
    public function isMod() : bool
    {
        // @todo Role system.
        return $this->role > 1;
    }

    /**
     * {@inheritDoc}
     */
    public function isAdmin() : bool
    {
        // @todo Role system.
        return $this->role > 2;
    }
}
