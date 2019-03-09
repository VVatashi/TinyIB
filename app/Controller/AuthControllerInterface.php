<?php

namespace Imageboard\Controller;

use Psr\Http\Message\{ServerRequestInterface, ResponseInterface};

interface AuthControllerInterface
{
    /**
     * Returns register form.
     *
     * @param ServerRequestInterface $request
     *
     * @return string|ResponseInterface Response.
     */
    public function registerForm(ServerRequestInterface $request);

    /**
     * Registers user.
     *
     * @param ServerRequestInterface $request
     *
     * @return ResponseInterface Response.
     */
    public function register(ServerRequestInterface $request) : ResponseInterface;

    /**
     * Returns login form.
     *
     * @param ServerRequestInterface $request
     *
     * @return string|ResponseInterface Response.
     */
    public function loginForm(ServerRequestInterface $request);

    /**
     * Logs in user.
     *
     * @param ServerRequestInterface $request
     *
     * @return ResponseInterface Response.
     */
    public function login(ServerRequestInterface $request) : ResponseInterface;

    /**
     * Returns logs out user.
     *
     * @return ResponseInterface Response.
     */
    public function logout() : ResponseInterface;
}
