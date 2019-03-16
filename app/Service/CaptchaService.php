<?php

namespace Imageboard\Service;

use Imageboard\SimpleCaptcha;

class CaptchaService extends SimpleCaptcha implements CaptchaServiceInterface
{
  /**
   * {@inheritDoc}
   */
  function getText(): string
  {
    return $this->GetCaptchaText();
  }

  /**
   * {@inheritDoc}
   */
  function getImage(string $text)
  {
    /** Initialization */
    $this->ImageAllocate();

    /** Text insertion */
    $text = $this->GetCaptchaText();
    $fontcfg = $this->fonts[array_rand($this->fonts)];
    $this->WriteText($text, $fontcfg);

    $_SESSION[$this->session_var] = $text;

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
   * {@inheritDoc}
   */
  function checkCaptcha(string $captcha_response): bool
  {
    if (!isset($_SESSION[$this->session_var])) {
      return true;
    }

    return strcasecmp($captcha_response, $_SESSION[$this->session_var]) === 0;
  }
}
