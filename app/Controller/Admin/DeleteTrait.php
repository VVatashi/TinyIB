<?php

namespace Imageboard\Controller\Admin;

use GuzzleHttp\Psr7\Response;
use Imageboard\Command\CommandDispatcher;
use Imageboard\Exception\AccessDeniedException;
use Psr\Http\Message\{ResponseInterface, ServerRequestInterface};

trait DeleteTrait {
  abstract protected function checkAccess(ServerRequestInterface $request): bool;

  abstract protected function getDeleteCommand(): string;

  abstract protected function getListUrl(): string;

  abstract protected function getCommandDispatcher(): CommandDispatcher;

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
    $command_type = $this->getDeleteCommand();
    $command = new $command_type($id);
    $command_dispatcher = $this->getCommandDispatcher();
    $handler = $command_dispatcher->getHandler($command);
    $handler->handle($command);

    $query = $request->getQueryParams();
    $back  = $query['back'] ?? $this->getListUrl();

    return new Response(302, [
      'Location' => $back,
    ]);
  }
}
