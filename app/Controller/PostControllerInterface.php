<?php

namespace Imageboard\Controller;

use Psr\Http\Message\{ServerRequestInterface, ResponseInterface};

interface PostControllerInterface
{
    /**
     * Create post.
     *
     * @param ServerRequestInterface $request
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
     * @param ServerRequestInterface $request
     * @param array $args Path arguments.
     *
     * @return ResponseInterface Response.
     */
    public function board(ServerRequestInterface $request, array $args) : ResponseInterface;

    /**
     * Returns page for a thread.
     *
     * @param ServerRequestInterface $request
     * @param array $args Path arguments.
     *
     * @return ResponseInterface Response.
     */
    public function thread(ServerRequestInterface $request, array $args) : ResponseInterface;

    /**
     * Returns page partial HTML for a post.
     *
     * @param array $args Path arguments.
     *
     * @return string Response HTML.
     *
     * @throws NotFoundException
     */
    public function ajaxPost(array $args) : string;

    /**
     * Returns page partial HTML for a thread.
     *
     * @param ServerRequestInterface $request
     * @param array $args Path arguments.
     *
     * @return string Response HTML.
     *
     * @throws NotFoundException
     */
    public function ajaxThread(ServerRequestInterface $request, array $args) : string;
}
