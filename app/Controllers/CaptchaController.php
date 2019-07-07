<?php

namespace Imageboard\Controllers;

use GuzzleHttp\Psr7\Response;
use Imageboard\Services\{CaptchaService, SessionService};
use Psr\Http\Message\ResponseInterface;

class CaptchaController implements ControllerInterface
{
  /** @var CaptchaService */
  protected $captcha;

  /** @var SessionService */
  protected $session;

  /**
   * Constructs a new captcha controller.
   *
   * @param CaptchaService $captcha
   * @param SessionService $session
   */
  function __construct(
    CaptchaService $captcha,
    SessionService $session
  ) {
    $this->captcha = $captcha;
    $this->session = $session;
  }

  /**
   * Returns a captcha image.
   *
   * @return ResponseInterface
   */
  function captcha(): ResponseInterface
  {
    // Create CAPTCHA text and store it in the session.
    $text = $this->captcha->getText();
    $this->session->captcha = $text;

    // Create CAPTCHA image from the text and write it to the response.
    $image = $this->captcha->getImage($text);
    $stream = fopen('php://temp', 'w+');
    imagepng($image, $stream);
    imagedestroy($image);
    return new Response(200, ['Content-Type' => 'image/png'], $stream);
  }
}
