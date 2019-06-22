<?php

namespace Imageboard\Controller\Admin;

use Imageboard\Command\CommandDispatcher;
use Imageboard\Query\QueryDispatcher;
use Imageboard\Repositories\{Repository, ModLogRepository};
use Imageboard\Service\{ConfigService, RendererService};

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
   * @param ConfigService     $config
   * @param CommandDispatcher $command_dispatcher
   * @param QueryDispatcher   $query_dispatcher
   * @param RendererService   $renderer
   * @param ModLogRepository  $repository
   */
  function __construct(
    ConfigService     $config,
    CommandDispatcher $command_dispatcher,
    QueryDispatcher   $query_dispatcher,
    RendererService   $renderer,
    ModLogRepository  $repository
  ) {
    parent::__construct(
      $config,
      $command_dispatcher,
      $query_dispatcher,
      $renderer
    );

    $this->repository = $repository;
  }
}
