<?php

namespace TinyIB\Router;

class TreeNode
{
    /** @var mixed $data Node data. */
    protected $data;

    /** @var TreeNode[] $children Node children. */
    protected $children;

    /**
     * Creates new TreeNode.
     *
     * @param mixed $data Node data.
     */
    public function __construct($data = null)
    {
        $this->data = $data;
        $this->children = [];
    }

    /**
     * Returns node data.
     *
     * @return mixed
     */
    public function getData()
    {
        return $this->data;
    }

    /**
     * Appends child node.
     *
     * @param string $key
     * @param TreeNode $node
     */
    public function addChild($key, $node)
    {
        $this->children[$key] = $node;
    }

    /**
     * Returns the specified child node if exists, null otherwise.
     *
     * @param string $key
     *
     * @return TreeNode|null
     */
    public function getChild($key)
    {
        if (isset($this->children[$key])) {
            return $this->children[$key];
        }

        return null;
    }
}
