<?php

namespace Imageboard\Controller;

use Imageboard\Cache\CacheInterface;
use Imageboard\Service\RendererServiceInterface;

class SettingsController implements ControllerInterface
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
  function __construct(
    CacheInterface $cache,
    RendererServiceInterface $renderer
  ) {
    $this->cache = $cache;
    $this->renderer = $renderer;
  }

  /**
   * Shows settings form.
   *
   * @return string Response HTML.
   */
  function settings(): string
  {
    return $this->renderer->render('settings.twig');
  }
}
