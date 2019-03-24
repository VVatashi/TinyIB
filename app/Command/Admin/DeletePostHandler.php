<?php

namespace Imageboard\Command\Admin;

use Imageboard\Command\CommandHandlerInterface;
use Imageboard\Exception\NotFoundException;
use Imageboard\Model\{CurrentUserInterface, ModLog, Post};

class DeletePostHandler implements CommandHandlerInterface
{
  /** @var CurrentUserInterface */
  protected $user;

  function __construct(CurrentUserInterface $user)
  {
    $this->user = $user;
  }

  /**
   * @param DeletePost $command
   */
  function handle($command)
  {
    /** @var Post */
    $post = Post::find($command->id);
    if (!isset($post)) {
      throw new NotFoundException();
    }

    Post::deletePost($post);

    // Add entry to the modlog.
    $id = $this->user->id;
    $email = $this->user->email;
    ModLog::create([
      'message' => "User $email has deleted post {$command->id}.",
      'user_id' => $id,
    ]);
  }
}
