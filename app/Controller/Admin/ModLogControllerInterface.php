<?php

namespace Imageboard\Controller\Admin;

use Psr\Http\Message\{ServerRequestInterface, ResponseInterface};

interface ModLogControllerInterface
{
    /**
     * Returns log entry list.
     *
     * @param ResponseInterface $request
     *
     * @return ServerRequestInterface $response
     *
     * @throws AccessDeniedException
     *   If current user is not an admin.
     */
    public function list(ServerRequestInterface $request) : ResponseInterface;
}
