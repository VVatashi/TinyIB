<?php

namespace TinyIB\Controller\Admin;

use TinyIB\Queries\ListModLog;

class ModLogController extends CrudController implements ModLogControllerInterface
{
    protected $list_query_type = ListModLog::class;
    protected $list_template = 'admin/modlog/list.twig';
}
