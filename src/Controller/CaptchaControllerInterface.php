<?php

namespace TinyIB\Controller;

use Psr\Http\Message\ResponseInterface;
use Psr\Http\Message\ServerRequestInterface;

interface CaptchaControllerInterface
{
    /**
     * Returns a captcha image.
     *
     * @return \Psr\Http\Message\ResponseInterface
     */
    public function captcha() : ResponseInterface;
}
