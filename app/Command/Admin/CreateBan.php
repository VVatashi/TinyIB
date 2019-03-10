<?php

namespace Imageboard\Command\Admin;

use Imageboard\Command\Command;

/**
 * @property-read string $ip
 * @property-read int $expires_in
 * @property-read string $reason
 */
class CreateBan extends Command
{
  /** @var string */
  protected $ip;

  /** @var int */
  protected $expires_in;

  /** @var string */
  protected $reason;

  function __construct(array $data)
  {
    $this->ip = trim($data['ip'] ?? '');
    $this->expires_in = (int)($data['expires_in'] ?? 0);
    $this->reason = $data['reason'] ?? '';
  }
}
