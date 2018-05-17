<?php

namespace TinyIB\Cache;

class DatabaseCache implements ICache
{
    /** @var \TinyIB\Repository\ICacheRepository $repository */
    protected $repository;

    /**
     * Creates the new RedisCache instance.
     *
     * @param \TinyIB\Repository\ICacheRepository $repository
     */
    public function __construct($repository)
    {
        $this->repository = $repository;
    }

    /**
     * {@inheritDoc}
     */
    public function exists($key)
    {
        return $this->repository->getByKey($key) !== null;
    }

    /**
     * {@inheritDoc}
     */
    public function get($key)
    {
        return $this->repository->getByKey($key);
    }

    /**
     * {@inheritDoc}
     */
    public function set($key, $value, $expire = null)
    {
        return $this->repository->set($key, $value, $expire);
    }

    /**
     * {@inheritDoc}
     */
    public function delete($key)
    {
        return $this->repository->deleteByKey($key);
    }

    /**
     * {@inheritDoc}
     */
    public function deletePattern($pattern)
    {
        return $this->repository->deletePattern($pattern);
    }
}
