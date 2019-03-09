<?php

namespace Imageboard\Controller\Admin;

use DateInterval;
use DateTime;
use DateTimeZone;
use GuzzleHttp\Psr7\Response;
use Imageboard\Command\CommandDispatcher;
use Imageboard\Exception\AccessDeniedException;
use Imageboard\Query\QueryDispatcher;
use Imageboard\Service\RendererServiceInterface;
use Psr\Http\Message\{ResponseInterface, ServerRequestInterface};

abstract class CrudController implements CrudControllerInterface
{
  /** @var string */
  protected $list_url = '';

  /** @var string */
  protected $list_query_type = '';

  /** @var string */
  protected $list_template = '';

  /** @var string */
  protected $ajax_list_template = '';

  /** @var string */
  protected $show_query_type = '';

  /** @var string */
  protected $show_template = '';

  /** @var string */
  protected $create_url = '';

  /** @var string */
  protected $edit_url = '';

  /** @var string */
  protected $create_command_type = '';

  /** @var string */
  protected $edit_command_type = '';

  /** @var array */
  protected $new_item = [];

  /** @var string */
  protected $form_template = '';

  /** @var string */
  protected $delete_command_type = '';

  /** @var CommandDispatcher */
  protected $command_dispatcher;

  /** @var QueryDispatcher */
  protected $query_dispatcher;

  /** @var RendererServiceInterface */
  protected $renderer;

  /** @var int */
  protected $items_per_page = 100;

  /**
   * Creates a new CRUD controller instance.
   *
   * @param CommandDispatcher $command_dispatcher
   * @param QueryDispatcher $query_dispatcher
   * @param RendererServiceInterface $renderer
   */
  function __construct(
    CommandDispatcher $command_dispatcher,
    QueryDispatcher $query_dispatcher,
    RendererServiceInterface $renderer
  ) {
    $this->command_dispatcher = $command_dispatcher;
    $this->query_dispatcher = $query_dispatcher;
    $this->renderer = $renderer;
  }

  /**
   * Checks user access.
   *
   * @param ServerRequestInterface $request
   *
   * @return bool
   */
  protected function checkAccess(ServerRequestInterface $request): bool
  {
    /** @var User */
    $current_user = $request->getAttribute('user');
    return $current_user->isMod();
  }

  /**
   * Loads item DTO by ID.
   *
   * @param int $id
   *
   * @return array DTO.
   */
  protected function loadItem(int $id): array
  {
    return [];
  }

  /**
   * {@inheritDoc}
   */
  function list(ServerRequestInterface $request): string
  {
    if (!$this->checkAccess($request)) {
      throw new AccessDeniedException('You are not allowed to access this page');
    }

    $params = $request->getQueryParams();
    $page = (int)($params['page'] ?? 0);
    $per_page = $this->items_per_page;

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

    $query = new $this->list_query_type($page * $per_page, $per_page, $date_from, $date_to);
    $handler = $this->query_dispatcher->getHandler($query);
    $total_count = $handler->count($query);
    $items = $handler->handle($query);
    return $this->renderer->render($this->list_template, [
      'items' => $items,
      'filter' => [
        'date_from' => $params['date_from'] ?? '',
        'date_to' => $params['date_to'] ?? '',
      ],
      'pager' => [
        'current_page' => $page,
        'total_pages' => ceil($total_count / $per_page),
      ],
    ]);
  }

  /**
   * {@inheritDoc}
   */
  function ajaxList(ServerRequestInterface $request): string
  {
    if (!$this->checkAccess($request)) {
      throw new AccessDeniedException('You are not allowed to access this page');
    }

    $params = $request->getQueryParams();
    $page = (int)($params['page'] ?? 0);
    $per_page = $this->items_per_page;

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

    $query = new $this->list_query_type($page * $per_page, $per_page, $date_from, $date_to);
    $handler = $this->query_dispatcher->getHandler($query);
    $total_count = $handler->count($query);
    $items = $handler->handle($query);
    return $this->renderer->render($this->ajax_list_template, [
      'items' => $items,
      'filter' => [
        'date_from' => $params['date_from'] ?? '',
        'date_to' => $params['date_to'] ?? '',
      ],
      'pager' => [
        'current_page' => $page,
        'total_pages' => ceil($total_count / $per_page),
      ],
    ]);
  }

