<?php

namespace Imageboard\Controllers;

use GuzzleHttp\Psr7\Response;
use Imageboard\Models\Post;
use Imageboard\Repositories\PostRepository;
use Imageboard\Services\{ConfigService, PostService};
use Psr\Http\Message\ResponseInterface;
use SimpleXMLElement as XML;

class SitemapController implements ControllerInterface
{
  /** @var ConfigService */
  protected $config;

  /** @var PostRepository */
  protected $repository;

  /** @var PostService */
  protected $service;

  /**
   * @param ConfigService $config
   * @param PostService   $service
   */
  function __construct(
    ConfigService  $config,
    PostRepository $repository,
    PostService    $service
  ) {
    $this->config     = $config;
    $this->repository = $repository;
    $this->service    = $service;
  }

  protected function addURL(
    XML    $xml,
    string $path,
    int    $modified,
    string $changefreq,
    float  $priority
  ) {
    $protocol = $_SERVER['REQUEST_SCHEME'] ?? 'https';
    $hostname = $_SERVER['HTTP_HOST'] ?? 'localhost';
    $basePath = $this->config->get('BASE_PATH', '/');

    $url = $xml->addChild('url');
    $url->addChild('loc', $protocol . '://' . $hostname . $basePath . $path);

    if ($modified) {
      $url->addChild('lastmod', date('c', $modified));
    }

    $url->addChild('changefreq', $changefreq);
    $url->addChild('priority', number_format($priority, 2));

    return $url;
  }

  /**
   * Returns the sitemap.xml.
   *
   * @return ResponseInterface
   */
  function sitemap(): ResponseInterface
  {
    $xml = new XML('<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="https://www.sitemaps.org/schemas/sitemap/0.9"></urlset>');

    $latest = $this->repository->getLatestPost();
    if (isset($latest)) {
      $latestUpdate = $latest->created_at;
    } else {
      $latestUpdate = time();
    }

    $this->addURL($xml, '', $latestUpdate, 'daily', 1.0);

    for ($page = 0;; $page++) {
      $threads = $this->repository->getThreadsByPage($page);
      if ($threads->isEmpty()) {
        break;
      }

      if ($page > 0) {
        /** @var Post $latestThread */
        $latestThread = $threads->first();
        $this->addURL($xml, "/$page", $latestThread->bumped_at, 'daily', 0.75);
      }

      foreach ($threads as $thread) {
        /** @var Post $thread */
        $this->addURL($xml, "/res/{$thread->id}", $thread->bumped_at, 'daily', 0.5);
      }
    }

    $this->addURL($xml, '/settings', 0, 'monthly', 0.25);
    $this->addURL($xml, '/auth/register', 0, 'monthly', 0.25);
    $this->addURL($xml, '/auth/login', 0, 'monthly', 0.25);

    return new Response(200, ['Content-Type' => 'text/xml'], $xml->asXML());
  }
}
