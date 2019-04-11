<?php

namespace Imageboard\Controller\Admin;

use GuzzleHttp\Psr7\Response;
use Imageboard\Command\CommandDispatcher;
use Imageboard\Command\Admin\ClearCache;
use Imageboard\Exception\AccessDeniedException;
use Imageboard\Model\User;
use Imageboard\Service\ConfigServiceInterface;
use Imageboard\Service\RendererServiceInterface;
use Psr\Http\Message\{ServerRequestInterface, ResponseInterface};

class SystemController implements SystemControllerInterface
{
  /** @var CommandDispatcher */
  protected $command_dispatcher;

  /** @var RendererServiceInterface */
  protected $renderer;

  /** @var \Imageboard\Service\ConfigServiceInterface */
  protected $config_service;

  /**
   * SystemController constructor.
   * Creates a new SystemController instance.
   *
   * @param \Imageboard\Command\CommandDispatcher        $command_dispatcher
   * @param \Imageboard\Service\RendererServiceInterface $renderer
   * @param \Imageboard\Service\ConfigServiceInterface   $config_service
   */
  function __construct(
    CommandDispatcher $command_dispatcher,
    RendererServiceInterface $renderer,
    ConfigServiceInterface$config_service
  ) {
    $this->command_dispatcher = $command_dispatcher;
    $this->renderer = $renderer;
    $this->config_service = $config_service;
  }

  protected function checkAccess(ServerRequestInterface $request) {
    /** @var User */
    $current_user = $request->getAttribute('user');
    return $current_user->isMod();
  }

  /**
   * {@inheritDoc}
   * @throws \Imageboard\Exception\AccessDeniedException
   */
  function index(ServerRequestInterface $request) : string
  {
    if (!$this->checkAccess($request)) {
      throw new AccessDeniedException('You are not allowed to access this page');
    }

    // Show status message from a session.
    $url = $this->config_service->get("BASE_URL") . $this->config_service->get("BOARD") . '/admin/system';
    $key = "$url:message";
    $message = $_SESSION[$key] ?? null;
    unset($_SESSION[$key]);

    return $this->renderer->render('admin/system.twig', [
      'message' => $message,
    ]);
  }

  /**
   * {@inheritDoc}
   *
   * @throws \Imageboard\Exception\AccessDeniedException
   */
  function clearCache(ServerRequestInterface $request) : ResponseInterface
  {
    if (!$this->checkAccess($request)) {
      throw new AccessDeniedException('You are not allowed to access this page');
    }

    $back_url = $this->config_service->get("BASE_URL") . $this->config_service->get("BOARD") . '/admin/system';
    $message_key = "$back_url:message";

    $command = new ClearCache();
    $handler = $this->command_dispatcher->getHandler($command);

    try {
      $handler->handle($command);

      // Store status message in a session.
      $_SESSION[$message_key] = 'Cache cleared.';
    } catch (\Exception $exception) {
      // Store error message in a session.
      $_SESSION[$message_key] = $exception->getMessage();
    }

    return new Response(302, [
      'Location' => $back_url,
    ]);
  }
}
