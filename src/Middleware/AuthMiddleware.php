<?php

namespace TinyIB\Middleware;

use GuzzleHttp\Psr7\Response;
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
            $user = User::find($_SESSION['user']);
            $request = $request->withAttribute('user', $user);
        } else {
            // If there is no user ID in the session, store anonymous user instance in the request.
            $user = User::anonymous();
            $request = $request->withAttribute('user', $user);
        }

        return $handler->handle($request);
    }
}
