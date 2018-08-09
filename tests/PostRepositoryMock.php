<?php

namespace TinyIB\Tests;

use TinyIB\Model\PostInterface;
use TinyIB\Repository\PostRepositoryInterface;

class PostRepositoryMock implements PostRepositoryInterface
{
    /**
     * {@inheritDoc}
     */
    public function getAll($conditions = [], $order = null, $columns = '*')
    {
        return [];
    }

    /**
     * {@inheritDoc}
     */
    public function getRange($conditions, $order, $take, $skip = 0, $columns = '*')
    {
        return [];
    }

    /**
     * {@inheritDoc}
     */
    public function getOne($conditions, $order = null, $columns = '*')
    {
        return [];
    }

    /**
     * {@inheritDoc}
     */
    public function getCount($conditions, $columns = '*')
    {
        return 0;
    }

    /**
     * {@inheritDoc}
     */
    public function insert($data)
    {
        return 0;
    }

    /**
     * {@inheritDoc}
     */
    public function update($conditions, $data)
    {
        return 0;
    }

    /**
     * {@inheritDoc}
     */
    public function delete($conditions)
    {
        return 0;
    }

    /**
     * {@inheritDoc}
     */
    public function inTransaction()
    {
        return false;
    }

    /**
     * {@inheritDoc}
     */
    public function beginTransaction()
    {
        return true;
    }

    /**
     * {@inheritDoc}
     */
    public function commit()
    {
        return true;
    }

    /**
     * {@inheritDoc}
     */
    public function getPostByID(int $id)
    {
        return null;
    }

    /**
     * {@inheritDoc}
     */
    public function isThreadExistsByID(int $id) : bool
    {
        return false;
    }

    /**
     * {@inheritDoc}
     */
    public function insertPost(PostInterface $post) : int
    {
        return 0;
    }

    /**
     * {@inheritDoc}
     */
    public function approvePostByID(int $id)
    {
    }

    /**
     * {@inheritDoc}
     */
    public function stickyThreadByID(int $id, bool $sticky)
    {
    }

    /**
     * {@inheritDoc}
     */
    public function bumpThreadByID(int $id)
    {
    }

    /**
     * {@inheritDoc}
     */
    public function getThreadCount() : int
    {
        return 0;
    }

    /**
     * {@inheritDoc}
     */
    public function getAllThreads() : array
    {
        return [];
    }

    /**
     * {@inheritDoc}
     */
    public function getThreadsByPage(int $page) : array
    {
        return [];
    }

    /**
     * {@inheritDoc}
     */
    public function getReplyCountByThreadID(int $id) : int
    {
        return 0;
    }

    /**
     * {@inheritDoc}
     */
    public function getPostsByThreadID(int $id, bool $moderated_only = true) : array
    {
        return [];
    }

    /**
     * {@inheritDoc}
     */
    public function getPostsByHex(string $hash) : array
    {
        return [];
    }

    /**
     * {@inheritDoc}
     */
    public function getLatestPosts(bool $moderated = true) : array
    {
        return [];
    }

    /**
     * {@inheritDoc}
     */
    public function deletePostByID(int $id)
    {
        return 0;
    }

    /**
     * {@inheritDoc}
     */
    public function trimThreads()
    {
    }

    /**
     * {@inheritDoc}
     */
    public function getLastPostByIP(string $ip)
    {
        return null;
    }

    /**
     * {@inheritDoc}
     */
    public function getLastInsertId() : string
    {
        return '0';
    }
}
