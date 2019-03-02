<?php

namespace Imageboard\Command;

use Imageboard\Model\Ban;

class CreateBanHandler implements CommandHandlerInterface
{
  /**
   * @param CreateBan $command
   */
  function handle($command)
  {
    Ban::createBan($command->ip, $command->expires_in, $command->reason);
  }
}
