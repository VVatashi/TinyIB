<?php

namespace Imageboard\Controller\Admin;

use Psr\Http\Message\{ServerRequestInterface, ResponseInterface};

interface SystemControllerInterface
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
  function index(ServerRequestInterface $request) : string;

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
  function clearCache(ServerRequestInterface $request) : ResponseInterface;
}
