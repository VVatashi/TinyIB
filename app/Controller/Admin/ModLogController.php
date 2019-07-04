<?php

namespace Imageboard\Controller\Admin;

use Imageboard\Repositories\{Repository, ModLogRepository};
use Imageboard\Service\{ConfigService, RendererService, SessionService};

class ModLogController extends AdminController
{
  use CrudListTrait;

  /** @var ModLogRepository */
  protected $repository;

  protected function getRepository(): Repository {
    return $this->repository;
  }

  protected function getListTemplate(): string {
    return 'admin/modlog/list.twig';
  }

  protected function getAjaxListTemplate(): string {
    return 'admin/modlog/_list.twig';
  }

  protected function getItemsPerPage(): int {
    return 100;
  }

  /**
   * ModLogController constructor.
   *
   * @param ConfigService    $config
   * @param ModLogRepository $repository
   * @param SessionService   $session
   * @param RendererService  $renderer
   */
  function __construct(
    ConfigService    $config,
    ModLogRepository $repository,
    SessionService   $session,
    RendererService  $renderer
  ) {
    parent::__construct(
      $config,
      $session,
      $renderer
    );

    $this->repository = $repository;
  }
}
