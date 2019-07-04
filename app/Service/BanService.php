<?php

namespace Imageboard\Service;

use Imageboard\Exception\NotFoundException;
use Imageboard\Model\Ban;
use Imageboard\Repositories\BanRepository;

class BanService
{
  /** @var BanRepository */
  protected $repository;

  /** @var ModLogService */
  protected $modlog_service;

  function __construct(
    BanRepository $repository,
    ModLogService $modlog_service
  ) {
    $this->repository = $repository;
    $this->modlog_service = $modlog_service;
  }

  function create(string $ip, int $expires_in, string $reason, $user = null): Ban
  {
    $now = time();
    $ban = new Ban([
      'created_at' => $now,
      'updated_at' => $now,
      'deleted_at' => null,
      'expires_at' => $expires_in === 0 ? 0 : $now + $expires_in,
      'ip'         => $ip,
      'reason'     => $reason,
    ]);
    $ban = $this->repository->add($ban);

    if (isset($user)) {
      // Add entry to the modlog.
      $this->modlog_service->create("User {$user->email} has banned $ip.", $user->id);
    }

    return $ban;
  }

  function delete(int $id, $user = null): Ban
  {
    $ban = $this->repository->getById($id);
    if (!isset($ban)) {
      throw new NotFoundException();
    }

    $ip = $ban->ip;
    $ban = $this->repository->remove($ban);

    if (isset($user)) {
      // Add entry to the modlog.
      $this->modlog_service->create("User {$user->email} has lifted ban for $ip.", $user->id);
    }

    return $ban;
  }
}
