<?php

namespace Imageboard\Middleware;

use GuzzleHttp\Psr7\Response;
use Psr\Http\Message\{ServerRequestInterface, ResponseInterface};
use Psr\Http\Server\{MiddlewareInterface, RequestHandlerInterface};

/**
 * CORS implementation.
 */
class CorsMiddleware implements MiddlewareInterface
{
    /** @var string[] */
    protected $allow_origins;

    /** @var string[] */
    protected $allow_methods;

    /** @var string[] */
    protected $allow_headers;

    /** @var string[] */
    protected $expose_headers;

    /** @var bool */
    protected $allow_credentials;

    /** @var int */
    protected $max_age;

    /**
     * Creates a new CorsMiddleware instance.
     *
     * @param string|string[] $allow_origins
     * @param string[] $allow_methods
     * @param string[] $allow_headers
     * @param string[] $expose_headers
     * @param bool $allow_credentials
     * @param int $max_age
     */
    public function __construct(
        $allow_origins = '*',
        array $allow_methods = ['OPTIONS', 'GET', 'POST'],
        array $allow_headers = [],
        array $expose_headers = [],
        bool $allow_credentials = true,
        int $max_age = 3600
    ) {
        $this->allow_origins = is_array($allow_origins) ? $allow_origins : [$allow_origins];

        // Convert allowed methods and headers to the upper case to compare.
        $this->allow_methods = array_map('strtoupper', $allow_methods);
        $this->allow_headers = array_map('strtoupper', $allow_headers);

        $this->expose_headers = $expose_headers;
        $this->allow_credentials = $allow_credentials;
        $this->max_age = $max_age;
    }

    /**
     * {@inheritDoc}
     */
    public function process(
        ServerRequestInterface $request,
        RequestHandlerInterface $handler
    ) : ResponseInterface {
        $query = $request->getQueryParams();
        if ($request->hasHeader('Origin')) {
            $origin = $request->getHeaderLine('Origin');
        }

        if (empty($origin)) {
            // If the request does not have the origin header,
            // it is not a CORS request, so not do anything.
            return $handler->handle($request);
        }

        $allow_any_origin = in_array('*', $this->allow_origins);
        if (!$allow_any_origin && !in_array($origin, $this->allow_origins)) {
            // If the request have an invalid origin, return 403.
            return new Response(403);
        }

        $method = $request->getMethod();
        $is_preflight = $method === 'OPTIONS' && $request->hasHeader('Access-Control-Request-Method');
        if ($is_preflight) {
            $request_method = $request->getHeaderLine('Access-Control-Request-Method');
            if (!in_array($request_method, $this->allow_methods)) {
                // If the request have a not allowed requested method, return 405.
                return new Response(405);
            }

            $request_headers = $request->getHeader('Access-Control-Request-Headers');
            foreach ($request_headers as $request_header) {
                $request_header = strtoupper($request_header);
                if (!in_array($request_header, $this->allow_headers)) {
                    // If the request have a not allowed requested header, return 403.
                    return new Response(403);
                }
            }

            $response = new Response(204);
            $response = $response->withHeader('Access-Control-Allow-Methods', $this->allow_methods);
            $response = $response->withHeader('Access-Control-Allow-Headers', $this->allow_headers);
        } else {
            $response = $handler->handle($request);
            if (!empty($this->expose_headers)) {
              $response = $response->withHeader('Access-Control-Expose-Headers', $this->expose_headers);
            }
        }

        if ($this->allow_credentials) {
            $response = $response->withHeader('Access-Control-Allow-Credentials', 'true');
        }

        $response = $response->withHeader('Access-Control-Max-Age', $this->max_age);
        return $response->withHeader('Access-Control-Allow-Origin', $origin);
    }
}
