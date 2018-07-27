<?php

namespace TinyIB;

class Response
{
    /** @var int $status_code */
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

    /**
     * Returns status code.
     *
     * @return int
     */
    public function getStatusCode() : int
    {
        return $this->status_code;
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

    /**
     * @param string $content
     * @param array $headers
     *
     * @return \TinyIB\Response
     */
    public static function ok($content = '', $headers = [])
    {
        return new static($content, $headers, 200);
    }

    /**
     * @param string $location
     * @param array $headers
     *
     * @return \TinyIB\Response
     */
    public static function redirect($location, $headers = [])
    {
        $headers[] = 'Location:' . $location;
        return new static('', $headers, 302);
    }

    /**
     * @param string $content
     * @param array $headers
     *
     * @return \TinyIB\Response
     */
    public static function badRequest($content = '', $headers = [])
    {
        return new static($content, $headers, 400);
    }

    /**
     * @param string $content
     * @param array $headers
     *
     * @return \TinyIB\Response
     */
    public static function forbidden($content = '', $headers = [])
    {
        return new static($content, $headers, 403);
    }

    /**
     * @param string $content
     * @param array $headers
     *
     * @return \TinyIB\Response
     */
    public static function notFound($content = '', $headers = [])
    {
        return new static($content, $headers, 404);
    }

    /**
     * @param string $content
     * @param array $headers
     *
     * @return \TinyIB\Response
     */
    public static function serverError($content = '', $headers = [])
    {
        return new static($content, $headers, 500);
    }

    /**
     * @param string $content
     * @param array $headers
     *
     * @return \TinyIB\Response
     */
    public static function serviceUnavailable($content = '', $headers = [])
    {
        return new static($content, $headers, 503);
    }
}
