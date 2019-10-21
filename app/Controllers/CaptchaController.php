<?php

namespace Imageboard\Controllers;

use Imageboard\Services\{CaptchaService, ConfigService};
use GuzzleHttp\Psr7\Response;
use Psr\Http\Message\ServerRequestInterface;

class CaptchaController implements ControllerInterface
{
  /** @var ConfigService */
  private $config;

  /** @var CaptchaService */
  private $captcha;

  /**
   * @param ConfigService  $config
   * @param CaptchaService $captcha
   */
  public function __construct(
    ConfigService $config,
    CaptchaService $captcha
  ) {
    $this->config = $config;
    $this->captcha = $captcha;
  }

  /**
   * Stores new captcha in the current user's session and returns the captcha image.
   */
  public function captcha(ServerRequestInterface $request): Response
  {
    $headers = [
      'Content-Type' => 'image/png',
    ];
    $image = $this->captcha->createCaptcha('test');
    $stream = fopen('php://memory','r+');
    imagepng($image, $stream);

    return new Response(200, $headers, $stream);
  }
}
