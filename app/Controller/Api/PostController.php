<?php

namespace Imageboard\Controller\Api;

use GuzzleHttp\Psr7\Response;
use Imageboard\Command\{CommandDispatcher, CreatePost};
use Imageboard\Query\{QueryDispatcher, BoardThreads, ThreadPosts};
use Psr\Http\Message\{ServerRequestInterface, ResponseInterface};

class PostController implements PostControllerInterface
{
  /** @var CommandDispatcher */
  protected $command_dispatcher;

  /** @var QueryDispatcher */
  protected $query_dispatcher;

  function __construct(
    CommandDispatcher $command_dispatcher,
    QueryDispatcher $query_dispatcher
  ) {
    $this->command_dispatcher = $command_dispatcher;
    $this->query_dispatcher = $query_dispatcher;
  }

  /**
   * {@inheritDoc}
   */
  function createThread(ServerRequestInterface $request) : ResponseInterface
  {
    if ($request->getHeaderLine('Content-Type') === 'application/json') {
      $data = json_decode((string)$request->getBody(), true);
    } else {
      $data = $request->getParsedBody();
    }

    $command = new CreatePost($data);
    $handler = $this->command_dispatcher->getHandler($command);

    try {
      $post = $handler->handle($command);
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
   * {@inheritDoc}
   */
  function createPost(ServerRequestInterface $request, array $args) : ResponseInterface
  {
    if ($request->getHeaderLine('Content-Type') === 'application/json') {
      $data = json_decode((string)$request->getBody(), true);
    } else {
      $data = $request->getParsedBody();
    }

    $data['parent_id'] = (int)$args['id'];
    $command = new CreatePost($data);
    $handler = $this->command_dispatcher->getHandler($command);

    try {
      $post = $handler->handle($command);
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
   * {@inheritDoc}
   */
  function threads() : array
  {
    $query = new BoardThreads();
    $handler = $this->query_dispatcher->getHandler($query);

    return $handler->handle($query);
  }

  /**
   * {@inheritDoc}
   */
  function threadPosts(ServerRequestInterface $request, array $args) : array
  {
    $id = (int)$args['id'];
    $params = $request->getQueryParams();
    $after = (int)($params['after'] ?? 0);
    $query = new ThreadPosts($id, $after);
    $handler = $this->query_dispatcher->getHandler($query);

    return $handler->handle($query);
  }
}
