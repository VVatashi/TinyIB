<?php

namespace Imageboard\Tests\Functional\Controller\Api;

use GuzzleHttp\Psr7\ServerRequest;
use Imageboard\Cache\NoCache;
use Imageboard\Controller\Api\PostController;
use Imageboard\Exception\NotFoundException;
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
  SankakuService,
  GelbooruService,
  WebmbotService
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
    $gelbooru = new GelbooruService();
    $webmbot = new WebmbotService();

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
      $gelbooru,
      $webmbot,
      $renderer
    );

    $this->controller = new PostController(
      $post_service,
      $this->user_service
    );
  }

  protected function createPost(int $parent_id = 0): Post {
    $now = time();
    $post = new Post([
      'created_at'   => $now,
      'updated_at'   => $now,
      'bumped_at'    => $now,
      'parent_id'    => $parent_id,
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

  function test_createThread_shouldCreateItem(): void
  {
    $data = [
      'subject' => 'Subject',
      'name' => 'Name',
      'message' => 'Message',
    ];
    $request = (new ServerRequest('POST', '/api/threads'))
      ->withParsedBody($data);

    $response = $this->controller->createThread($request);

    $status = $response->getStatusCode();
    $this->assertEquals(201, $status);
  }

  function test_createPost_shouldCreateItem(): void
  {
    $thread = $this->createPost();
    $id = $thread->id;

    $data = [
      'parent_id' => $id,
      'subject' => 'Subject',
      'name' => 'Name',
      'message' => 'Message',
    ];
    $request = (new ServerRequest('POST', "/api/threads/$id/posts"))
      ->withParsedBody($data);

    $response = $this->controller->createPost($request, ['id' => $id]);

    $status = $response->getStatusCode();
    $this->assertEquals(201, $status);
  }

  function test_threads_shouldReturnItems(): void
  {
    $count = 5;
    for ($i = 0; $i < $count; ++$i) {
      $this->createPost();
    }

    $items = $this->controller->threads();

    $this->assertIsArray($items);
    $this->assertCount($count, $items);
  }

  function test_threadPosts_shouldReturnItems(): void
  {
    $thread = $this->createPost();
    $id = $thread->id;

    $count = 5;
    for ($i = 0; $i < $count; ++$i) {
      $this->createPost($id);
    }

    $request = (new ServerRequest('GET', "/api/threads/$id/posts"));
    $items = $this->controller->threadPosts($request, ['id' => $id]);

    $this->assertIsArray($items);
    $this->assertCount($count + 1, $items);
  }

  function test_post_shouldReturnItem(): void
  {
    $post = $this->createPost();
    $id = $post->id;

    $item = $this->controller->post(['id' => $id]);

    $this->assertIsArray($item);
  }

  function test_post_notFound_shouldThrow(): void
  {
    $this->expectException(NotFoundException::class);

    $item = $this->controller->post(['id' => 1]);
  }
}
