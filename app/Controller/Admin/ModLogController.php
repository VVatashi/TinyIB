<?php

namespace Imageboard\Controller\Admin;

use GuzzleHttp\Psr7\Response;
use Imageboard\Exception\AccessDeniedException;
use Imageboard\Model\ModLog;
use Imageboard\Service\RendererServiceInterface;
use Psr\Http\Message\{ServerRequestInterface, ResponseInterface};

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
    public function list(ServerRequestInterface $request) : ResponseInterface
    {
        /** @var User */
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
