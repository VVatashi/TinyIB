<?php

namespace Imageboard\Controllers\Admin;

use Imageboard\Controllers\ControllerInterface;
use Imageboard\Models\User;
use Imageboard\Services\{
  ConfigService,
  SessionService,
  RendererService
};
use Psr\Http\Message\ServerRequestInterface;

abstract class AdminController implements ControllerInterface
{
  /** @var ConfigService */
  protected $config;

  /** @var SessionService */
  protected $session;

  /** @var RendererService */
  protected $renderer;

  /** @var string */
  protected $base_path;

  /**
   * CrudController constructor.
   *
   * Creates a new CRUD controller instance.
   *
   * @param ConfigService   $config
   * @param SessionService  $session
   * @param RendererService $renderer
   */
  function __construct(
    ConfigService   $config,
    SessionService  $session,
    RendererService $renderer
  ) {
    $this->config   = $config;
    $this->session  = $session;
    $this->renderer = $renderer;

    $this->base_path = $this->config->get('BASE_PATH', '');
  }

  /**
   * Checks user access.
   *
   * @param ServerRequestInterface $request
   *
   * @return bool
   */
  protected function checkAccess(ServerRequestInterface $request): bool {
    /** @var User $current_user */
    $current_user = $request->getAttribute('user');
    return $current_user->isMod();
  }

  protected function getSession(): SessionService {
    return $this->session;
  }

  protected function getRenderer(): RendererService {
    return $this->renderer;
  }
}
