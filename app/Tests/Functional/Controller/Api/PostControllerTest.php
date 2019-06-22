<?php

namespace Imageboard\Tests\Functional\Controller\Api;

use GuzzleHttp\Psr7\ServerRequest;
use Imageboard\Command\CommandDispatcher;
use Imageboard\Controller\Api\PostController;
use Imageboard\Exception\NotFoundException;
use Imageboard\Model\Post;
use Imageboard\Query\QueryDispatcher;
use Imageboard\Service\ConfigService;
use PHPUnit\Framework\TestCase;

final class PostControllerTest extends TestCase
{
  /** @var PostController */
  protected $controller;

  function setUp(): void
  {
    $this->markTestSkipped();
    return;

    global $container, $database;

    $connection = $database->getConnection();
    $builder = $connection->createQueryBuilder();
    $config = new ConfigService();
    $posts = $config->get('DBPOSTS', 'posts');
    $builder->delete($posts)->execute();

    $command_dispatcher = new CommandDispatcher($container);
    $query_dispatcher = new QueryDispatcher($container);

    $this->controller = new PostController(
      $command_dispatcher,
      $query_dispatcher
    );
  }

  protected function createPost(int $parent_id = 0): Post {
    return Post::create([
      'parent_id' => $parent_id,
      'ip' => '',
      'name' => '',
      'tripcode' => '',
      'email' => '',
      'subject' => '',
      'message' => '',
      'password' => '',
    ]);
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
