<?php

namespace TinyIB\Service;

use Psr\Http\Message\ResponseInterface;
use Psr\Http\Message\ServerRequestInterface;

interface RoutingServiceInterface
{
    /**
     * Resolves route.
     *
     * @param \Psr\Http\Message\ResponseInterface $request
     *
     * @return \Psr\Http\Message\ServerRequestInterface
     */
    public function resolve(ServerRequestInterface $request) : ResponseInterface;
}
