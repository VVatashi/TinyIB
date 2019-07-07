<?php

namespace Imageboard\Controllers\Admin;

use Imageboard\Exceptions\AccessDeniedException;
use Imageboard\Repositories\Repository;
use Imageboard\Services\RendererService;
use Psr\Http\Message\ServerRequestInterface;

trait CrudListTrait
{
  abstract protected function checkAccess(ServerRequestInterface $request): bool;

  abstract protected function getItemsPerPage(): int;

  abstract protected function getRepository(): Repository;

  abstract protected function getListTemplate(): string;

  abstract protected function getAjaxListTemplate(): string;

  abstract protected function getRenderer(): RendererService;

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
  function list(ServerRequestInterface $request): string
  {
    if (!$this->checkAccess($request)) {
      throw new AccessDeniedException('You are not allowed to access this page');
    }

    $params = $request->getQueryParams();
    $page = (int)($params['page'] ?? 0);
    $per_page = $this->getItemsPerPage();

    if (!empty($params['date_from'])) {
      $date_from = (new \DateTime($params['date_from']))->getTimestamp();
    } else {
      $date_from = 0;
    }

    if (!empty($params['date_to'])) {
      $date_to = (new \DateTime($params['date_to']))->getTimestamp();
    } else {
      $date_to = (1 << 31) - 1;
    }

    $repository = $this->getRepository();
    $total_count = $repository->getCount($date_from, $date_to);
    $items = $repository->getAll($date_from, $date_to, $page * $per_page, $per_page);

    $renderer = $this->getRenderer();
    return $renderer->render($this->getListTemplate(), [
      'items' => $items,
      'filter' => [
        'date_from' => $params['date_from'] ?? '',
        'date_to'   => $params['date_to']   ?? '',
      ],
      'pager' => [
        'current_page' => $page,
        'total_pages'  => ceil($total_count / $per_page),
      ],
    ]);
  }

  /**
   * Returns partial HTML of the item list.
   *
   * @param ServerRequestInterface $request
   *
   * @return string Response HTML.
   *
   * @throws AccessDeniedException
   *   If current user is not an admin.
   */
  function ajaxList(ServerRequestInterface $request): string
  {
    if (!$this->checkAccess($request)) {
      throw new AccessDeniedException('You are not allowed to access this page');
    }

    $params = $request->getQueryParams();
    $page = (int)($params['page'] ?? 0);
    $per_page = $this->getItemsPerPage();

    if (!empty($params['date_from'])) {
      $date_from = (new \DateTime($params['date_from']))->getTimestamp();
    } else {
      $date_from = 0;
    }

    if (!empty($params['date_to'])) {
      $date_to = (new \DateTime($params['date_to']))->getTimestamp();
    } else {
      $date_to = (1 << 31) - 1;
    }

    $repository = $this->getRepository();
    $total_count = $repository->getCount($date_from, $date_to);
    $items = $repository->getAll($date_from, $date_to, $page * $per_page, $per_page);

    $renderer = $this->getRenderer();
    return $renderer->render($this->getAjaxListTemplate(), [
      'items' => $items,
      'filter' => [
        'date_from' => $params['date_from'] ?? '',
        'date_to'   => $params['date_to']   ?? '',
      ],
      'pager' => [
        'current_page' => $page,
        'total_pages'  => ceil($total_count / $per_page),
      ],
    ]);
  }
}
