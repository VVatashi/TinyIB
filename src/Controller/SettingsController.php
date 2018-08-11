<?php

namespace TinyIB\Controller;

use GuzzleHttp\Psr7\Response;
use Psr\Http\Message\ResponseInterface;
use Psr\Http\Message\ServerRequestInterface;
use TinyIB\Cache\CacheInterface;
use TinyIB\Service\RendererServiceInterface;

class SettingsController implements SettingsControllerInterface
{
    /** @var \TinyIB\Cache\CacheInterface $cache */
    protected $cache;

    /** @var \TinyIB\RendererService\RendererServiceInterface $renderer */
    protected $renderer;

    /**
     * Constructs new settings controller.
     *
     * @param \TinyIB\Cache\CacheInterface $cache
     * @param \TinyIB\Service\RendererServiceInterface $renderer
     */
    public function __construct(CacheInterface $cache, RendererServiceInterface $renderer)
    {
        $this->cache = $cache;
        $this->renderer = $renderer;
    }

    /**
     * {@inheritDoc}
     */
    public function settings(ServerRequestInterface $request) : ResponseInterface
    {
        return new Response(200, [], $this->renderer->render('settings.twig'));
    }
}
