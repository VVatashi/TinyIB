<?php

namespace Imageboard\Controller;

use Imageboard\Cache\CacheInterface;
use Imageboard\Service\{ConfigService, RendererService};
use GuzzleHttp\Psr7\Response;

class SettingsController implements ControllerInterface
{
  const CACHE_TTL = 4 * 60 * 60;

  /** @var ConfigService */
  protected $config;

  /** @var CacheInterface */
  protected $cache;

  /** @var RendererService */
  protected $renderer;

  /**
   * Constructs new settings controller.
   *
   * @param ConfigService   $config
   * @param CacheInterface  $cache
   * @param RendererService $renderer
   */
  function __construct(
    ConfigService $config,
    CacheInterface $cache,
    RendererService $renderer
  ) {
    $this->config = $config;
    $this->cache = $cache;
    $this->renderer = $renderer;
  }

  /**
   * Shows settings form.
   */
  function settings(): Response
  {
    $key = $this->config->get('BOARD') . ':settings';
    $data = $this->cache->get($key);
    $headers = [];
    if (isset($data)) {
      $headers['X-Cached'] = 'true';
    } else {
      $headers['X-Cached'] = 'false';
      $data = $this->renderer->render('settings.twig');
      $this->cache->set($key, $data, static::CACHE_TTL);
    }

    return new Response(200, $headers, $data);
  }

  /**
   * Returns partial HTML of settings form.
   */
  function ajaxSettings(): Response
  {
    $key = $this->config->get('BOARD') . ':ajax_settings';
    $data = $this->cache->get($key);
    $headers = [];
    if (isset($data)) {
      $headers['X-Cached'] = 'true';
    } else {
      $headers['X-Cached'] = 'false';
      $data = $this->renderer->render('components/_settings.twig');
      $this->cache->set($key, $data, static::CACHE_TTL);
    }

    return new Response(200, $headers, $data);
  }
}
