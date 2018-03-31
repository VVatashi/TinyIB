<?php

namespace TinyIB\Repository;

interface IPostRepository extends IRepository
{
    /**
     * @return integer
     */
    public function uniquePosts();

    /**
     * @param integer $id
     *
     * @return array
     */
    public function postByID($id);

    /**
     * @param integer $id
     *
     * @return boolean
     */
    public function threadExistsByID($id);

    /**
     * @param array $post
     *
     * @return integer
     */
    public function insertPost($post);

    /**
     * @param integer id
     */
    public function approvePostByID($id);

    /**
     * @param integer id
     * @param boolean sticky
     */
    public function stickyThreadByID($id, $setsticky);

    /**
     * @param integer id
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
     * @param integer $id
     *
     * @return integer
     */
    public function numRepliesToThreadByID($id);

    /**
     * @param integer $id
     * @param boolean $moderated_only
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
     * @param boolean $moderated
     *
     * @return array
     */
    public function latestPosts($moderated = true);

    /**
     * @param integer $id
     */
    public function deletePostByID($id);

    public function trimThreads();

    /**
     * @return array
     */
    public function lastPostByIP();
}
