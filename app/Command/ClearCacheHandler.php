<?php

namespace Imageboard\Command;

use Imageboard\Cache\CacheInterface;
use Imageboard\Model\{CurrentUserInterface, ModLog};

class ClearCacheHandler implements CommandHandlerInterface
{
  /** @var CurrentUserInterface */
  protected $user;

  /** @var CacheInterface */
  protected $cache;

  function __construct(CurrentUserInterface $user, CacheInterface $cache)
  {
    $this->user = $user;
    $this->cache = $cache;
  }

  /**
   * @param ClearCache $command
   */
  function handle($command)
  {
    $this->cache->deletePattern(TINYIB_BOARD . ':*');

    // Add entry to the modlog.
    $id = $this->user->id;
    $email = $this->user->email;
    ModLog::create([
      'message' => "User $email has cleared the cache.",
      'user_id' => $id,
    ]);
  }
}
