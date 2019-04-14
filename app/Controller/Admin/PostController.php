<?php

namespace Imageboard\Controller\Admin;

use Imageboard\Command\Admin\DeletePost;
use Imageboard\Query\Admin\{ListPosts, ShowPost};

class PostController extends AdminController
{
  use ListTrait;
  use ShowTrait;
  use DeleteTrait;

  protected function getDeleteCommand(): string {
    return DeletePost::class;
  }

  protected function getListQuery(): string {
    return ListPosts::class;
  }

  protected function getShowQuery(): string {
    return ShowPost::class;
  }

  protected function getListUrl(): string {
    return "{$this->base_path}/admin/posts";
  }

  protected function getListTemplate(): string {
    return 'admin/posts/list.twig';
  }

  protected function getAjaxListTemplate(): string {
    return 'admin/posts/_list.twig';
  }

  protected function getShowTemplate(): string {
    return 'admin/posts/show.twig';
  }

  protected function getItemsPerPage(): int {
    return 100;
  }
}
