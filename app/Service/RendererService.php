<?php

namespace Imageboard\Service;

use Exception;
use Twig_Environment;
use Twig_Loader_Filesystem;
use Twig_SimpleFunction;

class RendererService implements RendererServiceInterface
{
  /** @var Twig_Environment */
  protected $twig;

  /** @var \Imageboard\Service\ConfigServiceInterface */
  protected $config_service;

  /**
   * @param \Imageboard\Service\ConfigServiceInterface $config_service
   */
  function __construct(ConfigServiceInterface $config_service)
  {
    $this->config_service = $config_service;

    $loader = new Twig_Loader_Filesystem(__DIR__ . '/../../resources/views');

    $this->twig = new Twig_Environment($loader, [
      'autoescape' => false,
      'cache' => TINYIB_TWIG_CACHE,
      'debug' => true,
    ]);

    $base_url = $this->config_service->get("BASE_URL");
    $board    = $this->config_service->get("BOARD");

    $this->twig->addGlobal('base_url', $base_url . $board);
    $this->twig->addGlobal('style', $_COOKIE['style'] ?? 'Synthwave');

    $this->twig->addFunction(new Twig_SimpleFunction('mtime', function ($path) {
      $filename = basename($path);
      $path = realpath(dirname(__DIR__ . '/../../webroot/' . $path)) . DIRECTORY_SEPARATOR . $filename;

      try {
        return filemtime($path);
      } catch( Exception $e) {
        return 0;
      }
    }));

    $this->twig->addFunction(new Twig_SimpleFunction('config',
      function ($name, $default = null) use ($config_service) {

      if (!defined($name)) {
        return $default;
      }

      return $config_service->get($name);
    }));

    $this->twig->addFilter(new \Twig_Filter('truncate', function ($str, $length) {
      if (mb_strlen($str) < $length) {
        return $str;
      }

      return mb_substr($str, 0, $length - 1) . '…';
    }));
  }

  /**
   * {@inheritDoc}
   */
  function registerGlobal(string $name, $value)
  {
    $this->twig->addGlobal($name, $value);
  }

  /**
   * {@inheritDoc}
   */
  function render(string $template, array $variables = []): string
  {
    return $this->twig->render($template, $variables);
  }
}
