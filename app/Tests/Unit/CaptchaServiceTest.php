<?php

namespace Imageboard\Tests\Unit;

use Imageboard\Service\CaptchaService;
use PHPUnit\Framework\TestCase;

final class CaptchaServiceTest extends TestCase
{
    /** @var CaptchaService */
    protected $service;

    public function setUp() : void
    {
        $this->service = new CaptchaService();
    }

    public function testCreateSevice() : void
    {
        $this->assertNotNull($this->service);
        $this->assertInstanceOf(CaptchaService::class, $this->service);
    }

    public function testGetText() : void
    {
        $text = $this->service->getText();
        $this->assertNotNull($text);
        $this->assertInternalType('string', $text);
        $this->assertNotEmpty($text);
    }

    public function textProvider() : array
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
    public function testGetImage(string $text) : void
    {
        $image = $this->service->getImage($text);
        $this->assertNotNull($image);
        $this->assertInternalType('resource', $image);

        imagedestroy($image);
    }
}
