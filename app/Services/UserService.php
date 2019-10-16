<?php

namespace Imageboard\Services;

use Imageboard\Exceptions\{NotFoundException, ValidationException};
use Imageboard\Models\User;
use Imageboard\Repositories\UserRepository;

class UserService
{
  /** @var UserRepository */
  protected $repository;

  /** @var ModLogService */
  protected $modlog_service;

  /** @var SessionService */
  protected $session;

  function __construct(
    UserRepository $repository,
    ModLogService  $modlog_service,
    SessionService $session
  ) {
    $this->repository     = $repository;
    $this->modlog_service = $modlog_service;
    $this->session        = $session;
  }

  /**
   * Creates new user.
   *
   * @param string $email
   *   User email.
   *
   * @param string $password
   *   User password.
   *
   * @param int $role
   *   User role ID.
   *
   * @param null|User $current
   *   User who creates new user.
   *
   * @return User
   *   User object instance.
   *
   * @throws ValidationException
   *   On validation errors.
   */
  function create(string $email, string $password, int $role, $current = null): User
  {
    $existing = $this->repository->getByEmail($email);
    if (isset($existing)) {
      throw new ValidationException('User with this email address is already exist');
    }

    $now = time();
    $user = new User([
      'created_at' => $now,
      'updated_at' => $now,
      'deleted_at' => null,
    ], false);
    $user->setEmail($email);
    $user->setPassword($password);
    $user->setRole($role);
    $user = $this->repository->add($user);

    // Add entry to the modlog.
    if (isset($current)) {
      $this->modlog_service->create("User {$current->email} has created user $email.", $current->id);
    } else {
      $this->modlog_service->create("User $email has registered.");
    }

    return $user;
  }

  function edit(int $user_id, string $email, string $password, int $role, $current = null): User
  {
    $user = $this->repository->getById($user_id);
    if (!isset($user)) {
      throw new NotFoundException();
    }

    $user->setEmail($email);
    $user->setRole($role);

    $now = time();
    $user->setUpdatedAt($now);

    if (trim($password) !== "") {
      $user->setPassword($password);
    }

    $user = $this->repository->update($user);

    if (isset($current)) {
      // Add entry to the modlog.
      $this->modlog_service->create("User {$current->email} has edited user $email.", $current->id);
    }

    return $user;
  }

  function delete(int $id, $current = null): User
  {
    $user = $this->repository->getById($id);
    if (!isset($user)) {
      throw new NotFoundException();
    }

    $user = $this->repository->remove($user);

    if (isset($current)) {
      // Add entry to the modlog.
      $this->modlog_service->create("User {$current->email} has deleted user {$user->email}.", $current->id);
    }

    return $user;
  }

  /**
   * Returns anonymous user instance.
   *
   * @return User
   */
  function getAnonymous(): User
  {
    return new User([
      'id'            => 0,
      'email'         => '',
      'password_hash' => '',
      'role'          => User::ROLE_ANONYMOUS,
    ], false);
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
   * @return User
   *   User object instance.
   *
   * @throws ValidationException
   *   On validation errors.
   */
  function login(string $email, string $password): User
  {
    $user = $this->repository->getByEmail($email);
    if (!isset($user)) {
      throw new NotFoundException('User with this email address does not exist');
    }

    if (!$user->checkPassword($password)) {
      throw new ValidationException('Incorrect password');
    }

    $this->session->user = $user->id;
    return $user;
  }

  /**
   * Logs out current user.
   */
  function logout()
  {
    $this->session->delete('user');
  }

  /**
   * @return int
   */
  function getCurrentUserId(): int
  {
    return $this->session->get('user', 0);
  }

  /**
   * @return User
   */
  function getCurrentUser()
  {
    $id = $this->getCurrentUserId();
    if ($id === 0) {
      return $this->getAnonymous();
    }

    $user = $this->repository->getById($id);
    if (!isset($user)) {
      return $this->getAnonymous();
    }

    return $user;
  }
}
