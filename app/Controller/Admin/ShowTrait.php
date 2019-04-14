<?php

namespace Imageboard\Controller\Admin;

use Imageboard\Exception\AccessDeniedException;
use Imageboard\Query\QueryDispatcher;
use Imageboard\Service\RendererService;
use Psr\Http\Message\ServerRequestInterface;

trait ShowTrait {
  abstract protected function checkAccess(ServerRequestInterface $request): bool;

  abstract protected function getShowQuery(): string;

  abstract protected function getShowTemplate(): string;

  abstract protected function getQueryDispatcher(): QueryDispatcher;

  abstract protected function getRenderer(): RendererService;

  /**
   * Returns details page for a single item by id.
   *
   * @param ServerRequestInterface $request
   *
   * @return string Response HTML.
   *
   * @throws AccessDeniedException
   *   If current user is not an admin.
   * @throws NotFoundException
   *   If item with the specified ID is not found.
   */
  function show(ServerRequestInterface $request, array $args): string
  {
    if (!$this->checkAccess($request)) {
      throw new AccessDeniedException('You are not allowed to access this page');
    }

    $id = (int)$args['id'];
    $query_type = $this->getShowQuery();
    $query = new $query_type($id);
    $query_dispatcher = $this->getQueryDispatcher();
    $handler = $query_dispatcher->getHandler($query);
    $item = $handler->handle($query);
    $renderer = $this->getRenderer();
    return $renderer->render($this->getShowTemplate(), [
      'item' => $item,
    ]);
  }
}
