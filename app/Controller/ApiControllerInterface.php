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
   * Creates auth token.
   *
   * @param ServerRequestInterface $request
   *
   * @return array Token view model.
   */
  function createToken(ServerRequestInterface $request) : ResponseInterface;

  /**
   * Returns current auth token info.
   *
   * @param ServerRequestInterface $request
   *
   * @return array Token view model.
   */
  function token(ServerRequestInterface $request) : array;

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
   * Creates thread.
   *
   * @param ServerRequestInterface $request
   * @param array $args Path arguments.
   *
   * @return ResponseInterface
   */
  function createThread(ServerRequestInterface $request, array $args) : ResponseInterface;

  /**
   * Creates post.
   *
   * @param ServerRequestInterface $request
   *
   * @return ResponseInterface
   */
  function createPost(ServerRequestInterface $request) : ResponseInterface;
}
