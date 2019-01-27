<?php

namespace TinyIB\Commands;

use Psr\Container\ContainerInterface;

class CommandDispatcher
{
    /** @var ContainerInterface $container */
    protected $container;

    public function __construct(ContainerInterface $container)
    {
        $this->container = $container;
    }

    /**
     * @param CommandInterface $query
     *
     * @return CommandHandlerInterface
     */
    public function getHandler($query)
    {
        $class_name = get_class($query) . 'Handler';
        return $this->container->get($class_name);
    }
}
