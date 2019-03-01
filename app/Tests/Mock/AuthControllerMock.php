<?php

namespace Imageboard\Tests\Mock;

use GuzzleHttp\Psr7\Response;
use Imageboard\Controller\AuthControllerInterface;
use Psr\Http\Message\{ServerRequestInterface, ResponseInterface};

class AuthControllerMock implements AuthControllerInterface
{
    /**
     * {@inheritDoc}
     */
    public function registerForm(ServerRequestInterface $request) : ResponseInterface
    {
        return new Response(200);
    }

    /**
     * {@inheritDoc}
     */
    public function register(ServerRequestInterface $request) : ResponseInterface
    {
        return new Response(200);
    }

    /**
     * {@inheritDoc}
     */
    public function loginForm(ServerRequestInterface $request) : ResponseInterface
    {
        return new Response(200);
    }

    /**
     * {@inheritDoc}
     */
    public function login(ServerRequestInterface $request) : ResponseInterface
    {
        return new Response(200);
    }

    /**
     * {@inheritDoc}
     */
    public function logout(ServerRequestInterface $request) : ResponseInterface
    {
        return new Response(200);
    }
}
