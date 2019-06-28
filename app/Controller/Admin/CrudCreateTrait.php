<?php

namespace Imageboard\Controller\Admin;

use GuzzleHttp\Psr7\Response;
use Imageboard\Exception\AccessDeniedException;
use Imageboard\Service\RendererService;
use Psr\Http\Message\{ResponseInterface, ServerRequestInterface};

trait CrudCreateTrait {
  abstract protected function checkAccess(): bool;

  abstract protected function createModel(array $data);

  abstract protected function getListUrl(): string;

  abstract protected function getCreateUrl(): string;

  abstract protected function getFormTemplate(): string;

  abstract protected function getNewItem(): array;

  abstract protected function getRenderer(): RendererService;

  /**
   * Returns item create form.
   *
   * @return string Response HTML.
   *
   * @throws AccessDeniedException
   *   If current user is not an admin.
   */
  function createForm(): string
  {
    if (!$this->checkAccess()) {
      throw new AccessDeniedException('You are not allowed to access this page');
    }

    // Restore form data from a session.
    $key = $this->getCreateUrl() . ':item';
    $item = $_SESSION[$key] ?? $this->getNewItem();
    unset($_SESSION[$key]);

    // Show error message from a session.
    $key = $this->getCreateUrl() . ':error';
    $error = $_SESSION[$key] ?? null;
    unset($_SESSION[$key]);

    $renderer = $this->getRenderer();
    return $renderer->render($this->getFormTemplate(), [
      'error' => $error,
      'item'  => $item,
    ]);
  }

  /**
   * Creates new item from a form data.
   *
   * @param ServerRequestInterface $request
   *
   * @return ResponseInterface
   *
   * @throws AccessDeniedException
   *   If current user is not an admin.
   */
  function create(ServerRequestInterface $request): ResponseInterface
  {
    if (!$this->checkAccess()) {
      throw new AccessDeniedException('You are not allowed to access this page');
    }

    $data = $request->getParsedBody();

    try {
      $this->createModel($data);
    } catch (Exception $exception) {
      // Store form data in a session.
      $key = $this->getCreateUrl() . ':item';
      $_SESSION[$key] = $data;

      // Store error message in a session.
      $key = $this->getCreateUrl() . ':error';
      $_SESSION[$key] = $exception->getMessage();

      return new Response(302, [
        'Location' => $this->getCreateUrl(),
      ]);
    }

    $query = $request->getQueryParams();
    $back = $query['back'] ?? $this->getListUrl();

    return new Response(302, [
      'Location' => $back,
    ]);
  }
}
