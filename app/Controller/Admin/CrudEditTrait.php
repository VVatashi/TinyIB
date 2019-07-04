<?php

namespace Imageboard\Controller\Admin;

use GuzzleHttp\Psr7\Response;
use Imageboard\Exception\AccessDeniedException;
use Imageboard\Service\{SessionService, RendererService};
use Psr\Http\Message\{ResponseInterface, ServerRequestInterface};

trait CrudEditTrait {
  abstract protected function checkAccess(ServerRequestInterface $request): bool;

  abstract protected function editModel(ServerRequestInterface $request);

  abstract protected function getListUrl(): string;

  abstract protected function getEditUrl(): string;

  abstract protected function getFormTemplate(): string;

  abstract protected function loadItem(int $id): array;

  abstract protected function getSession(): SessionService;

  abstract protected function getRenderer(): RendererService;

  /**
   * Returns item edit form.
   *
   * @param ServerRequestInterface $request
   * @param array Path arguments.
   *
   * @return string Response HTML.
   *
   * @throws AccessDeniedException
   *   If current user is not an admin.
   * @throws NotFoundException
   *   If item with the specified ID is not found.
   */
  function editForm(ServerRequestInterface $request, array $args): string
  {
    if (!$this->checkAccess($request)) {
      throw new AccessDeniedException('You are not allowed to access this page');
    }

    /** @var SessionService $session */
    $session = $this->getSession();

    // Restore form data from a session.
    $id = (int)($args['id'] ?? 0);
    $key = $this->getEditUrl() . ':item';
    $item = $session->get($key, $this->loadItem($id));
    $session->delete($key);

    // Show error message from a session.
    $key = $this->getEditUrl() . ':error';
    $error = $session->delete($key);

    $renderer = $this->getRenderer();
    return $renderer->render($this->getFormTemplate(), [
      'error' => $error,
      'item'  => $item,
    ]);
  }

  /**
   * Updates item.
   *
   * @param ServerRequestInterface $request
   * @param array Path arguments.
   *
   * @return ResponseInterface Response.
   *
   * @throws AccessDeniedException
   *   If current user is not an admin.
   * @throws NotFoundException
   *   If item with the specified ID is not found.
   */
  function edit(ServerRequestInterface $request, array $args): ResponseInterface
  {
    if (!$this->checkAccess($request)) {
      throw new AccessDeniedException('You are not allowed to access this page');
    }

    try {
      $this->editModel($request);
    } catch (Exception $exception) {
      /** @var SessionService $session */
      $session = $this->getSession();

      // Store form data in a session.
      $key = $this->getEditUrl() . ':item';
      $session->$key = $request->getParsedBody();

      // Store error message in a session.
      $key = $this->getEditUrl() . ':error';
      $session->$key = $exception->getMessage();

      $id = (int)($args['id'] ?? 0);
      return new Response(302, [
        'Location' => str_replace(':id', $id, $this->getEditUrl()),
      ]);
    }

    $query = $request->getQueryParams();
    $back = $query['back'] ?? $this->getListUrl();

    return new Response(302, [
      'Location' => $back,
    ]);
  }
}
