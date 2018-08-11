<?php

namespace TinyIB\Controller;

use Psr\Http\Message\ResponseInterface;
use Psr\Http\Message\ServerRequestInterface;

interface SettingsControllerInterface
{
    /**
     * Shows settings form.
     *
     * @param \Psr\Http\Message\ServerRequestInterface
     *
     * @return \Psr\Http\Message\ResponseInterface
     */
    public function settings(ServerRequestInterface $request) : ResponseInterface;
}
