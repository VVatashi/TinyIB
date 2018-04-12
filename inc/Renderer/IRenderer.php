<?php

namespace TinyIB\Renderer;

interface IRenderer
{
    /**
     * @param string $template
     * @param array $variables
     *
     * @return string
     */
    public function render($template, $variables = []);

    /**
     * @param array $post
     * @param boolean $res
     *
     * @return array
     */
    public function preprocessPost($post, $res);

    /**
     * @param array $post
     * @param boolean $res
     *
     * @return string
     */
    public function renderPost($post, $res);

    public function rebuildIndexes();

    /**
     * @param integer $id
     */
    public function rebuildThread($id);
}
