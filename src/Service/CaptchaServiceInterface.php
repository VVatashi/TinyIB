<?php

namespace TinyIB\Service;

interface CaptchaServiceInterface
{
    /**
     * Creates a random text to use in CAPTCHA.
     *
     * @return string
     */
    public function getText() : string;

    /**
     * Creates a CAPTCHA image.
     *
     * @return resource
     */
    public function getImage(string $text);

    /**
     * Checks a CAPTCHA response.
     */
    public function checkCaptcha(string $captcha_response) : bool;

    /**
     * Checks a reCAPTCHA response.
     */
    public function checkRecaptcha(string $captcha_response) : bool;
}
