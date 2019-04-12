<?php

namespace Imageboard\Controller\Admin;

use Imageboard\Exception\AccessDeniedException;
use Psr\Http\Message\ServerRequestInterface;

class DashboardController extends AdminController
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
  function index(ServerRequestInterface $request): string
  {
    if (!$this->checkAccess($request)) {
      throw new AccessDeniedException('You are not allowed to access this page');
    }

    return $this->renderer->render('admin/dashboard.twig');
  }
}
