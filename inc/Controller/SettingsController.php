<?php

namespace TinyIB\Controller;

use TinyIB\Response;
use TinyIB\Cache\ICache;
use TinyIB\Renderer\IRenderer;

class SettingsController implements ISettingsController
{
    /** @var \TinyIB\Cache\ICache $cache */
    protected $cache;

    /** @var \TinyIB\Renderer\IRenderer $renderer */
    protected $renderer;

    /**
     * Constructs new settings controller.
     *
     * @param \TinyIB\Cache\ICache $cache
     * @param \TinyIB\Renderer\IRenderer $renderer
     */
    public function __construct(ICache $cache, IRenderer $renderer)
    {
        $this->cache = $cache;
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
