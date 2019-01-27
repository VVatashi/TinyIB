<?php

namespace TinyIB\Tests\Unit;

use PHPUnit\Framework\TestCase;
use TinyIB\Model\Post;
use TinyIB\NotFoundException;
use TinyIB\Queries\{ListPosts, ListPostsHandler};

final class ListPostsHandlerTest extends TestCase
{
    /** @var ListPostsHandler $handler */
    protected $handler;

    public function setUp() : void
    {
        global $container;

        Post::truncate();
        $pdo = $container->get(\PDO::class);
        $this->handler = new ListPostsHandler($pdo);
    }

    public function test_count_shouldReturnPostCount() : void
    {
        $count = 3;
        for ($i = 1; $i <= $count; ++$i) {
            Post::create([
                'id' => $i,
                'ip' => '',
                'name' => '',
                'tripcode' => '',
                'email' => '',
                'subject' => '',
                'message' => '',
                'password' => '',
            ]);
        }

        $command = new ListPosts(0, 50);
        $result = $this->handler->count($command);
        $this->assertIsInt($result);
        $this->assertEquals($count, $result);
    }

    public function test_handle_shouldReturnPosts() : void
    {
        $count = 4;
        for ($i = 1; $i <= $count; ++$i) {
            Post::create([
                'id' => $i,
                'ip' => '',
                'name' => '',
                'tripcode' => '',
                'email' => '',
                'subject' => '',
                'message' => '',
                'password' => '',
            ]);
        }

        $command = new ListPosts(0, 50);
        $posts = $this->handler->handle($command);
        $this->assertIsArray($posts);
        $this->assertCount($count, $posts);
    }
}
