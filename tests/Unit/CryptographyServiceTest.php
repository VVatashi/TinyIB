<?php

namespace TinyIB\Tests\Unit;

use PHPUnit\Framework\TestCase;
use TinyIB\Service\CryptographyService;
use TinyIB\Service\CryptographyServiceInterface;

final class CryptographyServiceTest extends TestCase
{
    /** @var \TinyIB\Service\CryptographyServiceInterface $service */
    protected $service;

    public function setUp() : void
    {
        $this->service = new CryptographyService();
    }

    public function testCreateCryptographyService() : void
    {
        $this->assertNotNull($this->service);
        $this->assertInstanceOf(CryptographyServiceInterface::class, $this->service);
        $this->assertInstanceOf(CryptographyService::class, $this->service);
    }

    public function tripcodeProvider() : array
    {
        return [
            ['', '8NBuQ4l6uQ'],
            ['mdUF', 'WatacYfoiE'],
            ['ContagiousDildo', 'JemGwef5bo'],
            ['KQc/IH~a', 'x/IrohaN9I'],
            ['p,A|\\mJS', 'DesuIR/aK.'],
            ['\'IR;(6\\*', '6xAkarinDE'],
            ['\'黽剱鷽ム', 'WaTASHIjBE'],
        ];
    }

    /**
     * @dataProvider tripcodeProvider
     */
    public function testGenerateTripcode(string $capcode, string $tripcode) : void
    {
        $result = $this->service->generateTripcode($capcode);
        $this->assertEquals($tripcode, $result);
    }

    public function secureTripcodeProvider() : array
    {
        return [
            ['', '2M2Y8AsgTp'],
            ['qwerty', 'eO34RYzgb7'],
            ['12345678', 'Va0oOqQAr0'],
        ];
    }

    /**
     * @dataProvider secureTripcodeProvider
     */
    public function testGenerateSecureTripcode(string $capcode, string $tripcode) : void
    {
        $result = $this->service->generateSecureTripcode($capcode, '');
        $this->assertEquals($tripcode, $result);
    }
}
