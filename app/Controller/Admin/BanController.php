<?php

namespace Imageboard\Controller\Admin;

use Imageboard\Command\Admin\{CreateBan, DeleteBan};
use Imageboard\Query\Admin\ListBans;

class BanController extends AdminController
{
  use ListTrait;
  use CreateTrait;
  use DeleteTrait;

  protected function getCreateCommand(): string {
    return CreateBan::class;
  }

  protected function getDeleteCommand(): string {
    return DeleteBan::class;
  }

  protected function getListQuery(): string {
    return ListBans::class;
  }

  protected function getCreateUrl(): string {
    return "{$this->base_path}/admin/bans/create";
  }

  protected function getListUrl(): string {
    return "{$this->base_path}/admin/bans";
  }

  protected function getFormTemplate(): string {
    return 'admin/bans/form.twig';
  }

  protected function getListTemplate(): string {
    return 'admin/bans/list.twig';
  }

  protected function getAjaxListTemplate(): string {
    return 'admin/bans/_list.twig';
  }

  protected function getNewItem(): array {
    return [
      'ip'          => '',
      'expires_in'  => 60 * 60,
      'reason'      => '',
    ];
  }

  protected function getItemsPerPage(): int {
    return 100;
  }
}
