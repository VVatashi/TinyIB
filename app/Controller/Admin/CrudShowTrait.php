<?php

namespace Imageboard\Controller\Admin;

use Imageboard\Exception\{AccessDeniedException, NotFoundException};
use Imageboard\Repositories\Repository;
use Imageboard\Service\RendererService;
use Psr\Http\Message\ServerRequestInterface;

trait CrudShowTrait {
  abstract protected function checkAccess(ServerRequestInterface $request): bool;

  abstract protected function getRepository(): Repository;

  abstract protected function getShowTemplate(): string;

  abstract protected function getRenderer(): RendererService;

  /**
   * Returns details page for a single item by id.
   *
   * @param ServerRequestInterface $request
   * @param array $args
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
    $repository = $this->getRepository();
    $item = $repository->getById($id);
    if (!isset($item)) {
      throw new NotFoundException();
    }

    $renderer = $this->getRenderer();
    return $renderer->render($this->getShowTemplate(), [
      'item' => $item,
    ]);
  }
}