<?php

namespace Imageboard\Command;

use Imageboard\Cache\CacheInterface;

class ClearCacheHandler implements CommandHandlerInterface
{
  /** @var CacheInterface */
  protected $cache;

  function __construct(CacheInterface $cache)
  {
    $this->cache = $cache;
  }

  /**
   * @param ClearCache $command
   */
  function handle($command)
  {
    $this->cache->deletePattern(TINYIB_BOARD . ':*');
  }
}
