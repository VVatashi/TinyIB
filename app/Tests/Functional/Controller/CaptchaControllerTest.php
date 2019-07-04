<?php

namespace Imageboard\Tests\Functional\Controller;

use GuzzleHttp\Psr7\ServerRequest;
use Imageboard\Controller\CaptchaController;
use Imageboard\Service\{CaptchaService, SessionService};
use PHPUnit\Framework\TestCase;
use Psr\Http\Message\ResponseInterface;

final class CaptchaControllerTest extends TestCase
{
  /** @var CaptchaController */
  protected $controller;

  function setUp(): void
  {
    $session = new SessionService();
    $service = new CaptchaService($session);
    $this->controller = new CaptchaController($service, $session);
  }

  function testCreateController(): void
  {
    $this->assertNotNull($this->controller);
    $this->assertInstanceOf(CaptchaController::class, $this->controller);
  }

  function testGetCaptcha(): void
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
