<?php

namespace TinyIB\Commands;

use TinyIB\Model\Post;
use TinyIB\NotFoundException;

class DeletePostHandler implements CommandHandlerInterface
{
    /**
     * @param DeletePost $command
     */
    public function handle($command)
    {
        /** @var Post $post */
        $post = Post::find($command->id);
        if (!isset($post)) {
            throw new NotFoundException();
        }

        Post::deletePost($post);
    }
}
