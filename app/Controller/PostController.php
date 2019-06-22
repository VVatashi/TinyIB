<?php

namespace Imageboard\Controller;

use GuzzleHttp\Psr7\Response;
use Imageboard\Cache\CacheInterface;
use Imageboard\Exception\{NotFoundException, ValidationException};
use Imageboard\Model\Post;
use Imageboard\Service\{
  CaptchaService,
  ConfigService,
  PostService,
  RendererService
};
use Psr\Http\Message\{ServerRequestInterface, ResponseInterface};

class PostController implements ControllerInterface
{
  /** @var CacheInterface */
  protected $cache;

  /** @var CaptchaService */
  protected $captcha;

  /** @var PostService */
  protected $post;

  /** @var RendererService */
  protected $renderer;

  /** @var ConfigService  */
  protected $config;

  /**
   * PostController constructor.
   *
   * @param \Imageboard\Cache\CacheInterface    $cache
   * @param \Imageboard\Service\CaptchaService  $captcha
   * @param \Imageboard\Service\PostService     $post
   * @param \Imageboard\Service\RendererService $renderer
   * @param \Imageboard\Service\ConfigService   $config
   */
  function __construct(
    CacheInterface $cache,
    CaptchaService $captcha,
    PostService $post,
    RendererService $renderer,
    ConfigService $config
  ) {
    $this->cache = $cache;
    $this->captcha = $captcha;
    $this->post = $post;
    $this->renderer = $renderer;
    $this->config = $config;

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
   * @throws \Imageboard\Exception\ValidationException
   */
  function create(ServerRequestInterface $request): ResponseInterface
  {
    if ($this->config->get("DBMIGRATE")) {
      $message = "Posting is currently disabled.\nPlease try again in a few moments.";
      return new Response(503, [], $message);
    }

    $data = $request->getParsedBody();
    $captcha = isset($data['captcha']) ? $data['captcha'] : '';
    if (!$this->checkCAPTCHA($captcha)) {
      throw new ValidationException('Incorrect CAPTCHA');
    }

    $name     = isset($data['name'])      ? $data['name']     : '';
    $email    = isset($data['email'])     ? $data['email']    : '';
    $subject  = isset($data['subject'])   ? $data['subject']  : '';
    $message  = isset($data['message'])   ? $data['message']  : '';
    $password = isset($data['password'])  ? $data['password'] : '';
    $ip = $_SERVER['REMOTE_ADDR'];
    $user_id = $request->getAttribute('user')->id;
    $parent = isset($data['parent']) ? (int)$data['parent'] : 0;
    $rawpost = isset($data['rawpost']);

    $post = $this->post->create(
      $name,
      $email,
      $subject,
      $message,
      $password,
      $ip,
      $user_id,
      $parent,
      $rawpost
    );

    $redirect_url = '/' . $this->config->get("BOARD") . '/';
    if ($post->isModerated()) {
      if ($this->config->get("ALWAYSNOKO") || strtolower($post->email) === 'noko') {
        $id = $post->id;
        $thread_id = $post->isThread() ? $id : $post->parent_id;
        $redirect_url = '/' . $this->config->get("BOARD") . "/res/$thread_id#$id";
      }
    }

    return new Response(302, ['Location' => $redirect_url]);
  }

  /**
   * {@inheritDoc}
   */
  function ajaxCreatePost(ServerRequestInterface $request): ResponseInterface
  {
    $data = $request->getParsedBody();

    $name    = isset($data['name'])    ? $data['name']    : '';
    $email   = isset($data['email'])   ? $data['email']   : '';
    $subject = isset($data['subject']) ? $data['subject'] : '';
    $message = isset($data['message']) ? $data['message'] : '';

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
      'created_at' => $post->getCreatedTimestamp(),
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
    $this->post->delete($id, $password);
    return 'Post deleted.';
  }

  /**
   * @param int $page
   *
   * @return string
   */
  protected function renderBoardPage(int $page): string
  {
    $threads = Post::getThreadsByPage($page);
    $threads_count = Post::getThreadCount();
    $pages = ceil($threads_count / (int)$this->config->get("THREADSPERPAGE")) - 1;
    $posts = [];

    foreach ($threads as $thread) {
      $replies = Post::getPostsByThreadID($thread->id);
      $preview_replies = $this->config->get('PREVIEWREPLIES');
      $omitted = max(0, $replies->count() - $preview_replies - 1);
      $replies = $replies->take(-$preview_replies);

      if ($replies->count() === 0 || $replies->first()->id !== $thread->id) {
        $replies->prepend($thread);
      }

      $replies->first()->omitted = $omitted;
      $posts = collect([$posts, $replies])->collapse();
    }

    return $this->renderer->render('board.twig', [
      'posts' => $posts,
      'pages' => max($pages, 0),
      'this_page' => $page,
      'parent' => 0,
      'res' => INDEXPAGE,
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

      $thread = Post::find($id);
      if (!isset($thread)) {
        throw new NotFoundException("Thread #$id not found.");
      }

      $posts = Post::getPostsByThreadID($id);
      $data = $this->renderer->render('thread.twig', [
        'posts' => $posts,
        'parent' => $id,
        'res' => RESPAGE,
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
    $post = Post::find($id);
    if (!isset($post)) {
      throw new NotFoundException("Post #$id not found.");
    }

    return $this->renderer->render('ajax/post.twig', [
      'post'  => $post,
      'res'   => RESPAGE,
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
    $thread = Post::find($id);
    if (!isset($thread)) {
      throw new NotFoundException("Thread #$id not found.");
    }

    $query = $request->getQueryParams();
    $after = isset($query['after']) ? (int)$query['after'] : 0;

    $posts = Post::where(function ($query) use ($id) {
      $query->where('id', $id);
      $query->orWhere('parent_id', $id);
    })->where('id', '>', $after)->orderBy('id', 'asc')->get();

    return $this->renderer->render('ajax/thread.twig', [
      'posts' => $posts,
      'parent' => $id,
      'res' => RESPAGE,
    ]);
  }
}
