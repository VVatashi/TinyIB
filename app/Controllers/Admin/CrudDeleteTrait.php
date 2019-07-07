<?php

namespace Imageboard\Controllers\Admin;

use GuzzleHttp\Psr7\Response;
use Imageboard\Exceptions\AccessDeniedException;
use Psr\Http\Message\{ResponseInterface, ServerRequestInterface};

trait CrudDeleteTrait {
  abstract protected function checkAccess(ServerRequestInterface $request): bool;

  abstract protected function deleteModel(ServerRequestInterface $request, int $id);

  abstract protected function getListUrl(): string;

  /**
   * Deletes item by id.
   *
   * @param ServerRequestInterface $request
   *
   * @return ResponseInterface
   *
   * @throws AccessDeniedException
   *   If current user is not an admin.
   */
  function delete(ServerRequestInterface $request, array $args): ResponseInterface
  {
    if (!$this->checkAccess($request)) {
      throw new AccessDeniedException('You are not allowed to access this page');
    }

    $id = (int)$args['id'];
    $this->deleteModel($request, $id);

    $query = $request->getQueryParams();
    $back  = $query['back'] ?? $this->getListUrl();

    return new Response(302, [
      'Location' => $back,
    ]);
  }
}
