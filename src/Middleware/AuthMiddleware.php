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
            $request = $request->withAttribute('user', $_SESSION['user']);
        } else {
            // If there is no user in the session, store anonymous user instance in the request.
            $request = $request->withAttribute('user', new User(0, '', '', 0));
        }

        $user = $request->getAttribute('user');
        if ($user->getRole() === 0) {
            $path = $request->getUri()->getPath();
            if (!preg_match('#^/' . TINYIB_BOARD . '/(auth|captcha)#', $path)) {
                return new Response(302, ['Location' => '/' . TINYIB_BOARD . '/auth/login']);
            }
        }

        return $handler->handle($request);
    }
}
