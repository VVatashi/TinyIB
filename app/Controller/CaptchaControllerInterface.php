<?php

namespace Imageboard\Controller;

use Psr\Http\Message\ResponseInterface;

interface CaptchaControllerInterface
{
    /**
     * Returns a captcha image.
     *
     * @return ResponseInterface
     */
    public function captcha() : ResponseInterface;
}
