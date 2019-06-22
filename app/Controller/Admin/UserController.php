<?php

namespace Imageboard\Controller\Admin;

use Imageboard\Command\CommandDispatcher;
use Imageboard\Exception\NotFoundException;
use Imageboard\Query\QueryDispatcher;
use Imageboard\Repositories\Repository;
use Imageboard\Service\{ConfigService, RendererService, UserService};
use Imageboard\Repositories\UserRepository;

class UserController extends AdminController
{
  use CrudListTrait;
  use CrudCreateTrait;
  use CrudEditTrait;
  use CrudDeleteTrait;

  /** @var UserRepository */
  protected $repository;

  /** @var UserService */
  protected $service;

  /**
   * UserController constructor.
   *
   * @param ConfigService     $config
   * @param CommandDispatcher $command_dispatcher
   * @param QueryDispatcher   $query_dispatcher
   * @param RendererService   $renderer
   * @param UserRepository    $repository
   * @param UserService       $service
   */
  function __construct(
    ConfigService     $config,
    CommandDispatcher $command_dispatcher,
    QueryDispatcher   $query_dispatcher,
    RendererService   $renderer,
    UserRepository    $repository,
    UserService       $service
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
    return "{$this->base_path}/admin/users/create";
  }

  protected function getEditUrl(): string {
    return "{$this->base_path}/admin/users/:id/edit";
  }

  protected function getListUrl(): string {
    return "{$this->base_path}/admin/users";
  }

  protected function getFormTemplate(): string {
    return 'admin/users/form.twig';
  }

  protected function getListTemplate(): string {
    return 'admin/users/list.twig';
  }

  protected function getAjaxListTemplate(): string {
    return 'admin/users/_list.twig';
  }

  protected function getItemsPerPage(): int {
    return 100;
  }

  protected function getNewItem(): array {
    return [
      'id'        => 0,
      'email'     => '',
      'password'  => '',
      'role'      => 0,
    ];
  }

  protected function loadItem(int $id): array
  {
    $user = $this->repository->getById($id);
    if (!isset($user)) {
      throw new NotFoundException();
    }

    return [
      'id'        => $user->id,
      'email'     => $user->email,
      'password'  => '',
      'role'      => $user->role,
    ];
  }

  protected function createModel(array $data) {
    $email = $data['email'] ?? '';
    $password = $data['password'] ?? '';
    $role = $data['role'] ?? 0;

    return $this->service->create($email, $password, $role);
  }

  protected function editModel(array $data) {
    $id = (int)($data['id'] ?? 0);
    $email = $data['email'] ?? '';
    $password = $data['password'] ?? '';
    $role = $data['role'] ?? 0;

    return $this->service->edit($id, $email, $password, $role);
  }

  protected function deleteModel(int $id) {
    return $this->service->delete($id);
  }
}
