<?php

namespace Imageboard\Command;

use Imageboard\Command\CommandHandlerInterface;
use Imageboard\Service\{PostService, UserService};

class CreatePostHandler implements CommandHandlerInterface
{
  /** @var PostService */
  protected $post;

  /** @var UserService */
  protected $user_service;

  function __construct(
    PostService $post,
    UserService $user_service
  ) {
    $this->post = $post;
    $this->user_service = $user_service;
  }

  /**
   * @param CreatePost $command
   */
  function handle($command)
  {
    $user_id = $this->user_service->getCurrentUserId();

    return $this->post->create(
      $command->name,
      '',
      $command->subject,
      $command->message,
      '',
      $_SERVER['REMOTE_ADDR'] ?? '',
      $user_id,
      $command->parent_id
    );
  }
}
