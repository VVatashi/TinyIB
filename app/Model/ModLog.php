<?php

namespace Imageboard\Model;

use Illuminate\Database\Eloquent\Model;

/**
 * @property int $id
 * @property string $message
 * @property int $created_at
 * @property int $updated_at
 * @property int $user_id
 */
class ModLog extends Model
{
  protected $table = 'mod_log';

  protected $fillable = [
    'message',
    'user_id',
  ];

  protected $dates = [
    'created_at',
    'updated_at',
  ];

  protected $dateFormat = 'U';

  /**
   * Returns created timestamp of the log entry.
   *
   * @return int
   *   Log entry created timestamp.
   */
  function getCreatedTimestamp() : int
  {
    return $this->created_at->getTimestamp();
  }

  /**
   * Returns updated timestamp of the log entry.
   *
   * @return int
   *   Log entry updated timestamp.
   */
  function getUpdatedTimestamp() : int
  {
    return $this->updated_at->getTimestamp();
  }

  /**
   * Returns related user.
   */
  function user()
  {
    return $this->belongsTo(User::class);
  }
}
