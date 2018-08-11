<?php

namespace TinyIB\Tests;

use GuzzleHttp\Psr7\Response;
use Psr\Http\Message\ResponseInterface;
use Psr\Http\Message\ServerRequestInterface;
use TinyIB\Controller\PostControllerInterface;

class PostControllerMock implements PostControllerInterface
{
    /**
     * {@inheritDoc}
     */
    public function create(ServerRequestInterface $request) : ResponseInterface
    {
        return new Response(200);
    }

    /**
     * {@inheritDoc}
     */
    public function delete(ServerRequestInterface $request) : ResponseInterface
    {
        return new Response(200);
    }
}
