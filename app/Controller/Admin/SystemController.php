<?php

namespace Imageboard\Controller\Admin;

use GuzzleHttp\Psr7\Response;
use Imageboard\Command\Admin\ClearCache;
use Imageboard\Exception\AccessDeniedException;
use Psr\Http\Message\{ServerRequestInterface, ResponseInterface};

class SystemController extends AdminController
{
  /**
   * Returns the admin system page.
   *
   * @param ServerRequestInterface $request
   *
   * @return string Response HTML.
   *
   * @throws AccessDeniedException
   *   If current user is not an admin.
   */
  function index(ServerRequestInterface $request): string
  {
    if (!$this->checkAccess($request)) {
      throw new AccessDeniedException('You are not allowed to access this page');
    }

    // Show status message from a session.
    $url = $this->config->get('BASE_PATH', '') . '/admin/system';
    $key = "$url:message";
    $message = $_SESSION[$key] ?? null;
    unset($_SESSION[$key]);

    return $this->renderer->render('admin/system.twig', [
      'message' => $message,
    ]);
  }

  /**
   * Cleares site cache.
   *
   * @param ServerRequestInterface $request
   *
   * @return ResponseInterface Response HTML.
   *
   * @throws AccessDeniedException
   *   If current user is not an admin.
   */
  function clearCache(ServerRequestInterface $request): ResponseInterface
  {
    if (!$this->checkAccess($request)) {
      throw new AccessDeniedException('You are not allowed to access this page');
    }

    $back_url = $this->config->get('BASE_PATH', '') . '/admin/system';
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