  /**
   * {@inheritDoc}
   */
  function show(ServerRequestInterface $request, array $args): string
  {
    if (!$this->checkAccess($request)) {
      throw new AccessDeniedException('You are not allowed to access this page');
    }

    $id = (int)$args['id'];
    $query = new $this->show_query_type($id);
    $handler = $this->query_dispatcher->getHandler($query);
    $item = $handler->handle($query);
    return $this->renderer->render($this->show_template, [
      'item' => $item,
    ]);
  }

  /**
   * {@inheritDoc}
   */
  function createForm(ServerRequestInterface $request): string
  {
    if (!$this->checkAccess($request)) {
      throw new AccessDeniedException('You are not allowed to access this page');
    }

    // Restore form data from a session.
    $key = $this->create_url . ':item';
    $item = $_SESSION[$key] ?? $this->new_item;
    unset($_SESSION[$key]);

    // Show error message from a session.
    $key = $this->create_url . ':error';
    $error = $_SESSION[$key] ?? null;
    unset($_SESSION[$key]);

    return $this->renderer->render($this->form_template, [
      'error' => $error,
      'item' => $item,
    ]);
  }

  /**
   * {@inheritDoc}
   */
  function create(ServerRequestInterface $request): ResponseInterface
  {
    if (!$this->checkAccess($request)) {
      throw new AccessDeniedException('You are not allowed to access this page');
    }

    $data = $request->getParsedBody();
    $command = new $this->create_command_type($data);
    $handler = $this->command_dispatcher->getHandler($command);

    try {
      $handler->handle($command);
    } catch (\Exception $exception) {
      // Store form data in a session.
      $key = $this->create_url . ':item';
      $_SESSION[$key] = $data;

      // Store error message in a session.
      $key = $this->create_url . ':error';
      $_SESSION[$key] = $exception->getMessage();

      return new Response(302, [
        'Location' => $this->create_url,
      ]);
    }

    $query = $request->getQueryParams();
    $back = $query['back'] ?? $this->list_url;

    return new Response(302, [
      'Location' => $back,
    ]);
  }

  /**
   * {@inheritDoc}
   */
  function editForm(ServerRequestInterface $request, array $args): string
  {
    if (!$this->checkAccess($request)) {
      throw new AccessDeniedException('You are not allowed to access this page');
    }

    // Restore form data from a session.
    $id = (int)($args['id'] ?? 0);
    $key = $this->edit_url . ':item';
    $item = $_SESSION[$key] ?? $this->loadItem($id);
    unset($_SESSION[$key]);

    // Show error message from a session.
    $key = $this->edit_url . ':error';
    $error = $_SESSION[$key] ?? null;
    unset($_SESSION[$key]);

    return $this->renderer->render($this->form_template, [
      'error' => $error,
      'item' => $item,
    ]);
  }

  /**
   * {@inheritDoc}
   */
  function edit(ServerRequestInterface $request, array $args): ResponseInterface
  {
    if (!$this->checkAccess($request)) {
      throw new AccessDeniedException('You are not allowed to access this page');
    }

    $data = $request->getParsedBody();
    $command = new $this->edit_command_type($data);
    $handler = $this->command_dispatcher->getHandler($command);

    try {
      $handler->handle($command);
    } catch (\Exception $exception) {
      // Store form data in a session.
      $key = $this->edit_url . ':item';
      $_SESSION[$key] = $data;

      // Store error message in a session.
      $key = $this->edit_url . ':error';
      $_SESSION[$key] = $exception->getMessage();

      $id = (int)($args['id'] ?? 0);
      return new Response(302, [
        'Location' => str_replace(':id', $id, $this->edit_url),
      ]);
    }

    $query = $request->getQueryParams();
    $back = $query['back'] ?? $this->list_url;

    return new Response(302, [
      'Location' => $back,
    ]);
  }

  /**
   * Deletes item.
   *
   * @throws AccessDeniedException
   */
  function delete(ServerRequestInterface $request, array $args): ResponseInterface
  {
    if (!$this->checkAccess($request)) {
      throw new AccessDeniedException('You are not allowed to access this page');
    }

    $id = (int)$args['id'];
    $command = new $this->delete_command_type($id);
    $handler = $this->command_dispatcher->getHandler($command);
    $handler->handle($command);

    $query = $request->getQueryParams();
    $back = $query['back'] ?? $this->list_url;

    return new Response(302, [
      'Location' => $back,
    ]);
  }
}
