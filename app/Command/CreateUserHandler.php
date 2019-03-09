<?php

namespace Imageboard\Command;

use Imageboard\Model\{ModLog, CurrentUserInterface, User};

class CreateUserHandler implements CommandHandlerInterface
{
  /** @var CurrentUserInterface */
  protected $user;

  function __construct(CurrentUserInterface $user)
  {
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
    ModLog::create([
      'message' => "User $email has created user {$command->email}.",
      'user_id' => $id,
    ]);
  }
}
