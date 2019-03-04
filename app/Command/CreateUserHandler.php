<?php

namespace Imageboard\Command;

use Imageboard\Model\User;

class CreateUserHandler implements CommandHandlerInterface
{
  /**
   * @param CreateUser $command
   */
  function handle($command)
  {
    User::createUser($command->email, $command->password, $command->role);
  }
}
