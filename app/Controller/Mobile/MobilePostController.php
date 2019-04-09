<?php

namespace Imageboard\Controller\Mobile;

use GuzzleHttp\Psr7\Response;
use Imageboard\Cache\CacheInterface;
use Imageboard\Exception\NotFoundException;
use Imageboard\Model\Post;
use Imageboard\Service\{ConfigServiceInterface, PostServiceInterface, RendererServiceInterface};
use Psr\Http\Message\{ServerRequestInterface, ResponseInterface};

class MobilePostController implements MobilePostControllerInterface
{
  const BASE_URL_CONFIG_KEY = "BASE_URL";
  const BOARD_CONFIG_KEY    = "BOARD";

  /** @var string */
  protected $board_full_url;

  /** @var CacheInterface */
  protected $cache;

  /** @var PostServiceInterface */
  protected $post_service;

  /** @var RendererServiceInterface */
  protected $renderer;

  /** @var ConfigServiceInterface */
  protected $config_service;

  /**
   * MobilePostController constructor.
   * Constructs new Mobile post controller.
   *
   * @param \Imageboard\Cache\CacheInterface             $cache
   * @param \Imageboard\Service\PostServiceInterface     $post_service
   * @param \Imageboard\Service\RendererServiceInterface $renderer
   * @param \Imageboard\Service\ConfigServiceInterface   $config_service
   */
  public function __construct(
    CacheInterface $cache,
    PostServiceInterface $post_service,
    RendererServiceInterface $renderer,
    ConfigServiceInterface $config_service
  ) {
    $this->cache = $cache;
    $this->post_service = $post_service;
    $this->renderer = $renderer;
    $this->config_service = $config_service;

    /** @var string $base_url */
    $base_url = $this->config_service->get(self::BASE_URL_CONFIG_KEY);
    /** @var string $board */
    $board    = $this->config_service->get(self::BOARD_CONFIG_KEY);

    $this->board_full_url = "$base_url/$board";
  }

  protected function fixLinks(string $message, int $thread_id): string {
    $link_pattern = '#href="/' . $this->config_service->get("BOARD") . '/res/(\d+)\#reply_(\d+)"#';
    return preg_replace_callback($link_pattern, function ($matches) use ($thread_id) {
      $target_thread_id = (int)$matches[1];
      $target_post_id = (int)$matches[2];
      if ($target_thread_id !== $thread_id) {
        // If link to another thread.
        return 'class="post__reference-link"'
          . ' href="/' . $this->config_service->get("BOARD") . "/mobile/thread/$target_thread_id#post_$target_post_id\""
          . " data-target-post-id=\"$target_post_id\"";
      }

      // If link to the same thread.
      return 'class="post__reference-link"'
        . " href=\"#post_$target_post_id\" data-target-post-id=\"$target_post_id\"";
    }, $message);
  }

  /**
   * {@inheritDoc}
   */
  public function index(ServerRequestInterface $request) : ResponseInterface
  {
    $query = $request->getQueryParams();
    $page = (int)($query['page'] ?? 0);

    $cache_key = $this->config_service->get("BOARD") . ':mobile:page:' . $page;
    $headers = [];
    $content = $this->cache->get($cache_key);
    if (!isset($content)) {
      $threads = Post::getThreadsByPage($page);
      $threads = $threads->map(function ($thread) {
        $message = $thread->getMessageFormatted();
        $thread->message = $message;

        $thread->replyCount = Post::getReplyCountByThreadID($thread->id);
        return $thread;
      });

      $content = $this->renderer->render('mobile/board.twig', [
        'title'   => '/' . $this->config_service->get("BOARD"),
        'board'   => $this->config_service->get("BOARDDESC"),
        'threads' => $threads,
        'limit'   => $this->config_service->get("THREADSPERPAGE"),
        'page'    => $page,
      ]);

      $this->cache->set($cache_key, $content);
      $headers['X-Cached'] = 'false';
    } else {
      $headers['X-Cached'] = 'true';
    }

    return new Response(200, $headers, $content);
  }

