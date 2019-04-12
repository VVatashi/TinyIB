<?php

namespace Imageboard\Command\Admin;

use Imageboard\Cache\CacheInterface;
use Imageboard\Command\CommandHandlerInterface;
use Imageboard\Model\{CurrentUserInterface, ModLog};
use Imageboard\Service\ConfigServiceInterface;

class ClearCacheHandler implements CommandHandlerInterface
{
  /** @var CurrentUserInterface */
  protected $user;

  /** @var CacheInterface */
  protected $cache;

  /** @var ConfigServiceInterface */
  protected $config;

  function __construct(
    CurrentUserInterface $user,
    CacheInterface $cache,
    ConfigServiceInterface $config
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

    // Add entry to the modlog.
    $id = $this->user->id;
    $email = $this->user->email;
    ModLog::create([
      'message' => "User $email has cleared the cache.",
      'user_id' => $id,
    ]);
  }
}
