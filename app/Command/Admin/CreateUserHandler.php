<?php

namespace Imageboard\Command\Admin;

use Imageboard\Command\CommandHandlerInterface;
use Imageboard\Model\{CurrentUserInterface, User};
use Imageboard\Service\ModLogService;

class CreateUserHandler implements CommandHandlerInterface
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
   * @param CreateUser $command
   */
  function handle($command)
  {
    User::createUser($command->email, $command->password, $command->role);

    // Add entry to the modlog.
    $id = $this->user->id;
    $email = $this->user->email;
    $this->modlog_service->create("User $email has created user {$command->email}.", $id);
  }
}
