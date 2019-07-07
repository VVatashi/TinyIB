<?php

namespace Imageboard\Controllers;

use GuzzleHttp\Psr7\Response;
use Imageboard\Exceptions\{NotFoundException, ValidationException};
use Imageboard\Repositories\PostRepository;
use Imageboard\Services\{
  CaptchaService,
  ConfigService,
  PostService,
  RendererService
};
use Imageboard\Services\Cache\CacheInterface;
use Psr\Http\Message\{ServerRequestInterface, ResponseInterface};

class PostController implements ControllerInterface
{
  /** @var CacheInterface */
  protected $cache;

  /** @var CaptchaService */
  protected $captcha;

  /** @var PostRepository */
  protected $repository;

  /** @var PostService */
  protected $service;

  /** @var RendererService */
  protected $renderer;

  /** @var ConfigService  */
  protected $config;

  /**
   * PostController constructor.
   *
   * @param ConfigService   $config
   * @param CacheInterface  $cache
   * @param CaptchaService  $captcha
   * @param PostRepository  $repository
   * @param PostService     $service
   * @param RendererService $renderer
   */
  function __construct(
    ConfigService   $config,
    CacheInterface  $cache,
    CaptchaService  $captcha,
    PostRepository  $repository,
    PostService     $service,
    RendererService $renderer
  ) {
    $this->config     = $config;
    $this->cache      = $cache;
    $this->captcha    = $captcha;
    $this->repository = $repository;
    $this->service    = $service;
    $this->renderer   = $renderer;

    $this->base_path = $this->config->get('BASE_PATH', '');
  }

  /**
   * Checks captcha.
   *
   * @param string $captcha
   *
   * @return bool
   */
  protected function checkCAPTCHA(string $captcha): bool
  {
    $configCaptcha = $this->config->get("CAPTCHA", true);

    if ($configCaptcha === true) {
      return true;
    }

    switch ($this->config->get("CAPTCHA")) {
      case 'simple':
        return $this->captcha->checkCaptcha($captcha);

      default:
        return true;
    }
  }

  /**
   * Create post.
   *
   * @param ServerRequestInterface $request
   *
   * @return ResponseInterface Response.
   *
   * @throws \Imageboard\Exceptions\ValidationException
   */
  function create(ServerRequestInterface $request): ResponseInterface
  {
    $data = $request->getParsedBody();
    $captcha = isset($data['captcha']) ? $data['captcha'] : '';
    if (!$this->checkCAPTCHA($captcha)) {
      throw new ValidationException('Incorrect CAPTCHA');
    }

    $name     = $data['name'] ?? '';
    $email    = $data['email'] ?? '';
    $subject  = $data['subject'] ?? '';
    $message  = $data['message'] ?? '';
    $password = '';
    $ip       = $_SERVER['REMOTE_ADDR'] ?? '';
    $user_id  = $request->getAttribute('user')->id;
    $parent   = (int)($data['parent'] ?? 0);

    $post = $this->service->create(
      $name,
      $email,
      $subject,
      $message,
      $password,
      $ip,
      $user_id,
      $parent
    );

    $id = $post->id;
    $thread_id = $post->isThread() ? $id : $post->parent_id;
    $redirect_url = '/' . $this->config->get("BOARD") . "/res/$thread_id#$id";

    return new Response(302, ['Location' => $redirect_url]);
  }

