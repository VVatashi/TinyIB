<?php

namespace TinyIB;

class Renderer
{
    /** @var string $twig */
    protected $twig;

    public function __construct($variables)
    {
        $loader = new \Twig_Loader_Filesystem('./templates');

        $this->twig = new \Twig_Environment($loader, array(
            'autoescape' => false,
            'cache' => './templates/cache',
            'debug' => true,
        ));

        foreach ($variables as $key => $value) {
            $this->twig->addGlobal($key, $value);
        }
    }

    /**
     * @param string $template
     * @param array $variables
     */
    public function render($template, $variables = [])
    {
        return $this->twig->render($template, $variables);
    }
}
