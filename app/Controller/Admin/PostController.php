<?php

namespace Imageboard\Controller\Admin;

use Imageboard\Command\Admin\DeletePost;
use Imageboard\Query\Admin\{ListPosts, ShowPost};

class PostController extends CrudController implements PostControllerInterface
{
  protected $list_url = TINYIB_BASE_PATH . '/admin/posts';
  protected $list_query_type = ListPosts::class;
  protected $list_template = 'admin/posts/list.twig';
  protected $ajax_list_template = 'admin/posts/_list.twig';

  protected $show_query_type = ShowPost::class;
  protected $show_template = 'admin/posts/show.twig';

  protected $delete_command_type = DeletePost::class;
}
