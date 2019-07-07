<?php

namespace Imageboard\Controllers\Admin;

use Imageboard\Repositories\{Repository, BanRepository};
use Imageboard\Services\{
  ConfigService,
  BanService,
  RendererService,
  SessionService
};
use Psr\Http\Message\ServerRequestInterface;

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
   * @param ConfigService   $config
   * @param BanRepository   $repository
   * @param BanService      $service
   * @param SessionService  $session
   * @param RendererService $renderer
   */
  function __construct(
    ConfigService   $config,
    BanRepository   $repository,
    BanService      $service,
    SessionService  $session,
    RendererService $renderer
  ) {
    parent::__construct(
      $config,
      $session,
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
      'ip'         => '',
      'expires_in' => 60 * 60,
      'reason'     => '',
    ];
  }

  protected function getItemsPerPage(): int {
    return 100;
  }

  protected function createModel(ServerRequestInterface $request) {
    $data = $request->getParsedBody();

    $ip         = $data['ip'] ?? '';
    $expires_in = $data['expires_in'] ?? 0;
    $reason     = $data['reason'] ?? '';

    $user = $request->getAttribute('user');
    return $this->service->create($ip, $expires_in, $reason, $user);
  }

  protected function deleteModel(ServerRequestInterface $request, int $id) {
    $user = $request->getAttribute('user');
    return $this->service->delete($id, $user);
  }
}
