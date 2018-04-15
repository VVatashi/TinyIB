<?php

namespace TinyIB\Controller;

use TinyIB\Response;

class SettingsController implements ISettingsController
{
    /** @var \TinyIB\Renderer\IRenderer $renderer */
    protected $renderer;

    /**
     * Constructs new settings controller.
     *
     * @param \TinyIB\Renderer\IRenderer $renderer
     */
    public function __construct($renderer)
    {
        $this->renderer = $renderer;
    }

    /**
     * {@inheritDoc}
     */
    public function settings()
    {
        return Response::ok($this->renderer->render('settings.twig'));
    }
}
