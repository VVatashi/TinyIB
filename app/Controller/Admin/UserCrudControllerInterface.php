<?php

namespace Imageboard\Controller\Admin;

use Psr\Http\Message\{ServerRequestInterface, ResponseInterface};

interface UserCrudControllerInterface
{
    /**
     * Returns users list.
     *
     * @param ServerRequestInterface $request
     *
     * @return string Response HTML.
     *
     * @throws AccessDeniedException
     *   If current user is not an admin.
     */
    public function list(ServerRequestInterface $request) : string;

    /**
     * Returns users.
     *
     * @param ServerRequestInterface $request
     *
     * @return string Response HTML.
     *
     * @throws AccessDeniedException
     *   If current user is not an admin.
     * @throws NotFoundException
     *   If user with the specified ID is not found.
     */
    public function show(ServerRequestInterface $request) : string;

    /**
     * Returns user create form.
     *
     * @param ServerRequestInterface $request
     *
     * @return string Response HTML.
     *
     * @throws AccessDeniedException
     *   If current user is not an admin.
     */
    public function createForm(ServerRequestInterface $request) : string;

    /**
     * Creates user.
     *
     * @param ServerRequestInterface $request
     *
     * @return ResponseInterface Response.
     *
     * @throws AccessDeniedException
     *   If current user is not an admin.
     */
    public function create(ServerRequestInterface $request) : ResponseInterface;

    /**
     * Returns user edit form.
     *
     * @param ServerRequestInterface $request
     *
     * @return string Response HTML.
     *
     * @throws AccessDeniedException
     *   If current user is not an admin.
     * @throws NotFoundException
     *   If user with the specified ID is not found.
     */
    public function editForm(ServerRequestInterface $request) : string;

    /**
     * Updates user.
     *
     * @param ServerRequestInterface $request
     *
     * @return ResponseInterface Response.
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
     * @param ServerRequestInterface $request
     *
     * @return string Response HTML.
     *
     * @throws AccessDeniedException
     *   If current user is not an admin.
     * @throws NotFoundException
     *   If user with the specified ID is not found.
     */
    public function deleteConfirm(ServerRequestInterface $request) : string;

    /**
     * Deletes user.
     *
     * @param ServerRequestInterface $request
     *
     * @return ResponseInterface Response.
     *
     * @throws AccessDeniedException
     *   If current user is not an admin.
     * @throws NotFoundException
     *   If user with the specified ID is not found.
     */
    public function delete(ServerRequestInterface $request) : ResponseInterface;
}
