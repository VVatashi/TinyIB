<?php

namespace TinyIB\Controller\Mobile;

use Psr\Http\Message\ResponseInterface;
use Psr\Http\Message\ServerRequestInterface;

interface MobilePostControllerInterface
{
    /**
     * Returns an index page.
     *
     * @param \Psr\Http\Message\ServerRequestInterface
     *
     * @return \Psr\Http\Message\ResponseInterface
     */
    public function index(ServerRequestInterface $request) : ResponseInterface;

    /**
     * Returns a thread page.
     *
     * @param \Psr\Http\Message\ServerRequestInterface
     *
     * @return \Psr\Http\Message\ResponseInterface
     */
    public function thread(ServerRequestInterface $request) : ResponseInterface;

    /**
     * Creates a post.
     *
     * @param \Psr\Http\Message\ServerRequestInterface
     *
     * @return \Psr\Http\Message\ResponseInterface
     */
    public function createPost(ServerRequestInterface $request) : ResponseInterface;
}
