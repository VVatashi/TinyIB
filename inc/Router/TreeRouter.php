<?php

namespace TinyIB\Router;

use TinyIB\Router\TreeNode;

/**
 * Implements a tree to traverse routes.
 */
class TreeRouter implements IRouter
{
    /** @var string $path_separator */
    protected $path_separator;

    /** @var TreeNode $tree */
    protected $tree;

    /**
     * Creates new TreeRouter.
     *
     * @param string $path_separator
     */
    public function __construct($path_separator = '/')
    {
        $this->path_separator = $path_separator;
        $this->tree = new TreeNode();
    }

    /**
     * {@inheritDoc}
     */
    public function addRoute($path, $handler)
    {
        $path_parts = explode($this->path_separator, $path);
        $node = $this->tree;
        $part = array_shift($path_parts);

        while (!empty($path_parts)) {
            $child = $node->getChild($part);

            if (!isset($child)) {
                $child = new TreeNode();
                $node->addChild($part, $child);
            }

            $node = $child;
            $part = array_shift($path_parts);
        }

        $child = new TreeNode($handler);
        $node->addChild($part, $child);
    }

    /**
     * @param string[] $path_parts
     * @param TreeNode $node
     *
     * @return callable|null Route handler.
     */
    protected function traverse($path_parts, $node)
    {
        if (!empty($path_parts)) {
            $part = array_shift($path_parts);

            // Check match literally.
            $child = $node->getChild($part);
            if (isset($child)) {
                return $this->traverse($path_parts, $child);
            }

            // Check dynamic arg.
            $child = $node->getChild(':int');
            if (isset($child) && is_numeric($part)) {
                return $this->traverse($path_parts, $child);
            }

            return null;
        } else {
            return $node->getData();
        }
    }

    /**
     * {@inheritDoc}
     */
    public function resolve($path)
    {
        $path_parts = explode($this->path_separator, $path);
        return $this->traverse($path_parts, $this->tree);
    }
}
