<?php

namespace TinyIB\Tests\Unit;

use GuzzleHttp\Psr7\ServerRequest;
use PHPUnit\Framework\TestCase;
use Psr\Http\Message\ResponseInterface;
use TinyIB\Controller\CaptchaController;
use TinyIB\Controller\CaptchaControllerInterface;
use TinyIB\Tests\Mock\CaptchaServiceMock;

final class CaptchaControllerTest extends TestCase
{
    /** @var \TinyIB\Controller\CaptchaControllerInterface $controller */
    protected $controller;

    public function setUp() : void
    {
        $service = new CaptchaServiceMock();
        $this->controller = new CaptchaController($service);
    }

    public function testCreateController() : void
    {
        $this->assertNotNull($this->controller);
        $this->assertInstanceOf(CaptchaControllerInterface::class, $this->controller);
        $this->assertInstanceOf(CaptchaController::class, $this->controller);
    }

    public function testGetCaptcha() : void
    {
        $request = new ServerRequest('GET', '/captcha');

        $response = $this->controller->captcha($request);
        $this->assertNotNull($response);
        $this->assertInstanceOf(ResponseInterface::class, $response);

        // Check response Content-Type header.
        $content_type = $response->getHeaderLine('Content-Type');
        $this->assertNotNull($content_type);
        $this->assertInternalType('string', $content_type);
        $this->assertEquals('image/png', $content_type);

        // Check that response body is not empty.
        $body = $response->getBody();
        $this->assertEquals(true, $body->getSize() > 0);
    }
}
