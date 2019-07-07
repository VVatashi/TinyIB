<?php

namespace Imageboard\Controllers\Admin;

use Imageboard\Exceptions\NotFoundException;
use Imageboard\Repositories\Repository;
use Imageboard\Services\{
  ConfigService,
  UserService,
  RendererService,
  SessionService
};
use Imageboard\Repositories\UserRepository;
use Psr\Http\Message\ServerRequestInterface;

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
   * @param ConfigService   $config
   * @param UserRepository  $repository
   * @param UserService     $service
   * @param SessionService  $session
   * @param RendererService $renderer
   */
  function __construct(
    ConfigService   $config,
    UserRepository  $repository,
    UserService     $service,
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
      'id'       => 0,
      'email'    => '',
      'password' => '',
      'role'     => 0,
    ];
  }

  protected function loadItem(int $id): array
  {
    $user = $this->repository->getById($id);
    if (!isset($user)) {
      throw new NotFoundException();
    }

    return [
      'id'       => $user->id,
      'email'    => $user->email,
      'password' => '',
      'role'     => $user->role,
    ];
  }

  protected function createModel(ServerRequestInterface $request) {
    $data = $request->getParsedBody();

    $email    = $data['email'] ?? '';
    $password = $data['password'] ?? '';
    $role     = $data['role'] ?? 0;

    $user = $request->getAttribute('user');
    return $this->service->create($email, $password, $role, $user);
  }

  protected function editModel(ServerRequestInterface $request) {
    $data = $request->getParsedBody();

    $id       = (int)($data['id'] ?? 0);
    $email    = $data['email'] ?? '';
    $password = $data['password'] ?? '';
    $role     = $data['role'] ?? 0;

    $user = $request->getAttribute('user');
    return $this->service->edit($id, $email, $password, $role, $user);
  }

  protected function deleteModel(ServerRequestInterface $request, int $id) {
    $user = $request->getAttribute('user');
    return $this->service->delete($id, $user);
  }
}
