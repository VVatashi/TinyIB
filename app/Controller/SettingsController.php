<?php

namespace Imageboard\Controller;

use GuzzleHttp\Psr7\Response;
use Imageboard\Cache\CacheInterface;
use Imageboard\Service\RendererServiceInterface;
use Psr\Http\Message\ResponseInterface;

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
    public function __construct(CacheInterface $cache, RendererServiceInterface $renderer)
    {
        $this->cache = $cache;
        $this->renderer = $renderer;
    }

    /**
     * {@inheritDoc}
     */
    public function settings() : ResponseInterface
    {
        return new Response(200, [], $this->renderer->render('settings.twig'));
    }
}
