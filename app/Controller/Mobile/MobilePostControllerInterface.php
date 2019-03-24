<?php

namespace Imageboard\Controller\Mobile;

use Psr\Http\Message\{ServerRequestInterface, ResponseInterface};

interface MobilePostControllerInterface
{
    /**
     * Returns an index page.
     *
     * @param ServerRequestInterface $request
     *
     * @return ResponseInterface
     */
    public function index(ServerRequestInterface $request) : ResponseInterface;

    /**
     * Returns a thread page.
     *
     * @param ServerRequestInterface $request
     * @param array $args Path arguments.
     *
     * @return ResponseInterface
     */
    public function thread(ServerRequestInterface $request, array $args) : ResponseInterface;

    /**
     * Creates a post.
     *
     * @param ServerRequestInterface $request
     *
     * @return ResponseInterface
     */
    public function createPost(ServerRequestInterface $request) : ResponseInterface;

    /**
     * Returns a thread HTML.
     *
     * @param ServerRequestInterface $request
     * @param array $args Path arguments.
     *
     * @return string
     */
    public function ajaxThread(ServerRequestInterface $request, array $args) : string;

    /**
     * Creates a post.
     *
     * @param ServerRequestInterface $request
     *
     * @return ResponseInterface
     */
    public function ajaxCreatePost(ServerRequestInterface $request) : ResponseInterface;
}
