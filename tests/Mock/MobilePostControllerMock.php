<?php

namespace TinyIB\Tests\Mock;

use GuzzleHttp\Psr7\Response;
use Psr\Http\Message\ResponseInterface;
use Psr\Http\Message\ServerRequestInterface;
use TinyIB\Controller\Mobile\MobilePostControllerInterface;

class MobilePostControllerMock implements MobilePostControllerInterface
{
    /**
     * {@inheritDoc}
     */
    public function index(ServerRequestInterface $request) : ResponseInterface
    {
        return new Response(200);
    }

    /**
     * {@inheritDoc}
     */
    public function thread(ServerRequestInterface $request) : ResponseInterface
    {
        return new Response(200);
    }
}
