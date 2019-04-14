<?php

namespace Imageboard\Controller\Admin;

use Imageboard\Command\Admin\{CreateUser, EditUser, DeleteUser};
use Imageboard\Exception\NotFoundException;
use Imageboard\Model\User;
use Imageboard\Query\Admin\ListUsers;

class UserController extends AdminController
{
  use ListTrait;
  use CreateTrait;
  use EditTrait;
  use DeleteTrait;

  protected function getCreateCommand(): string {
    return CreateUser::class;
  }

  protected function getEditCommand(): string {
    return EditUser::class;
  }

  protected function getDeleteCommand(): string {
    return DeleteUser::class;
  }

  protected function getListQuery(): string {
    return ListUsers::class;
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
    /** @var User $user */
    $user = User::find($id);
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
}
