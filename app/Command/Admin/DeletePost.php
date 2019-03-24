<?php

namespace Imageboard\Command\Admin;

use Imageboard\Command\Command;

/**
 * @property-read int $id
 */
class DeletePost extends Command
{
  /** @var int */
  protected $id;

  function __construct(int $id)
  {
    $this->id = $id;
  }
}
