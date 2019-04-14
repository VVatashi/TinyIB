<?php

namespace Imageboard\Query\Admin;

use Imageboard\Service\ConfigService;

class ListPostsHandler extends ListHandler
{
  /**
   * {@inheritDoc}
   * @throws \Imageboard\Exception\ConfigServiceException
   */
  protected function countSql(): string
  {
    $posts_table = (new ConfigService())->get("DBPOSTS");
    $sql = <<<EOF
SELECT count(*)
FROM $posts_table AS p
WHERE p.deleted_at IS NULL
  AND p.created_at >= :date_from
  AND p.created_at < :date_to
EOF;
    return $sql;
  }

  /**
   * {@inheritDoc}
   * @throws \Imageboard\Exception\ConfigServiceException
   */
  protected function sql(): string
  {
    $posts_table = (new ConfigService())->get("DBPOSTS");;
    $sql = <<<EOF
SELECT p.id, p.parent_id,
  p.subject, p.name, p.tripcode, p.message, p.created_at,
  p.user_id, u.email as user_email, p.ip
FROM $posts_table AS p
  LEFT JOIN users AS u ON u.id = p.user_id
WHERE p.deleted_at IS NULL
  AND p.created_at >= :date_from
  AND p.created_at < :date_to
ORDER BY p.id DESC
LIMIT :take OFFSET :skip
EOF;
    return $sql;
  }
}
