<?php

namespace Imageboard\Query\Admin;

class ShowPostHandler extends ShowHandler
{
  /**
   * {@inheritDoc}
   */
  function sql() : string
  {
    $posts_table = TINYIB_DBPOSTS;
    $sql = <<<EOF
SELECT p.id, p.parent_id,
  p.subject, p.email, p.name, p.tripcode, p.message, p.created_at,
  p.file, p.file_hex, p.file_original, p.image_width, p.image_height, p.file_size,
  p.user_id, u.email as user_email, p.ip
FROM $posts_table AS p
  LEFT JOIN users AS u ON u.id = p.user_id
WHERE p.id = :id AND p.deleted_at IS NULL
ORDER BY p.id DESC
LIMIT 1
EOF;
    return $sql;
  }
}
