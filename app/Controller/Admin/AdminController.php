<?php

namespace Imageboard\Controller\Admin;

use Imageboard\Command\CommandDispatcher;
use Imageboard\Controller\ControllerInterface;
use Imageboard\Model\User;
use Imageboard\Query\QueryDispatcher;
use Imageboard\Service\{
  ConfigServiceInterface,
  RendererServiceInterface,
  RendererService
};
use Psr\Http\Message\ServerRequestInterface;

abstract class AdminController implements ControllerInterface
{
  /** @var \Imageboard\Service\ConfigServiceInterface */
  protected $config;

  /** @var CommandDispatcher */
  protected $command_dispatcher;

  /** @var QueryDispatcher */
  protected $query_dispatcher;

  /** @var RendererServiceInterface */
  protected $renderer;

  /** @var string */
  protected $base_path;


  /**
   * CrudController constructor.
   *
   * Creates a new CRUD controller instance.
   *
   * @param \Imageboard\Service\ConfigServiceInterface   $config
   * @param \Imageboard\Command\CommandDispatcher        $command_dispatcher
   * @param \Imageboard\Query\QueryDispatcher            $query_dispatcher
   * @param \Imageboard\Service\RendererServiceInterface $renderer
   */
  function __construct(
    ConfigServiceInterface $config,
    CommandDispatcher $command_dispatcher,
    QueryDispatcher $query_dispatcher,
    RendererServiceInterface $renderer
  ) {
    $this->config             = $config;
    $this->command_dispatcher = $command_dispatcher;
    $this->query_dispatcher   = $query_dispatcher;
    $this->renderer           = $renderer;

    $this->base_path = $this->config->get('BASE_PATH', '');
  }

  /**
   * Checks user access.
   *
   * @param ServerRequestInterface $request
   *
   * @return bool
   */
  protected function checkAccess(ServerRequestInterface $request): bool
  {
    /** @var User */
    $current_user = $request->getAttribute('user');
    return $current_user->isMod();
  }

  protected function getCommandDispatcher(): CommandDispatcher {
    return $this->command_dispatcher;
  }

  protected function getQueryDispatcher(): QueryDispatcher {
    return $this->query_dispatcher;
  }

  protected function getRenderer(): RendererService {
    return $this->renderer;
  }
}
