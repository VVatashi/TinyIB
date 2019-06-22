<?php

namespace Imageboard\Tests\Functional\Command;

use Imageboard\Command\{CreatePost, CreatePostHandler};
use Imageboard\Service\PostService;
use Imageboard\Cache\NoCache;
use Imageboard\Service\{
  ConfigService,
  CryptographyService,
  FileService,
  ThumbnailService,
  RendererService
};
use Imageboard\Repositories\BanRepository;
use Imageboard\Service\Booru\{
  SafebooruService,
  E621Service,
  SankakuService
};
use Imageboard\Tests\Functional\TestWithUsers;

final class CreatePostHandlerTest extends TestWithUsers
{
  /** @var CreatePostHandler */
  protected $handler;

  /**
   * @throws \Imageboard\Exception\ValidationException
   */
  function setUp(): void
  {
    parent::setUp();

    global $database;

    $connection = $database->getConnection();
    $builder = $connection->createQueryBuilder();
    $builder->delete('users')->execute();
    $builder->delete('posts')->execute();

    $cache = new NoCache();
    $config = new ConfigService();
    $cryptography = new CryptographyService();

    $ban_repository = new BanRepository($database);

    $file = new FileService();
    $thumbnail = new ThumbnailService($file, $config);

    $safebooru = new SafebooruService();
    $e621 = new E621Service();
    $sankaku = new SankakuService();

    $renderer = new RendererService($config);

    $post = new PostService(
      $cache,
      $cryptography,
      $ban_repository,
      $file,
      $thumbnail,
      $safebooru,
      $e621,
      $sankaku,
      $config,
      $renderer
    );

    $this->user_service->create('test@example.com', 'test');
    $this->handler = new CreatePostHandler($post, $this->user_service);
  }

  function test_handle_shouldCreate(): void
  {
    $data = [
      'parent_id' => 0,
      'subject' => 'Subject',
      'name' => 'Name',
      'message' => 'Message',
    ];
    $command = new CreatePost($data);

    $item = $this->handler->handle($command);
    $this->assertNotNull($item);
  }
}
