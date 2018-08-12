<?php

namespace TinyIB\Service;

use TinyIB\Model\PostInterface;

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
