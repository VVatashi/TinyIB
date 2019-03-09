<?php

namespace Imageboard\Command;

use Imageboard\Exception\NotFoundException;
use Imageboard\Model\{ModLog, CurrentUserInterface, User};

class DeleteUserHandler implements CommandHandlerInterface
{
  /** @var CurrentUserInterface */
  protected $user;

  function __construct(CurrentUserInterface $user)
  {
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
    ModLog::create([
      'message' => "User $email has deleted user $deleted_email.",
      'user_id' => $id,
    ]);
  }
}
