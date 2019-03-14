<?php

namespace Imageboard\Command;

use Imageboard\Command\CommandHandlerInterface;
use Imageboard\Model\CurrentUserInterface;
use Imageboard\Service\PostServiceInterface;

class CreatePostHandler implements CommandHandlerInterface
{
  /** @var PostServiceInterface */
  protected $post_service;

  /** @var CurrentUserInterface */
  protected $user;

  function __construct(
    PostServiceInterface $post_service,
    CurrentUserInterface $user
  ) {
    $this->post_service = $post_service;
    $this->user = $user;
  }

  /**
   * @param CreatePost $command
   */
  function handle($command)
  {
    return $this->post_service->create(
      $command->name,
      '',
      $command->subject,
      $command->message,
      '',
      $_SERVER['REMOTE_ADDR'],
      $this->user->id,
      $command->parent_id
    );
  }
}
