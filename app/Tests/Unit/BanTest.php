<?php

namespace Imageboard\Tests\Unit;

use Imageboard\Model\Ban;
use PHPUnit\Framework\TestCase;

final class BanTest extends TestCase
{
    public function test_isPermanent_notExpires_shouldReturnTrue() : void
    {
        $ban = new Ban(['expires_at' => 0]);
        $this->assertEquals(true, $ban->isPermanent());
    }

    public function test_isPermanent_expires_shouldReturnFalse() : void
    {
        $ban = new Ban(['expires_at' => time() + 1000]);
        $this->assertEquals(false, $ban->isPermanent());
    }

    public function test_isExpired_notExpires_shouldReturnFalse() : void
    {
        $ban = new Ban(['expires_at' => 0]);
        $this->assertEquals(false, $ban->isExpired());
    }

    public function test_isExpired_notExpired_shouldReturnFalse() : void
    {
        $ban = new Ban(['expires_at' => time() + 1000]);
        $this->assertEquals(false, $ban->isExpired());
    }

    public function test_isExpired_expired_shouldReturnTrue() : void
    {
        $ban = new Ban(['expires_at' => time() - 1000]);
        $this->assertEquals(true, $ban->isExpired());
    }

    public function test_hasReason_withoutReason_shouldReturnFalse() : void
    {
        $ban = new Ban([]);
        $this->assertEquals(false, $ban->hasReason());
    }

    public function test_hasReason_emptyReason_shouldReturnFalse() : void
    {
        $ban = new Ban(['reason' => '']);
        $this->assertEquals(false, $ban->hasReason());
    }

    public function test_hasReason_withReason_shouldReturnTrue() : void
    {
        $ban = new Ban(['reason' => 'test']);
        $this->assertEquals(true, $ban->hasReason());
    }
}
