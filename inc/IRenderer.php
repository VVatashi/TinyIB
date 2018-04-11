<?php

namespace TinyIB;

interface IRenderer
{
    /**
     * @param string $template
     * @param array $variables
     */
    public function render($template, $variables = []);
}
