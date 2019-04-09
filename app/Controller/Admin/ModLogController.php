<?php

namespace Imageboard\Controller\Admin;

use Imageboard\Command\CommandDispatcher;
use Imageboard\Query\Admin\ListModLog;
use Imageboard\Query\QueryDispatcher;
use Imageboard\Service\ConfigServiceInterface;
use Imageboard\Service\RendererServiceInterface;

class ModLogController extends CrudController implements ModLogControllerInterface
{
  /**
   * @var string
   */
  protected $list_url;

  /**
   * @var string
   */
  protected $list_query_type = ListModLog::class;

  /**
   * @var string
   */
  protected $list_template = 'admin/modlog/list.twig';

  /**
   * @var string
   */
  protected $ajax_list_template = 'admin/modlog/_list.twig';

  /**
   * ModLogController constructor.
   *
   * @param \Imageboard\Command\CommandDispatcher        $command_dispatcher
   * @param \Imageboard\Query\QueryDispatcher            $query_dispatcher
   * @param \Imageboard\Service\RendererServiceInterface $renderer
   * @param \Imageboard\Service\ConfigServiceInterface   $config_service
   */
  public function __construct (
    CommandDispatcher $command_dispatcher,
    QueryDispatcher $query_dispatcher,
    RendererServiceInterface $renderer,
    ConfigServiceInterface $config_service
  )
  {
    parent::__construct( $command_dispatcher, $query_dispatcher, $renderer, $config_service );

    /** @var string list_url */
    $this->list_url = "$this->board_full_url/admin/modlog";
  }
}
