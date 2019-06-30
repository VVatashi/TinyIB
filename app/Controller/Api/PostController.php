<?php

namespace Imageboard\Controller\Api;

use GuzzleHttp\Psr7\Response;
use Imageboard\Controller\ControllerInterface;
use Imageboard\Service\{PostService, UserService};
use Psr\Http\Message\{ServerRequestInterface, ResponseInterface};

class PostController implements ControllerInterface
{
  /** @var PostService */
  protected $post_service;

  /** @var UserService */
  protected $user_service;

  function __construct(
    PostService $post_service,
    UserService $user_service
  ) {
    $this->post_service = $post_service;
    $this->user_service = $user_service;
  }

  /**
   * Creates thread.
   *
   * @param ServerRequestInterface $request
   *
   * @return ResponseInterface
   */
  function createThread(ServerRequestInterface $request): ResponseInterface {
    if ($request->getHeaderLine('Content-Type') === 'application/json') {
      $data = json_decode((string)$request->getBody(), true);
    } else {
      $data = $request->getParsedBody();
    }

    $name      = $data['name'] ?? '';
    $subject   = $data['subject'] ?? '';
    $message   = $data['message'] ?? '';
    $ip        = $_SERVER['REMOTE_ADDR'] ?? '';
    $user_id   = $this->user_service->getCurrentUserId();
    $parent_id = 0;

    try {
      $post = $this->post_service->create(
        $name,
        '',
        $subject,
        $message,
        '',
        $ip,
        $user_id,
        $parent_id
      );
    } catch (\Exception $exception) {
      return new Response(400, [], json_encode([
        'error' => $exception->getMessage(),
      ]));
    }

    return new Response(201, [], json_encode([
      'id' => $post->id,
    ]));
  }

  /**
   * Creates post.
   *
   * @param ServerRequestInterface $request
   * @param array $args Path arguments.
   *
   * @return ResponseInterface
   */
  function createPost(ServerRequestInterface $request, array $args): ResponseInterface {
    if ($request->getHeaderLine('Content-Type') === 'application/json') {
      $data = json_decode((string)$request->getBody(), true);
    } else {
      $data = $request->getParsedBody();
    }

    $name      = $data['name'] ?? '';
    $subject   = $data['subject'] ?? '';
    $message   = $data['message'] ?? '';
    $ip        = $_SERVER['REMOTE_ADDR'] ?? '';
    $user_id   = $this->user_service->getCurrentUserId();
    $parent_id = (int)($args['id'] ?? 0);

    try {
      $post = $this->post_service->create(
        $name,
        '',
        $subject,
        $message,
        '',
        $ip,
        $user_id,
        $parent_id
      );
    } catch (\Exception $exception) {
      return new Response(400, [], json_encode([
        'error' => $exception->getMessage(),
      ]));
    }

    return new Response(201, [], json_encode([
      'id' => $post->id,
    ]));
  }

  /**
   * Returns threads.
   *
   * @return array Array of thread view models.
   */
  function threads(): array {
    return $this->post_service->getThreads();
  }

  /**
   * Returns thread posts.
   *
   * @param ServerRequestInterface $request
   * @param array $args Path arguments.
   *
   * @return array Array of post view models.
   */
  function threadPosts(ServerRequestInterface $request, array $args): array {
    $thread_id = (int)$args['id'];
    $params = $request->getQueryParams();
    $after_id = (int)($params['after'] ?? 0);
    return $this->post_service->getThreadPosts($thread_id, $after_id);
  }

  /**
   * Returns post.
   *
   * @param array $args Path arguments.
   *
   * @return array Post view models.
   */
  function post(array $args): array {
    $id = (int)$args['id'];
    return $this->post_service->getById($id);
  }
}
