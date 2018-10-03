<?php

namespace TinyIB\Tests\Unit;

use PHPUnit\Framework\TestCase;
use TinyIB\Model\Ban;

final class BanTest extends TestCase
{
    public function test_isPermanent_notExpires_True() : void
    {
        $ban = new Ban(['expires_at' => 0]);
        $this->assertEquals(true, $ban->isPermanent());
    }

    public function test_isPermanent_expires_False() : void
    {
        $ban = new Ban(['expires_at' => time() + 1000]);
        $this->assertEquals(false, $ban->isPermanent());
    }

    public function test_isExpired_notExpires_False() : void
    {
        $ban = new Ban(['expires_at' => 0]);
        $this->assertEquals(false, $ban->isExpired());
    }

    public function test_isExpired_notExpired_False() : void
    {
        $ban = new Ban(['expires_at' => time() + 1000]);
        $this->assertEquals(false, $ban->isExpired());
    }

    public function test_isExpired_expired_True() : void
    {
        $ban = new Ban(['expires_at' => time() - 1000]);
        $this->assertEquals(true, $ban->isExpired());
    }

    public function test_hasReason_withoutReason_False() : void
    {
        $ban = new Ban([]);
        $this->assertEquals(false, $ban->hasReason());
    }

    public function test_hasReason_emptyReason_False() : void
    {
        $ban = new Ban(['reason' => '']);
        $this->assertEquals(false, $ban->hasReason());
    }

    public function test_hasReason_withReason_True() : void
    {
        $ban = new Ban(['reason' => 'test']);
        $this->assertEquals(true, $ban->hasReason());
    }
}
