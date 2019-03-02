<?php

namespace Imageboard\Commands;

use Imageboard\Exception\NotFoundException;
use Imageboard\Model\Post;

class DeletePostHandler implements CommandHandlerInterface
{
    /**
     * @param DeletePost $command
     */
    public function handle($command)
    {
        /** @var Post */
        $post = Post::find($command->id);
        if (!isset($post)) {
            throw new NotFoundException();
        }

        Post::deletePost($post);
    }
}
