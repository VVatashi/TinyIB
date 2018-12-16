<?php

namespace TinyIB\Controller\Admin;

use Psr\Http\Message\ServerRequestInterface;
use TinyIB\Service\RendererServiceInterface;

abstract class CrudController
{
    /** @var \TinyIB\Service\RendererServiceInterface $renderer */
    protected $renderer;

    /**
     * Creates a new CRUD controller instance.
     *
     * @param RendererServiceInterface $renderer
     */
    public function __construct(
        RendererServiceInterface $renderer
    ) {
        $this->renderer = $renderer;
    }

    /**
     * Checks user access.
     *
     * @param ServerRequestInterface $request
     *
     * @return bool
     */
    protected function checkAccess(ServerRequestInterface $request) : bool
    {
        /** @var \TinyIB\Model\User $current_user */
        $current_user = $request->getAttribute('user');
        return $current_user->isMod();
    }
}
