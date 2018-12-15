<?php

namespace TinyIB\Model;

use \Illuminate\Database\Eloquent\Model;
use \Illuminate\Database\Eloquent\SoftDeletes;
use TinyIB\NotFoundException;
use TinyIB\ValidationException;

/**
 * @property int $id
 * @property string $email
 * @property string $password_hash
 * @property int $role
 * @property int $created_at
 * @property int $updated_at
 * @property int $deleted_at
 */
class User extends Model implements CurrentUserInterface
{
    use SoftDeletes;

    protected $table = 'users';

    protected $fillable = [
        'email',
        'password_hash',
        'role',
    ];

    protected $dates = [
        'created_at',
        'updated_at',
        'deleted_at',
    ];

    protected $dateFormat = 'U';

    /**
     * @param string $password
     *
     * @return bool
     */
    public function checkPassword(string $password) : bool
    {
        return password_verify($password, $this->password_hash);
    }

    /**
     * @param string $password
     *
     * @return self
     */
    public function setPassword(string $password) : User
    {
        $this->password_hash = password_hash($password, PASSWORD_BCRYPT);
        return $this;
    }

    /**
     * Checks if this user is an anonymous.
     *
     * @return bool
     */
    public function isAnonymous() : bool
    {
        return $this->id === 0;
    }

    /**
     * Checks if this user is a moderator.
     *
     * @return bool
     */
    public function isMod() : bool
    {
        /** @todo Role system. */
        return $this->role > 1;
    }

    /**
     * Checks if this user is an admin.
     *
     * @return bool
     */
    public function isAdmin() : bool
    {
        /** @todo Role system. */
        return $this->role > 2;
    }

    /**
     * Returns mod log entries related to this user.
     */
    public function modlog()
    {
        return $this->hasMany(ModLog::class);
    }

    /**
     * Returns anonymous user instance.
     *
     * @return \TinyIB\Model\User
     */
    public static function anonymous() : User
    {
        $user = new User();
        $user->id = 0;
        $user->email = '';
        $user->password_hash = '';
        $user->role = 0;
        return $user;
    }

    /**
     * Registers user.
     *
     * @param string $email
     *   User email.
     *
     * @param string $password
     *   User password.
     *
     * @return \TinyIB\Model\User
     *   User object instance.
     *
     * @throws \TinyIB\ValidationException
     *   On validation errors.
     */
    public static function register(string $email, string $password) : User
    {
        if (empty($email)) {
            throw new ValidationException('Email should not be empty');
        }

        if (empty($password)) {
            throw new ValidationException('Password should not be empty');
        }

        $user = User::where('email', $email)->first();
        if (isset($user)) {
            throw new ValidationException('User with this email address is already exists');
        }

        $user = User::onlyTrashed()->where('email', $email)->forceDelete();

        $user = new User([
            'email' => $email,
            'role' => 0,
        ]);
        $user->setPassword($password);
        $user->save();
        return $user;
    }

    /**
     * Logs in user.
     *
     * @param string $email
     *   User email.
     *
     * @param string $password
     *   User password.
     *
     * @return \TinyIB\Model\User
     *   User object instance.
     *
     * @throws \TinyIB\ValidationException
     *   On validation errors.
     */
    public static function login(string $email, string $password) : User
    {
        if (empty($email)) {
            throw new ValidationException('Email should not be empty');
        }

        if (empty($password)) {
            throw new ValidationException('Password should not be empty');
        }

        /** @var \TinyIB\Model\User $user */
        $user = User::where('email', $email)->first();
        if (!isset($user)) {
            throw new NotFoundException('User with this email address is not exists');
        }

        if (!$user->checkPassword($password)) {
            throw new ValidationException('Incorrect password');
        }

        $_SESSION['user'] = $user->id;
        return $user;
    }

    /**
     * Logs out current user.
     */
    public static function logout()
    {
        unset($_SESSION['user']);
    }
}
