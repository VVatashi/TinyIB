<?php

namespace Imageboard\Controller\Admin;

use Imageboard\Controller\ControllerInterface;
use Imageboard\Model\User;
use Imageboard\Service\{
  ConfigService,
  UserService,
  RendererService
};

abstract class AdminController implements ControllerInterface
{
  /** @var ConfigService */
  protected $config;

  /** @var UserService */
  protected $user_service;

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
   * @param UserService     $user_service
   * @param RendererService $renderer
   */
  function __construct(
    ConfigService   $config,
    UserService     $user_service,
    RendererService $renderer
  ) {
    $this->config       = $config;
    $this->user_service = $user_service;
    $this->renderer     = $renderer;

    $this->base_path = $this->config->get('BASE_PATH', '');
  }

  /**
   * Checks user access.
   *
   * @return bool
   */
  protected function checkAccess(): bool {
    /** @var User $current_user */
    $current_user = $this->user_service->getCurrentUser();
    return $current_user->isMod();
  }

  protected function getRenderer(): RendererService {
    return $this->renderer;
  }
}
