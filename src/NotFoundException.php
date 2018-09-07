<?php

namespace TinyIB;

class NotFoundException extends HttpException
{
    public function __construct(string $message = 'Not Found', int $code = 0, $previous = null)
    {
        parent::__construct(404, $message, $code, $previous);
    }
}
