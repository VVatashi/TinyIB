<?php

namespace TinyIB;

class Response
{
    /** @var integer $status_code */
    protected $status_code;

    /** @var array $headers */
    protected $headers;

    /** @var string $content */
    protected $content;

    /**
     * Constructs new response.
     *
     * @param string $content
     * @param array $headers
     * @param integer $status_code
     */
    public function __construct($content = '', $headers = [], $status_code = 200)
    {
        $this->content = $content;
        $this->headers = $headers;
        $this->status_code = $status_code;
    }

    public function send()
    {
        http_response_code($this->status_code);

        foreach ($this->headers as $header) {
            header($header);
        }

        if (!empty($this->content)) {
            print $this->content;
        }
    }

    // Common response types.

    public static function ok($content = '', $headers = [])
    {
        return new static($content, $headers, 200);
    }

    public static function redirect($location, $headers = [])
    {
        $headers[] = 'Location:' . $location;
        return new static('', $headers, 302);
    }

    public static function badRequest($content = '', $headers = [])
    {
        return new static($content, $headers, 400);
    }

    public static function forbidden($content = '', $headers = [])
    {
        return new static($content, $headers, 403);
    }

    public static function notFound($content = '', $headers = [])
    {
        return new static($content, $headers, 404);
    }

    public static function serviceUnavailable($content = '', $headers = [])
    {
        return new static($content, $headers, 503);
    }
}
