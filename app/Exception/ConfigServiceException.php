<?php

namespace Imageboard\Exception;

use Throwable;

class ConfigServiceException extends \Exception implements ServiceExceptionInterface
{
    /**
     * @var string
     */
    private $serviceClass;

    /**
     * ConfigServiceException constructor.
     *
     * @param string          $message
     * @param int             $code
     * @param \Throwable|null $previous
     * @param string|null     $serviceClass
     */
    public function __construct($message = "", $code = 0, Throwable $previous = null, string $serviceClass = null)
    {
        $this->serviceClass = $serviceClass;

        parent::__construct( $message, $code, $previous );
    }

    function getServiceClass()
    {
        return $this->serviceClass ?? false;
    }
}
