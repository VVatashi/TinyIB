<?php

namespace TinyIB\Router;

interface RouterInterface
{
    /**
     * Adds new route handler for the path.
     *
     * @param string $path
     * @param callable $handler
     */
    public function addRoute($path, $handler);

    /**
     * Returns a route handler for the path if exists.
     *
     * @param string $path
     *
     * @return callable|null Route handler.
     */
    public function resolve($path);
}
