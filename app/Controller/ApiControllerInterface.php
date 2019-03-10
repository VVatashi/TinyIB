<?php

namespace Imageboard\Controller;

use Psr\Http\Message\{ServerRequestInterface, ResponseInterface};

interface ApiControllerInterface
{
  /**
   * Fetches a content from the URL.
   *
   * @param ServerRequestInterface $request
   *
   * @return ResponseInterface
   */
  function embed(ServerRequestInterface $request) : ResponseInterface;

  /**
   * Returns threads.
   *
   * @param ServerRequestInterface $request
   *
   * @return array Array of thread view models.
   */
  function threads(ServerRequestInterface $request) : array;

  /**
   * Returns thread posts.
   *
   * @param ServerRequestInterface $request
   * @param array $args Path arguments.
   *
   * @return array Array of post view models.
   */
  function threadPosts(ServerRequestInterface $request, array $args) : array;

  /**
   * Creates post.
   *
   * @param ServerRequestInterface $request
   *
   * @return ResponseInterface
   */
  function createPost(ServerRequestInterface $request) : ResponseInterface;
}
