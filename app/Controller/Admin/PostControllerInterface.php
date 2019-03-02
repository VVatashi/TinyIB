<?php

namespace Imageboard\Controller\Admin;

use Psr\Http\Message\{ServerRequestInterface, ResponseInterface};

interface PostControllerInterface
{
    /**
     * Returns the list of posts.
     *
     * @param ServerRequestInterface $request
     *
     * @return string Response HTML.
     *
     * @throws AccessDeniedException
     *   If current user is not an admin.
     */
    public function list(ServerRequestInterface $request) : string;

    /**
     * Returns details page for a single post.
     *
     * @param ServerRequestInterface $request
     *
     * @return string Response HTML.
     *
     * @throws AccessDeniedException
     *   If current user is not an admin.
     */
    public function show(ServerRequestInterface $request, array $args) : string;

    /**
     * Deletes post by id.
     *
     * @param ServerRequestInterface $request
     *
     * @return ResponseInterface
     *
     * @throws AccessDeniedException
     *   If current user is not an admin.
     */
    public function delete(ServerRequestInterface $request, array $args) : ResponseInterface;
}
