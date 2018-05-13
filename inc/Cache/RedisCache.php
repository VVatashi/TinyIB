<?php

namespace TinyIB\Cache;

use \Predis\Client;

class RedisCache implements ICache
{
    /** @var \Predis\Client $redis The redis client. */
    protected $redis;

    public function __construct()
    {
        $this->redis = new Client('unix:/var/run/redis/redis.sock');
    }

    /**
     * {@inheritDoc}
     */
    public function exists($key)
    {
        return $this->redis->exists($key) != false;
    }

    /**
     * {@inheritDoc}
     */
    public function get($key)
    {
        $value = $this->exists($key) ? $this->redis->get($key) : null;
        return $value;
    }

    /**
     * {@inheritDoc}
     */
    public function set($key, $value, $expire = null)
    {
        $this->redis->set($key, $value);

        if (isset($expire)) {
            $this->redis->expire($key, $expire);
        }

        return $value;
    }

    /**
     * {@inheritDoc}
     */
    public function delete($key)
    {
        $value = $this->get($key);
        $this->redis->del($key);
        return $value;
    }

    /**
     * {@inheritDoc}
     */
    public function deletePattern($pattern)
    {
        $keys = [];
        $iterator = 0;

        do {
            list($iterator, $scan) = $this->redis->scan($iterator, 'match', $pattern);
            $keys = array_merge($keys, $scan);
        } while ($iterator != 0);

        $this->redis->transaction(function ($transaction) use ($keys) {
            foreach ($keys as $key) {
                $transaction->del($key);
            }
        });

        return count($keys);
    }
}
