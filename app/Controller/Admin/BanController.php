<?php

namespace Imageboard\Controller\Admin;

use Imageboard\Command\Admin\{CreateBan, DeleteBan};
use Imageboard\Command\CommandDispatcher;
use Imageboard\Query\Admin\ListBans;
use Imageboard\Query\QueryDispatcher;
use Imageboard\Service\ConfigServiceInterface;
use Imageboard\Service\RendererServiceInterface;

class BanController extends CrudController implements BanControllerInterface
{
  protected $list_url;
  protected $list_query_type = ListBans::class;
  protected $list_template = 'admin/bans/list.twig';
  protected $ajax_list_template = 'admin/bans/_list.twig';

  protected $create_url;
  protected $create_command_type = CreateBan::class;
  protected $new_item = [
    'ip'          => '',
    'expires_in'  => 60 * 60,
    'reason'      => '',
  ];
  protected $form_template = 'admin/bans/form.twig';

  protected $delete_command_type = DeleteBan::class;

  public function __construct (
    CommandDispatcher $command_dispatcher,
    QueryDispatcher $query_dispatcher,
    RendererServiceInterface $renderer,
    ConfigServiceInterface $config
  )
  {
    parent::__construct($command_dispatcher, $query_dispatcher, $renderer, $config);

    $this->list_url   = "{$this->board_full_url}/admin/bans";
    $this->create_url = "{$this->board_full_url}/admin/bans/create";
  }
}
