<?php

namespace TinyIB\Cache;

interface CacheInterface
{
    /**
     * Checks if the specified key exists.
     *
     * @param string $key
     *
     * @return bool Is value stored.
     */
    public function exists(string $key) : bool;

    /**
     * Returns the specified key.
     *
     * @param string $key
     *
     * @return string|null Stored value.
     */
    public function get(string $key);

    /**
     * @param string $key
     * @param string $value
     * @param int|null $expire Expiration time.
     *
     * @return string Stored value.
     */
    public function set(string $key, string $value, $expire = null) : string;

    /**
     * Deletes the specified key.
     *
     * @param string $key
     *
     * @return string|null Value of deleted key.
     */
    public function delete(string $key);

    /**
     * Deletes the keys that matches the specified pattern.
     *
     * @param string $pattern
     *
     * @return int Deleted count.
     */
    public function deletePattern(string $pattern) : int;
}
