<?php

namespace Imageboard\Model;

use Illuminate\Database\Eloquent\{Model, SoftDeletes};
use Imageboard\Exception\ValidationException;

/**
 * @property int $id
 * @property int $created_at
 * @property int $updated_at
 * @property int $deleted_at
 * @property int $expires_at
 * @property string $ip
 * @property string $reason
 */
class Ban extends Model
{
  use SoftDeletes;
  use ModelTrait;

  protected $table;

  protected $fillable = [
    'ip',
    'expires_at',
    'reason',
  ];

  protected $dates = [
    'created_at',
    'updated_at',
    'deleted_at',
    'expires_at',
  ];

  protected $dateFormat = 'U';

  /**
   * Ban constructor.
   *
   * @param array $attributes
   *
   * @throws \Imageboard\Exception\ConfigServiceException
   */
  public function __construct (array $attributes = [])
  {
    parent::__construct($attributes);

    $this->table = $this->config('DBBANS');
  }

  /**
   * @param string $ip
   * @param int    $expires_in
   * @param string $reason
   *
   * @return \Imageboard\Model\Ban
   * @throws \Imageboard\Exception\ValidationException
   */
  static function createBan(string $ip, int $expires_in, string $reason) : Ban
  {
    $errors = [];

    // Validate IP-address.
    if (!preg_match('
/^
  (?:
    (?:
      25[0-5]|
      2[0-4][0-9]|
      1?[0-9][0-9]?
    )
    \.
  ){3}
  (?:
    25[0-5]|
    2[0-4][0-9]|
    1?[0-9][0-9]?
  )
$/x', $ip)) {
      $errors[] = 'Invalid IP';
    }

    if ($expires_in < 0) {
      $errors[] = 'Expiration time should be positive';
    }

    if (!empty($errors)) {
      throw new ValidationException(implode('\n', $errors));
    }

    $expires_at = $expires_in ? $expires_in + time() : 0;

    return Ban::create([
      'ip' => $ip,
      'expires_at' => $expires_at,
      'reason' => $reason,
    ]);
  }

  /**
   * Returns created timestamp of the ban.
   *
   * @return int
   *   Ban created timestamp.
   */
  function getCreatedTimestamp() : int
  {
    return $this->created_at->getTimestamp();
  }

  /**
   * Returns expires timestamp of the ban.
   *
   * @return int
   *   Ban expires timestamp.
   */
  function getExpiresTimestamp() : int
  {
    return $this->expires_at->getTimestamp();
  }

  /**
   * Checks if ban is permanent.
   *
   * @return bool
   */
  function isPermanent() : bool
  {
    return $this->getExpiresTimestamp() === 0;
  }

  /**
   * Checks if ban is expired.
   *
   * @return bool
   */
  function isExpired() : bool
  {
    return !$this->isPermanent() && $this->getExpiresTimestamp() < time();
  }

  /**
   * Checks if ban has a reason phrase.
   *
   * @return bool
   */
  function hasReason() : bool
  {
    return !empty($this->reason);
  }

  /**
   * Removes expired bans.
   */
  static function removeExpired() : void
  {
    Ban::where([
      ['expires_at', '>', 0],
      ['expires_at', '<=', time()],
    ])->delete();
  }
}
