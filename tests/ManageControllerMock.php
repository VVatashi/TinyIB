<?php

namespace TinyIB\Tests;

use GuzzleHttp\Psr7\Response;
use Psr\Http\Message\ResponseInterface;
use Psr\Http\Message\ServerRequestInterface;
use TinyIB\Controller\ManageControllerInterface;

class ManageControllerMock implements ManageControllerInterface
{
    /**
     * {@inheritDoc}
     */
    public function status(ServerRequestInterface $request) : ResponseInterface
    {
        return new Response(200);
    }

    /**
     * {@inheritDoc}
     */
    public function listBans(ServerRequestInterface $request) : ResponseInterface
    {
        return new Response(200);
    }

    /**
     * {@inheritDoc}
     */
    public function addBan(ServerRequestInterface $request) : ResponseInterface
    {
        return new Response(200);
    }

    /**
     * {@inheritDoc}
     */
    public function liftBan(ServerRequestInterface $request) : ResponseInterface
    {
        return new Response(200);
    }

    /**
     * {@inheritDoc}
     */
    public function moderate(ServerRequestInterface $request) : ResponseInterface
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

    /**
     * {@inheritDoc}
     */
    public function approve(ServerRequestInterface $request) : ResponseInterface
    {
        return new Response(200);
    }

    /**
     * {@inheritDoc}
     */
    public function setSticky(ServerRequestInterface $request) : ResponseInterface
    {
        return new Response(200);
    }

    /**
     * {@inheritDoc}
     */
    public function rawPost(ServerRequestInterface $request) : ResponseInterface
    {
        return new Response(200);
    }

    /**
     * {@inheritDoc}
     */
    public function rebuildAll(ServerRequestInterface $request) : ResponseInterface
    {
        return new Response(200);
    }

    /**
     * {@inheritDoc}
     */
    public function update(ServerRequestInterface $request) : ResponseInterface
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
