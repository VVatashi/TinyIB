<?php

namespace TinyIB\Tests\Mock;

use GuzzleHttp\Psr7\Response;
use Psr\Http\Message\ResponseInterface;
use Psr\Http\Message\ServerRequestInterface;
use TinyIB\Controller\CaptchaControllerInterface;

class CaptchaControllerMock implements CaptchaControllerInterface
{
    /**
     * {@inheritDoc}
     */
    public function captcha(ServerRequestInterface $request) : ResponseInterface
    {
        return new Response(200);
    }
}
