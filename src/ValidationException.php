<?php

namespace TinyIB;

class ValidationException extends HttpException
{
    public function __construct(string $message = 'Validation Error', int $code = 0, $previous = null)
    {
        parent::__construct(400, $message, $code, $previous);
    }
}
