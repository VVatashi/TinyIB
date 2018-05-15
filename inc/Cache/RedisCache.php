<?php

namespace TinyIB\Cache;

use \Predis\Client;

class RedisCache implements ICache
{
    /** @var string $host */
    protected $host;

    /** @var \Predis\Client $redis The redis client. */
    protected $redis;

    /**
     * Returns instance of the redis client.
     * Initializes it if it is not already initialized.
     *
     * @return \Predis\Client
     */
    protected function getRedis()
    {
        if (!isset($this->redis)) {
            $this->redis = new Client($this->host);
        }

        return $this->redis;
    }

    /**
     * Creates the new RedisCache instance.
     */
    public function __construct($host)
    {
        $this->host = $host;
    }

    /**
     * {@inheritDoc}
     */
    public function exists($key)
    {
        return $this->getRedis()->exists($key) != false;
    }

    /**
     * {@inheritDoc}
     */
    public function get($key)
    {
        $value = $this->exists($key) ? $this->getRedis()->get($key) : null;
        return $value;
    }

    /**
     * {@inheritDoc}
     */
    public function set($key, $value, $expire = null)
    {
        $redis = $this->getRedis();
        $redis->set($key, $value);

        if (isset($expire)) {
            $redis->expire($key, $expire);
        }

        return $value;
    }

    /**
     * {@inheritDoc}
     */
    public function delete($key)
    {
        $value = $this->get($key);
        $this->getRedis()->del($key);
        return $value;
    }

    /**
     * {@inheritDoc}
     */
    public function deletePattern($pattern)
    {
        $redis = $this->getRedis();
        $keys = [];
        $iterator = 0;

        do {
            list($iterator, $scan) = $redis->scan($iterator, 'match', $pattern);
            $keys = array_merge($keys, $scan);
        } while ($iterator != 0);

        $redis->pipeline(function ($pipeline) use ($keys) {
            foreach ($keys as $key) {
                $pipeline->del($key);
            }
        });

        return count($keys);
    }
}
