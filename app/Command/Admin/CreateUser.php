<?php

namespace Imageboard\Command\Admin;

use Imageboard\Command\Command;

/**
 * @property-read string $email
 * @property-read string $password
 * @property-read int $role
 */
class CreateUser extends Command
{
  /** @var string */
  protected $email;

  /** @var string */
  protected $password;

  /** @var int */
  protected $role;

  function __construct(array $data)
  {
    $this->email = trim($data['email'] ?? '');
    $this->password = $data['password'] ?? '';
    $this->role = (int)($data['role'] ?? 0);
  }
}
