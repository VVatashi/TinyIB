<?php

namespace Imageboard\Controller\Admin;

use Imageboard\Command\{CreateBan, DeleteBan};
use Imageboard\Query\Admin\ListBans;

class BanController extends CrudController implements BanControllerInterface
{
  protected $list_url = TINYIB_BASE_URL . TINYIB_BOARD . '/admin/bans';
  protected $list_query_type = ListBans::class;
  protected $list_template = 'admin/bans/list.twig';
  protected $ajax_list_template = 'admin/bans/_list.twig';

  protected $create_url = TINYIB_BASE_URL . TINYIB_BOARD . '/admin/bans/create';
  protected $create_command_type = CreateBan::class;
  protected $new_item = [
    'ip' => '',
    'expires_in' => 60 * 60,
    'reason' => '',
  ];
  protected $form_template = 'admin/bans/form.twig';

  protected $delete_command_type = DeleteBan::class;
}
