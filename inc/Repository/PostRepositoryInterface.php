<?php

namespace TinyIB\Repository;

use TinyIB\Model\PostInterface;

interface PostRepositoryInterface extends RepositoryInterface
{
    /**
     * Loads a post from the repository by ID.
     *
     * @param int $id
     *   Post ID.
     *
     * @return PostInterface|null
     *   Post instance.
     */
    public function getPostByID(int $id);

    /**
     * Checks if a thread with given ID exists.
     *
     * @param int $id
     *   Post ID.
     *
     * @return bool
     */
    public function isThreadExistsByID(int $id) : bool;

    /**
     * Saves a post to the repository.
     *
     * @param PostInterface $post
     *   Post instance.
     *
     * @return int
     *   Post ID.
     */
    public function insertPost(PostInterface $post) : int;

    /**
     * Approves post by ID.
     *
     * @param int $id
     *   Post ID.
     */
    public function approvePostByID(int $id);

    /**
     * Sticky/unsticky post by ID.
     *
     * @param int $id
     *   Post ID.
     * @param bool $sticky
     */
    public function stickyThreadByID(int $id, bool $sticky);

    /**
     * Bumps thread by ID.
     *
     * @param int $id
     *   Thread ID.
     */
    public function bumpThreadByID(int $id);

    /**
     * Returns thread count.
     *
     * @return int
     */
    public function getThreadCount() : int;

    /**
     * Returns all threads.
     *
     * @return PostInterface[]
     */
    public function getAllThreads() : array;

    /**
     * Returns threads by a board page.
     *
     * @param int $page
     *
     * @return PostInterface[]
     */
    public function getThreadsByPage(int $page) : array;

    /**
     * Returns the thread reply count by thread ID.
     *
     * @param int $id
     *   Thread ID.
     *
     * @return int
     */
    public function getReplyCountByThreadID(int $id) : int;

    /**
     * Returns posts by thread ID.
     *
     * @param int $id
     *   Thread ID.
     * @param bool $moderated_only
     *
     * @return PostInterface[]
     */
    public function getPostsByThreadID(int $id, bool $moderated_only = true) : array;

    /**
     * Returns posts by the hash of the attached file.
     *
     * @param string $hash
     *
     * @return PostInterface[]
     */
    public function getPostsByHex(string $hash) : array;

    /**
     * Returns latest posts.
     *
     * @param bool $moderated
     *
     * @return PostInterface[]
     */
    public function getLatestPosts(bool $moderated = true) : array;

    /**
     * Deletes a post by ID.
     *
     * @param int $id
     *   Post ID.
     */
    public function deletePostByID(int $id);

    /**
     * Removes old threads.
     */
    public function trimThreads();

    /**
     * Returns the last post by the poster IP.
     *
     * @return PostInterface
     */
    public function getLastPostByIP(string $ip) : PostInterface;
}
