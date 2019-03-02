<?php

namespace Imageboard\Tests\Mock;

use Imageboard\Service\RendererServiceInterface;

class RendererServiceMock implements RendererServiceInterface
{
    /**
     * {@inheritDoc}
     */
    public function registerGlobal(string $name, $value)
    {
    }

    /**
     * {@inheritDoc}
     */
    public function render(string $template, array $variables = []) : string
    {
        return '';
    }
}
