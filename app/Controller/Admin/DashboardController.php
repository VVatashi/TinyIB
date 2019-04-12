<?php

namespace Imageboard\Controller\Admin;

use Imageboard\Exception\AccessDeniedException;
use Imageboard\Model\User;
use Imageboard\Service\RendererServiceInterface;
use Psr\Http\Message\ServerRequestInterface;

class DashboardController implements DashboardControllerInterface
{
  /** @var RendererServiceInterface */
  protected $renderer;

  /**
   * Creates a new DashboardController instance.
   *
   * @param RendererServiceInterface $renderer
   */
  function __construct(
    RendererServiceInterface $renderer
  ) {
    $this->renderer = $renderer;
  }

  protected function checkAccess(ServerRequestInterface $request) {
    /** @var User */
    $current_user = $request->getAttribute('user');
    return $current_user->isMod();
  }

  /**
   * {@inheritDoc}
   *
   * @throws \Imageboard\Exception\AccessDeniedException
   */
  function index(ServerRequestInterface $request) : string
  {
    if (!$this->checkAccess($request)) {
      throw new AccessDeniedException('You are not allowed to access this page');
    }

    return $this->renderer->render('admin/dashboard.twig');
  }
}
