<?php

namespace Imageboard\Controller\Admin;

use Imageboard\Repositories\{
  Repository,
  PostRepository
};
use Imageboard\Service\{
  ConfigService,
  PostService,
  UserService,
  RendererService
};

class PostController extends AdminController
{
  use CrudListTrait;
  use CrudShowTrait;
  use CrudDeleteTrait;

  /** @var PostRepository */
  protected $repository;

  /** @var PostService */
  protected $service;

  /**
   * BanController constructor.
   *
   * @param ConfigService   $config
   * @param PostRepository  $repository
   * @param PostService     $service
   * @param RendererService $renderer
   */
  function __construct(
    ConfigService   $config,
    PostRepository  $repository,
    PostService     $service,
    UserService     $user_service,
    RendererService $renderer
  ) {
    parent::__construct(
      $config,
      $user_service,
      $renderer
    );

    $this->repository = $repository;
    $this->service = $service;
  }

  protected function getRepository(): Repository {
    return $this->repository;
  }

  protected function getListUrl(): string {
    return "{$this->base_path}/admin/posts";
  }

  protected function getListTemplate(): string {
    return 'admin/posts/list.twig';
  }

  protected function getAjaxListTemplate(): string {
    return 'admin/posts/_list.twig';
  }

  protected function getShowTemplate(): string {
    return 'admin/posts/show.twig';
  }

  protected function getItemsPerPage(): int {
    return 100;
  }

  protected function createModel(array $data) {
    $name      = $data['name'] ?? '';
    $subject   = $data['subject'] ?? '';
    $message   = $data['message'] ?? '';
    $ip        = $_SERVER['REMOTE_ADDR'] ?? '';
    $user_id   = $this->user_service->getCurrentUserId();
    $parent_id = (int)($data['parent_id'] ?? 0);

    return $this->service->create(
      $name,
      '',
      $subject,
      $message,
      '',
      $ip,
      $user_id,
      $parent_id
    );
  }

  protected function deleteModel(int $id) {
    return $this->service->delete($id);
  }
}
