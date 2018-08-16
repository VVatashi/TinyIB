<?php

namespace TinyIB\Controller;

use Psr\Http\Message\ResponseInterface;
use Psr\Http\Message\ServerRequestInterface;

interface AuthControllerInterface
{
    /**
     * Returns register form.
     *
     * @param \Psr\Http\Message\ResponseInterface $request
     *
     * @return \Psr\Http\Message\ServerRequestInterface $response
     */
    public function registerForm(ServerRequestInterface $request) : ResponseInterface;

    /**
     * Registers user.
     *
     * @param \Psr\Http\Message\ResponseInterface $request
     *
     * @return \Psr\Http\Message\ServerRequestInterface $response
     */
    public function register(ServerRequestInterface $request) : ResponseInterface;

    /**
     * Returns login form.
     *
     * @param \Psr\Http\Message\ResponseInterface $request
     *
     * @return \Psr\Http\Message\ServerRequestInterface $response
     */
    public function loginForm(ServerRequestInterface $request) : ResponseInterface;

    /**
     * Logs in user.
     *
     * @param \Psr\Http\Message\ResponseInterface $request
     *
     * @return \Psr\Http\Message\ServerRequestInterface $response
     */
    public function login(ServerRequestInterface $request) : ResponseInterface;

    /**
     * Returns logs out user.
     *
     * @param \Psr\Http\Message\ResponseInterface $request
     *
     * @return \Psr\Http\Message\ServerRequestInterface $response
     */
    public function logout(ServerRequestInterface $request) : ResponseInterface;
}
