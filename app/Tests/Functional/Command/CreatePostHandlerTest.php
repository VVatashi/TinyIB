<?php

namespace Imageboard\Tests\Functional\Command;

use Imageboard\Command\{CreatePost, CreatePostHandler};
use Imageboard\Model\{Post, User};
use PHPUnit\Framework\TestCase;
use Imageboard\Service\PostService;
use Imageboard\Cache\NoCache;
use Imageboard\Service\CryptographyService;

final class CreatePostHandlerTest extends TestCase
{
  /** @var CreatePostHandler */
  protected $handler;

  function setUp(): void
  {
    Post::truncate();
    User::truncate();

    $cache = new NoCache();
    $cryptography = new CryptographyService();
    $post_service = new PostService($cache, $cryptography);
    $user = User::createUser('test@example.com', 'test');
    $this->handler = new CreatePostHandler($post_service, $user);
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
