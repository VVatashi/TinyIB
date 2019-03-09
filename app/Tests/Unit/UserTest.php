<?php

namespace Imageboard\Tests\Unit;

use Imageboard\Model\User;
use Imageboard\Exception\{NotFoundException, ValidationException};
use PHPUnit\Framework\TestCase;

final class UserTest extends TestCase
{
    public function test_isMod_role1_shouldReturnFalse() : void
    {
        $user = new User(['role' => 1]);
        $this->assertFalse($user->isMod());
    }

    public function test_isMod_role2_shouldReturnTrue() : void
    {
        $user = new User(['role' => 2]);
        $this->assertTrue($user->isMod());
    }

    public function test_isAdmin_role1_shouldReturnFalse() : void
    {
        $user = new User(['role' => 1]);
        $this->assertFalse($user->isAdmin());
    }

    public function test_isAdmin_role2_shouldReturnFalse() : void
    {
        $user = new User(['role' => 2]);
        $this->assertFalse($user->isAdmin());
    }

    public function test_isAdmin_role3_shouldReturnTrue() : void
    {
        $user = new User(['role' => 3]);
        $this->assertTrue($user->isAdmin());
    }

    public function test_createUser_emptyEmail_shouldThrowValidationException() : void
    {
        $this->expectException(ValidationException::class);
        User::createUser('', 'test');
    }

    public function test_createUser_emptyPassword_shouldThrowValidationException() : void
    {
        $this->expectException(ValidationException::class);
        User::createUser('test@example.com', '');
    }

    public function test_login_emptyEmail_shouldThrowValidationException() : void
    {
        $this->expectException(ValidationException::class);
        User::login('', 'test');
    }

    public function test_login_emptyPassword_shouldThrowValidationException() : void
    {
        $this->expectException(ValidationException::class);
        User::login('test@example.com', '');
    }

    public function test_login_nonExistingUser_shouldThrowNotFoundException() : void
    {
        User::where('email', 'another@example.com')->forceDelete();

        $this->expectException(NotFoundException::class);
        User::login('another@example.com', 'another');
    }
}
