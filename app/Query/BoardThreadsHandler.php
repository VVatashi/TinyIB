<?php

namespace Imageboard\Query;

use PDO;

class BoardThreadsHandler extends QueryHandler
{
  /**
   * {@inheritDoc}
   */
  protected function sql(): string
  {
    $posts_table = TINYIB_DBPOSTS;
    $sql = <<<EOF
SELECT p.id, p.created_at, p.bumped_at,
  p.subject, p.name, p.tripcode, p.message,
  p.file, p.image_width, p.image_height, p.file_size
FROM $posts_table AS p
WHERE p.deleted_at IS NULL
  AND p.parent_id = 0
ORDER BY p.bumped_at DESC
EOF;
    return $sql;
  }

  /**
   * Returns thread posts.
   *
   * @param BoardThreads $query
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
