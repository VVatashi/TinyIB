<?php

namespace Imageboard\Service;

use Imageboard\Exception\NotFoundException;
use Imageboard\Model\{Ban, ModLog, CurrentUserInterface};
use Imageboard\Repositories\BanRepository;

class BanService
{
  /** @var BanRepository */
  protected $repository;

  /** @var CurrentUserInterface */
  protected $user;

  function __construct(
    BanRepository $repository,
    CurrentUserInterface $user
  ) {
    $this->repository = $repository;
    $this->user = $user;
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
    $id = $this->user->id;
    $email = $this->user->email;
    ModLog::create([
      'message' => "User $email has banned $ip.",
      'user_id' => $id,
    ]);

    return $ban;
  }

  function delete(int $id): Ban
  {
    $ban = $this->repository->getById($id);
    if (!isset($ban)) {
      throw new NotFoundException();
    }

    $ip = $ban->ip;
    $this->repository->remove($ban);

    // Add entry to the modlog.
    $id = $this->user->id;
    $email = $this->user->email;
    ModLog::create([
      'message' => "User $email has lifted ban for $ip.",
      'user_id' => $id,
    ]);

    return $ban;
  }
}
