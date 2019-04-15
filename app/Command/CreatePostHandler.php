<?php

namespace Imageboard\Command;

use Imageboard\Command\CommandHandlerInterface;
use Imageboard\Model\CurrentUserInterface;
use Imageboard\Service\PostService;

class CreatePostHandler implements CommandHandlerInterface
{
  /** @var PostService */
  protected $post;

  /** @var CurrentUserInterface */
  protected $user;

  function __construct(
    PostService $post,
    CurrentUserInterface $user
  ) {
    $this->post = $post;
    $this->user = $user;
  }

  /**
   * @param CreatePost $command
   */
  function handle($command)
  {
    return $this->post->create(
      $command->name,
      '',
      $command->subject,
      $command->message,
      '',
      $_SERVER['REMOTE_ADDR'] ?? '',
      $this->user->id,
      $command->parent_id
    );
  }
}
