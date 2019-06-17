<?php

namespace Imageboard\Tests\Functional\Command;

use Imageboard\Command\{CreatePost, CreatePostHandler};
use Imageboard\Model\{Post, User};
use PHPUnit\Framework\TestCase;
use Imageboard\Service\PostService;
use Imageboard\Cache\NoCache;
use Imageboard\Service\{
  ConfigService,
  CryptographyService,
  FileService,
  SafebooruService,
  E621Service,
  ThumbnailService,
  RendererService,
  SankakuService
};

final class CreatePostHandlerTest extends TestCase
{
  /** @var CreatePostHandler */
  protected $handler;

  /**
   * @throws \Imageboard\Exception\ValidationException
   */
  function setUp(): void
  {
    Post::truncate();
    User::truncate();

    $cache = new NoCache();
    $cryptography = new CryptographyService();
    $file = new FileService();
    $config = new ConfigService();
    $thumbnail = new ThumbnailService($file, $config);
    $safebooru = new SafebooruService();
    $e621 = new E621Service();
    $sankaku = new SankakuService();
    $renderer = new RendererService($config);

    $post = new PostService(
      $cache,
      $cryptography,
      $file,
      $thumbnail,
      $safebooru,
      $e621,
      $sankaku,
      $config,
      $renderer
    );

    $user = User::createUser('test@example.com', 'test');
    $this->handler = new CreatePostHandler($post, $user);
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
