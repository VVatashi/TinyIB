<?php

namespace TinyIB\Tests;

use PHPUnit\Framework\TestCase;
use TinyIB\Model\Ban;
use TinyIB\Model\BanInterface;

final class BanTest extends TestCase
{
    public function testCreateBan() : void
    {
        $ban = new Ban(1, '127.0.0.1', time(), time());
        $this->assertNotNull($ban);
        $this->assertInstanceOf(BanInterface::class, $ban);
        $this->assertInstanceOf(Ban::class, $ban);
    }

    public function idProvider() : array
    {
        return [
            [0],
            [1],
            [2],
        ];
    }

    /**
     * @dataProvider idProvider
     */
    public function testBanId(int $id) : void
    {
        $ban = new Ban(1, '127.0.0.1', time(), time());
        $new_ban = $ban->setID($id);
        $this->assertNotNull($new_ban);
        $this->assertInstanceOf(BanInterface::class, $new_ban);
        $this->assertInstanceOf(Ban::class, $new_ban);

        $result = $new_ban->getID();
        $this->assertNotNull($result);
        $this->assertInternalType('int', $result);
        $this->assertEquals($id, $result);
    }

    public function ipProvider() : array
    {
        return [
            [''],
            ['127.0.0.1'],
            ['192.168.1.169'],
        ];
    }

    public function timestampProvider() : array
    {
        return [
            [0],
            [1533575152],
        ];
    }

    /**
     * @dataProvider timestampProvider
     */
    public function testBanCreatedDate(int $timestamp) : void
    {
        $ban = new Ban(1, '127.0.0.1', time(), time());
        $new_ban = $ban->setCreatedDate($timestamp);
        $this->assertNotNull($new_ban);
        $this->assertInstanceOf(BanInterface::class, $new_ban);
        $this->assertInstanceOf(Ban::class, $new_ban);

        $result = $new_ban->getCreatedDate();
        $this->assertNotNull($result);
        $this->assertInternalType('int', $result);
        $this->assertEquals($timestamp, $result);
    }

    /**
     * @dataProvider timestampProvider
     */
    public function testBanExpiresDate(int $timestamp) : void
    {
        $ban = new Ban(1, '127.0.0.1', time(), time());
        $new_ban = $ban->setExpiresDate($timestamp);
        $this->assertNotNull($new_ban);
        $this->assertInstanceOf(BanInterface::class, $new_ban);
        $this->assertInstanceOf(Ban::class, $new_ban);

        $result = $new_ban->getExpiresDate();
        $this->assertNotNull($result);
        $this->assertInternalType('int', $result);
        $this->assertEquals($timestamp, $result);
    }

    /**
     * @dataProvider ipProvider
     */
    public function testBanIp(string $ip) : void
    {
        $ban = new Ban(1, '127.0.0.1', time(), time());
        $new_ban = $ban->setIP($ip);
        $this->assertNotNull($new_ban);
        $this->assertInstanceOf(BanInterface::class, $new_ban);
        $this->assertInstanceOf(Ban::class, $new_ban);

        $result = $new_ban->getIP();
        $this->assertNotNull($result);
        $this->assertInternalType('string', $result);
        $this->assertEquals($ip, $result);
    }

    public function reasonProvider() : array
    {
        return [
            [''],
            ['test'],
            ['Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'],
        ];
    }

    /**
     * @dataProvider reasonProvider
     */
    public function testBanReason(string $reason) : void
    {
        $ban = new Ban(1, '127.0.0.1', time(), time());
        $new_ban = $ban->setReason($reason);
        $this->assertNotNull($new_ban);
        $this->assertInstanceOf(BanInterface::class, $new_ban);
        $this->assertInstanceOf(Ban::class, $new_ban);

        $result = $new_ban->getReason();
        $this->assertNotNull($result);
        $this->assertInternalType('string', $result);
        $this->assertEquals($reason, $result);
    }
}
