<?php

namespace Imageboard\Command\Admin;

use Imageboard\Command\CommandHandlerInterface;
use Imageboard\Exception\NotFoundException;
use Imageboard\Model\Post;
use Imageboard\Service\{ModLogService, UserService};

class DeletePostHandler implements CommandHandlerInterface
{
  /** @var ModLogService */
  protected $modlog_service;

  /** @var UserService */
  protected $user_service;

  function __construct(
    ModLogService $modlog_service,
    UserService $user_service
  ) {
    $this->modlog_service = $modlog_service;
    $this->user_service = $user_service;
  }

  /**
   * @param DeletePost $command
   */
  function handle($command)
  {
    /** @var Post $post */
    $post = Post::find($command->id);
    if (!isset($post)) {
      throw new NotFoundException();
    }

    Post::deletePost($post);

    // Add entry to the modlog.
    $user = $this->user_service->getCurrentUser();
    $this->modlog_service->create("User {$user->email} has deleted post {$command->id}.", $user->id);
  }
}
