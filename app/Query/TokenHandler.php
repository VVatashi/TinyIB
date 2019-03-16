<?php

namespace Imageboard\Query;

use Imageboard\Exception\NotFoundException;

class TokenHandler extends QueryHandler
{
  /**
   * {@inheritDoc}
   */
  function sql() : string
  {
    $sql = <<<EOF
SELECT t.token, t.created_at, t.expires_at,
  t.user_id, u.email as user_email, u.role as user_role
FROM tokens AS t
  LEFT JOIN users AS u ON u.id = t.user_id
WHERE t.token = :token
EOF;
    return $sql;
  }

  /**
   * Returns token info.
   *
   * @param Token $query
   */
  function handle($query) : array
  {
    $sql = $this->sql();
    $statement = $this->pdo->prepare($sql);
    $statement->setFetchMode(\PDO::FETCH_ASSOC);
    $params = $this->getParams($sql, $query);
    $statement->execute($params);
    $item = $statement->fetch();
    if (empty($item)) {
      throw new NotFoundException();
    }

    $item['expires_in'] = $item['expires_at'] - time();
    if ($item['expires_in'] < 0) {
      throw new NotFoundException();
    }

    return $item;
  }
}
