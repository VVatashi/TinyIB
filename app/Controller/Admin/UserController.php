<?php

namespace Imageboard\Controller\Admin;

use Imageboard\Command\Admin\{CreateUser, EditUser, DeleteUser};
use Imageboard\Command\CommandDispatcher;
use Imageboard\Exception\NotFoundException;
use Imageboard\Model\User;
use Imageboard\Query\Admin\ListUsers;
use Imageboard\Query\QueryDispatcher;
use Imageboard\Service\ConfigServiceInterface;
use Imageboard\Service\RendererServiceInterface;

class UserController extends CrudController implements UserControllerInterface
{
  protected $list_url;
  protected $list_query_type = ListUsers::class;
  protected $list_template = 'admin/users/list.twig';
  protected $ajax_list_template = 'admin/users/_list.twig';

  protected $create_url;
  protected $edit_url;
  protected $create_command_type = CreateUser::class;
  protected $edit_command_type = EditUser::class;
  protected $new_item = [
    'id'        => 0,
    'email'     => '',
    'password'  => '',
    'role'      => 0,
  ];
  protected $form_template = 'admin/users/form.twig';

  /**
   * UserController constructor.
   *
   * @param \Imageboard\Command\CommandDispatcher        $command_dispatcher
   * @param \Imageboard\Query\QueryDispatcher            $query_dispatcher
   * @param \Imageboard\Service\RendererServiceInterface $renderer
   * @param \Imageboard\Service\ConfigServiceInterface   $config_service
   */
  public function __construct (
    CommandDispatcher $command_dispatcher,
    QueryDispatcher $query_dispatcher,
    RendererServiceInterface $renderer,
    ConfigServiceInterface $config_service
  )
  {
    parent::__construct( $command_dispatcher, $query_dispatcher, $renderer, $config_service );

    $this->list_url   = "$this->board_full_url/admin/users";
    $this->create_url = "$this->board_full_url/admin/users/create";
    $this->edit_url   = "$this->board_full_url/admin/users/:id/edit";
  }

  /**
   * {@inheritDoc}
   *
   * @throws \Imageboard\Exception\NotFoundException
   */
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

  protected $delete_command_type = DeleteUser::class;
}
