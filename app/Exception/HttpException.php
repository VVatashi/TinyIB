<?php

namespace Imageboard\Exception;

class HttpException extends \Exception
{
    /** @var int */
    protected $http_status;

    public function __construct(int $http_status = 500, string $message = '', int $code = 0, $previous = null)
    {
        parent::__construct($message, $code, $previous);
        $this->http_status = $http_status;
    }

    /**
     * Returns HTTP status code.
     *
     * @return int
     */
    public function getHTTPStatusCode() : int
    {
        return $this->http_status;
    }
}
