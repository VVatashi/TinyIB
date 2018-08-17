<?php

namespace TinyIB\Middleware;

use Psr\Http\Message\ResponseInterface;
use Psr\Http\Message\ServerRequestInterface;
use Psr\Http\Server\MiddlewareInterface;
use Psr\Http\Server\RequestHandlerInterface;
use TinyIB\Model\User;

/**
 * Auth middleware.
 *
 * Sets user attribute on a request.
 */
class AuthMiddleware implements MiddlewareInterface
{
    /**
     * {@inheritDoc}
     */
    public function process(
        ServerRequestInterface $request,
        RequestHandlerInterface $handler
    ) : ResponseInterface {
        if (isset($_SESSION['user'])) {
            $request = $request->withAttribute('user', $_SESSION['user']);
        } else {
            // If there is no user in the session, store anonymous user instance in the request.
            $request = $request->withAttribute('user', new User(0, '', '', 0));
        }

        return $handler->handle($request);
    }
}
