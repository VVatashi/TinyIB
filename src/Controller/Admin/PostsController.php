<?php

namespace TinyIB\Controller\Admin;

use TinyIB\Commands\DeletePost;
use TinyIB\Queries\{ListPosts, ShowPost};

class PostsController extends CrudController implements PostsControllerInterface
{
    protected $list_url = TINYIB_BASE_URL . TINYIB_BOARD . '/admin/posts';
    protected $list_query_type = ListPosts::class;
    protected $list_template = 'admin/posts/list.twig';

    protected $show_query_type = ShowPost::class;
    protected $show_template = 'admin/posts/show.twig';

    protected $delete_command_type = DeletePost::class;
}
