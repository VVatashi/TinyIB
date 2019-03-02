<?php

namespace Imageboard\Controller;

interface SettingsControllerInterface
{
    /**
     * Shows settings form.
     *
     * @return string Response HTML.
     */
    public function settings() : string;
}
