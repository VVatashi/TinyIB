<?php

namespace Imageboard\Controller\Admin;

use DateInterval;
use DateTime;
use DateTimeZone;
use Imageboard\Exception\AccessDeniedException;
use Imageboard\Query\QueryDispatcher;
use Imageboard\Service\RendererService;
use Psr\Http\Message\ServerRequestInterface;

trait ListTrait
{
  abstract protected function checkAccess(ServerRequestInterface $request): bool;

  abstract protected function getItemsPerPage(): int;

  abstract protected function getListQuery(): string;

  abstract protected function getListTemplate(): string;

  abstract protected function getAjaxListTemplate(): string;

  abstract protected function getQueryDispatcher(): QueryDispatcher;

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
      $date_from = DateTime::createFromFormat('Y-m-d', $params['date_from'], new DateTimeZone('UTC'));
    }

    if (!isset($date_from) || $date_from === false) {
      $date_from = (new DateTime())->setTimestamp(0);
    }

    if (!empty($params['date_to'])) {
      $date_to = DateTime::createFromFormat('Y-m-d', $params['date_to'], new DateTimeZone('UTC'))
        ->add(new DateInterval('P1D'));
    }

    if (!isset($date_to) || $date_to === false) {
      $date_to = new DateTime();
    }

    $query_type = $this->getListQuery();
    $query = new $query_type($page * $per_page, $per_page, $date_from, $date_to);
    $query_dispatcher = $this->getQueryDispatcher();
    $handler = $query_dispatcher->getHandler($query);
    $total_count = $handler->count($query);
    $items = $handler->handle($query);
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
      $date_from = DateTime::createFromFormat('Y-m-d', $params['date_from'], new DateTimeZone('UTC'));
    }

    if (!isset($date_from) || $date_from === false) {
      $date_from = (new DateTime())->setTimestamp(0);
    }

    if (!empty($params['date_to'])) {
      $date_to = DateTime::createFromFormat('Y-m-d', $params['date_to'], new DateTimeZone('UTC'))
        ->add(new DateInterval('P1D'));
    }

    if (!isset($date_to) || $date_to === false) {
      $date_to = new DateTime();
    }

    $query_type = $this->getListQuery();
    $query = new $query_type($page * $per_page, $per_page, $date_from, $date_to);
    $query_dispatcher = $this->getQueryDispatcher();
    $handler = $query_dispatcher->getHandler($query);
    $total_count = $handler->count($query);
    $items = $handler->handle($query);
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
