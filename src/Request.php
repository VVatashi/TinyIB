<?php

namespace TinyIB;

class Request
{
    /** @var string $path */
    protected $path;

    /** @var string[] $query */
    protected $query;

    /** @var string[] $data */
    protected $data;

    /** @var array[] $files */
    protected $files;

    /**
     * Creates a new Request instance.
     *
     * @param string $path
     * @param string[] $query
     * @param string[] $data
     * @param array[] $files
     */
    public function __construct(
        string $path = '',
        array $query = [],
        array $data = [],
        array $files = []
    ) {
        $this->path = $path;
        $this->query = $query;
        $this->data = $data;
        $this->files = $files;
    }

    /**
     * Returns instance of the current request.
     *
     * @return \TinyIB\Request
     */
    public static function getCurrentRequest() : self
    {
        // Get request path without board, query and html extension.
        $path = $_SERVER['REQUEST_URI'];
        $prefix = '/' . TINYIB_BOARD . '/';
        $prefix_length = strlen($prefix);
        if (strncmp($path, $prefix, $prefix_length) === 0) {
            $path = substr($path, $prefix_length);
        }

        $path = strtok($path, '?#');
        if (substr($path, -5) === '.html') {
            $path = substr($path, 0, -5);
        }

        return new Request(
            $path,
            $_GET,
            $_POST,
            $_FILES
        );
    }

    /**
     * Returns request path.
     *
     * @return string
     */
    public function getPath() : string
    {
        return $this->path;
    }

    /**
     * Returns request query parameters.
     *
     * @return string[]
     */
    public function getQuery() : array
    {
        return $this->query;
    }

    /**
     * Returns request POST data.
     *
     * @return string
     */
    public function getData() : array
    {
        return $this->data;
    }

    /**
     * Returns request uploaded files info.
     *
     * @return string
     */
    public function getFiles() : array
    {
        return $this->files;
    }
}
