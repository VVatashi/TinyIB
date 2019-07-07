<?php

namespace Imageboard\Services;

use Imageboard\SimpleCaptcha;

class CaptchaService extends SimpleCaptcha
{
  function __construct(
    SessionService $session
  ) {
    parent::__construct($session);
  }

  /**
   * Creates a random text to use in CAPTCHA.
   *
   * @return string
   */
  function getText(): string
  {
    return $this->GetCaptchaText();
  }

  /**
   * Creates a CAPTCHA image.
   *
   * @return resource
   */
  function getImage(string $text)
  {
    /** Initialization */
    $this->ImageAllocate();

    /** Text insertion */
    $text = $this->GetCaptchaText();
    $fontcfg = $this->fonts[array_rand($this->fonts)];
    $this->WriteText($text, $fontcfg);

    $this->session->set($this->session_var, $text);

    /** Transformations */
    if (!empty($this->lineWidth)) {
      $this->WriteLine();
    }
    $this->WaveImage();
    if ($this->blur && function_exists('imagefilter')) {
      imagefilter($this->im, IMG_FILTER_GAUSSIAN_BLUR);
    }
    $this->ReduceImage();

    return $this->im;
  }

  /**
   * Checks a CAPTCHA response.
   *
   * @return bool
   */
  function checkCaptcha(string $captcha_response): bool
  {
    if ($this->session->has($this->session_var)) {
      return true;
    }

    return strcasecmp($captcha_response, $this->session->get($this->session_var)) === 0;
  }
}
