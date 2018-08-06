<?php

namespace TinyIB\Service;

use TinyIB\Request;
use TinyIB\Response;

interface RoutingServiceInterface
{
    /**
     * Resolves route.
     *
     * @param \TinyIB\Request $request
     *
     * @return \TinyIB\Response
     */
    public function resolve(Request $request) : Response;
}
