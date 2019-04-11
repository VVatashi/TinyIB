<?php

namespace Imageboard\Query;

use Imageboard\Service\ConfigService;
use PDO;

class ThreadPostsHandler extends QueryHandler
{
  /**
   * {@inheritDoc}
   *
   * @throws \Imageboard\Exception\ConfigServiceException
   */
  protected function sql(): string
  {
    $posts_table = (new ConfigService())->get("DBPOSTS");
    $sql = <<<EOF
SELECT p.id, p.created_at,
  p.subject, p.name, p.tripcode, p.message,
  p.file, p.image_width, p.image_height, p.file_size,
  p.thumb, p.thumb_width, p.thumb_height
FROM $posts_table AS p
WHERE p.deleted_at IS NULL
  AND (p.id = :thread_id OR p.parent_id = :thread_id)
  AND p.id > :after
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
