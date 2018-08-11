<?php

namespace TinyIB\Controller;

use Psr\Http\Message\ResponseInterface;
use Psr\Http\Message\ServerRequestInterface;

interface PostControllerInterface
{
    /**
     * Create post.
     *
     * @param \Psr\Http\Message\ServerRequestInterface
     *
     * @return \Psr\Http\Message\ResponseInterface
     */
    public function create(ServerRequestInterface $request) : ResponseInterface;

    /**
     * Deletes specified post.
     *
     * @param \Psr\Http\Message\ServerRequestInterface
     *
     * @return \Psr\Http\Message\ResponseInterface
     */
    public function delete(ServerRequestInterface $request) : ResponseInterface;
}
