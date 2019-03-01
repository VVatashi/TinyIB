<?php

namespace Imageboard\Exception;

class AccessDeniedException extends HttpException
{
    public function __construct(string $message = 'Access Denied', int $code = 0, $previous = null)
    {
        parent::__construct(403, $message, $code, $previous);
    }
}
