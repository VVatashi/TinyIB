<?php

namespace TinyIB\Tests\Mock;

use GuzzleHttp\Psr7\Response;
use Psr\Http\Message\ResponseInterface;
use Psr\Http\Message\ServerRequestInterface;
use TinyIB\Controller\Admin\UserCrudControllerInterface;

class UserCrudControllerMock implements UserCrudControllerInterface
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
    public function list(ServerRequestInterface $request) : ResponseInterface
    {
        return new Response(200);
    }

    /**
     * {@inheritDoc}
     */
    public function show(ServerRequestInterface $request) : ResponseInterface
    {
        return new Response(200);
    }

    /**
     * {@inheritDoc}
     */
    public function createForm(ServerRequestInterface $request) : ResponseInterface
    {
        return new Response(200);
    }

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
    public function editForm(ServerRequestInterface $request) : ResponseInterface
    {
        return new Response(200);
    }

    /**
     * {@inheritDoc}
     */
    public function edit(ServerRequestInterface $request) : ResponseInterface
    {
        return new Response(200);
    }

    /**
     * {@inheritDoc}
     */
    public function deleteConfirm(ServerRequestInterface $request) : ResponseInterface
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
