<?php

namespace TinyIB\Middleware;

use GuzzleHttp\Psr7\Response;
use Psr\Http\Message\ResponseInterface;
use Psr\Http\Message\ServerRequestInterface;
use Psr\Http\Server\MiddlewareInterface;
use Psr\Http\Server\RequestHandlerInterface;
use Psr\Log\LoggerInterface;
use TinyIB\HttpException;
use TinyIB\Model\User;
use TinyIB\Service\RendererServiceInterface;
use TinyIB\Functions;

/**
 * Converts exceptions to responses.
 */
class ExceptionMiddleware implements MiddlewareInterface
{
	/** @var \Psr\Log\LoggerInterface $logger */
	protected $logger;

	/** @var \TinyIB\Service\RendererServiceInterface $renderer */
	protected $renderer;

	public function __construct(
		LoggerInterface $logger,
		RendererServiceInterface $renderer
	) {
		$this->logger = $logger;
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
			$message = Functions::formatException($exception);
			$this->logger->critical($message);

			if ($code < 500) {
				// Hide exception details in the response, if it is not a server fault.
				$message = $exception->getMessage();
			}

			if ($request->getHeaderLine('Accept') === 'application/json') {
				$content = json_encode(['error' => $message]);
				return new Response($code, ['Content-Type' => 'application/json'], $content);
			}

			$content = $this->renderer->render('error.twig', ['message' => "<pre>$code $message</pre>"]);
			return new Response($code, [], $content);
		}
		catch (\Exception $exception) {
			$message = Functions::formatException($exception);
			$this->logger->critical($message);

			if ($request->getHeaderLine('Accept') === 'application/json') {
				$content = json_encode(['error' => $message]);
				return new Response(500, ['Content-Type' => 'application/json'], $content);
			}

			$content = $this->renderer->render('error.twig', ['message' => "<pre>500: $message</pre>"]);
			return new Response(500, [], $content);
		}
	}
}
