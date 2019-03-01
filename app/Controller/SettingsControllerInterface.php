<?php

namespace Imageboard\Controller;

use Psr\Http\Message\ResponseInterface;

interface SettingsControllerInterface
{
    /**
     * Shows settings form.
     *
     * @return ResponseInterface
     */
    public function settings() : ResponseInterface;
}
