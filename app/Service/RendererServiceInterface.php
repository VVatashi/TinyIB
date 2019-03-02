<?php

namespace Imageboard\Service;

interface RendererServiceInterface
{
    /**
     * Register global variable for twig templates.
     *
     * @param string $name
     * @param mixed $value
     */
    public function registerGlobal(string $name, $value);

    /**
     * @param string $template
     * @param array $variables
     *
     * @return string
     */
    public function render(string $template, array $variables = []) : string;
}
