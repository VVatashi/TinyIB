<?php

namespace TinyIB\Middleware;

use GuzzleHttp\Psr7\Response;
use Psr\Http\Message\ResponseInterface;
use Psr\Http\Message\ServerRequestInterface;
use Psr\Http\Server\MiddlewareInterface;
use Psr\Http\Server\RequestHandlerInterface;
use TinyIB\Model\CurrentUserInterface;
use TinyIB\Model\User;
use TinyIB\Service\RendererServiceInterface;
use VVatashi\DI\ContainerInterface;

/**
 * Auth middleware.
 *
 * Sets user attribute on a request and DIC.
 */
class AuthMiddleware implements MiddlewareInterface
{
    protected $container;

    public function __construct(ContainerInterface $container)
    {
        $this->container = $container;
    }

    /**
     * {@inheritDoc}
     */
    public function process(
        ServerRequestInterface $request,
        RequestHandlerInterface $handler
    ) : ResponseInterface {
        if (isset($_SESSION['user'])) {
            $user = User::find($_SESSION['user']);
        } else {
            // If there is no user ID in the session, store anonymous user instance in the request.
            $user = User::anonymous();
        }

        // Store current user to the DI container.
        $this->container->registerInstance(CurrentUserInterface::class, $user);

        // Store current user to a Twig global variable.
        $this->container->get(RendererServiceInterface::class)->registerGlobal('user', $user);

        // Store current user to the request attribute.
        $request = $request->withAttribute('user', $user);
        return $handler->handle($request);
    }
}
