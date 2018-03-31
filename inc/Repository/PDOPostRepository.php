<?php

namespace TinyIB\Repository;

class PDOPostRepository extends PDORepository implements IPostRepository
{
    public function __construct()
    {
        parent::__construct(TINYIB_DBPOSTS);

        // Create the posts table if it does not exist
        $table_name = static::$pdo->quote(TINYIB_DBPOSTS);

        if (TINYIB_DBDRIVER === 'pgsql') {
            $query_str = 'SELECT count(*) FROM pg_catalog.pg_tables'
                . " WHERE tablename LIKE $table_name";
            $query = static::$pdo->query($query_str);
        } else {
            static::$pdo->query("SHOW TABLES LIKE $table_name");
            $query = static::$pdo->query('SELECT FOUND_ROWS()');
        }

        $table_exists = $query->fetchColumn() != 0;

        if ($table_exists === false) {
            static::$pdo->exec($posts_sql);
        }
    }

    /**
     * {@inheritDoc}
     */
    public function uniquePosts()
    {
        return $this->getCount([], 'distinct(ip)');
    }

    /**
     * {@inheritDoc}
     */
    public function postByID($id)
    {
        return $this->getOne(['id' => $id]);
    }

    /**
     * {@inheritDoc}
     */
    public function threadExistsByID($id)
    {
        return $this->getCount([
            'id' => $id,
            'parent' => 0,
            'moderated' => 1,
        ]) > 0;
    }

    /**
     * {@inheritDoc}
     */
    public function insertPost($post)
    {
        $now = time();
        $this->insert([
            'parent' => $post['parent'],
            'timestamp' => $now,
            'bumped' => $now,
            'ip' => $_SERVER['REMOTE_ADDR'],
            'name' => $post['name'],
            'tripcode' => $post['tripcode'],
            'email' => $post['email'],
            'nameblock' => $post['nameblock'],
            'subject' => $post['subject'],
            'message' => $post['message'],
            'password' => $post['password'],
            'file' => $post['file'],
            'file_hex' => $post['file_hex'],
            'file_original' => $post['file_original'],
            'file_size' => $post['file_size'],
            'file_size_formatted' => $post['file_size_formatted'],
            'image_width' => $post['image_width'],
            'image_height' => $post['image_height'],
            'thumb' => $post['thumb'],
            'thumb_width' => $post['thumb_width'],
            'thumb_height' => $post['thumb_height'],
            'moderated' => $post['moderated'],
        ]);
        return static::$pdo->lastInsertId();
    }

    /**
     * {@inheritDoc}
     */
    public function approvePostByID($id)
    {
        $this->update(['id' => $id], ['moderated' => 1]);
    }

    /**
     * {@inheritDoc}
     */
    public function stickyThreadByID($id, $setsticky)
    {
        $this->update(['id' => $id], ['stickied' => (int)$setsticky]);
    }

    /**
     * {@inheritDoc}
     */
    public function bumpThreadByID($id)
    {
        $now = time();
        $this->update(['id' => $id], ['bumped' => $now]);
    }

    /**
     * {@inheritDoc}
     */
    public function countThreads()
    {
        return $this->getCount(['parent' => 0, 'moderated' => 1]);
    }

    /**
     * {@inheritDoc}
     */
    public function allThreads()
    {
        return $this->getAll(
            ['parent' => 0, 'moderated' => 1],
            'stickied DESC, bumped DESC'
        );
    }

    /**
     * {@inheritDoc}
     */
    public function numRepliesToThreadByID($id)
    {
        return $this->getCount(['parent' => $id, 'moderated' => 1]);
    }

    /**
     * {@inheritDoc}
     */
    public function postsInThreadByID($id, $moderated_only = true)
    {
        $conditions = [
            [
                '#op' => 'OR',
                'id' => $id,
                'parent' => $id,
            ],
        ];

        if ($moderated_only === true) {
            $conditions['moderated'] = 1;
        }

        return $this->getAll($conditions, 'id ASC');
    }

    /**
     * {@inheritDoc}
     */
    public function postsByHex($hex)
    {
        return $this->getOne(['file_hex' => $hex, 'moderated' => 1]);
    }

    /**
     * {@inheritDoc}
     */
    public function latestPosts($moderated = true)
    {
        return $this->getRange(
            ['moderated' => (int)$moderated],
            'timestamp DESC',
            10
        );
    }

    /**
     * {@inheritDoc}
     */
    public function deletePostByID($id)
    {
        $posts = $this->postsInThreadByID($id, false);

        foreach ($posts as $post) {
            if ($post['id'] != $id) {
                deletePostImages($post);
                $this->delete(['id' => $id]);
            } else {
                $thispost = $post;
            }
        }

        if (isset($thispost)) {
            if ($thispost['parent'] == TINYIB_NEWTHREAD) {
                @unlink('res/' . $thispost['id'] . '.html');
            }

            deletePostImages($thispost);
            $this->delete(['id' => $thispost['id']]);
        }
    }

    /**
     * {@inheritDoc}
     */
    public function trimThreads()
    {
        $limit = (int)TINYIB_MAXTHREADS;

        if ($limit > 0) {
            $results = $this->getRange(
                ['parent' => 0, 'moderated' => 1],
                'stickied DESC, bumped DESC',
                100,
                $limit,
                'id'
            );

            foreach ($results as $post) {
                $this->deletePostByID($post['id']);
            }
        }
    }

    /**
     * {@inheritDoc}
     */
    public function lastPostByIP()
    {
        return $this->getOne(['ip' => $_SERVER['REMOTE_ADDR']], 'id DESC');
    }
}
