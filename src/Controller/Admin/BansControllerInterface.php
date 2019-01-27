<?php

namespace TinyIB\Controller\Admin;

use Psr\Http\Message\{ResponseInterface, ServerRequestInterface};

interface BansControllerInterface
{
    /**
     * Returns the list of bans.
     *
     * @param \Psr\Http\Message\ServerRequestInterface $request
     *
     * @return \Psr\Http\Message\ResponseInterface $response
     *
     * @throws \TinyIB\AccessDeniedException
     *   If current user is not an admin.
     */
    public function list(ServerRequestInterface $request) : ResponseInterface;
}
