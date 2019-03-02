<?php

namespace Imageboard\Controller;

use Imageboard\Cache\CacheInterface;
use Imageboard\Service\RendererServiceInterface;

class SettingsController implements SettingsControllerInterface
{
    /** @var CacheInterface */
    protected $cache;

    /** @var RendererServiceInterface */
    protected $renderer;

    /**
     * Constructs new settings controller.
     *
     * @param CacheInterface $cache
     * @param RendererServiceInterface $renderer
     */
    public function __construct(
        CacheInterface $cache,
        RendererServiceInterface $renderer
    ) {
        $this->cache = $cache;
        $this->renderer = $renderer;
    }

    /**
     * {@inheritDoc}
     */
    public function settings() : string
    {
        return $this->renderer->render('settings.twig');
    }
}
