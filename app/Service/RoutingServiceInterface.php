<?php

namespace Imageboard\Service;

use Psr\Http\Message\{ServerRequestInterface, ResponseInterface};

interface RoutingServiceInterface
{
  /**
   * Resolves route.
   *
   * @param ResponseInterface $request
   *
   * @return ServerRequestInterface
   */
  function handle(ServerRequestInterface $request) : ResponseInterface;
}
