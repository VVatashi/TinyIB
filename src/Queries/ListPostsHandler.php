<?php

namespace TinyIB\Queries;

class ListPostsHandler implements QueryHandlerInterface
{
    /** @var \PDO $pdo */
    protected $pdo;

    public function __construct(\PDO $pdo)
    {
        $this->pdo = $pdo;
    }

    /**
     * @param ListPosts $query
     *
     * @return int
     */
    public function count($query) : int
    {
        $posts_table = TINYIB_DBPOSTS;
        $sql = <<<EOF
SELECT count(*)
FROM $posts_table AS p
WHERE p.deleted_at IS NULL
EOF;
        $statement = $this->pdo->prepare($sql);
        $statement->execute();
        return (int)$statement->fetchColumn();
    }

    /**
     * @param ListPosts $query
     *
     * @return array
     */
    public function handle($query)
    {
        $posts_table = TINYIB_DBPOSTS;
        $sql = <<<EOF
SELECT p.id, p.parent_id,
    p.subject, p.name, p.tripcode, p.message, p.created_at,
    p.user_id, u.email as user_email, p.ip
FROM $posts_table AS p
    LEFT JOIN users AS u ON u.id = p.user_id
WHERE p.deleted_at IS NULL
ORDER BY p.id DESC
LIMIT :take OFFSET :skip
EOF;
        $statement = $this->pdo->prepare($sql);
        $statement->execute([
            'take' => $query->take,
            'skip' => $query->skip,
        ]);
        return $statement->fetchAll();
    }
}
