<?php

namespace TinyIB\Repository;

interface IPostRepository extends IRepository
{
    /**
     * @return int
     */
    public function uniquePosts();

    /**
     * @param int $id
     *
     * @return array
     */
    public function postByID($id);

    /**
     * @param int $id
     *
     * @return bool
     */
    public function threadExistsByID($id);

    /**
     * @param array $post
     *
     * @return int
     */
    public function insertPost($post);

    /**
     * @param int id
     */
    public function approvePostByID($id);

    /**
     * @param int id
     * @param bool sticky
     */
    public function stickyThreadByID($id, $setsticky);

    /**
     * @param int id
     */
    public function bumpThreadByID($id);

    /**
     * @return integer
     */
    public function countThreads();

    /**
     * @return array
     */
    public function allThreads();

    /**
     * @param int $page
     *
     * @return array
     */
    public function getThreadsByPage($page);

    /**
     * @param int $id
     *
     * @return int
     */
    public function numRepliesToThreadByID($id);

    /**
     * @param int $id
     * @param bool $moderated_only
     *
     * @return array
     */
    public function postsInThreadByID($id, $moderated_only = true);

    /**
     * @param string $hex
     *
     * @return array
     */
    public function postsByHex($hex);

    /**
     * @param bool $moderated
     *
     * @return array
     */
    public function latestPosts($moderated = true);

    /**
     * @param int $id
     */
    public function deletePostByID($id);

    public function trimThreads();

    /**
     * @return array
     */
    public function lastPostByIP();
}
