<?php

namespace Imageboard\Controller\Mobile;

use GuzzleHttp\Psr7\Response;
use Imageboard\Cache\CacheInterface;
use Imageboard\Controller\ControllerInterface;
use Imageboard\Exception\NotFoundException;
use Imageboard\Model\Post;
use Imageboard\Service\{ConfigServiceInterface, PostServiceInterface, RendererServiceInterface};
use Psr\Http\Message\{ServerRequestInterface, ResponseInterface};

class MobilePostController implements ControllerInterface
{
  /** @var string */
  protected $base_path;

  /** @var CacheInterface */
  protected $cache;

  /** @var PostServiceInterface */
  protected $post;

  /** @var RendererServiceInterface */
  protected $renderer;

  /** @var ConfigServiceInterface */
  protected $config;

  /**
   * MobilePostController constructor.
   * Constructs new Mobile post controller.
   *
   * @param \Imageboard\Cache\CacheInterface             $cache
   * @param \Imageboard\Service\PostServiceInterface     $post
   * @param \Imageboard\Service\RendererServiceInterface $renderer
   * @param \Imageboard\Service\ConfigServiceInterface   $config
   */
  function __construct(
    CacheInterface $cache,
    PostServiceInterface $post,
    RendererServiceInterface $renderer,
    ConfigServiceInterface $config
  ) {
    $this->cache = $cache;
    $this->post = $post;
    $this->renderer = $renderer;
    $this->config = $config;

    $this->base_path = $this->config->get('BASE_PATH', '');
  }

  protected function fixLinks(string $message, int $thread_id): string
  {
    $link_pattern = '#href="/' . $this->config->get("BOARD") . '/res/(\d+)\#reply_(\d+)"#';
    return preg_replace_callback($link_pattern, function ($matches) use ($thread_id) {
      $target_thread_id = (int)$matches[1];
      $target_post_id = (int)$matches[2];
      if ($target_thread_id !== $thread_id) {
        // If link to another thread.
        return 'class="post__reference-link"'
          . ' href="/' . $this->config->get("BOARD") . "/mobile/thread/$target_thread_id#post_$target_post_id\""
          . " data-target-post-id=\"$target_post_id\"";
      }

      // If link to the same thread.
      return 'class="post__reference-link"'
        . " href=\"#post_$target_post_id\" data-target-post-id=\"$target_post_id\"";
    }, $message);
  }

  /**
   * Returns an index page.
   *
   * @param ServerRequestInterface $request
   *
   * @return ResponseInterface
   */
  function index(ServerRequestInterface $request): ResponseInterface
  {
    $query = $request->getQueryParams();
    $page = (int)($query['page'] ?? 0);

    $cache_key = $this->config->get("BOARD") . ':mobile:page:' . $page;
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
        'title'   => '/' . $this->config->get("BOARD"),
        'board'   => $this->config->get("BOARDDESC"),
        'threads' => $threads,
        'limit'   => $this->config->get("THREADSPERPAGE"),
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
   * Returns a thread page.
   *
   * @param ServerRequestInterface $request
   * @param array $args Path arguments.
   *
   * @return ResponseInterface
   *
   * @throws \Imageboard\Exception\NotFoundException
   */
  function thread(ServerRequestInterface $request, array $args): ResponseInterface
  {
    $thread_id = (int)$args['id'];
    $query = $request->getQueryParams();
    $page = isset($query['page']) ? (int)$query['page'] : 0;

    $cache_key = $this->config->get("BOARD") . ':mobile:thread:' . $thread_id . ':page:' . $page;
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
        'title'   => '/' . $this->config->get("BOARD") . " &ndash; $thread->subject",
        'board'   => $this->config->get("BOARDDESC"),
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
   * Creates a post.
   *
   * @param ServerRequestInterface $request
   *
   * @return ResponseInterface
   */
  function createPost(ServerRequestInterface $request): ResponseInterface
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

    $post = $this->post->create(
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

    $destination = "{$this->base_path}/mobile/thread/$thread_id#footer";

    return new Response(303, [
      'Location'      => $destination,
      'Content-Type'  => 'application/json',
    ]);
  }

  /**
   * Returns a thread HTML.
   *
   * @param ServerRequestInterface $request
   * @param array $args Path arguments.
   *
   * @return string
   *
   * @throws \Imageboard\Exception\NotFoundException
   */
  function ajaxThread(ServerRequestInterface $request, array $args): string
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
   * Creates a post.
   *
   * @param ServerRequestInterface $request
   *
   * @return ResponseInterface
   *
   * @throws \Exception
   */
  function ajaxCreatePost(ServerRequestInterface $request): ResponseInterface
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

    $post = $this->post->create(
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

    $destination = "{$this->base_path}/mobile/thread/$thread_id#footer";

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
