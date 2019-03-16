<?php

namespace Imageboard\Controller\Api;

use Psr\Http\Message\{ServerRequestInterface, ResponseInterface};

interface TokenControllerInterface
{
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
}
