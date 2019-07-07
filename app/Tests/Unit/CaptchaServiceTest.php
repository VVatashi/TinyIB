<?php

namespace Imageboard\Tests\Unit;

use Imageboard\Services\{CaptchaService, SessionService};
use PHPUnit\Framework\TestCase;

final class CaptchaServiceTest extends TestCase
{
  /** @var CaptchaService */
  protected $service;

  public function setUp(): void
  {
    $session = new SessionService();
    $this->service = new CaptchaService($session);
  }

  public function testCreateSevice(): void
  {
    $this->assertNotNull($this->service);
    $this->assertInstanceOf(CaptchaService::class, $this->service);
  }

  public function testGetText(): void
  {
    $text = $this->service->getText();
    $this->assertNotNull($text);
    $this->assertInternalType('string', $text);
    $this->assertNotEmpty($text);
  }

  public function textProvider(): array
  {
    return [
      [''],
      ['123'],
      ['test'],
      ['Lorem ipsum!'],
    ];
  }

  /**
   * @dataProvider textProvider
   */
  public function testGetImage(string $text): void
  {
    $image = $this->service->getImage($text);
    $this->assertNotNull($image);
    $this->assertInternalType('resource', $image);

    imagedestroy($image);
  }
}
