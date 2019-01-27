<?php

namespace TinyIB\Controller\Admin;

use Psr\Http\Message\ResponseInterface;
use Psr\Http\Message\ServerRequestInterface;

interface PostsControllerInterface
{
    /**
     * Returns the list of posts.
     *
     * @param \Psr\Http\Message\ServerRequestInterface $request
     *
     * @return \Psr\Http\Message\ResponseInterface $response
     *
     * @throws \TinyIB\AccessDeniedException
     *   If current user is not an admin.
     */
    public function list(ServerRequestInterface $request) : ResponseInterface;

    /**
     * Returns details page for a single post.
     *
     * @param \Psr\Http\Message\ServerRequestInterface $request
     *
     * @return \Psr\Http\Message\ResponseInterface $response
     *
     * @throws \TinyIB\AccessDeniedException
     *   If current user is not an admin.
     */
    public function show(ServerRequestInterface $request) : ResponseInterface;

    /**
     * Deletes post by id.
     *
     * @param \Psr\Http\Message\ServerRequestInterface $request
     *
     * @return \Psr\Http\Message\ResponseInterface $response
     *
     * @throws \TinyIB\AccessDeniedException
     *   If current user is not an admin.
     */
    public function delete(ServerRequestInterface $request) : ResponseInterface;
}
