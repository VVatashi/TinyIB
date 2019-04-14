<?php

namespace Imageboard\Query;

use Psr\Container\ContainerInterface;

/**
 * Class QueryDispatcher
 *
 * @package Imageboard\Query
 */
class QueryDispatcher
{
  /** @var ContainerInterface $container */
  protected $container;

  function __construct(ContainerInterface $container)
  {
    $this->container = $container;
  }

  /**
   * @param QueryInterface $query
   *
   * @return QueryHandlerInterface
   */
  function getHandler($query)
  {
    $class_name = get_class($query) . 'Handler';
    return $this->container->get($class_name);
  }
}
