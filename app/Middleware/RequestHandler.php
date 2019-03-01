<?php

namespace Imageboard\Middleware;

use Psr\Http\Message\{ServerRequestInterface, ResponseInterface};
use Psr\Http\Server\{MiddlewareInterface, RequestHandlerInterface};

/**
 * Wraps a MiddlewareInterface instance into a RequestHandlerInterface.
 */
class RequestHandler implements RequestHandlerInterface
{
    /** @var MiddlewareInterface */
    protected $middleware;

    /** @var RequestHandlerInterface */
    protected $next;

    public function __construct(
        MiddlewareInterface $middleware,
        RequestHandlerInterface $next
    ) {
        $this->middleware = $middleware;
        $this->next = $next;
    }

    /**
     * {@inheritDoc}
     */
    public function handle(ServerRequestInterface $request) : ResponseInterface
    {
        return $this->middleware->process($request, $this->next);
    }
}
