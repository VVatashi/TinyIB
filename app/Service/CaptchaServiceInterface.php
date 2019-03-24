<?php

namespace Imageboard\Service;

interface CaptchaServiceInterface
{
  /**
   * Creates a random text to use in CAPTCHA.
   *
   * @return string
   */
  function getText() : string;

  /**
   * Creates a CAPTCHA image.
   *
   * @return resource
   */
  function getImage(string $text);

  /**
   * Checks a CAPTCHA response.
   */
  function checkCaptcha(string $captcha_response) : bool;
}
