<?php

namespace TinyIB\Service;

use TinyIB\Model\Post;

interface PostServiceInterface
{
    /**
     * Processes poster name.
     *
     * @param string $name
     *   Poster name.
     *
     * @return array
     *   Array keys:
     *     name - processed poster name;
     *     tripcode - processed poster tripcode.
     */
    function processName(string $name) : array;

    /**
     * Creates a post.
     *
     * @param string $name
     * @param string $email
     * @param string $subject
     * @param string $message
     * @param string $password
     * @param int $parent
     * @param bool $rawpost
     *
     * @return Post
     *
     * @throws \Exception
     * @throws ValidationException
     */
    function create(
        string $name,
        string $email,
        string $subject,
        string $message,
        string $password,
        string $ip,
        int $user_id = 0,
        int $parent = 0
    ) : Post;

    /**
     * Deletes post by ID.
     *
     * @param int $id
     * @param string $password
     *
     * @throws NotFoundException
     * @throws AccessDeniedException
     */
    function delete(int $id, string $password);
}
