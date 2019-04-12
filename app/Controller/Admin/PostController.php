<?php

namespace Imageboard\Controller\Admin;

use Imageboard\Command\Admin\DeletePost;
use Imageboard\Command\CommandDispatcher;
use Imageboard\Query\Admin\{ListPosts, ShowPost};
use Imageboard\Query\QueryDispatcher;
use Imageboard\Service\ConfigServiceInterface;
use Imageboard\Service\RendererServiceInterface;

class PostController extends CrudController implements PostControllerInterface
{
  protected $list_url;
  protected $list_query_type = ListPosts::class;
  protected $list_template = 'admin/posts/list.twig';
  protected $ajax_list_template = 'admin/posts/_list.twig';

  protected $show_query_type = ShowPost::class;
  protected $show_template = 'admin/posts/show.twig';

  protected $delete_command_type = DeletePost::class;

  /**
   * PostController constructor.
   *
   * @param \Imageboard\Command\CommandDispatcher        $command_dispatcher
   * @param \Imageboard\Query\QueryDispatcher            $query_dispatcher
   * @param \Imageboard\Service\RendererServiceInterface $renderer
   * @param \Imageboard\Service\ConfigServiceInterface   $config
   */
  public function __construct (
    CommandDispatcher $command_dispatcher,
    QueryDispatcher $query_dispatcher,
    RendererServiceInterface $renderer,
    ConfigServiceInterface $config
  )
  {
    parent::__construct($command_dispatcher, $query_dispatcher, $renderer, $config);

    $this->list_url = "{$this->base_path}/admin/posts";
  }
}