  /**
   * {@inheritDoc}
   *
   * @throws \Imageboard\Exception\NotFoundException
   */
  public function thread(ServerRequestInterface $request, array $args) : ResponseInterface
  {
    $thread_id = (int)$args['id'];
    $query = $request->getQueryParams();
    $page = isset($query['page']) ? (int)$query['page'] : 0;

    $cache_key = $this->config_service->get("BOARD") . ':mobile:thread:' . $thread_id . ':page:' . $page;
    $headers = [];
    $content = $this->cache->get($cache_key);
    if (!isset($content)) {
      $limit = 50;
      $thread = Post::find($thread_id);
      if (!isset($thread)) {
        throw new NotFoundException("Thread #$thread_id not found.");
      }

      $posts = Post::getPostsByThreadID($thread_id, true, $limit, $page * $limit);
      $posts = $posts->map(function ($post) use ($thread_id) {
        $message = $post->getMessageFormatted();
        $message = $this->fixLinks($message, $thread_id);
        $post->message = $message;
        return $post;
      });

      $content = $this->renderer->render('mobile/thread.twig', [
        'title'   => '/' . $this->config_service->get("BOARD") . " &ndash; $thread->subject",
        'board'   => $this->config_service->get("BOARDDESC"),
        'thread'  => $thread,
        'posts'   => $posts,
        'limit'   => $limit,
        'page'    => $page,
      ]);

      $this->cache->set($cache_key, $content);
      $headers['X-Cached'] = 'false';
    } else {
      $headers['X-Cached'] = 'true';
    }

    return new Response(200, $headers, $content);
  }

  /**
   * {@inheritDoc}
   */
  public function createPost(ServerRequestInterface $request) : ResponseInterface
  {
    $data     = $request->getParsedBody();
    $name     = isset($data['name'])    ? $data['name']     : '';
    $email    = isset($data['email'])   ? $data['email']    : '';
    $subject  = isset($data['subject']) ? $data['subject']  : '';
    $message  = isset($data['message']) ? $data['message']  : '';

    $password = '';
    $ip = $_SERVER['REMOTE_ADDR'];
    $user_id = $request->getAttribute('user')->id;
    $parent = isset($data['parent']) ? (int)$data['parent'] : 0;

    $post = $this->post_service->create(
      $name,
      $email,
      $subject,
      $message,
      $password,
      $ip,
      $user_id,
      $parent
    );

    $thread_id = $post->isThread() ? $post->id : $post->parent_id;

    $destination = "$this->board_full_url/mobile/thread/$thread_id#footer";

    return new Response(303, [
      'Location'      => $destination,
      'Content-Type'  => 'application/json',
    ]);
  }

  /**
   * {@inheritDoc}
   *
   * @throws \Imageboard\Exception\NotFoundException
   */
  public function ajaxThread(ServerRequestInterface $request, array $args) : string
  {
    $thread_id = (int)$args['id'];
    $query = $request->getQueryParams();
    $after = isset($query['after']) ? (int)$query['after'] : 0;

    $limit = 50;
    $thread = Post::find($thread_id);
    if (!isset($thread)) {
      throw new NotFoundException("Thread #$thread_id not found.");
    }

    $posts = Post::getPostsByThreadID($thread_id, true, $limit, 0);

    $posts = $posts->filter(function ($post) use ($after) {
      return $post->id > $after;
    })->map(function ($post) use ($thread_id) {
      $message = $post->getMessageFormatted();
      $message = $this->fixLinks($message, $thread_id);
      $post->message = $message;
      return $post;
    });

    return $this->renderer->render('mobile/ajax/thread.twig', [
      'posts' => $posts,
    ]);
  }

  /**
   * {@inheritDoc}
   *
   * @throws \Exception
   */
  public function ajaxCreatePost(ServerRequestInterface $request) : ResponseInterface
  {
    $data     = $request->getParsedBody();
    $name     = isset($data['name'])    ? $data['name']     : '';
    $email    = isset($data['email'])   ? $data['email']    : '';
    $subject  = isset($data['subject']) ? $data['subject']  : '';
    $message  = isset($data['message']) ? $data['message']  : '';

    $password = '';
    $ip = $_SERVER['REMOTE_ADDR'];
    $user_id = $request->getAttribute('user')->id;
    $parent = isset($data['parent']) ? (int)$data['parent'] : 0;

    $post = $this->post_service->create(
      $name,
      $email,
      $subject,
      $message,
      $password,
      $ip,
      $user_id,
      $parent
    );

    $thread_id = $post->isThread() ? $post->id : $post->parent_id;

    $destination = "$this->board_full_url/mobile/thread/$thread_id#footer";

    return new Response(201, [
      'Content-type' => 'application/json',
      'Location' => $destination,
    ], json_encode([
      'id'         => $post->id,
      'parent_id'  => $post->parent_id,
      'name'       => $post->name,
      'tripcode'   => "!$post->tripcode",
      'email'      => $post->email,
      'subject'    => $post->subject,
      'file'       => $post->file,
      'created_at' => $post->getCreatedTimestamp(),
    ]));
  }
}
