<?php

namespace TinyIB\Controller;

use Psr\Http\Message\ResponseInterface;
use Psr\Http\Message\ServerRequestInterface;

interface CaptchaControllerInterface
{
    /**
     * Returns a captcha image.
     *
     * @param \Psr\Http\Message\ServerRequestInterface
     *
     * @return \Psr\Http\Message\ResponseInterface
     */
    public function captcha(ServerRequestInterface $request) : ResponseInterface;
}
