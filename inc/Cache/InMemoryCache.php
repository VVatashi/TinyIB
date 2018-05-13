<?php

namespace TinyIB\Cache;

/**
 * Stores data in the memory. Not persisting between the requests.
 */
class InMemoryCache implements ICache
{
    protected $data = [];

    /**
     * {@inheritDoc}
     */
    public function exists($key)
    {
        return isset($this->data[$key]);
    }

    /**
     * {@inheritDoc}
     */
    public function get($key)
    {
        $value = $this->exists($key) ? $this->data[$key] : null;
        return $value;
    }

    /**
     * {@inheritDoc}
     */
    public function set($key, $value, $expire = null)
    {
        $this->data[$key] = $value;
        return $value;
    }

    /**
     * {@inheritDoc}
     */
    public function delete($key)
    {
        $value = $this->get($key);
        unset($this->data[$key]);
        return $value;
    }

    /**
     * {@inheritDoc}
     */
    public function deletePattern($pattern)
    {
        $keys = array_keys($this->data);
        $keys = array_filter($keys, function ($key) use ($pattern) {
            return fnmatch($pattern, $key);
        });

        foreach ($keys as $key) {
            unset($this->data[$key]);
        }

        return count($keys);
    }
}
