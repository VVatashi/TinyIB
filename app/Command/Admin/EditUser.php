<?php

namespace Imageboard\Command\Admin;

use Imageboard\Command\Command;

/**
 * @property-read int $id
 * @property-read string $email
 * @property-read string $password
 * @property-read int $role
 */
class EditUser extends Command
{
  /** @var int */
  protected $id;

  /** @var string */
  protected $email;

  /** @var string */
  protected $password;

  /** @var int */
  protected $role;

  function __construct(array $data)
  {
    $this->id = (int)($data['id'] ?? 0);
    $this->email = trim($data['email'] ?? '');
    $this->password = $data['password'] ?? '';
    $this->role = (int)($data['role'] ?? 0);
  }
}
