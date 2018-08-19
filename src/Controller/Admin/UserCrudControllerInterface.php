<?php

namespace TinyIB\Controller\Admin;

use Psr\Http\Message\ResponseInterface;
use Psr\Http\Message\ServerRequestInterface;

interface UserCrudControllerInterface
{
    /**
     * Returns users list.
     *
     * @param \Psr\Http\Message\ResponseInterface $request
     *
     * @return \Psr\Http\Message\ServerRequestInterface $response
     *
     * @throws \TinyIB\AccessDeniedException
     *   If current user is not an admin.
     */
    public function list(ServerRequestInterface $request) : ResponseInterface;

    /**
     * Returns users.
     *
     * @param \Psr\Http\Message\ResponseInterface $request
     *
     * @return \Psr\Http\Message\ServerRequestInterface $response
     *
     * @throws \TinyIB\AccessDeniedException
     *   If current user is not an admin.
     * @throws \TinyIB\NotFoundException
     *   If user with the specified ID is not found.
     */
    public function show(ServerRequestInterface $request) : ResponseInterface;

    /**
     * Returns user create form.
     *
     * @param \Psr\Http\Message\ResponseInterface $request
     *
     * @return \Psr\Http\Message\ServerRequestInterface $response
     *
     * @throws \TinyIB\AccessDeniedException
     *   If current user is not an admin.
     */
    public function createForm(ServerRequestInterface $request) : ResponseInterface;

    /**
     * Creates user.
     *
     * @param \Psr\Http\Message\ResponseInterface $request
     *
     * @return \Psr\Http\Message\ServerRequestInterface $response
     *
     * @throws \TinyIB\AccessDeniedException
     *   If current user is not an admin.
     */
    public function create(ServerRequestInterface $request) : ResponseInterface;

    /**
     * Returns user edit form.
     *
     * @param \Psr\Http\Message\ResponseInterface $request
     *
     * @return \Psr\Http\Message\ServerRequestInterface $response
     *
     * @throws \TinyIB\AccessDeniedException
     *   If current user is not an admin.
     * @throws \TinyIB\NotFoundException
     *   If user with the specified ID is not found.
     */
    public function editForm(ServerRequestInterface $request) : ResponseInterface;

    /**
     * Updates user.
     *
     * @param \Psr\Http\Message\ResponseInterface $request
     *
     * @return \Psr\Http\Message\ServerRequestInterface $response
     *
     * @throws \TinyIB\AccessDeniedException
     *   If current user is not an admin.
     * @throws \TinyIB\NotFoundException
     *   If user with the specified ID is not found.
     */
    public function edit(ServerRequestInterface $request) : ResponseInterface;

    /**
     * Return confirmation for user delete.
     *
     * @param \Psr\Http\Message\ResponseInterface $request
     *
     * @return \Psr\Http\Message\ServerRequestInterface $response
     *
     * @throws \TinyIB\AccessDeniedException
     *   If current user is not an admin.
     * @throws \TinyIB\NotFoundException
     *   If user with the specified ID is not found.
     */
    public function deleteConfirm(ServerRequestInterface $request) : ResponseInterface;

    /**
     * Deletes user.
     *
     * @param \Psr\Http\Message\ResponseInterface $request
     *
     * @return \Psr\Http\Message\ServerRequestInterface $response
     *
     * @throws \TinyIB\AccessDeniedException
     *   If current user is not an admin.
     * @throws \TinyIB\NotFoundException
     *   If user with the specified ID is not found.
     */
    public function delete(ServerRequestInterface $request) : ResponseInterface;
}
