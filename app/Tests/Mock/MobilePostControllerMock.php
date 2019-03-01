<?php

namespace Imageboard\Tests\Mock;

use GuzzleHttp\Psr7\Response;
use Imageboard\Controller\Mobile\MobilePostControllerInterface;
use Psr\Http\Message\{ServerRequestInterface, ResponseInterface};

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

    /**
     * {@inheritDoc}
     */
    public function createPost(ServerRequestInterface $request) : ResponseInterface
    {
        return new Response(200);
    }
}
