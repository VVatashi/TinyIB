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
  protected $config;

  /**
   * SystemController constructor.
   * Creates a new SystemController instance.
   *
   * @param \Imageboard\Command\CommandDispatcher        $command_dispatcher
   * @param \Imageboard\Service\RendererServiceInterface $renderer
   * @param \Imageboard\Service\ConfigServiceInterface   $config
   */
  function __construct(
    CommandDispatcher $command_dispatcher,
    RendererServiceInterface $renderer,
    ConfigServiceInterface $config
  ) {
    $this->command_dispatcher = $command_dispatcher;
    $this->renderer = $renderer;
    $this->config = $config;
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
    $base_url = $this->config->get('BASE_URL') . $this->config->get('BOARD');
    $url = "$base_url/admin/system";
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

    $base_url = $this->config->get('BASE_URL') . $this->config->get('BOARD');
    $back_url = "$base_url/admin/system";
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
