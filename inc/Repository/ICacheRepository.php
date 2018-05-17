<?php

namespace TinyIB\Repository;

interface ICacheRepository extends IRepository
{
    /**
     * @param string $key
     *
     * @return string|null
     */
    public function getByKey($key);

    /**
     * @param string $key
     * @param string $value
     * @param int|null $expire Expiration delay.
     *
     * @return bool Is successful.
     */
    public function set($key, $value, $expire = null);

    /**
     * Deletes the specified key.
     *
     * @param string $key
     *
     * @return string
     */
    public function deleteByKey($key);

    /**
     * Deletes the keys that matches the specified pattern.
     *
     * @param string $pattern
     *
     * @return int Deleted count.
     */
    public function deletePattern($pattern);
}
