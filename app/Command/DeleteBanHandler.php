<?php

namespace Imageboard\Command;

use Imageboard\Exception\NotFoundException;
use Imageboard\Model\{CurrentUserInterface, Ban, ModLog};

class DeleteBanHandler implements CommandHandlerInterface
{
  /** @var CurrentUserInterface */
  protected $user;

  function __construct(CurrentUserInterface $user)
  {
    $this->user = $user;
  }

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

    $ip = $ban->ip;

    $ban->delete();

    // Add entry to the modlog.
    $id = $this->user->id;
    $email = $this->user->email;
    ModLog::create([
      'message' => "User $email has lifted ban for $ip.",
      'user_id' => $id,
    ]);
  }
}
