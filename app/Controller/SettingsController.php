<?php

namespace Imageboard\Controller;

use Imageboard\Cache\CacheInterface;
use Imageboard\Service\RendererService;

class SettingsController implements ControllerInterface
{
  /** @var CacheInterface */
  protected $cache;

  /** @var RendererService */
  protected $renderer;

  /**
   * Constructs new settings controller.
   *
   * @param CacheInterface  $cache
   * @param RendererService $renderer
   */
  function __construct(
    CacheInterface $cache,
    RendererService $renderer
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
