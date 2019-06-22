<?php

namespace Imageboard\Controller\Admin;

use GuzzleHttp\Psr7\Response;
use Imageboard\Exception\AccessDeniedException;
use Imageboard\Command\CommandDispatcher;
use Imageboard\Query\QueryDispatcher;
use Imageboard\Repositories\{Repository, BanRepository};
use Imageboard\Service\{ConfigService, RendererService, BanService};
use Psr\Http\Message\{ResponseInterface, ServerRequestInterface};

class BanController extends AdminController
{
  use CrudListTrait;

  /** @var BanRepository */
  protected $repository;

  /** @var BanService */
  protected $service;

  /**
   * BanController constructor.
   *
   * @param ConfigService     $config
   * @param CommandDispatcher $command_dispatcher
   * @param QueryDispatcher   $query_dispatcher
   * @param RendererService   $renderer
   * @param BanRepository     $repository
   * @param BanService        $service
   */
  function __construct(
    ConfigService     $config,
    CommandDispatcher $command_dispatcher,
    QueryDispatcher   $query_dispatcher,
    RendererService   $renderer,
    BanRepository     $repository,
    BanService        $service
  ) {
    parent::__construct(
      $config,
      $command_dispatcher,
      $query_dispatcher,
      $renderer
    );

    $this->repository = $repository;
    $this->service = $service;
  }

  protected function getCreateUrl(): string {
    return "{$this->base_path}/admin/bans/create";
  }

  protected function getListUrl(): string {
    return "{$this->base_path}/admin/bans";
  }

  protected function getRepository(): Repository {
    return $this->repository;
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
      $this->service->create($ip, $expires_in, $reason);
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
    $this->service->delete($id);

    $query = $request->getQueryParams();
    $back  = $query['back'] ?? $this->getListUrl();

    return new Response(302, [
      'Location' => $back,
    ]);
  }
}
