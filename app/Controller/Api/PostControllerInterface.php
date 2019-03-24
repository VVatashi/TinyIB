<?php

namespace Imageboard\Controller\Api;

use Psr\Http\Message\{ServerRequestInterface, ResponseInterface};

interface PostControllerInterface
{
  /**
   * Creates thread.
   *
   * @param ServerRequestInterface $request
   *
   * @return ResponseInterface
   */
  function createThread(ServerRequestInterface $request) : ResponseInterface;

  /**
   * Creates post.
   *
   * @param ServerRequestInterface $request
   * @param array $args Path arguments.
   *
   * @return ResponseInterface
   */
  function createPost(ServerRequestInterface $request, array $args) : ResponseInterface;

  /**
   * Returns threads.
   *
   * @return array Array of thread view models.
   */
  function threads() : array;

  /**
   * Returns thread posts.
   *
   * @param ServerRequestInterface $request
   * @param array $args Path arguments.
   *
   * @return array Array of post view models.
   */
  function threadPosts(ServerRequestInterface $request, array $args) : array;
}
