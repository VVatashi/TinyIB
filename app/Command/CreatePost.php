<?php

namespace Imageboard\Command;

/**
 * @property-read int $parent_id
 * @property-read string $subject
 * @property-read string $name
 * @property-read string $message
 */
class CreatePost extends Command
{
  /** @var int */
  protected $parent_id;

  /** @var string */
  protected $subject;

  /** @var string */
  protected $name;

  /** @var string */
  protected $message;

  function __construct(array $data)
  {
    $this->parent_id = (int)($data['parent_id'] ?? 0);
    $this->subject = $data['subject'] ?? '';
    $this->name = $data['name'] ?? '';
    $this->message = $data['message'] ?? '';
  }
}
