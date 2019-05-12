<?php

namespace Imageboard\Command\Admin;

use Imageboard\Cache\CacheInterface;
use Imageboard\Command\CommandHandlerInterface;
use Imageboard\Model\{CurrentUserInterface, ModLog};
use Imageboard\Service\ConfigService;

class ClearCacheHandler implements CommandHandlerInterface
{
  /** @var CurrentUserInterface */
  protected $user;

  /** @var CacheInterface */
  protected $cache;

  /** @var ConfigService */
  protected $config;

  function __construct(
    CurrentUserInterface $user,
    CacheInterface $cache,
    ConfigService $config
  ) {
    $this->user = $user;
    $this->cache = $cache;
    $this->config = $config;
  }

  /**
   * @param ClearCache $command
   */
  function handle($command)
  {
    $this->cache->deletePattern($this->config->get('BOARD') . ':*');
  }
}
