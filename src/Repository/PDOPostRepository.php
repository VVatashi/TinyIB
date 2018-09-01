<?php

namespace TinyIB\Repository;

use TinyIB\Functions;
use TinyIB\Model\Post;
use TinyIB\Model\PostInterface;

final class PDOPostRepository extends PDORepository implements PostRepositoryInterface
{
    /**
     * Creates the posts table.
     */
    protected function createTable()
    {
        if (TINYIB_DBDRIVER === 'pgsql') {
            $sql = 'CREATE TABLE "' . TINYIB_DBPOSTS . '" (
                "id" bigserial NOT NULL,
                "parent" integer NOT NULL,
                "timestamp" integer NOT NULL,
                "bumped" integer NOT NULL,
                "ip" varchar(39) NOT NULL,
                "user_id" integer,
                "name" varchar(75) NOT NULL,
                "tripcode" varchar(22) NOT NULL,
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
            CREATE INDEX ON "' . TINYIB_DBPOSTS . '"("user_id");
            CREATE INDEX ON "' . TINYIB_DBPOSTS . '"("stickied");
            CREATE INDEX ON "' . TINYIB_DBPOSTS . '"("moderated");';
        } else {
            $sql = "CREATE TABLE `" . TINYIB_DBPOSTS . "` (
                `id` mediumint(7) unsigned NOT NULL auto_increment,
                `parent` mediumint(7) unsigned NOT NULL,
                `timestamp` int(20) NOT NULL,
                `bumped` int(20) NOT NULL,
                `ip` varchar(39) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
                `user_id` INT UNSIGNED,
                `name` varchar(75) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
                `tripcode` varchar(22) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
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
                KEY `user_id` (`user_id`),
                KEY `stickied` (`stickied`),
                KEY `moderated` (`moderated`)
            )";
        }

