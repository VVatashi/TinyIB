<?php

namespace Imageboard\Query;

class ListBansHandler extends ListHandler
{
  /**
   * {@inheritDoc}
   */
  protected function countSql(): string
  {
    $bans_table = TINYIB_DBBANS;
    $sql = <<<EOF
SELECT count(*)
FROM $bans_table AS b
WHERE b.deleted_at IS NULL
EOF;
    return $sql;
  }

  /**
   * {@inheritDoc}
   */
  protected function sql(): string
  {
    $bans_table = TINYIB_DBBANS;
    $sql = <<<EOF
SELECT b.id, b.ip, b.reason, b.created_at, b.updated_at, b.expires_at
FROM $bans_table AS b
WHERE b.deleted_at IS NULL
ORDER BY b.id DESC
LIMIT :take OFFSET :skip
EOF;
    return $sql;
  }
}
