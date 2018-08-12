<?php

namespace TinyIB\Tests\Unit;

use PHPUnit\Framework\TestCase;
use TinyIB\Service\PostService;
use TinyIB\Service\PostServiceInterface;
use TinyIB\Tests\Mock\CryptographyServiceMock;

final class PostServiceTest extends TestCase
{
    public function testCreatePostService() : void
    {
        $cryptography_service = new CryptographyServiceMock();
        $post_service = new PostService($cryptography_service);
        $this->assertNotNull($post_service);
        $this->assertInstanceOf(PostServiceInterface::class, $post_service);
        $this->assertInstanceOf(PostService::class, $post_service);
    }

    public function testProcessEmptyName() : void
    {
        $cryptography_service = new CryptographyServiceMock();
        $post_service = new PostService($cryptography_service);
        $result = $post_service->processName('');
        $expected = [
            'name' => '',
            'tripcode' => '',
        ];
        $this->assertEquals($expected, $result);
    }

    public function testProcessNameOnly() : void
    {
        $cryptography_service = new CryptographyServiceMock();
        $post_service = new PostService($cryptography_service);
        $result = $post_service->processName('name');
        $expected = [
            'name' => 'name',
            'tripcode' => '',
        ];
        $this->assertEquals($expected, $result);
    }

    public function testProcessTripcodeOnly() : void
    {
        $cryptography_service = new CryptographyServiceMock();
        $post_service = new PostService($cryptography_service);
        $result = $post_service->processName('#tripcode');
        $expected = [
            'name' => '',
            'tripcode' => 'tripcode',
        ];
        $this->assertEquals($expected, $result);
    }

    public function testProcessSecureTripcodeOnly() : void
    {
        $cryptography_service = new CryptographyServiceMock();
        $post_service = new PostService($cryptography_service);
        $result = $post_service->processName('##secure_tripcode');
        $expected = [
            'name' => '',
            'tripcode' => '!!secure_tripcode',
        ];
        $this->assertEquals($expected, $result);
    }

    public function testProcessNameWithTripcode() : void
    {
        $cryptography_service = new CryptographyServiceMock();
        $post_service = new PostService($cryptography_service);
        $result = $post_service->processName('name#tripcode');
        $expected = [
            'name' => 'name',
            'tripcode' => 'tripcode',
        ];
        $this->assertEquals($expected, $result);
    }

    public function testProcessNameWithSecureTripcode() : void
    {
        $cryptography_service = new CryptographyServiceMock();
        $post_service = new PostService($cryptography_service);
        $result = $post_service->processName('name##secure_tripcode');
        $expected = [
            'name' => 'name',
            'tripcode' => '!!secure_tripcode',
        ];
        $this->assertEquals($expected, $result);
    }

    public function testProcessNameWithTripcodeAndSecureTripcode() : void
    {
        $cryptography_service = new CryptographyServiceMock();
        $post_service = new PostService($cryptography_service);
        $result = $post_service->processName('name#tripcode##secure_tripcode');
        $expected = [
            'name' => 'name',
            'tripcode' => 'tripcode!!secure_tripcode',
        ];
        $this->assertEquals($expected, $result);
    }
}
