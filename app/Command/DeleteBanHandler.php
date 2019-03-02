<?php

namespace Imageboard\Command;

use Imageboard\Exception\NotFoundException;
use Imageboard\Model\Ban;

class DeleteBanHandler implements CommandHandlerInterface
{
  /**
   * @param DeleteBan $command
   */
  function handle($command)
  {
    /** @var Ban */
    $ban = Ban::find($command->id);
    if (!isset($ban)) {
      throw new NotFoundException();
    }

    $ban->delete();
  }
}
