<?php

namespace Imageboard\Controller\Admin;

use Imageboard\Query\ListModLog;

class ModLogController extends CrudController implements ModLogControllerInterface
{
    protected $list_query_type = ListModLog::class;
    protected $list_template = 'admin/modlog/list.twig';
}