  /**
   * {@inheritDoc}
   */
  function ajaxCreatePost(ServerRequestInterface $request): ResponseInterface
  {
    $data = $request->getParsedBody();

    $name     = $data['name'] ?? '';
    $email    = $data['email'] ?? '';
    $subject  = $data['subject'] ?? '';
    $message  = $data['message'] ?? '';
    $password = '';
    $ip       = $_SERVER['REMOTE_ADDR'] ?? '';
    $user_id  = $request->getAttribute('user')->id;
    $parent   = (int)($data['parent'] ?? 0);

    $post = $this->service->create(
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
    $base_path = $this->config->get('BASE_PATH');
    $destination = "$base_path/res/$thread_id#reply_{$post->id}";

    $name = !empty($post->name) || !empty($post->tripcode)
      ? $post->name : 'Anonymous';

    return new Response(201, [
      'Content-type' => 'application/json',
      'Location' => $destination,
    ], json_encode([
      'id'         => $post->id,
      'parent_id'  => $post->parent_id,
      'name'       => $name,
      'tripcode'   => $post->tripcode,
      'email'      => $post->email,
      'subject'    => $post->subject,
      'file'       => $post->file,
      'created_at' => $post->created_at,
    ]));
  }

  /**
   * Deletes specified post.
   *
   * @param ServerRequestInterface
   *
   * @return string|ResponseInterface Response.
   */
  function delete(ServerRequestInterface $request)
  {
    $data = $request->getParsedBody();
    $id = isset($data['delete']) ? $data['delete'] : 0;
    $password = isset($data['password']) ? $data['password'] : '';
    $this->service->delete($id, $password);
    return 'Post deleted.';
  }

  /**
   * @param int $page
   *
   * @return string
   */
  protected function renderBoardPage(int $page): string
  {
    $threads = $this->service->getThreadsByPage($page);
    $threads_count = $this->repository->getThreadCount();
    $pages = ceil($threads_count / (int)$this->config->get("THREADSPERPAGE")) - 1;
    $posts = [];

    foreach ($threads as $thread) {
      $preview_replies = $this->config->get('PREVIEWREPLIES');
      $replies = $this->service->getLastThreadPosts($thread['id'], $preview_replies);
      $omitted = max(0, $this->repository->getThreadPostCount($thread['id']) - $preview_replies);

      if (count($replies) === 0 || $replies[0]['id'] !== $thread['id']) {
        array_unshift($replies, $thread);
      }

      $replies[0]['omitted'] = $omitted;
      $posts = array_merge($posts, $replies);
    }

    return $this->renderer->render('board.twig', [
      'posts'     => $posts,
      'pages'     => max($pages, 0),
      'this_page' => $page,
      'parent'    => 0,
      'res'       => INDEXPAGE,
    ]);
  }

  /**
   * Returns page for a board.
   *
   * @param ServerRequestInterface $request
   * @param array $args Path arguments.
   *
   * @return ResponseInterface Response.
   */
  function board(ServerRequestInterface $request, array $args): ResponseInterface
  {
    $page = (int)($args['page'] ?? 0);
    /** @var User $user */
    $user = $request->getAttribute('user');
    $key = $this->config->get("BOARD") . ':page:' . $page . ':user:' . $user->id;
    $headers = [];
    $data = $this->cache->get($key);
    if (!$user->isAnonymous() && isset($data)) {
      $headers['X-Cached'] = 'true';
    } else {
      $headers['X-Cached'] = 'false';
      $data = $this->renderBoardPage($page);
      $this->cache->set($key, $data, 4 * 60 * 60);
    }

    return new Response(200, $headers, $data);
  }

  /**
   * Returns page for a thread.
   *
   * @param ServerRequestInterface $request
   * @param array $args Path arguments.
   *
   * @return ResponseInterface Response.
   */
  function thread(ServerRequestInterface $request, array $args): ResponseInterface
  {
    $id = (int)$args['id'];
    /** @var User $user */
    $user = $request->getAttribute('user');
    $key = $this->config->get("BOARD") . ':thread:' . $id . ':user:' . $user->id;
    $headers = [];
    $data = $this->cache->get($key);
    if (!$user->isAnonymous() && isset($data)) {
      $headers['X-Cached'] = 'true';
    } else {
      $headers['X-Cached'] = 'false';

      $thread = $this->repository->getById($id, true);
      if (!isset($thread)) {
        throw new NotFoundException("Thread #$id not found.");
      }

      $posts = $this->service->getThreadPosts($id);
      $data = $this->renderer->render('thread.twig', [
        'posts'  => $posts,
        'parent' => $id,
        'res'    => RESPAGE,
      ]);
      $this->cache->set($key, $data, 4 * 60 * 60);
    }

    return new Response(200, $headers, $data);
  }

  /**
   * Returns page partial HTML for a post.
   *
   * @param array $args Path arguments.
   *
   * @return string Response HTML.
   *
   * @throws NotFoundException
   */
  function ajaxPost(array $args): string
  {
    $id = (int)$args['id'];
    $post = $this->service->getById($id);

    return $this->renderer->render('ajax/post.twig', [
      'post' => $post,
      'res'  => RESPAGE,
    ]);
  }

  /**
   * Returns page partial HTML for a thread.
   *
   * @param ServerRequestInterface $request
   * @param array $args Path arguments.
   *
   * @return string Response HTML.
   *
   * @throws NotFoundException
   */
  function ajaxThread(ServerRequestInterface $request, array $args): string
  {
    $id = (int)$args['id'];
    $thread = $this->repository->getById($id, true);

    $query = $request->getQueryParams();
    $after = isset($query['after']) ? (int)$query['after'] : 0;

    $posts = $this->service->getThreadPosts($id, $after);

    return $this->renderer->render('ajax/thread.twig', [
      'posts'  => $posts,
      'parent' => $id,
      'res'    => RESPAGE,
    ]);
  }
}
