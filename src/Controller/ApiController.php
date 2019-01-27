<?php

namespace TinyIB\Controller;

use GuzzleHttp\Psr7\Response;
use Psr\Http\Message\ResponseInterface;
use Psr\Http\Message\ServerRequestInterface;
use TinyIB\{AccessDeniedException, NotFoundException};
use TinyIB\Service\CaptchaServiceInterface;

class ApiController implements ApiControllerInterface
{
    /**
     * Checks if URL is allowed.
     */
    protected function isAllowed(string $url) : bool
    {
        $allowed = [
            '/^https?:\/\/(?:www\.)?coub\.com\//',
        ];

        foreach ($allowed as $pattern) {
            if (preg_match($pattern, $url)) {
                return true;
            }
        }

        return false;
    }

    /**
     * {@inheritDoc}
     */
    public function embed(ServerRequestInterface $request) : ResponseInterface
    {
        $params = $request->getQueryParams();
        if (!isset($params['url'])) {
            throw new NotFoundException('URL is not specified');
        }

        $url = $params['url'];
        if (!$this->isAllowed($url)) {
            throw new AccessDeniedException('URL is not allowed');
        }

        $response = file_get_contents($url);

        // Copy content type from the response.
        $headers = [];
        foreach ($http_response_header as $line) {
            $header = 'Content-Type: ';
            if (strncmp($line, $header, strlen($header)) === 0) {
                $headers['Content-Type'] = substr($line, strlen($header));
                break;
            }
        }

        return new Response(200, $headers, $response);
    }
}
