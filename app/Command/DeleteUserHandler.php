<?php

namespace Imageboard\Command;

use Imageboard\Exception\NotFoundException;
use Imageboard\Model\User;

class DeleteUserHandler implements CommandHandlerInterface
{
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

    $user->delete();
  }
}
