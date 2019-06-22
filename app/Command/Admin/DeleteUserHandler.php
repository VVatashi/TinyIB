<?php

namespace Imageboard\Command\Admin;

use Imageboard\Command\CommandHandlerInterface;
use Imageboard\Exception\NotFoundException;
use Imageboard\Model\{CurrentUserInterface, User};
use Imageboard\Service\ModLogService;

class DeleteUserHandler implements CommandHandlerInterface
{
  /** @var ModLogService */
  protected $modlog_service;

  /** @var CurrentUserInterface */
  protected $user;

  function __construct(
    ModLogService $modlog_service,
    CurrentUserInterface $user
  ) {
    $this->modlog_service = $modlog_service;
    $this->user = $user;
  }

  /**
   * @param DeleteUser $command
   */
  function handle($command)
  {
    /** @var User */
    $user = User::find($command->id);
    if (!isset($user)) {
      throw new NotFoundException();
    }

    $deleted_email = $user->email;

    $user->delete();

    // Add entry to the modlog.
    $id = $this->user->id;
    $email = $this->user->email;
    $this->modlog_service->create("User $email has deleted user $deleted_email.", $id);
  }
}
