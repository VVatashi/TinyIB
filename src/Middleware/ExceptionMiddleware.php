<?php

namespace TinyIB\Middleware;

use GuzzleHttp\Psr7\Response;
use Psr\Http\Message\ResponseInterface;
use Psr\Http\Message\ServerRequestInterface;
use Psr\Http\Server\MiddlewareInterface;
use Psr\Http\Server\RequestHandlerInterface;
use TinyIB\AccessDeniedException;
use TinyIB\Model\User;
use TinyIB\NotFoundException;
use TinyIB\Service\RendererServiceInterface;
use TinyIB\ValidationException;

/**
 * Converts exceptions to responses.
 */
class ExceptionMiddleware implements MiddlewareInterface
{
    /** @var \TinyIB\Service\RendererServiceInterface $renderer */
    protected $renderer;

    public function __construct(RendererServiceInterface $renderer)
    {
        $this->renderer = $renderer;
    }

    /**
     * {@inheritDoc}
     */
    public function process(
        ServerRequestInterface $request,
        RequestHandlerInterface $handler
    ) : ResponseInterface {
        try {
            return $handler->handle($request);
        }
        catch (ValidationException $exception) {
            $message = $exception->getMessage();
            $content = $this->renderer->render('error.twig', ['message' => $message]);
            return new Response(400, [], $content);
        }
        catch (AccessDeniedException $exception) {
            $message = $exception->getMessage();
            $content = $this->renderer->render('error.twig', ['message' => $message]);
            return new Response(403, [], $content);
        }
        catch (NotFoundException $exception) {
            $message = $exception->getMessage();
            $content = $this->renderer->render('error.twig', ['message' => $message]);
            return new Response(404, [], $content);
        }
        catch (\Exception $exception) {
            $message = $exception->getMessage();
            $content = $this->renderer->render('error.twig', ['message' => $message]);
            return new Response(500, [], $content);
        }
    }
}
