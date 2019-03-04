<?php

namespace Imageboard\Command;

use Imageboard\Exception\NotFoundException;
use Imageboard\Model\User;

class EditUserHandler implements CommandHandlerInterface
{
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

    $user->email = $command->email;
    $user->role = $command->role;

    if (!empty($command->password)) {
      $user->setPassword($command->password);
    }

    $user->save();
  }
}
