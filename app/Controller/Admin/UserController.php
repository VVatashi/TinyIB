<?php

namespace Imageboard\Controller\Admin;

use Imageboard\Command\Admin\{CreateUser, EditUser, DeleteUser};
use Imageboard\Exception\NotFoundException;
use Imageboard\Model\User;
use Imageboard\Query\Admin\ListUsers;

class UserController extends CrudController implements UserControllerInterface
{
  protected $list_url = TINYIB_BASE_URL . TINYIB_BOARD . '/admin/users';
  protected $list_query_type = ListUsers::class;
  protected $list_template = 'admin/users/list.twig';
  protected $ajax_list_template = 'admin/users/_list.twig';

  protected $create_url = TINYIB_BASE_URL . TINYIB_BOARD . '/admin/users/create';
  protected $edit_url = TINYIB_BASE_URL . TINYIB_BOARD . '/admin/users/:id/edit';
  protected $create_command_type = CreateUser::class;
  protected $edit_command_type = EditUser::class;
  protected $new_item = [
    'id' => 0,
    'email' => '',
    'password' => '',
    'role' => 0,
  ];
  protected $form_template = 'admin/users/form.twig';

  /**
   * {@inheritDoc}
   */
  protected function loadItem(int $id): array
  {
    /** @var User $user */
    $user = User::find($id);
    if (!isset($user)) {
      throw new NotFoundException();
    }

    return [
      'id' => $user->id,
      'email' => $user->email,
      'password' => '',
      'role' => $user->role,
    ];
  }

  protected $delete_command_type = DeleteUser::class;
}
