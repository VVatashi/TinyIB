<?php

namespace Imageboard\Model;

use Illuminate\Database\Eloquent\Model;

/**
 * @property int $id
 * @property string $token
 * @property int $expires_at
 * @property int $user_id
 */
class Token extends Model
{
  const EXPIRES_IN = 60 * 60;

  protected $table = 'tokens';

  protected $fillable = [
    'token',
    'expires_at',
    'user_id',
  ];

  protected $dates = [
    'expires_at',
  ];

  protected $dateFormat = 'U';

  /**
   * Returns related user.
   */
  function user()
  {
    return $this->belongsTo(User::class);
  }

  static function createToken(User $user): Token
  {
    $token = base64_encode(random_bytes(12));
    $expires_at = time() + static::EXPIRES_IN;

    return Token::create([
      'token' => $token,
      'expires_at' => $expires_at,
      'user_id' => $user->id,
    ]);
  }

  /**
   * @return Token|null
   */
  static function checkToken(string $token)
  {
    return Token::where('token', $token)
      ->where('expires_at', '>', time())
      ->first();
  }
}
