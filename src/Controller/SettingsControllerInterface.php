<?php

namespace TinyIB\Controller;

use Psr\Http\Message\ResponseInterface;
use Psr\Http\Message\ServerRequestInterface;

interface SettingsControllerInterface
{
    /**
     * Shows settings form.
     *
     * @return \Psr\Http\Message\ResponseInterface
     */
    public function settings() : ResponseInterface;
}
