<?php

namespace Imageboard\Controller\Admin;

use Psr\Http\Message\{ServerRequestInterface, ResponseInterface};

interface UserCrudControllerInterface
{
    /**
     * Returns users list.
     *
     * @param ResponseInterface $request
     *
     * @return ServerRequestInterface $response
     *
     * @throws AccessDeniedException
     *   If current user is not an admin.
     */
    public function list(ServerRequestInterface $request) : ResponseInterface;

    /**
     * Returns users.
     *
     * @param ResponseInterface $request
     *
     * @return ServerRequestInterface $response
     *
     * @throws AccessDeniedException
     *   If current user is not an admin.
     * @throws NotFoundException
     *   If user with the specified ID is not found.
     */
    public function show(ServerRequestInterface $request) : ResponseInterface;

    /**
     * Returns user create form.
     *
     * @param ResponseInterface $request
     *
     * @return ServerRequestInterface $response
     *
     * @throws AccessDeniedException
     *   If current user is not an admin.
     */
    public function createForm(ServerRequestInterface $request) : ResponseInterface;

    /**
     * Creates user.
     *
     * @param ResponseInterface $request
     *
     * @return ServerRequestInterface $response
     *
     * @throws AccessDeniedException
     *   If current user is not an admin.
     */
    public function create(ServerRequestInterface $request) : ResponseInterface;

    /**
     * Returns user edit form.
     *
     * @param ResponseInterface $request
     *
     * @return ServerRequestInterface $response
     *
     * @throws AccessDeniedException
     *   If current user is not an admin.
     * @throws NotFoundException
     *   If user with the specified ID is not found.
     */
    public function editForm(ServerRequestInterface $request) : ResponseInterface;

    /**
     * Updates user.
     *
     * @param ResponseInterface $request
     *
     * @return ServerRequestInterface $response
     *
     * @throws AccessDeniedException
     *   If current user is not an admin.
     * @throws NotFoundException
     *   If user with the specified ID is not found.
     */
    public function edit(ServerRequestInterface $request) : ResponseInterface;

    /**
     * Return confirmation for user delete.
     *
     * @param ResponseInterface $request
     *
     * @return ServerRequestInterface $response
     *
     * @throws AccessDeniedException
     *   If current user is not an admin.
     * @throws NotFoundException
     *   If user with the specified ID is not found.
     */
    public function deleteConfirm(ServerRequestInterface $request) : ResponseInterface;

    /**
     * Deletes user.
     *
     * @param ResponseInterface $request
     *
     * @return ServerRequestInterface $response
     *
     * @throws AccessDeniedException
     *   If current user is not an admin.
     * @throws NotFoundException
     *   If user with the specified ID is not found.
     */
    public function delete(ServerRequestInterface $request) : ResponseInterface;
}
