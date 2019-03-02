<?php

namespace Imageboard\Tests\Unit;

use Imageboard\Model\Post;
use Imageboard\Exception\NotFoundException;
use Imageboard\Query\{ShowPost, ShowPostHandler};
use PHPUnit\Framework\TestCase;

final class ShowPostHandlerTest extends TestCase
{
    /** @var ShowPostHandler */
    protected $handler;

    public function setUp() : void
    {
        global $container;

        Post::truncate();
        $pdo = $container->get(\PDO::class);
        $this->handler = new ShowPostHandler($pdo);
    }

    public function test_handle_notFound_shouldThrowException() : void
    {
        $this->expectException(NotFoundException::class);

        $command = new ShowPost(1);
        $this->handler->handle($command);
    }

    public function test_handle_found_shouldReturnPost() : void
    {
        $id = 1;
        Post::create([
            'id' => $id,
            'ip' => '',
            'name' => '',
            'tripcode' => '',
            'email' => '',
            'subject' => '',
            'message' => '',
            'password' => '',
        ]);

        $command = new ShowPost($id);
        $post_data = $this->handler->handle($command);
        $this->assertIsArray($post_data);
    }
}
