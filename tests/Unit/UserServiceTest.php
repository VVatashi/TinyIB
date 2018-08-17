<?php

namespace TinyIB\Tests\Unit;

use PHPUnit\Framework\TestCase;
use TinyIB\Model\User;
use TinyIB\Model\UserInterface;
use TinyIB\Service\UserService;
use TinyIB\Service\UserServiceInterface;
use TinyIB\Tests\Mock\UserRepositoryMock;

final class UserServiceTest extends TestCase
{
    /** @var \TinyIB\Service\UserServiceInterface $service */
    protected $service;

    public function setUp() : void
    {
        $repository = new UserRepositoryMock();

        // Create user for auth tests.
        $user = new User(1, 'test@example.com', '', 1);
        $user = $user->withPassword('test');
        $repository->insert($user);

        $this->service = new UserService($repository);
    }

    public function testCreateSevice() : void
    {
        $this->assertNotNull($this->service);
        $this->assertInstanceOf(UserServiceInterface::class, $this->service);
        $this->assertInstanceOf(UserService::class, $this->service);
    }

    public function testLogin() : void
    {
        $user = $this->service->login('test@example.com', 'test');
        $this->assertNotNull($user);
        $this->assertInstanceOf(UserInterface::class, $user);

        // Should store user to the session.
        $session_user = $_SESSION['user'];
        $this->assertNotNull($session_user);
        $this->assertInstanceOf(UserInterface::class, $session_user);
        $this->assertEquals($user, $session_user);
    }

    public function testLoginWithEmptyEmailShouldThrow() : void
    {
        $this->expectException(\Exception::class);
        $this->service->login('', 'test');
    }

    public function testLoginWithEmptyPasswordShouldThrow() : void
    {
        $this->expectException(\Exception::class);
        $this->service->login('another@example.com', '');
    }

    public function testLoginWithIncorrectPasswordShouldThrow() : void
    {
        $this->expectException(\Exception::class);
        $this->service->login('test@example.com', 'another');
    }

    /**
     * @depends testLogin
     */
    public function testLogout() : void
    {
        $this->service->logout();

        // Should remove user from the session.
        $this->assertEquals(false, isset($_SESSION['user']));
    }

    public function testRegister() : void
    {
        $user = $this->service->register('another@example.com', 'another');
        $this->assertNotNull($user);
        $this->assertInstanceOf(UserInterface::class, $user);
    }

    public function testRegisterWithEmptyEmailShouldThrow() : void
    {
        $this->expectException(\Exception::class);
        $this->service->register('', 'test');
    }

    public function testRegisterWithExistingEmailShouldThrow() : void
    {
        $this->expectException(\Exception::class);
        $this->service->register('test@example.com', 'test');
    }

    public function testRegisterWithEmptyPasswordShouldThrow() : void
    {
        $this->expectException(\Exception::class);
        $this->service->register('another@example.com', '');
    }
}
