<?php

namespace Imageboard\Tests\Mock;

use GuzzleHttp\Psr7\Response;
use Imageboard\Controller\CaptchaControllerInterface;
use Psr\Http\Message\{ServerRequestInterface, ResponseInterface};

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
