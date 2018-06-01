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
            if (TINYIB_DBDRIVER === 'pgsql') {
                $sql = 'CREATE TABLE "' . TINYIB_DBPOSTS . '" (
                    "id" bigserial NOT NULL,
                    "parent" integer NOT NULL,
                    "timestamp" integer NOT NULL,
                    "bumped" integer NOT NULL,
                    "ip" varchar(39) NOT NULL,
                    "name" varchar(75) NOT NULL,
                    "tripcode" varchar(10) NOT NULL,
                    "email" varchar(75) NOT NULL,
                    "nameblock" varchar(255) NOT NULL,
                    "subject" varchar(75) NOT NULL,
                    "message" text NOT NULL,
                    "password" varchar(255) NOT NULL,
                    "file" text NOT NULL,
                    "file_hex" varchar(75) NOT NULL,
                    "file_original" varchar(255) NOT NULL,
                    "file_size" integer NOT NULL default \'0\',
                    "file_size_formatted" varchar(75) NOT NULL,
                    "image_width" smallint NOT NULL default \'0\',
                    "image_height" smallint NOT NULL default \'0\',
                    "thumb" varchar(255) NOT NULL,
                    "thumb_width" smallint NOT NULL default \'0\',
                    "thumb_height" smallint NOT NULL default \'0\',
                    "stickied" smallint NOT NULL default \'0\',
                    "moderated" smallint NOT NULL default \'1\',
                    PRIMARY KEY	("id")
                );
                CREATE INDEX ON "' . TINYIB_DBPOSTS . '"("parent");
                CREATE INDEX ON "' . TINYIB_DBPOSTS . '"("bumped");
                CREATE INDEX ON "' . TINYIB_DBPOSTS . '"("stickied");
                CREATE INDEX ON "' . TINYIB_DBPOSTS . '"("moderated");';
            } else {
                $sql = "CREATE TABLE `" . TINYIB_DBPOSTS . "` (
                    `id` mediumint(7) unsigned NOT NULL auto_increment,
                    `parent` mediumint(7) unsigned NOT NULL,
                    `timestamp` int(20) NOT NULL,
                    `bumped` int(20) NOT NULL,
                    `ip` varchar(39) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
                    `name` varchar(75) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
                    `tripcode` varchar(10) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
                    `email` varchar(75) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
                    `nameblock` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
                    `subject` varchar(75) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
                    `message` text CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
                    `password` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
                    `file` text CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
                    `file_hex` varchar(75) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
                    `file_original` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
                    `file_size` int(20) unsigned NOT NULL default '0',
                    `file_size_formatted` varchar(75) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
                    `image_width` smallint(5) unsigned NOT NULL default '0',
                    `image_height` smallint(5) unsigned NOT NULL default '0',
                    `thumb` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
                    `thumb_width` smallint(5) unsigned NOT NULL default '0',
                    `thumb_height` smallint(5) unsigned NOT NULL default '0',
                    `stickied` tinyint(1) NOT NULL default '0',
                    `moderated` tinyint(1) NOT NULL default '1',
                    PRIMARY KEY	(`id`),
                    KEY `parent` (`parent`),
                    KEY `bumped` (`bumped`),
                    KEY `stickied` (`stickied`),
                    KEY `moderated` (`moderated`)
                )";
            }

            static::$pdo->exec($sql);
        }
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

        if (TINYIB_DBDRIVER === 'pgsql') {
            return static::$pdo->lastInsertId(TINYIB_DBPOSTS . '_id_seq');
        } else {
            return static::$pdo->lastInsertId();
        }
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
    public function getThreadsByPage($page)
    {
        $skip = $page * TINYIB_THREADSPERPAGE;
        $take = TINYIB_THREADSPERPAGE;

        return $this->getRange(
            ['parent' => 0, 'moderated' => 1],
            'stickied DESC, bumped DESC',
            $take,
            $skip
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
            deletePostImages($post);
            $this->delete(['id' => $post['id']]);
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
