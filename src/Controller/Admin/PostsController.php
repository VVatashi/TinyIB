<?php

namespace TinyIB\Controller\Admin;

use GuzzleHttp\Psr7\Response;
use Psr\Http\Message\{ResponseInterface, ServerRequestInterface};
use TinyIB\AccessDeniedException;
use TinyIB\Commands\{
    CommandDispatcher, DeletePost
};
use TinyIB\Model\Posts;
use TinyIB\Queries\{
    QueryDispatcher, ListPosts, ShowPost
};
use TinyIB\Service\RendererServiceInterface;
use TinyIB\NotFoundException;

class PostsController extends CrudController implements PostsControllerInterface
{
    /** @var CommandDispatcher $command_dispatcher */
    protected $command_dispatcher;

    /** @var QueryDispatcher $query_dispatcher */
    protected $query_dispatcher;

    /**
     * Creates a new PostsController instance.
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
        parent::__construct($renderer);

        $this->command_dispatcher = $command_dispatcher;
        $this->query_dispatcher = $query_dispatcher;
    }

    /**
     * {@inheritDoc}
     */
    public function list(ServerRequestInterface $request) : ResponseInterface
    {
        if (!$this->checkAccess($request)) {
            throw new AccessDeniedException('You are not allowed to access this page');
        }

        $params = $request->getQueryParams();
        $page = (int)($params['page'] ?? 0);
        $per_page = 100;

        $query = new ListPosts($page * $per_page, $per_page);
        $handler = $this->query_dispatcher->getHandler($query);
        $total_count = $handler->count($query);
        $items = $handler->handle($query);
        $content = $this->renderer->render('admin/posts/list.twig', [
            'items' => $items,
            'pager' => [
                'current_page' => $page,
                'total_pages' => floor($total_count / $per_page),
            ],
        ]);

        return new Response(200, [], $content);
    }

    /**
     * {@inheritDoc}
     */
    public function show(ServerRequestInterface $request) : ResponseInterface
    {
        if (!$this->checkAccess($request)) {
            throw new AccessDeniedException('You are not allowed to access this page');
        }

        $id = (int)explode('/', $request->getUri()->getPath())[3];
        $query = new ShowPost($id);
        $handler = $this->query_dispatcher->getHandler($query);
        $item = $handler->handle($query);
        $content = $this->renderer->render('admin/posts/show.twig', [
            'item' => $item,
        ]);

        return new Response(200, [], $content);
    }

    /**
     * {@inheritDoc}
     */
    public function delete(ServerRequestInterface $request) : ResponseInterface
    {
        if (!$this->checkAccess($request)) {
            throw new AccessDeniedException('You are not allowed to access this page');
        }

        $id = (int)explode('/', $request->getUri()->getPath())[3];
        $command = new DeletePost($id);
        $handler = $this->command_dispatcher->getHandler($command);
        $handler->handle($command);

        $query = $request->getQueryParams();
        $back = $query['back'] ?? TINYIB_BASE_URL . TINYIB_BOARD . '/admin/posts';

        return new Response(302, [
            'Location' => $back,
        ]);
    }
}
