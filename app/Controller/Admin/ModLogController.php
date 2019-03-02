<?php

namespace Imageboard\Controller\Admin;

use Imageboard\Exception\AccessDeniedException;
use Imageboard\Model\ModLog;
use Imageboard\Service\RendererServiceInterface;
use Psr\Http\Message\ServerRequestInterface;

class ModLogController implements ModLogControllerInterface
{
    /** @var RendererServiceInterface */
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
    public function list(ServerRequestInterface $request) : string
    {
        /** @var User */
        $current_user = $request->getAttribute('user');
        if (!$current_user->isMod()) {
            throw new AccessDeniedException('You are not allowed to access this page');
        }

        $modlog = ModLog::with('user')->orderBy('id', 'desc')->get();
        return $this->renderer->render('admin/modlog/list.twig', [
            'modlog' => $modlog,
        ]);
    }
}
