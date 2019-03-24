<?php

namespace Imageboard\Command;

/**
 * @property-read string $email
 * @property-read string $password
 */
class CreateToken extends Command
{
  /** @var string */
  protected $email;

  /** @var string */
  protected $password;

  function __construct(array $data)
  {
    $this->email = $data['email'] ?? '';
    $this->password = $data['password'] ?? '';
  }
}
