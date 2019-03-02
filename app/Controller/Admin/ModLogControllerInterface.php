<?php

namespace Imageboard\Controller\Admin;

use Psr\Http\Message\ServerRequestInterface;

interface ModLogControllerInterface
{
    /**
     * Returns log entry list.
     *
     * @param ServerRequestInterface $request
     *
     * @return string Response HTML.
     *
     * @throws AccessDeniedException
     *   If current user is not an admin.
     */
    public function list(ServerRequestInterface $request) : string;
}
