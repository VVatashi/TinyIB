<?php

namespace Imageboard\Command;

use Imageboard\Model\{Token, User};

class CreateTokenHandler implements CommandHandlerInterface
{
  /**
   * @param CreateToken $command
   */
  function handle($command)
  {
    $user = User::login($command->email, $command->password);
    return Token::createToken($user);
  }
}
