<?php

namespace Imageboard\Controller;

use Psr\Http\Message\{ServerRequestInterface, ResponseInterface};

interface AuthControllerInterface
{
    /**
     * Returns register form.
     *
     * @param ResponseInterface $request
     *
     * @return ServerRequestInterface $response
     */
    public function registerForm(ServerRequestInterface $request) : ResponseInterface;

    /**
     * Registers user.
     *
     * @param ResponseInterface $request
     *
     * @return ServerRequestInterface $response
     */
    public function register(ServerRequestInterface $request) : ResponseInterface;

    /**
     * Returns login form.
     *
     * @param ResponseInterface $request
     *
     * @return ServerRequestInterface $response
     */
    public function loginForm(ServerRequestInterface $request) : ResponseInterface;

    /**
     * Logs in user.
     *
     * @param ResponseInterface $request
     *
     * @return ServerRequestInterface $response
     */
    public function login(ServerRequestInterface $request) : ResponseInterface;

    /**
     * Returns logs out user.
     *
     * @return ServerRequestInterface $response
     */
    public function logout() : ResponseInterface;
}