        static::$pdo->exec($sql);
    }

    public function __construct()
    {
        parent::__construct(TINYIB_DBPOSTS);

        // Check if the posts table is exists.
        $table_name = static::$pdo->quote(TINYIB_DBPOSTS);

        if (TINYIB_DBDRIVER === 'pgsql') {
            $query_str = 'SELECT count(*) FROM pg_catalog.pg_tables'
                . " WHERE tablename LIKE $table_name";
            $query = static::$pdo->query($query_str);
        } else {
            static::$pdo->query("SHOW TABLES LIKE $table_name");
            $query = static::$pdo->query('SELECT FOUND_ROWS()');
        }

        // Create the posts table if it does not exist.
        $is_exists = ((int)$query->fetchColumn()) !== 0;
        if ($is_exists === false) {
            $this->createTable();
        }
    }

    /**
     * Creates a post model from data array.
     *
     * @param array $data
     *
     * @return PostInterface
     */
    protected function createModel(array $data) : PostInterface
    {
        $post = new Post();
        $post->setID((int)$data['id']);
        $post->setParentID((int)$data['parent']);
        $post->setCreateTime((int)$data['timestamp']);
        $post->setBumpTime((int)$data['bumped']);
        $post->setIP($data['ip']);
        $post->setUserID($data['user_id']);
        $post->setName($data['name']);
        $post->setTripcode($data['tripcode']);
        $post->setEmail($data['email']);
        $post->setSubject($data['subject']);
        $post->setMessage($data['message']);
        $post->setPassword($data['password']);
        $post->setFileName($data['file']);
        $post->setFileHash($data['file_hex']);
        $post->setOriginalFileName($data['file_original']);
        $post->setFileSize((int)$data['file_size']);
        $post->setImageWidth((int)$data['image_width']);
        $post->setImageHeight((int)$data['image_height']);
        $post->setThumbnailName($data['thumb']);
        $post->setThumbnailWidth((int)$data['thumb_width']);
        $post->setThumbnailHeight((int)$data['thumb_height']);
        $post->setSticky(((int)$data['stickied']) === 1);
        $post->setModerated(((int)$data['moderated']) === 1);

        return $post;
    }

    /**
     * {@inheritDoc}
     */
    public function getPostByID(int $id)
    {
        $data = $this->getOne(['id' => $id]);
        if (!isset($data)) {
            return null;
        }

        return $this->createModel($data);
    }

    /**
     * {@inheritDoc}
     */
    public function isThreadExistsByID(int $id) : bool
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
    public function insertPost(PostInterface $post) : int
    {
        $this->insert([
            'parent' => $post->getParentID(),
            'timestamp' => $post->getCreateTime(),
            'bumped' => $post->getBumpTime(),
            'ip' => $post->getIP(),
            'user_id' => $post->getUserID(),
            'name' => $post->getName(),
            'tripcode' => $post->getTripcode(),
            'email' => $post->getEmail(),
            'subject' => $post->getSubject(),
            'message' => $post->getMessage(),
            'password' => $post->getPassword(),
            'nameblock' => '',
            'file' => $post->getFileName(),
            'file_hex' => $post->getFileHash(),
            'file_original' => $post->getOriginalFileName(),
            'file_size' => $post->getFileSize(),
            'file_size_formatted' => $post->getFileSizeFormatted(),
            'image_width' => $post->getImageWidth(),
            'image_height' => $post->getImageHeight(),
            'thumb' => $post->getThumbnailName(),
            'thumb_width' => $post->getThumbnailWidth(),
            'thumb_height' => $post->getThumbnailHeight(),
            'stickied' => $post->isSticky() ? 1 : 0,
            'moderated' => $post->isModerated() ? 1 : 0,
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
    public function approvePostByID(int $id)
    {
        $this->update(['id' => $id], ['moderated' => 1]);
    }

    /**
     * {@inheritDoc}
     */
    public function stickyThreadByID(int $id, bool $sticky)
    {
        $this->update(['id' => $id], ['stickied' => (int)$sticky]);
    }

    /**
     * {@inheritDoc}
     */
    public function bumpThreadByID(int $id)
    {
        $now = time();
        $this->update(['id' => $id], ['bumped' => $now]);
    }

    /**
     * {@inheritDoc}
     */
    public function getThreadCount() : int
    {
        return $this->getCount(['parent' => 0, 'moderated' => 1]);
    }

    /**
     * {@inheritDoc}
     */
    public function getAllThreads() : array
    {
        $data = $this->getAll(
            ['parent' => 0, 'moderated' => 1],
            'stickied DESC, bumped DESC'
        );

        return array_map([$this, 'createModel'], $data);
    }

    /**
     * {@inheritDoc}
     */
    public function getThreadsByPage(int $page) : array
    {
        $skip = $page * TINYIB_THREADSPERPAGE;
        $take = TINYIB_THREADSPERPAGE;

        $data = $this->getRange(
            ['parent' => 0, 'moderated' => 1],
            'stickied DESC, bumped DESC',
            $take,
            $skip
        );

        return array_map([$this, 'createModel'], $data);
    }

    /**
     * {@inheritDoc}
     */
    public function getReplyCountByThreadID(int $id) : int
    {
        return $this->getCount(['parent' => $id, 'moderated' => 1]);
    }

    /**
     * {@inheritDoc}
     */
    public function getPostsByThreadID(int $id, bool $moderated_only = true, $take = null, $skip = 0) : array
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

        if (isset($take)) {
            $data = $this->getRange($conditions, 'id DESC', $take, $skip);
        } else {
            $data = $this->getAll($conditions, 'id DESC');
        }

        return array_map([$this, 'createModel'], array_reverse($data));
    }

    /**
     * {@inheritDoc}
     */
    public function getPostsByHex(string $hash) : array
    {
        $data = $this->getAll(['file_hex' => $hash, 'moderated' => 1]);
        return array_map([$this, 'createModel'], $data);
    }

    /**
     * {@inheritDoc}
     */
    public function getLatestPosts(bool $moderated = true) : array
    {
        $data = $this->getRange(
            ['moderated' => (int)$moderated],
            'timestamp DESC',
            10
        );

        return array_map([$this, 'createModel'], $data);
    }

    /**
     * {@inheritDoc}
     */
    public function deletePostByID(int $id)
    {
        $posts = $this->getPostsByThreadID($id, false);

        foreach ($posts as $post) {
            Functions::deletePostImages($post);
            $this->delete(['id' => $post->getID()]);
        }
    }

    /**
     * {@inheritDoc}
     */
    public function trimThreads()
    {
        $limit = (int)TINYIB_MAXTHREADS;

        if ($limit > 0) {
            /** @var \TinyIB\Model\PostInterface[] $results */
            $results = $this->getRange(
                ['parent' => 0, 'moderated' => 1],
                'stickied DESC, bumped DESC',
                100,
                $limit,
                'id'
            );

            foreach ($results as $row) {
                $this->deletePostByID($row['id']);
            }
        }
    }

    /**
     * {@inheritDoc}
     */
    public function getLastPostByIP(string $ip)
    {
        $data = $this->getOne(['ip' => $ip], 'id DESC');
        if (!isset($data)) {
            return null;
        }

        return $this->createModel($data);
    }
}
