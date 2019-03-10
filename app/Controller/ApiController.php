<?php

namespace Imageboard\Controller;

use GuzzleHttp\Psr7\Response;
use Imageboard\Command\{CommandDispatcher, CreatePost, CreateToken};
use Imageboard\Exception\{AccessDeniedException, NotFoundException};
use Imageboard\Cache\CacheInterface;
use Imageboard\Query\{QueryDispatcher, Board, Thread};
use Psr\Http\Message\{ServerRequestInterface, ResponseInterface};

class ApiController implements ApiControllerInterface
{
  const CACHE_TTL = 4 * 60 * 60;

  /** @var CommandDispatcher */
  protected $command_dispatcher;

  /** @var QueryDispatcher */
  protected $query_dispatcher;

  /** @var CacheInterface */
  protected $cache;

  function __construct(
    CommandDispatcher $command_dispatcher,
    QueryDispatcher $query_dispatcher,
    CacheInterface $cache
  ) {
    $this->command_dispatcher = $command_dispatcher;
    $this->query_dispatcher = $query_dispatcher;
    $this->cache = $cache;
  }

  /**
   * Checks if URL is allowed.
   */
  protected function isAllowed(string $url): bool
  {
    $allowed = [
      '/^https?:\/\/(?:www\.)?coub\.com\//',
    ];

    foreach ($allowed as $pattern) {
      if (preg_match($pattern, $url)) {
        return true;
      }
    }

    return false;
  }

  /**
   * {@inheritDoc}
   */
  function embed(ServerRequestInterface $request): ResponseInterface
  {
    $params = $request->getQueryParams();
    if (!isset($params['url'])) {
      throw new NotFoundException('URL is not specified');
    }

    $url = $params['url'];
    if (!$this->isAllowed($url)) {
      throw new AccessDeniedException('URL is not allowed');
    }

    $headers = [];

    $data_key = "embed:$url";
    $content_type_key = "embed_ct:$url";

    $data = $this->cache->get($data_key);
    $content_type = $this->cache->get($content_type_key);

    if (isset($data) && isset($content_type)) {
      $headers['X-Cached'] = 'true';
    } else {
      $headers['X-Cached'] = 'false';

      try {
        $data = file_get_contents($url);
      } catch (\Exception $exception) {
        $reason = preg_replace('/HTTP\/[0-9.]+\s/', '', $http_response_header[0]);
        throw new NotFoundException("Can't fetch data from the specified URL: $reason");
      }

      $this->cache->set($data_key, $data, static::CACHE_TTL);

      $content_type = 'application/json';
      // Copy content type from the response.
      foreach ($http_response_header as $line) {
        $header = 'Content-Type: ';
        if (strncmp($line, $header, strlen($header)) === 0) {
          $content_type = substr($line, strlen($header));
          break;
        }
      }
      $this->cache->set($content_type_key, $content_type, static::CACHE_TTL);
    }

    $headers['Content-Type'] = $content_type;
    return new Response(200, $headers, $data);
  }

  /**
   * {@inheritDoc}
   */
  function createToken(ServerRequestInterface $request) : ResponseInterface
  {
    $data = $request->getParsedBody();
    $command = new CreateToken($data);
    $handler = $this->command_dispatcher->getHandler($command);

    try {
      $token = $handler->handle($command);
    } catch (\Exception $exception) {
      return new Response(400, [], json_encode([
        'error' => $exception->getMessage(),
      ]));
    }

    return new Response(201, [], json_encode([
      'token' => $token->token,
      'user_id' => $token->user_id,
    ]));
  }

  /**
   * {@inheritDoc}
   */
  function threads(ServerRequestInterface $request) : array
  {
    $query = new Board();
    $handler = $this->query_dispatcher->getHandler($query);

    return $handler->handle($query);
  }

  /**
   * {@inheritDoc}
   */
  function threadPosts(ServerRequestInterface $request, array $args) : array
  {
    $id = (int)$args['id'];
    $query = new Thread($id);
    $handler = $this->query_dispatcher->getHandler($query);

    return $handler->handle($query);
  }

  /**
   * {@inheritDoc}
   */
  function createPost(ServerRequestInterface $request) : ResponseInterface
  {
    $data = $request->getParsedBody();
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
}
