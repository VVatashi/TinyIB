<?php

namespace TinyIB\Service;

use Twig_Environment;

class RendererService implements RendererServiceInterface
{
    /** @var \Twig_Environment $twig */
    protected $twig;

    /**
     * @param \Twig_Environment $twig
     */
    public function __construct(
        Twig_Environment $twig
    ) {
        $this->twig = $twig;
    }

    /**
     * {@inheritDoc}
     */
    public function render(string $template, array $variables = []) : string
    {
        return $this->twig->render($template, $variables);
    }
}
