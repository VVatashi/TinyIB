<?php

namespace Imageboard\Service;

interface RendererServiceInterface
{
    /**
     * @param string $template
     * @param array $variables
     *
     * @return string
     */
    public function render(string $template, array $variables = []) : string;
}
