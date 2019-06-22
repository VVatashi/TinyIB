<?php

namespace Imageboard\Controller\Admin;

use GuzzleHttp\Psr7\Response;
use Imageboard\Exception\AccessDeniedException;
use Imageboard\Command\CommandDispatcher;
use Imageboard\Query\QueryDispatcher;
use Imageboard\Repositories\BanRepository;
use Imageboard\Service\{ConfigService, RendererService, BanService};
use Psr\Http\Message\ResponseInterface;
use Psr\Http\Message\ServerRequestInterface;

class BanController extends AdminController
{
  /** @var BanRepository */
  protected $ban_repository;

  /** @var BanService */
  protected $ban_service;

  /**
   * BanController constructor.
   *
   * @param ConfigService     $config
   * @param CommandDispatcher $command_dispatcher
   * @param QueryDispatcher   $query_dispatcher
   * @param RendererService   $renderer
   * @param BanRepository     $ban_repository
   * @param BanService        $ban_service
   */
  function __construct(
    ConfigService     $config,
    CommandDispatcher $command_dispatcher,
    QueryDispatcher   $query_dispatcher,
    RendererService   $renderer,
    BanRepository     $ban_repository,
    BanService        $ban_service
  ) {
    parent::__construct(
      $config,
      $command_dispatcher,
      $query_dispatcher,
      $renderer
    );

    $this->ban_repository = $ban_repository;
    $this->ban_service = $ban_service;
    $this->base_path = $this->config->get('BASE_PATH', '');
  }

  protected function getCreateUrl(): string {
    return "{$this->base_path}/admin/bans/create";
  }

  protected function getListUrl(): string {
    return "{$this->base_path}/admin/bans";
  }

  protected function getFormTemplate(): string {
    return 'admin/bans/form.twig';
  }

  protected function getListTemplate(): string {
    return 'admin/bans/list.twig';
  }

  protected function getAjaxListTemplate(): string {
    return 'admin/bans/_list.twig';
  }

  protected function getNewItem(): array {
    return [
      'ip'          => '',
      'expires_in'  => 60 * 60,
      'reason'      => '',
    ];
  }

  protected function getItemsPerPage(): int {
    return 100;
  }

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

    $total_count = $this->ban_repository->getCount($date_from, $date_to);
    $items = $this->ban_repository->getAll($date_from, $date_to, $page * $per_page, $per_page);

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

    $total_count = $this->ban_repository->getCount($date_from, $date_to);
    $items = $this->ban_repository->getAll($date_from, $date_to, $page * $per_page, $per_page);
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
  function createForm(ServerRequestInterface $request): string
  {
    if (!$this->checkAccess($request)) {
      throw new AccessDeniedException('You are not allowed to access this page');
    }

    // Restore form data from a session.
    $key = $this->getCreateUrl() . ':item';
    $item = $_SESSION[$key] ?? $this->getNewItem();
    unset($_SESSION[$key]);

    // Show error message from a session.
    $key = $this->getCreateUrl() . ':error';
    $error = $_SESSION[$key] ?? null;
    unset($_SESSION[$key]);

    $renderer = $this->getRenderer();
    return $renderer->render($this->getFormTemplate(), [
      'error' => $error,
      'item'  => $item,
    ]);
  }

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
  function create(ServerRequestInterface $request): ResponseInterface
  {
    if (!$this->checkAccess($request)) {
      throw new AccessDeniedException('You are not allowed to access this page');
    }

    $data = $request->getParsedBody();
    $ip = $data['ip'] ?? '';
    $expires_in = $data['expires_in'] ?? 0;
    $reason = $data['reason'] ?? '';

    try {
      $this->ban_service->create($ip, $expires_in, $reason);
    } catch (Exception $exception) {
      // Store form data in a session.
      $key = $this->getCreateUrl() . ':item';
      $_SESSION[$key] = $data;

      // Store error message in a session.
      $key = $this->getCreateUrl() . ':error';
      $_SESSION[$key] = $exception->getMessage();

      return new Response(302, [
        'Location' => $this->getCreateUrl(),
      ]);
    }

    $query = $request->getQueryParams();
    $back = $query['back'] ?? $this->getListUrl();

    return new Response(302, [
      'Location' => $back,
    ]);
  }

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
  function delete(ServerRequestInterface $request, array $args): ResponseInterface
  {
    if (!$this->checkAccess($request)) {
      throw new AccessDeniedException('You are not allowed to access this page');
    }

    $id = (int)$args['id'];
    $this->ban_service->delete($id);

    $query = $request->getQueryParams();
    $back  = $query['back'] ?? $this->getListUrl();

    return new Response(302, [
      'Location' => $back,
    ]);
  }
}
