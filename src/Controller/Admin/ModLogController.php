<?php

namespace TinyIB\Controller\Admin;

use GuzzleHttp\Psr7\Response;
use Psr\Http\Message\ResponseInterface;
use Psr\Http\Message\ServerRequestInterface;
use TinyIB\AccessDeniedException;
use TinyIB\Model\ModLog;
use TinyIB\Service\RendererServiceInterface;

class ModLogController implements ModLogControllerInterface
{
    /** @var \TinyIB\Service\RendererServiceInterface $renderer */
    protected $renderer;

    /**
     * Creates a new AuthController instance.
     *
     * @param RendererServiceInterface $renderer
     */
    public function __construct(
        RendererServiceInterface $renderer
    ) {
        $this->renderer = $renderer;
    }

    /**
     * {@inheritDoc}
     */
    public function list(ServerRequestInterface $request) : ResponseInterface
    {
        /** @var \TinyIB\Model\User $current_user */
        $current_user = $request->getAttribute('user');
        if (!$current_user->isMod()) {
            throw new AccessDeniedException('You are not allowed to access this page');
        }

        $modlog = ModLog::with('user')->orderBy('id', 'desc')->get();
        $content = $this->renderer->render('admin/modlog/list.twig', [
            'modlog' => $modlog,
        ]);

        return new Response(200, [], $content);
    }
}
