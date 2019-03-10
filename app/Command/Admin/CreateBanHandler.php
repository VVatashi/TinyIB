<?php

namespace Imageboard\Command\Admin;

use Imageboard\Command\CommandHandlerInterface;
use Imageboard\Model\{CurrentUserInterface, Ban, ModLog};

class CreateBanHandler implements CommandHandlerInterface
{
  /** @var CurrentUserInterface */
  protected $user;

  function __construct(CurrentUserInterface $user)
  {
    $this->user = $user;
  }

  /**
   * @param CreateBan $command
   */
  function handle($command)
  {
    Ban::createBan($command->ip, $command->expires_in, $command->reason);

    // Add entry to the modlog.
    $id = $this->user->id;
    $email = $this->user->email;
    ModLog::create([
      'message' => "User $email has banned {$command->ip}.",
      'user_id' => $id,
    ]);
  }
}
