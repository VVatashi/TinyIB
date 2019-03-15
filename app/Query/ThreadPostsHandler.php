<?php

namespace Imageboard\Query;

use PDO;

class ThreadPostsHandler extends QueryHandler
{
  /**
   * {@inheritDoc}
   */
  protected function sql(): string
  {
    $posts_table = TINYIB_DBPOSTS;
    $sql = <<<EOF
SELECT p.id, p.created_at,
  p.subject, p.name, p.tripcode, p.message,
  p.file, p.image_width, p.image_height, p.file_size
FROM $posts_table AS p
WHERE p.deleted_at IS NULL
  AND (p.id = :thread_id OR p.parent_id = :thread_id)
ORDER BY p.id
EOF;
    return $sql;
  }

  /**
   * Returns thread posts.
   *
   * @param ThreadPosts $query
   */
  function handle($query)
  {
    $sql = $this->sql();
    $statement = $this->pdo->prepare($sql);
    $statement->setFetchMode(PDO::FETCH_ASSOC);
    $params = $this->getParams($sql, $query);
    $statement->execute($params);
    return $statement->fetchAll();
  }
}
