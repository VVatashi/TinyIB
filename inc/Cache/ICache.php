<?php

namespace TinyIB\Cache;

interface ICache
{
    /**
     * Checks if the specified key exists.
     *
     * @param string $key
     *
     * @return bool
     */
    public function exists($key);

    /**
     * Returns the specified key.
     *
     * @param string|null $key
     *
     * @return string
     */
    public function get($key);

    /**
     * @param string $key
     * @param string $value
     * @param int|null $expire Expiration time.
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
    public function delete($key);

    /**
     * Deletes the keys that matches the specified pattern.
     *
     * @param string $pattern
     *
     * @return int Deleted count.
     */
    public function deletePattern($pattern);
}
