<?php

namespace Imageboard\Tests\Mock;

use Imageboard\Service\CaptchaServiceInterface;

class CaptchaServiceMock implements CaptchaServiceInterface
{
    /**
     * {@inheritDoc}
     */
    public function getText() : string
    {
        return '';
    }

    /**
     * {@inheritDoc}
     */
    public function getImage(string $text)
    {
        $image = imagecreatetruecolor(175, 55);
        return $image;
    }

    /**
     * {@inheritDoc}
     */
    public function checkCaptcha(string $captcha_response) : bool
    {
        return true;
    }
}
