<?php

namespace Imageboard\Service;

use Exception;
use Twig_Environment;
use Twig_Loader_Filesystem;
use Twig_SimpleFunction;

class RendererService
{
  /** @var Twig_Environment */
  protected $twig;

  /** @var ConfigService */
  protected $config;

  /**
   * @param ConfigService $config
   */
  function __construct(ConfigService $config)
  {
    $this->config = $config;

    $loader = new Twig_Loader_Filesystem(__DIR__ . '/../../resources/views');

    $this->twig = new Twig_Environment($loader, [
      'autoescape' => false,
      'cache' => $this->config->get('TWIG_CACHE'),
      'debug' => true,
    ]);

    $this->twig->addGlobal('protocol', $_SERVER['REQUEST_SCHEME'] ?? 'https');
    $this->twig->addGlobal('hostname', $_SERVER['HTTP_HOST'] ?? 'localhost');
    $this->twig->addGlobal('base_url', $this->config->get('BASE_PATH'));
    $this->twig->addGlobal('content_url', $this->config->get('CONTENT_PATH'));
    $this->twig->addGlobal('style', $_COOKIE['style'] ?? 'Synthwave');
    $this->twig->addGlobal('websocket_url', $this->config->get('WEBSOCKET_URL'));
    $this->twig->addGlobal('board', $this->config->get('BOARD'));

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
      function ($name, $default = null) use ($config) {
      return $config->get($name, $default);
    }));

    $this->twig->addFilter(new \Twig_Filter('truncate', function ($str, $length) {
      if (mb_strlen($str) < $length) {
        return $str;
      }

      return mb_substr($str, 0, $length - 1) . '…';
    }));
  }

  /**
   * Register global variable for twig templates.
   *
   * @param string $name
   * @param mixed $value
   */
  function registerGlobal(string $name, $value)
  {
    $this->twig->addGlobal($name, $value);
  }

  /**
   * @param string $template
   * @param array $variables
   *
   * @return string
   */
  function render(string $template, array $variables = []): string
  {
    return $this->twig->render($template, $variables);
  }
}
