<?php

namespace Imageboard\Tests\Mock;

use GuzzleHttp\Psr7\Response;
use Psr\Http\Message\{ServerRequestInterface, ResponseInterface};
use Psr\Http\Server\RequestHandlerInterface;

class RequestHandlerMock implements RequestHandlerInterface
{
  /**
   * {@inheritDoc}
   */
  public function handle(ServerRequestInterface $request): ResponseInterface
  {
    return new Response(200);
  }
}
