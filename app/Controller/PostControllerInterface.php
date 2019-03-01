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
     * @return ResponseInterface
     */
    public function create(ServerRequestInterface $request) : ResponseInterface;

    /**
     * Deletes specified post.
     *
     * @param ServerRequestInterface
     *
     * @return ResponseInterface
     */
    public function delete(ServerRequestInterface $request) : ResponseInterface;

    /**
     * Returns page for a board.
     *
     * @param ServerRequestInterface
     *
     * @return ResponseInterface
     */
    public function board(ServerRequestInterface $request) : ResponseInterface;

    /**
     * Returns page for a thread.
     *
     * @param ServerRequestInterface
     *
     * @return ResponseInterface
     */
    public function thread(ServerRequestInterface $request) : ResponseInterface;
}
