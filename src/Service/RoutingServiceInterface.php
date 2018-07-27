<?php

namespace TinyIB\Service;

use TinyIB\Response;

interface RoutingServiceInterface
{
    /**
     * Resolves route.
     *
     * @param string $path
     *
     * @return \TinyIB\Response
     */
    public function resolve(string $path) : Response;
}
