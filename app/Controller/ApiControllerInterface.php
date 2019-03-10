<?php

namespace Imageboard\Controller;

use Psr\Http\Message\{ServerRequestInterface, ResponseInterface};

interface ApiControllerInterface
{
  /**
   * Fetches a content from the URL.
   *
   * @return ResponseInterface
   */
  function embed(ServerRequestInterface $request) : ResponseInterface;

  /**
   * Returns threads.
   *
   * @return array Array of thread view models.
   */
  function threads(ServerRequestInterface $request) : array;

  /**
   * Returns thread posts.
   *
   * @return array Array of post view models.
   */
  function threadPosts(ServerRequestInterface $request, array $args) : array;
}
