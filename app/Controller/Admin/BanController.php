<?php

namespace Imageboard\Controller\Admin;

use GuzzleHttp\Psr7\Response;
use Imageboard\Exception\AccessDeniedException;
use Imageboard\Command\CommandDispatcher;
use Imageboard\Query\QueryDispatcher;
use Imageboard\Repositories\{Repository, BanRepository};
use Imageboard\Service\{ConfigService, RendererService, BanService};
use Psr\Http\Message\{ResponseInterface, ServerRequestInterface};

class BanController extends AdminController
{
  use CrudListTrait;
  use CrudCreateTrait;
  use CrudDeleteTrait;

  /** @var BanRepository */
  protected $repository;

  /** @var BanService */
  protected $service;

  /**
   * BanController constructor.
   *
   * @param ConfigService     $config
   * @param CommandDispatcher $command_dispatcher
   * @param QueryDispatcher   $query_dispatcher
   * @param RendererService   $renderer
   * @param BanRepository     $repository
   * @param BanService        $service
   */
  function __construct(
    ConfigService     $config,
    CommandDispatcher $command_dispatcher,
    QueryDispatcher   $query_dispatcher,
    RendererService   $renderer,
    BanRepository     $repository,
    BanService        $service
  ) {
    parent::__construct(
      $config,
      $command_dispatcher,
      $query_dispatcher,
      $renderer
    );

    $this->repository = $repository;
    $this->service = $service;
  }

  protected function getRepository(): Repository {
    return $this->repository;
  }

  protected function getCreateUrl(): string {
    return "{$this->base_path}/admin/bans/create";
  }

  protected function getListUrl(): string {
    return "{$this->base_path}/admin/bans";
  }

  protected function getFormTemplate(): string {
    return 'admin/bans/form.twig';
  }

  protected function getListTemplate(): string {
    return 'admin/bans/list.twig';
  }

  protected function getAjaxListTemplate(): string {
    return 'admin/bans/_list.twig';
  }

  protected function getNewItem(): array {
    return [
      'ip'          => '',
      'expires_in'  => 60 * 60,
      'reason'      => '',
    ];
  }

  protected function getItemsPerPage(): int {
    return 100;
  }

  protected function createModel(array $data) {
    $ip = $data['ip'] ?? '';
    $expires_in = $data['expires_in'] ?? 0;
    $reason = $data['reason'] ?? '';

    return $this->service->create($ip, $expires_in, $reason);
  }

  protected function deleteModel(int $id) {
    return $this->service->delete($id);
  }
}
