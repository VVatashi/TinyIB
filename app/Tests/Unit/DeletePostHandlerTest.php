<?php

namespace Imageboard\Tests\Unit;

use Imageboard\Commands\{DeletePost, DeletePostHandler};
use Imageboard\Exception\NotFoundException;
use Imageboard\Model\Post;
use PHPUnit\Framework\TestCase;

final class DeletePostHandlerTest extends TestCase
{
    /** @var DeletePostHandler */
    protected $handler;

    public function setUp() : void
    {
        Post::truncate();
        $this->handler = new DeletePostHandler();
    }

    public function test_handle_notFound_shouldThrowException() : void
    {
        $this->expectException(NotFoundException::class);

        $command = new DeletePost(1);
        $this->handler->handle($command);
    }

    public function test_handle_found_shouldDeletePost() : void
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

        $command = new DeletePost($id);
        $this->handler->handle($command);

        $post = Post::find($id);
        $this->assertNull($post);
    }
}
