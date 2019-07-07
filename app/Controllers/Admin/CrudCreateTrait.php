<?php

namespace Imageboard\Controllers\Admin;

use GuzzleHttp\Psr7\Response;
use Imageboard\Exceptions\AccessDeniedException;
use Imageboard\Services\{SessionService, RendererService};
use Psr\Http\Message\{ResponseInterface, ServerRequestInterface};

trait CrudCreateTrait {
  abstract protected function checkAccess(ServerRequestInterface $request): bool;

  abstract protected function createModel(ServerRequestInterface $request);

  abstract protected function getListUrl(): string;

  abstract protected function getCreateUrl(): string;

  abstract protected function getFormTemplate(): string;

  abstract protected function getNewItem(): array;

  abstract protected function getSession(): SessionService;

  abstract protected function getRenderer(): RendererService;

  /**
   * Returns item create form.
   *
   * @param ServerRequestInterface $request
   *
   * @return string Response HTML.
   *
   * @throws AccessDeniedException
   *   If current user is not an admin.
   */
  function createForm(ServerRequestInterface $request): string
  {
    if (!$this->checkAccess($request)) {
      throw new AccessDeniedException('You are not allowed to access this page');
    }

    /** @var SessionService $session */
    $session = $this->getSession();

    // Restore form data from a session.
    $key = $this->getCreateUrl() . ':item';
    $item = $session->get($key, $this->getNewItem());
    $session->delete($key);

    // Show error message from a session.
    $key = $this->getCreateUrl() . ':error';
    $error = $session->delete($key);

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
    if (!$this->checkAccess($request)) {
      throw new AccessDeniedException('You are not allowed to access this page');
    }

    try {
      $this->createModel($request);
    } catch (Exception $exception) {
      /** @var SessionService $session */
      $session = $this->getSession();

      // Store form data in a session.
      $key = $this->getCreateUrl() . ':item';
      $session->$key = $request->getParsedBody();

      // Store error message in a session.
      $key = $this->getCreateUrl() . ':error';
      $session->$key = $exception->getMessage();

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
