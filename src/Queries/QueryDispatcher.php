<?php

namespace TinyIB\Queries;

use Psr\Container\ContainerInterface;

class QueryDispatcher
{
    /** @var ContainerInterface $container */
    protected $container;

    public function __construct(ContainerInterface $container)
    {
        $this->container = $container;
    }

    /**
     * @param QueryInterface $query
     *
     * @return QueryHandlerInterface
     */
    public function getHandler($query)
    {
        $class_name = get_class($query) . 'Handler';
        return $this->container->get($class_name);
    }
}
