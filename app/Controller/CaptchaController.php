<?php

namespace Imageboard\Controller;

use GuzzleHttp\Psr7\Response;
use Imageboard\Service\CaptchaService;
use Psr\Http\Message\ResponseInterface;

class CaptchaController implements ControllerInterface
{
  /** @var CaptchaService */
  protected $captcha;

  /**
   * Constructs a new captcha controller.
   *
   * @param \Imageboard\Service\CaptchaService $captcha
   */
  function __construct(CaptchaService $captcha)
  {
    $this->captcha = $captcha;
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
    $_SESSION['tinyibcaptcha'] = $text;

    // Create CAPTCHA image from the text and write it to the response.
    $image = $this->captcha->getImage($text);
    $stream = fopen('php://temp', 'w+');
    imagepng($image, $stream);
    imagedestroy($image);
    return new Response(200, ['Content-Type' => 'image/png'], $stream);
  }
}
