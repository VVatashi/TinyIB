<?php

namespace TinyIB\Service;

use Exception;
use TinyIB\Functions;
use Twig_Environment;
use Twig_Loader_Filesystem;
use Twig_SimpleFunction;

class RendererService implements RendererServiceInterface
{
    /** @var \Twig_Environment $twig */
    protected $twig;

    /**
     * @param \Twig_Environment $twig
     */
    public function __construct() {
        global $tinyib_uploads;

        $loader = new Twig_Loader_Filesystem(__DIR__ . '/../../templates');

        $this->twig = new Twig_Environment($loader, [
            'autoescape' => false,
            'cache' => __DIR__ . '/../../storage/twig-cache',
            'debug' => true,
        ]);

        $this->twig->addGlobal('base_url', TINYIB_BASE_URL . TINYIB_BOARD);
        $this->twig->addGlobal('uploads', $tinyib_uploads);

        $this->twig->addFunction(new Twig_SimpleFunction('mtime', function ($path) {
            $filename = basename($path);
            $path = realpath(dirname(__DIR__ . '/../../webroot/' . $path)) . DIRECTORY_SEPARATOR . $filename;

            try {
                return filemtime($path);
            }
            catch(Exception $e) {
                return 0;
            }
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
    public function registerGlobal(string $name, $value)
    {
        $this->twig->addGlobal($name, $value);
    }

    /**
     * {@inheritDoc}
     */
    public function render(string $template, array $variables = []) : string
    {
        return $this->twig->render($template, $variables);
    }
}
