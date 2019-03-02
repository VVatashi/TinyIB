<?php

namespace Imageboard\Controller\Admin;

use GuzzleHttp\Psr7\Response;
use Imageboard\Exception\AccessDeniedException;
use Imageboard\Service\RendererServiceInterface;
use Psr\Http\Message\{ServerRequestInterface, ResponseInterface};

class DashboardController implements DashboardControllerInterface
{
    /** @var RendererServiceInterface */
    protected $renderer;

    /**
     * Creates a new DashboardController instance.
     *
     * @param RendererServiceInterface $renderer
     */
    public function __construct(
        RendererServiceInterface $renderer
    ) {
        $this->renderer = $renderer;
    }

    protected function checkAccess(ServerRequestInterface $request) {
        /** @var User */
        $current_user = $request->getAttribute('user');
        return $current_user->isMod();
    }

    /**
     * {@inheritDoc}
     */
    public function index(ServerRequestInterface $request) : ResponseInterface
    {
        if (!$this->checkAccess($request)) {
            throw new AccessDeniedException('You are not allowed to access this page');
        }

        $content = $this->renderer->render('admin/dashboard.twig');
        return new Response(200, [], $content);
    }
}
