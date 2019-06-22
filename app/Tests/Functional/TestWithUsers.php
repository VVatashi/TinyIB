<?php

namespace Imageboard\Tests\Functional;

use Imageboard\Model\User;
use Imageboard\Repositories\{ModLogRepository, UserRepository};
use Imageboard\Service\{ModLogService, UserService};
use PHPUnit\Framework\TestCase;

abstract class TestWithUsers extends TestCase
{
  /** @var ModLogRepository */
  protected $modlog_repository;

  /** @var UserRepository */
  protected $user_repository;

  /** @var ModLogService */
  protected $modlog_service;

  /** @var UserService */
  protected $user_service;

  function setUp(): void
  {
    global $database;

    $this->modlog_repository = new ModLogRepository($database);
    $this->user_repository = new UserRepository($database);

    $this->modlog_service = new ModLogService($this->modlog_repository);
    $this->user_service = new UserService($this->user_repository, $this->modlog_service);
  }

  protected function createAnonymous(): User
  {
    return $this->user_service->getAnonymous();
  }

  protected function createUser(): User
  {
    return $this->user_service->create(
      'user@example.com',
      'user@example.com',
      User::ROLE_USER
    );
  }

  protected function createAdmin(): User
  {
    return $this->user_service->create(
      'admin@example.com',
      'admin@example.com',
      User::ROLE_ADMINISTRATOR
    );
  }
}
