<?php

namespace Imageboard\Controller\Api;

use Psr\Http\Message\{ServerRequestInterface, ResponseInterface};

interface EmbedControllerInterface
{
  /**
   * Fetches a content from the URL.
   *
   * @param ServerRequestInterface $request
   *
   * @return ResponseInterface
   */
  function embed(ServerRequestInterface $request) : ResponseInterface;
}
