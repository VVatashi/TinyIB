<?php

namespace Imageboard\Service;

use Psr\Http\Message\{ServerRequestInterface, ResponseInterface};

interface RoutingServiceInterface
{
    /**
     * Resolves route.
     *
     * @param \Psr\Http\Message\ResponseInterface $request
     *
     * @return \Psr\Http\Message\ServerRequestInterface
     */
    public function handle(ServerRequestInterface $request) : ResponseInterface;
}
