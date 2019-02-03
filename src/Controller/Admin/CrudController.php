<?php

namespace TinyIB\Controller\Admin;

use GuzzleHttp\Psr7\Response;
use Psr\Http\Message\{ResponseInterface, ServerRequestInterface};
use TinyIB\AccessDeniedException;
use TinyIB\Commands\CommandDispatcher;
use TinyIB\Queries\QueryDispatcher;
use TinyIB\Service\RendererServiceInterface;

abstract class CrudController
{
    /** @var string $list_url */
    protected $list_url = '';

    /** @var string $list_query_type */
    protected $list_query_type = '';

    /** @var string $list_template */
    protected $list_template = '';

    /** @var string $show_query_type */
    protected $show_query_type = '';

    /** @var string $show_template */
    protected $show_template = '';

    /** @var string $delete_command_type */
    protected $delete_command_type = '';

    /** @var CommandDispatcher $command_dispatcher */
    protected $command_dispatcher;

    /** @var QueryDispatcher $query_dispatcher */
    protected $query_dispatcher;

    /** @var \TinyIB\Service\RendererServiceInterface $renderer */
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
        /** @var \TinyIB\Model\User $current_user */
        $current_user = $request->getAttribute('user');
        return $current_user->isMod();
    }

    /**
     * Returns list of items.
     *
     * @throws AccessDeniedException
     */
    public function list(ServerRequestInterface $request) : ResponseInterface
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
        $content = $this->renderer->render($this->list_template, [
            'items' => $items,
            'pager' => [
                'current_page' => $page,
                'total_pages' => ceil($total_count / $per_page),
            ],
        ]);

        return new Response(200, [], $content);
    }

    /**
     * Returns view of a single item.
     *
     * @throws AccessDeniedException
     */
    public function show(ServerRequestInterface $request) : ResponseInterface
    {
        if (!$this->checkAccess($request)) {
            throw new AccessDeniedException('You are not allowed to access this page');
        }

        $id = (int)explode('/', $request->getUri()->getPath())[3];
        $query = new $this->show_query_type($id);
        $handler = $this->query_dispatcher->getHandler($query);
        $item = $handler->handle($query);
        $content = $this->renderer->render($this->show_template, [
            'item' => $item,
        ]);

        return new Response(200, [], $content);
    }

    /**
     * Deletes item.
     *
     * @throws AccessDeniedException
     */
    public function delete(ServerRequestInterface $request) : ResponseInterface
    {
        if (!$this->checkAccess($request)) {
            throw new AccessDeniedException('You are not allowed to access this page');
        }

        $id = (int)explode('/', $request->getUri()->getPath())[3];
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
