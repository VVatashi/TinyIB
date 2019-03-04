<?php

namespace Imageboard\Controller\Admin;

use Psr\Http\Message\{ServerRequestInterface, ResponseInterface};

interface CrudControllerInterface
{
  /**
   * Returns the list of items.
   *
   * @param ServerRequestInterface $request
   *
   * @return string Response HTML.
   *
   * @throws AccessDeniedException
   *   If current user is not an admin.
   */
  function list(ServerRequestInterface $request) : string;

  /**
   * Returns details page for a single item by id.
   *
   * @param ServerRequestInterface $request
   *
   * @return string Response HTML.
   *
   * @throws AccessDeniedException
   *   If current user is not an admin.
   * @throws NotFoundException
   *   If item with the specified ID is not found.
   */
  function show(ServerRequestInterface $request, array $args) : string;

  /**
   * Returns item create form.
   *
   * @param ServerRequestInterface $request
   *
   * @return string Response HTML.
   *
   * @throws AccessDeniedException
   *   If current user is not an admin.
   */
  function createForm(ServerRequestInterface $request): string;

  /**
   * Creates new item from a form data.
   *
   * @param ServerRequestInterface $request
   *
   * @return ResponseInterface
   *
   * @throws AccessDeniedException
   *   If current user is not an admin.
   */
  function create(ServerRequestInterface $request): ResponseInterface;

  /**
   * Returns item edit form.
   *
   * @param ServerRequestInterface $request
   * @param array Path arguments.
   *
   * @return string Response HTML.
   *
   * @throws AccessDeniedException
   *   If current user is not an admin.
   * @throws NotFoundException
   *   If item with the specified ID is not found.
   */
  function editForm(ServerRequestInterface $request, array $args) : string;

  /**
   * Updates item.
   *
   * @param ServerRequestInterface $request
   * @param array Path arguments.
   *
   * @return ResponseInterface Response.
   *
   * @throws AccessDeniedException
   *   If current user is not an admin.
   * @throws NotFoundException
   *   If item with the specified ID is not found.
   */
  function edit(ServerRequestInterface $request, array $args) : ResponseInterface;

  /**
   * Deletes item by id.
   *
   * @param ServerRequestInterface $request
   *
   * @return ResponseInterface
   *
   * @throws AccessDeniedException
   *   If current user is not an admin.
   */
  function delete(ServerRequestInterface $request, array $args) : ResponseInterface;
}
