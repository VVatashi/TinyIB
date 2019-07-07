<?php

namespace Imageboard\Controllers;

use Imageboard\Services\{ConfigService, RendererService};
use Imageboard\Services\Cache\CacheInterface;
use GuzzleHttp\Psr7\Response;
use Psr\Http\Message\ServerRequestInterface;

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
  function settings(ServerRequestInterface $request): Response
  {
    /** @var User $user */
    $user = $request->getAttribute('user');
    $key = $this->config->get('BOARD') . ':settings:user:' . $user->id;
    $data = $this->cache->get($key);
    $headers = [];
    if (!$user->isAnonymous() && isset($data)) {
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
  function ajaxSettings(ServerRequestInterface $request): Response
  {
    /** @var User $user */
    $user = $request->getAttribute('user');
    $key = $this->config->get('BOARD') . ':ajax_settings:user:' . $user->id;
    $data = $this->cache->get($key);
    $headers = [];
    if (!$user->isAnonymous() && isset($data)) {
      $headers['X-Cached'] = 'true';
    } else {
      $headers['X-Cached'] = 'false';
      $data = $this->renderer->render('components/_settings.twig');
      $this->cache->set($key, $data, static::CACHE_TTL);
    }

    return new Response(200, $headers, $data);
  }
}
