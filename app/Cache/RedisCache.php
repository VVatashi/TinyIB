<?php

namespace Imageboard\Cache;

use Predis\Client;

class RedisCache implements CacheInterface
{
  /** @var string */
  protected $host;

  /** @var Client The redis client. */
  protected $client;

  /** @var Pipeline */
  protected $pipeline;

  /**
   * Returns instance of the redis client.
   * Initializes it if it is not already initialized.
   *
   * @return Client
   */
  protected function getClient()
  {
    if (!isset($this->client)) {
      $this->client = new Client($this->host, ['cas']);
    }

    return $this->client;
  }

  /**
   * Returns instance of the redis client pipeline.
   * Initializes it if it is not already initialized.
   *
   * @return Pipeline
   */
  protected function getPipeline()
  {
    if (!isset($this->pipeline)) {
      $this->pipeline = $this->getClient()->pipeline();
      register_shutdown_function(function () {
        $this->pipeline->execute();
      });
    }

    return $this->pipeline;
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
  public function exists(string $key): bool
  {
    return $this->getClient()->exists($key) != false;
  }

  /**
   * {@inheritDoc}
   */
  public function get(string $key)
  {
    $client = $this->getClient();
    $value = $client->exists($key) != false ? $client->get($key) : null;
    return $value;
  }

  /**
   * {@inheritDoc}
   */
  public function set(string $key, string $value, $expire = null): string
  {
    $pipeline = $this->getPipeline();
    $pipeline->set($key, $value);

    if (isset($expire)) {
      $pipeline->expire($key, $expire);
    }

    return $value;
  }

  /**
   * {@inheritDoc}
   */
  public function delete(string $key)
  {
    $value = $this->get($key);
    $this->getPipeline()->del($key);
    return $value;
  }

  /**
   * {@inheritDoc}
   */
  public function deletePattern(string $pattern): int
  {
    $client = $this->getClient();
    $keys = [];
    $iterator = 0;

    do {
      list($iterator, $scan) = $client->scan($iterator, 'match', $pattern);
      $keys = array_merge($keys, $scan);
    } while ($iterator != 0);

    $transaction = $client->transaction();
    foreach ($keys as $key) {
      $transaction->del($key);
    }
    $transaction->execute();

    return count($keys);
  }
}
