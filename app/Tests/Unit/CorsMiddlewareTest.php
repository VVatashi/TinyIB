<?php

namespace Imageboard\Tests\Unit;

use GuzzleHttp\Psr7\ServerRequest;
use Imageboard\Middleware\CorsMiddleware;
use Imageboard\Tests\Mock\RequestHandlerMock;
use PHPUnit\Framework\TestCase;
use Psr\Http\Message\ResponseInterface;

final class CorsMiddlewareTest extends TestCase
{
    /** @var RequestHandlerMock */
    protected $handler;

    /** @var CorsMiddleware */
    protected $middleware;

    public function setUp() : void
    {
        $this->handler = new RequestHandlerMock();

        $origin = 'https://localhost';
        $methods = ['GET', 'POST', 'PUT', 'DELETE'];
        $allow_headers = ['X-Test-Request-Header'];
        $expose_headers = ['X-Test-Response-Header'];
        $credentials = true;
        $cache = 3600;

        $this->middleware = new CorsMiddleware(
            $origin,
            $methods,
            $allow_headers,
            $expose_headers,
            $credentials,
            $cache
        );
    }

    public function testCreateMiddleware() : void
    {
        $this->assertNotNull($this->middleware);
        $this->assertInstanceOf(CorsMiddleware::class, $this->middleware);
    }

    public function testNonCorsRequest() : void
    {
        $request = new ServerRequest('GET', '');

        $response = $this->middleware->process($request, $this->handler);
        $this->assertNotNull($response);
        $this->assertInstanceOf(ResponseInterface::class, $response);
        $this->assertEquals(200, $response->getStatusCode());

        // Should not add CORS headers.
        $this->assertEquals(false, $response->hasHeader('Access-Control-Allow-Origin'));
        $this->assertEquals(false, $response->hasHeader('Access-Control-Allow-Credentials'));
        $this->assertEquals(false, $response->hasHeader('Access-Control-Allow-Methods'));
        $this->assertEquals(false, $response->hasHeader('Access-Control-Allow-Headers'));
        $this->assertEquals(false, $response->hasHeader('Access-Control-Expose-Headers'));
        $this->assertEquals(false, $response->hasHeader('Access-Control-Max-Age'));
    }

    public function testSimpleRequest() : void
    {
        $request = new ServerRequest('GET', '', [
            'Origin' => 'https://localhost',
            'X-Test-Request-Header' => 'true',
        ]);

        $response = $this->middleware->process($request, $this->handler);
        $this->assertNotNull($response);
        $this->assertInstanceOf(ResponseInterface::class, $response);
        $this->assertEquals(200, $response->getStatusCode());

        // Should add CORS headers.
        $this->assertEquals(true, $response->hasHeader('Access-Control-Allow-Origin'));
        $this->assertEquals(true, $response->hasHeader('Access-Control-Allow-Credentials'));
        $this->assertEquals(true, $response->hasHeader('Access-Control-Expose-Headers'));
        $this->assertEquals(true, $response->hasHeader('Access-Control-Max-Age'));
    }

    public function testPreflightedRequest() : void
    {
        $request = new ServerRequest('OPTIONS', '', [
            'Origin' => 'https://localhost',
            'Access-Control-Request-Method' => 'POST',
            'Access-Control-Request-Headers' => 'X-Test-Request-Header',
        ]);

        $response = $this->middleware->process($request, $this->handler);
        $this->assertNotNull($response);
        $this->assertInstanceOf(ResponseInterface::class, $response);
        $this->assertEquals(204, $response->getStatusCode());

        // Should add CORS headers.
        $this->assertEquals(true, $response->hasHeader('Access-Control-Allow-Origin'));
        $this->assertEquals(true, $response->hasHeader('Access-Control-Allow-Credentials'));
        $this->assertEquals(true, $response->hasHeader('Access-Control-Allow-Methods'));
        $this->assertEquals(true, $response->hasHeader('Access-Control-Allow-Headers'));
        $this->assertEquals(true, $response->hasHeader('Access-Control-Max-Age'));
    }

    public function testInvalidOrigin() : void
    {
        $request = new ServerRequest('OPTIONS', '', [
            'Origin' => 'https://foo.bar',
            'Access-Control-Request-Method' => 'POST',
            'Access-Control-Request-Headers' => 'X-Test-Request-Header',
        ]);

        $response = $this->middleware->process($request, $this->handler);
        $this->assertNotNull($response);
        $this->assertInstanceOf(ResponseInterface::class, $response);
        $this->assertEquals(403, $response->getStatusCode());

        // Should not add CORS headers.
        $this->assertEquals(false, $response->hasHeader('Access-Control-Allow-Origin'));
        $this->assertEquals(false, $response->hasHeader('Access-Control-Allow-Credentials'));
        $this->assertEquals(false, $response->hasHeader('Access-Control-Allow-Methods'));
        $this->assertEquals(false, $response->hasHeader('Access-Control-Allow-Headers'));
        $this->assertEquals(false, $response->hasHeader('Access-Control-Expose-Headers'));
        $this->assertEquals(false, $response->hasHeader('Access-Control-Max-Age'));
    }

    public function testMethodNotAllowed() : void
    {
        $request = new ServerRequest('OPTIONS', '', [
            'Origin' => 'https://localhost',
            'Access-Control-Request-Method' => 'PATCH',
            'Access-Control-Request-Headers' => 'X-Test-Request-Header',
        ]);

        $response = $this->middleware->process($request, $this->handler);
        $this->assertNotNull($response);
        $this->assertInstanceOf(ResponseInterface::class, $response);
        $this->assertEquals(405, $response->getStatusCode());

        // Should not add CORS headers.
        $this->assertEquals(false, $response->hasHeader('Access-Control-Allow-Origin'));
        $this->assertEquals(false, $response->hasHeader('Access-Control-Allow-Credentials'));
        $this->assertEquals(false, $response->hasHeader('Access-Control-Allow-Methods'));
        $this->assertEquals(false, $response->hasHeader('Access-Control-Allow-Headers'));
        $this->assertEquals(false, $response->hasHeader('Access-Control-Expose-Headers'));
        $this->assertEquals(false, $response->hasHeader('Access-Control-Max-Age'));
    }

    public function testInvalidHeader() : void
    {
        $request = new ServerRequest('OPTIONS', '', [
            'Origin' => 'https://localhost',
            'Access-Control-Request-Method' => 'POST',
            'Access-Control-Request-Headers' => 'X-Another-Request-Header',
        ]);

        $response = $this->middleware->process($request, $this->handler);
        $this->assertNotNull($response);
        $this->assertInstanceOf(ResponseInterface::class, $response);
        $this->assertEquals(403, $response->getStatusCode());

        // Should not add CORS headers.
        $this->assertEquals(false, $response->hasHeader('Access-Control-Allow-Origin'));
        $this->assertEquals(false, $response->hasHeader('Access-Control-Allow-Credentials'));
        $this->assertEquals(false, $response->hasHeader('Access-Control-Allow-Methods'));
        $this->assertEquals(false, $response->hasHeader('Access-Control-Allow-Headers'));
        $this->assertEquals(false, $response->hasHeader('Access-Control-Expose-Headers'));
        $this->assertEquals(false, $response->hasHeader('Access-Control-Max-Age'));
    }
}
