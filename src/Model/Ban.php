<?php

namespace TinyIB\Model;

use \Illuminate\Database\Eloquent\Model;
use \Illuminate\Database\Eloquent\SoftDeletes;

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

    protected $table = 'bans';

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
     * Returns created timestamp of the ban.
     *
     * @return int
     *   Ban created timestamp.
     */
    public function getCreatedTimestamp() : int
    {
        return $this->created_at->getTimestamp();
    }

    /**
     * Returns expires timestamp of the ban.
     *
     * @return int
     *   Ban expires timestamp.
     */
    public function getExpiresTimestamp() : int
    {
        return $this->expires_at->getTimestamp();
    }

    /**
     * Checks if ban is permanent.
     *
     * @return bool
     */
    public function isPermanent() : bool
    {
        return $this->getExpiresTimestamp() === 0;
    }

    /**
     * Checks if ban is expired.
     *
     * @return bool
     */
    public function isExpired() : bool
    {
        return !$this->isPermanent() && $this->getExpiresTimestamp() < time();
    }

    /**
     * Checks if ban has a reason phrase.
     *
     * @return bool
     */
    public function hasReason() : bool
    {
        return !empty($this->reason);
    }

    /**
     * Removes expired bans.
     */
    public static function removeExpired() : void
    {
        Ban::where([
            ['expires_at', '>', 0],
            ['expires_at', '<=', time()],
        ])->delete();
    }
}
