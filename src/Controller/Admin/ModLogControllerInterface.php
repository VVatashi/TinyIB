<?php

namespace TinyIB\Controller\Admin;

use Psr\Http\Message\ResponseInterface;
use Psr\Http\Message\ServerRequestInterface;

interface ModLogControllerInterface
{
    /**
     * Returns log entry list.
     *
     * @param \Psr\Http\Message\ResponseInterface $request
     *
     * @return \Psr\Http\Message\ServerRequestInterface $response
     *
     * @throws \TinyIB\AccessDeniedException
     *   If current user is not an admin.
     */
    public function list(ServerRequestInterface $request) : ResponseInterface;
}
