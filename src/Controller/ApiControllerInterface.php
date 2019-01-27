<?php

namespace TinyIB\Controller;

use Psr\Http\Message\ResponseInterface;
use Psr\Http\Message\ServerRequestInterface;

interface ApiControllerInterface
{
    /**
     * Fetches a content from the URL.
     *
     * @return \Psr\Http\Message\ResponseInterface
     */
    public function embed(ServerRequestInterface $request) : ResponseInterface;
}
