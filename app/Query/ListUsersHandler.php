<?php

namespace Imageboard\Query;

class ListUsersHandler extends ListHandler
{
  /**
   * {@inheritDoc}
   */
  protected function countSql(): string
  {
    $sql = <<<EOF
SELECT count(*)
FROM users AS u
WHERE u.deleted_at IS NULL
  AND u.created_at >= :date_from
  AND u.created_at < :date_to
EOF;
    return $sql;
  }

  /**
   * {@inheritDoc}
   */
  protected function sql(): string
  {
    $sql = <<<EOF
SELECT u.id, u.email, u.role, u.created_at, u.updated_at
FROM users AS u
WHERE u.deleted_at IS NULL
  AND u.created_at >= :date_from
  AND u.created_at < :date_to
ORDER BY u.id DESC
LIMIT :take OFFSET :skip
EOF;
    return $sql;
  }
}
