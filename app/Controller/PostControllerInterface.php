<?php

namespace Imageboard\Controller;

use Psr\Http\Message\{ServerRequestInterface, ResponseInterface};

interface PostControllerInterface
{
    /**
     * Create post.
     *
     * @param ServerRequestInterface
     *
     * @return ResponseInterface Response.
     */
    public function create(ServerRequestInterface $request) : ResponseInterface;

    /**
     * Deletes specified post.
     *
     * @param ServerRequestInterface
     *
     * @return string|ResponseInterface Response.
     */
    public function delete(ServerRequestInterface $request);

    /**
     * Returns page for a board.
     *
     * @param ServerRequestInterface
     *
     * @return ResponseInterface Response.
     */
    public function board(ServerRequestInterface $request) : ResponseInterface;

    /**
     * Returns page for a thread.
     *
     * @param ServerRequestInterface
     *
     * @return ResponseInterface Response.
     */
    public function thread(ServerRequestInterface $request) : ResponseInterface;
}
