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
}
