<?php

namespace Imageboard\Controller\Admin;

use Psr\Http\Message\{ServerRequestInterface, ResponseInterface};

interface DashboardControllerInterface
{
    /**
     * Returns the admin dashboard.
     *
     * @param ResponseInterface $request
     *
     * @return ServerRequestInterface
     *
     * @throws AccessDeniedException
     *   If current user is not an admin.
     */
    public function index(ServerRequestInterface $request) : ResponseInterface;
}
