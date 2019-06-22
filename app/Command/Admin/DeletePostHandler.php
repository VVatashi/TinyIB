<?php

namespace Imageboard\Command\Admin;

use Imageboard\Command\CommandHandlerInterface;
use Imageboard\Exception\NotFoundException;
use Imageboard\Model\{CurrentUserInterface, Post};
use Imageboard\Service\ModLogService;

class DeletePostHandler implements CommandHandlerInterface
{
  /** @var ModLogService */
  protected $modlog_service;

  /** @var CurrentUserInterface */
  protected $user;

  function __construct(
    ModLogService $modlog_service,
    CurrentUserInterface $user
  ) {
    $this->modlog_service = $modlog_service;
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
    $this->modlog_service->create("User $email has deleted post {$command->id}.", $id);
  }
}
