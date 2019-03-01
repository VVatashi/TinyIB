<?php

namespace Imageboard\Service;

use Exception;
use Imageboard\Functions;
use Twig_Environment;
use Twig_Loader_Filesystem;
use Twig_SimpleFunction;

class RendererService implements RendererServiceInterface
{
    /** @var Twig_Environment */
    protected $twig;

    /**
     * @param Twig_Environment
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
        $this->twig->addGlobal('is_installed_via_git', Functions::installedViaGit());
        $this->twig->addGlobal('style', $_COOKIE['tinyib_style'] ?? 'Synthwave');

        $mtime = new Twig_SimpleFunction('mtime', function ($path) {
            $filename = basename($path);
            $path = realpath(dirname(__DIR__ . '/../../webroot/' . $path)) . DIRECTORY_SEPARATOR . $filename;

            try {
                return filemtime($path);
            }
            catch(Exception $e) {
                return 0;
            }
        });
        $this->twig->addFunction($mtime);
    }

    /**
     * {@inheritDoc}
     */
    public function render(string $template, array $variables = []) : string
    {
        return $this->twig->render($template, $variables);
    }
}
