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
   * @return string Response HTML.
   *
   * @throws AccessDeniedException
   *   If current user is not an admin.
   */
  function index(ServerRequestInterface $request) : string;
}
