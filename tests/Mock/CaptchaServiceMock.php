<?php

namespace TinyIB\Tests\Mock;

use TinyIB\Service\CaptchaServiceInterface;

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
}
