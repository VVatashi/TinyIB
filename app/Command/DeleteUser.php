<?php

namespace Imageboard\Command;

/**
 * @property-read int $id
 */
class DeleteUser extends Command
{
  /** @var int */
  protected $id;

  function __construct(int $id)
  {
    $this->id = $id;
  }
}
