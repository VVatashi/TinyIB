<?php

namespace Imageboard\Controller\Admin;

use Psr\Http\Message\ServerRequestInterface;

interface DashboardControllerInterface
{
  /**
   * Returns the admin dashboard.
   *
   * @param ServerRequestInterface $request
   *
   * @return string Response HTML.
   *
   * @throws AccessDeniedException
   *   If current user is not an admin.
   */
  function index(ServerRequestInterface $request) : string;
}
