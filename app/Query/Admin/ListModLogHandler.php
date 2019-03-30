<?php

namespace Imageboard\Query\Admin;

class ListModLogHandler extends ListHandler
{
  /**
   * {@inheritDoc}
   */
  protected function countSql(): string
  {
    $sql = <<<EOF
SELECT count(*)
FROM mod_log AS l
WHERE l.created_at >= :date_from
  AND l.created_at < :date_to
EOF;
    return $sql;
  }

  /**
   * {@inheritDoc}
   */
  protected function sql(): string
  {
    $sql = <<<EOF
SELECT l.id, l.message, l.created_at, l.user_id,
  u.email, u.role
FROM mod_log AS l
  LEFT JOIN users AS u ON u.id = l.user_id
WHERE l.created_at >= :date_from
  AND l.created_at < :date_to
ORDER BY l.id DESC
LIMIT :take OFFSET :skip
EOF;
    return $sql;
  }
}