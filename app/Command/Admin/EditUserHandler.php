<?php

namespace Imageboard\Command\Admin;

use Imageboard\Command\CommandHandlerInterface;
use Imageboard\Exception\NotFoundException;
use Imageboard\Model\{ModLog, CurrentUserInterface, User};

class EditUserHandler implements CommandHandlerInterface
{
  /** @var CurrentUserInterface */
  protected $user;

  function __construct(CurrentUserInterface $user)
  {
    $this->user = $user;
  }

  /**
   * @param EditUser $command
   */
  function handle($command)
  {
    /** @var User */
    $user = User::find($command->id);
    if (!isset($user)) {
      throw new NotFoundException();
    }

    $old_email = $user->email;

    $user->email = $command->email;
    $user->role = $command->role;

    if (!empty($command->password)) {
      $user->setPassword($command->password);
    }

    $user->save();

    // Add entry to the modlog.
    $id = $this->user->id;
    $email = $this->user->email;
    ModLog::create([
      'message' => "User $email has edited user $old_email.",
      'user_id' => $id,
    ]);
  }
}
