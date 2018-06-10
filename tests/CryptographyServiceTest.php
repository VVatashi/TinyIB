<?php

namespace TinyIB\Tests;

use PHPUnit\Framework\TestCase;
use TinyIB\Service\CryptographyService;
use TinyIB\Service\CryptographyServiceInterface;

final class CryptographyServiceTest extends TestCase
{
    public function testCreateCryptographyService() : void
    {
        $service = new CryptographyService();
        $this->assertNotNull($service);
        $this->assertInstanceOf(CryptographyServiceInterface::class, $service);
        $this->assertInstanceOf(CryptographyService::class, $service);
    }

    public function testGenerateTripcode() : void
    {
        $service = new CryptographyService();

        // Test against some known values.
        // Input => expected result.
        $tests = [
            '' => '8NBuQ4l6uQ',
            'mdUF' => 'WatacYfoiE',
            'ContagiousDildo' => 'JemGwef5bo',
            'KQc/IH~a' => 'x/IrohaN9I',
            'p,A|\\mJS' => 'DesuIR/aK.',
            '\'IR;(6\\*' => '6xAkarinDE',
            '\'黽剱鷽ム' => 'WaTASHIjBE',
        ];

        foreach ($tests as $input => $expected) {
            $result = $service->generateTripcode($input);
            $this->assertEquals($expected, $result);
        }
    }

    public function testGenerateSecureTripcode() : void
    {
        $service = new CryptographyService();

        // Test against pre-calculated values.
        // Input => expected result.
        $tests = [
            '' => '2M2Y8AsgTp',
            'qwerty' => 'eO34RYzgb7',
            '12345678' => 'Va0oOqQAr0',
        ];

        foreach ($tests as $input => $expected) {
            $result = $service->generateSecureTripcode($input, '');
            $this->assertEquals($expected, $result);
        }
    }
}
