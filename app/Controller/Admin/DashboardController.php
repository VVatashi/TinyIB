<?php

namespace Imageboard\Controller\Admin;

use Imageboard\Exception\AccessDeniedException;

class DashboardController extends AdminController
{
  /**
   * Returns the admin dashboard.
   *
   * @return string Response HTML.
   *
   * @throws AccessDeniedException
   *   If current user is not an admin.
   */
  function index(): string
  {
    if (!$this->checkAccess()) {
      throw new AccessDeniedException('You are not allowed to access this page');
    }

    return $this->renderer->render('admin/dashboard.twig');
  }
}
