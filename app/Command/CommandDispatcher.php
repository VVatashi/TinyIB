<?php

namespace Imageboard\Command;

use Psr\Container\ContainerInterface;

class CommandDispatcher
{
  /** @var ContainerInterface */
  protected $container;

  function __construct(ContainerInterface $container)
  {
    $this->container = $container;
  }

  /**
   * @param CommandInterface $query
   *
   * @return CommandHandlerInterface
   */
  function getHandler($query)
  {
    $class_name = get_class($query) . 'Handler';
    return $this->container->get($class_name);
  }
}