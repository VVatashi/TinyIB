<?php

namespace Imageboard\Service;

use Imageboard\Exception\NotFoundException;
use Imageboard\Model\Ban;
use Imageboard\Repositories\BanRepository;
use Imageboard\Service\UserService;

class BanService
{
  /** @var BanRepository */
  protected $repository;

  /** @var ModLogService */
  protected $modlog_service;

  /** @var UserService */
  protected $user_service;

  function __construct(
    BanRepository $repository,
    ModLogService $modlog_service,
    UserService $user_service
  ) {
    $this->repository = $repository;
    $this->modlog_service = $modlog_service;
    $this->user_service = $user_service;
  }

  function create(string $ip, int $expires_in = 0, string $reason = ''): Ban
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

    // Add entry to the modlog.
    $user = $this->user_service->getCurrentUser();
    $this->modlog_service->create("User {$user->email} has banned $ip.", $user->id);

    return $ban;
  }

  function delete(int $id): Ban
  {
    $ban = $this->repository->getById($id);
    if (!isset($ban)) {
      throw new NotFoundException();
    }

    $ip = $ban->ip;
    $ban = $this->repository->remove($ban);

    // Add entry to the modlog.
    $user = $this->user_service->getCurrentUser();
    $this->modlog_service->create("User {$user->email} has lifted ban for $ip.", $user->id);

    return $ban;
  }
}
