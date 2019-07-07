<?php

namespace Imageboard\Tests\Unit;

use Imageboard\Models\User;
use PHPUnit\Framework\TestCase;

final class UserTest extends TestCase
{
  public function test_isMod_role1_shouldReturnFalse(): void
  {
    $user = new User(['role' => 1], false);
    $this->assertFalse($user->isMod());
  }

  public function test_isMod_role2_shouldReturnTrue(): void
  {
    $user = new User(['role' => 2], false);
    $this->assertTrue($user->isMod());
  }

  public function test_isAdmin_role1_shouldReturnFalse(): void
  {
    $user = new User(['role' => 1], false);
    $this->assertFalse($user->isAdmin());
  }

  public function test_isAdmin_role2_shouldReturnFalse(): void
  {
    $user = new User(['role' => 2], false);
    $this->assertFalse($user->isAdmin());
  }

  public function test_isAdmin_role3_shouldReturnTrue(): void
  {
    $user = new User(['role' => 3], false);
    $this->assertTrue($user->isAdmin());
  }
}
