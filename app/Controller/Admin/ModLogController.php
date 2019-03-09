<?php

namespace Imageboard\Controller\Admin;

use Imageboard\Query\ListModLog;

class ModLogController extends CrudController implements ModLogControllerInterface
{
  protected $list_url = TINYIB_BASE_URL . TINYIB_BOARD . '/admin/modlog';
  protected $list_query_type = ListModLog::class;
  protected $list_template = 'admin/modlog/list.twig';
  protected $ajax_list_template = 'admin/modlog/_list.twig';
}
