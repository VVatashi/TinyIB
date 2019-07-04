<?php

namespace Imageboard\Tests\Unit;

use Imageboard\Model\Ban;
use PHPUnit\Framework\TestCase;

final class BanTest extends TestCase
{
  public function test_isPermanent_notExpires_shouldReturnTrue(): void
  {
    $ban = new Ban(['expires_at' => 0], false);
    $this->assertEquals(true, $ban->isPermanent());
  }

  public function test_isPermanent_expires_shouldReturnFalse(): void
  {
    $ban = new Ban(['expires_at' => time() + 1000], false);
    $this->assertEquals(false, $ban->isPermanent());
  }

  public function test_isExpired_notExpires_shouldReturnFalse(): void
  {
    $ban = new Ban(['expires_at' => 0], false);
    $this->assertEquals(false, $ban->isExpired());
  }

  public function test_isExpired_notExpired_shouldReturnFalse(): void
  {
    $ban = new Ban(['expires_at' => time() + 1000], false);
    $this->assertEquals(false, $ban->isExpired());
  }

  public function test_isExpired_expired_shouldReturnTrue(): void
  {
    $ban = new Ban(['expires_at' => time() - 1000], false);
    $this->assertEquals(true, $ban->isExpired());
  }

  public function test_hasReason_withoutReason_shouldReturnFalse(): void
  {
    $ban = new Ban([], false);
    $this->assertEquals(false, $ban->hasReason());
  }

  public function test_hasReason_emptyReason_shouldReturnFalse(): void
  {
    $ban = new Ban(['reason' => ''], false);
    $this->assertEquals(false, $ban->hasReason());
  }

  public function test_hasReason_withReason_shouldReturnTrue(): void
  {
    $ban = new Ban(['reason' => 'test'], false);
    $this->assertEquals(true, $ban->hasReason());
  }
}
