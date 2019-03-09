<?php

namespace Imageboard\Tests\Unit;

use Imageboard\Cache\NoCache;
use Imageboard\Service\{PostServiceInterface, PostService};
use Imageboard\Tests\Mock\CryptographyServiceMock;
use PHPUnit\Framework\TestCase;

final class PostServiceTest extends TestCase
{
    /** @var PostServiceInterface */
    protected $service;

    public function setUp() : void
    {
        $cache = new NoCache();
        $cryptography_service = new CryptographyServiceMock();

        $this->service = new PostService(
            $cache,
            $cryptography_service
        );
    }

    public function testCreatePostService() : void
    {
        $this->assertNotNull($this->service);
        $this->assertInstanceOf(PostServiceInterface::class, $this->service);
        $this->assertInstanceOf(PostService::class, $this->service);
    }

    public function testProcessEmptyName() : void
    {
        $result = $this->service->processName('');
        $expected = [
            'name' => '',
            'tripcode' => '',
        ];
        $this->assertEquals($expected, $result);
    }

    public function testProcessNameOnly() : void
    {
        $result = $this->service->processName('name');
        $expected = [
            'name' => 'name',
            'tripcode' => '',
        ];
        $this->assertEquals($expected, $result);
    }

    public function testProcessTripcodeOnly() : void
    {
        $result = $this->service->processName('#tripcode');
        $expected = [
            'name' => '',
            'tripcode' => 'tripcode',
        ];
        $this->assertEquals($expected, $result);
    }

    public function testProcessSecureTripcodeOnly() : void
    {
        $result = $this->service->processName('##secure_tripcode');
        $expected = [
            'name' => '',
            'tripcode' => '!!secure_tripcode',
        ];
        $this->assertEquals($expected, $result);
    }

    public function testProcessNameWithTripcode() : void
    {
        $result = $this->service->processName('name#tripcode');
        $expected = [
            'name' => 'name',
            'tripcode' => 'tripcode',
        ];
        $this->assertEquals($expected, $result);
    }

    public function testProcessNameWithSecureTripcode() : void
    {
        $result = $this->service->processName('name##secure_tripcode');
        $expected = [
            'name' => 'name',
            'tripcode' => '!!secure_tripcode',
        ];
        $this->assertEquals($expected, $result);
    }

    public function testProcessNameWithTripcodeAndSecureTripcode() : void
    {
        $result = $this->service->processName('name#tripcode##secure_tripcode');
        $expected = [
            'name' => 'name',
            'tripcode' => 'tripcode!!secure_tripcode',
        ];
        $this->assertEquals($expected, $result);
    }
}
