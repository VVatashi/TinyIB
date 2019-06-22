<?php

namespace Imageboard\Service;

use Imageboard\Model\ModLog;
use Imageboard\Repositories\ModLogRepository;

class ModLogService
{
  /** @var ModLogRepository */
  protected $repository;

  function __construct(
    ModLogRepository $repository
  ) {
    $this->repository = $repository;
  }

  /**
   * @param string $message
   * @param null|int $user_id
   *
   * @return ModLog
   */
  function create(string $message, $user_id = null): ModLog
  {
    if (isset($user_id) && $user_id === 0) {
      $user_id = null;
    }

    $now = time();
    $entry = new ModLog([
      'created_at' => $now,
      'updated_at' => $now,
      'message'    => $message,
      'user_id'    => $user_id,
    ]);
    return $this->repository->add($entry);
  }
}
