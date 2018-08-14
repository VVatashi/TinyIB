<?php

namespace TinyIB\Middleware;

use Psr\Http\Message\ResponseInterface;
use Psr\Http\Message\ServerRequestInterface;
use Psr\Http\Server\MiddlewareInterface;
use Psr\Http\Server\RequestHandlerInterface;

/**
 * Wraps a MiddlewareInterface instance into a RequestHandlerInterface.
 */
class RequestHandler implements RequestHandlerInterface
{
    /** @var \Psr\Http\Server\MiddlewareInterface $middleware */
    protected $middleware;

    /** @var \Psr\Http\Server\RequestHandlerInterface $next */
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
