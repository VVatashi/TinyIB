<?php

namespace Imageboard\Controller\Admin;

use GuzzleHttp\Psr7\Response;
use Imageboard\Commands\CommandDispatcher;
use Imageboard\Exception\AccessDeniedException;
use Imageboard\Queries\QueryDispatcher;
use Imageboard\Service\RendererServiceInterface;
use Psr\Http\Message\{ResponseInterface, ServerRequestInterface};

abstract class CrudController
{
    /** @var string */
    protected $list_url = '';

    /** @var string */
    protected $list_query_type = '';

    /** @var string */
    protected $list_template = '';

    /** @var string */
    protected $show_query_type = '';

    /** @var string */
    protected $show_template = '';

    /** @var string */
    protected $delete_command_type = '';

    /** @var CommandDispatcher */
    protected $command_dispatcher;

    /** @var QueryDispatcher */
    protected $query_dispatcher;

    /** @var RendererServiceInterface */
    protected $renderer;

    /**
     * Creates a new CRUD controller instance.
     *
     * @param CommandDispatcher $command_dispatcher
     * @param QueryDispatcher $query_dispatcher
     * @param RendererServiceInterface $renderer
     */
    public function __construct(
        CommandDispatcher $command_dispatcher,
        QueryDispatcher $query_dispatcher,
        RendererServiceInterface $renderer
    ) {
        $this->command_dispatcher = $command_dispatcher;
        $this->query_dispatcher = $query_dispatcher;
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
        /** @var User */
        $current_user = $request->getAttribute('user');
        return $current_user->isMod();
    }

    /**
     * Returns list of items.
     *
     * @throws AccessDeniedException
     */
    public function list(ServerRequestInterface $request) : string
    {
        if (!$this->checkAccess($request)) {
            throw new AccessDeniedException('You are not allowed to access this page');
        }

        $params = $request->getQueryParams();
        $page = (int)($params['page'] ?? 0);
        $per_page = 100;

        $query = new $this->list_query_type($page * $per_page, $per_page);
        $handler = $this->query_dispatcher->getHandler($query);
        $total_count = $handler->count($query);
        $items = $handler->handle($query);
        return $this->renderer->render($this->list_template, [
            'items' => $items,
            'pager' => [
                'current_page' => $page,
                'total_pages' => ceil($total_count / $per_page),
            ],
        ]);
    }

    /**
     * Returns view of a single item.
     *
     * @throws AccessDeniedException
     */
    public function show(ServerRequestInterface $request, array $args) : string
    {
        if (!$this->checkAccess($request)) {
            throw new AccessDeniedException('You are not allowed to access this page');
        }

        $id = (int)$args['id'];
        $query = new $this->show_query_type($id);
        $handler = $this->query_dispatcher->getHandler($query);
        $item = $handler->handle($query);
        return $this->renderer->render($this->show_template, [
            'item' => $item,
        ]);
    }

    /**
     * Deletes item.
     *
     * @throws AccessDeniedException
     */
    public function delete(ServerRequestInterface $request, array $args) : ResponseInterface
    {
        if (!$this->checkAccess($request)) {
            throw new AccessDeniedException('You are not allowed to access this page');
        }

        $id = (int)$args['id'];
        $command = new $this->delete_command_type($id);
        $handler = $this->command_dispatcher->getHandler($command);
        $handler->handle($command);

        $query = $request->getQueryParams();
        $back = $query['back'] ?? $this->list_url;

        return new Response(302, [
            'Location' => $back,
        ]);
    }
}
