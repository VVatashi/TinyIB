<?php

namespace Imageboard\Controller\Mobile;

use Psr\Http\Message\{ServerRequestInterface, ResponseInterface};

interface MobilePostControllerInterface
{
    /**
     * Returns an index page.
     *
     * @param ServerRequestInterface
     *
     * @return ResponseInterface
     */
    public function index(ServerRequestInterface $request) : ResponseInterface;

    /**
     * Returns a thread page.
     *
     * @param ServerRequestInterface
     *
     * @return ResponseInterface
     */
    public function thread(ServerRequestInterface $request) : ResponseInterface;

    /**
     * Creates a post.
     *
     * @param ServerRequestInterface
     *
     * @return ResponseInterface
     */
    public function createPost(ServerRequestInterface $request) : ResponseInterface;

    /**
     * Returns a thread HTML.
     *
     * @param ServerRequestInterface
     *
     * @return ResponseInterface
     */
    public function ajaxThread(ServerRequestInterface $request) : ResponseInterface;

    /**
     * Creates a post.
     *
     * @param ServerRequestInterface
     *
     * @return ResponseInterface
     */
    public function ajaxCreatePost(ServerRequestInterface $request) : ResponseInterface;
}
