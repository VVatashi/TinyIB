<?php

namespace TinyIB\Middleware;

use GuzzleHttp\Psr7\Response;
use Psr\Http\Message\ResponseInterface;
use Psr\Http\Message\ServerRequestInterface;
use Psr\Http\Server\MiddlewareInterface;
use Psr\Http\Server\RequestHandlerInterface;
use TinyIB\HttpException;
use TinyIB\Model\User;
use TinyIB\Service\RendererServiceInterface;

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
        catch (HttpException $exception) {
            $code = $exception->getHTTPStatusCode();
            $message = $exception->getMessage();
            $content = $this->renderer->render('error.twig', ['message' => "$code: $message"]);
            return new Response($code, [], $content);
        }
        catch (\Exception $exception) {
            $message = $exception->getMessage();
            $content = $this->renderer->render('error.twig', ['message' => "500: $message"]);
            return new Response(500, [], $content);
        }
    }
}
