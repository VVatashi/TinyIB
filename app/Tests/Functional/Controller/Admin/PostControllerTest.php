<?php

namespace Imageboard\Tests\Functional\Controller\Admin;

use GuzzleHttp\Psr7\ServerRequest;
use Imageboard\Cache\NoCache;
use Imageboard\Controller\Admin\PostController;
use Imageboard\Exception\{
  AccessDeniedException,
  NotFoundException
};
use Imageboard\Model\Post;
use Imageboard\Repositories\{
  BanRepository,
  PostRepository
};
use Imageboard\Service\{
  ConfigService,
  PostService,
  RendererService,
  CryptographyService,
  FileService,
  ThumbnailService
};
use Imageboard\Service\Booru\{
  E621Service,
  SafebooruService,
  SankakuService
};
use Imageboard\Tests\Functional\TestWithUsers;

final class PostControllerTest extends TestWithUsers
{
  /** @var PostRepository */
  protected $post_repository;

  /** @var PostController */
  protected $controller;

  function setUp(): void
  {
    parent::setUp();

    global $database;

    $connection = $database->getConnection();
    $builder = $connection->createQueryBuilder();
    $builder->delete('users')->execute();

    $config = new ConfigService();
    $posts = $config->get('DBPOSTS', 'posts');
    $builder->delete($posts)->execute();

    $cache = new NoCache();

    $ban_repository = new BanRepository($config, $database);
    $this->post_repository = new PostRepository($config, $database);

    $cryptography = new CryptographyService();
    $file = new FileService();
    $thumbnail = new ThumbnailService($file, $config);

    $safebooru = new SafebooruService();
    $e621 = new E621Service();
    $sankaku = new SankakuService();

    $renderer = new RendererService($config);

    $post_service = new PostService(
      $config,
      $cache,
      $ban_repository,
      $this->post_repository,
      $this->modlog_service,
      $this->user_service,
      $cryptography,
      $file,
      $thumbnail,
      $safebooru,
      $e621,
      $sankaku,
      $renderer
    );

    $renderer = new RendererService($config);
    $this->controller = new PostController(
      $config,
      $this->post_repository,
      $post_service,
      $this->user_service,
      $renderer
    );
  }

  protected function createPost(): Post {
    $now = time();
    $post = new Post([
      'created_at'   => $now,
      'updated_at'   => $now,
      'bumped_at'    => $now,
      'parent_id'    => 0,
      'user_id'      => 0,
      'ip'           => '',
      'name'         => '',
      'tripcode'     => '',
      'subject'      => '',
      'message'      => '',
      'file_size'    => 0,
      'image_width'  => 0,
      'image_height' => 0,
      'thumb_width'  => 0,
      'thumb_height' => 0,
    ], false);
    return $this->post_repository->add($post);
  }

  function test_list_asAnonymous_shouldThrow(): void
  {
    $user = $this->createAnonymous();
    $request = (new ServerRequest('GET', '/admin/posts'))
      ->withAttribute('user', $user);

    $this->expectException(AccessDeniedException::class);

    $this->controller->list($request);
  }

  function test_list_asUser_shouldThrow(): void
  {
    $user = $this->createUser();
    $_SESSION['user'] = $user->id;
    $request = (new ServerRequest('GET', '/admin/posts'))
      ->withAttribute('user', $user);

    $this->expectException(AccessDeniedException::class);

    $this->controller->list($request);
  }

  function test_list_asAdmin_shouldReturnContent(): void
  {
    $user = $this->createAdmin();
    $_SESSION['user'] = $user->id;
    $request = (new ServerRequest('GET', '/admin/posts'))
      ->withAttribute('user', $user);

    $content = $this->controller->list($request);

    $this->assertIsString($content);
    $this->assertNotEmpty($content);
  }

  function test_show_asAnonymous_shouldThrow(): void
  {
    $item = $this->createPost();

    $this->expectException(AccessDeniedException::class);

    $this->controller->show(['id' => $item->id]);
  }

  function test_show_asUser_shouldThrow(): void
  {
    $item = $this->createPost();
    $user = $this->createUser();
    $_SESSION['user'] = $user->id;

    $this->expectException(AccessDeniedException::class);

    $this->controller->show(['id' => $item->id]);
  }

  function test_show_asAdmin_shouldReturnContent(): void
  {
    $item = $this->createPost();
    $user = $this->createAdmin();
    $_SESSION['user'] = $user->id;

    $content = $this->controller->show(['id' => $item->id]);

    $this->assertIsString($content);
    $this->assertNotEmpty($content);
  }

  function test_show_whenNotFound_shouldThrow(): void
  {
    $item_id = 1;
    $user = $this->createAdmin();
    $_SESSION['user'] = $user->id;

    $this->expectException(NotFoundException::class);

    $this->controller->show(['id' => $item_id]);
  }

  function test_delete_asAnonymous_shouldThrow(): void
  {
    $item = $this->createPost();
    $user = $this->createAnonymous();
    $request = (new ServerRequest('POST', "/admin/posts/{$item->id}/delete"))
      ->withAttribute('user', $user);

    $this->expectException(AccessDeniedException::class);

    $this->controller->delete($request, ['id' => $item->id]);
  }

  function test_delete_asUser_shouldThrow(): void
  {
    $item = $this->createPost();
    $user = $this->createUser();
    $_SESSION['user'] = $user->id;
    $request = (new ServerRequest('POST', "/admin/posts/{$item->id}/delete"))
      ->withAttribute('user', $user);

    $this->expectException(AccessDeniedException::class);

    $this->controller->delete($request, ['id' => $item->id]);
  }

  function test_delete_asAdmin_shouldDeleteAndReturnRedirect(): void
  {
    $item = $this->createPost();
    $user = $this->createAdmin();
    $_SESSION['user'] = $user->id;
    $request = (new ServerRequest('POST', "/admin/posts/{$item->id}/delete"))
      ->withAttribute('user', $user);

    $response = $this->controller->delete($request, ['id' => $item->id]);

    $status = $response->getStatusCode();
    $this->assertEquals(302, $status);
  }

  function test_delete_whenNotFound_shouldThrow(): void
  {
    $item_id = 1;
    $user = $this->createAdmin();
    $_SESSION['user'] = $user->id;
    $request = (new ServerRequest('POST', "/admin/posts/$item_id/delete"))
      ->withAttribute('user', $user);

    $this->expectException(NotFoundException::class);

    $this->controller->delete($request, ['id' => $item_id]);
  }
}
