<?php

namespace Imageboard\Query;

use Imageboard\Exception\NotFoundException;
use PDO;

class PostHandler extends QueryHandler
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
  p.file, p.image_width, p.image_height, p.file_size,
  p.thumb, p.thumb_width, p.thumb_height
FROM $posts_table AS p
WHERE p.deleted_at IS NULL
  AND p.id = :id
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
    $item = $statement->fetch();
    if (empty($item)) {
      throw new NotFoundException();
    }

    return $item;
  }
}