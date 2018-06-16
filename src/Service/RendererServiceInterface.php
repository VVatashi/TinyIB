<?php

namespace TinyIB\Service;

use TinyIB\Model\PostInterface;


interface RendererServiceInterface
{
    /**
     * @param string $template
     * @param array $variables
     *
     * @return string
     */
    public function render(string $template, array $variables = []) : string;

    /**
     * @param \TinyIB\Model\PostInterface $post
     * @param bool $res
     * @param bool $preprocessed
     *
     * @return string
     */
    public function renderPost(PostInterface $post, bool $res) : string;

    /**
     * @param int $id
     *
     * @return string
     */
    public function renderThreadPage(int $id) : string;

    /**
     * @param int $page
     *
     * @return string
     */
    public function renderBoardPage(int $page) : string;

    /**
     * @param string $text
     *
     * @return string
     */
    public function makeLinksClickable(string $text);
}
