<?php

namespace Imageboard\Controller\Admin;

use Imageboard\Query\Admin\ListModLog;

class ModLogController extends AdminController
{
  use ListTrait;

  protected function getListQuery(): string {
    return ListModLog::class;
  }

  protected function getListTemplate(): string {
    return 'admin/modlog/list.twig';
  }

  protected function getAjaxListTemplate(): string {
    return 'admin/modlog/_list.twig';
  }

  protected function getItemsPerPage(): int {
    return 100;
  }
}
