<?php

namespace Imageboard\Controller\Admin;

use Imageboard\Exception\{AccessDeniedException, NotFoundException};
use Imageboard\Repositories\Repository;
use Imageboard\Service\RendererService;

trait CrudShowTrait {
  abstract protected function checkAccess(): bool;

  abstract protected function getRepository(): Repository;

  abstract protected function getShowTemplate(): string;

  abstract protected function getRenderer(): RendererService;

  /**
   * Returns details page for a single item by id.
   *
   * @param array $args
   *
   * @return string Response HTML.
   *
   * @throws AccessDeniedException
   *   If current user is not an admin.
   * @throws NotFoundException
   *   If item with the specified ID is not found.
   */
  function show(array $args): string
  {
    if (!$this->checkAccess()) {
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
