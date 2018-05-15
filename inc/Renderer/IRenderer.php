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
     * @param bool $res
     *
     * @return array
     */
    public function preprocessPost($post, $res);

    /**
     * @param array $post
     * @param bool $res
     * @param bool $preprocessed
     *
     * @return string
     */
    public function renderPost($post, $res, $preprocessed = false);

    /**
     * @param int $id
     *
     * @return string
     */
    public function renderThreadPage($id);

    /**
     * @param int $page
     *
     * @return string
     */
    public function renderBoardPage($page);

    /**
     * @param string $text
     *
     * @return string
     */
    public function makeLinksClickable($text);
}
