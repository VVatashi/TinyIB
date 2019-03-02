<?php

namespace Imageboard\Query;

abstract class ListHandler extends QueryHandler
{
  /**
   * Returns query to get total count of items.
   *
   * @return string SQL query
   */
  protected abstract function countSql() : string;

  /**
   * Returns count of items.
   *
   * @param QueryInterface $query
   *
   * @return int
   */
  function count($query) : int
  {
    $sql = $this->countSql();
    $statement = $this->pdo->prepare($sql);
    $params = $this->getParams($sql, $query);
    $statement->execute($params);
    return (int)$statement->fetchColumn();
  }

  /**
   * Returns all items.
   *
   * @param QueryInterface $query
   */
  function handle($query)
  {
    $sql = $this->sql();
    $statement = $this->pdo->prepare($sql);
    $params = $this->getParams($sql, $query);
    $statement->execute($params);
    return $statement->fetchAll();
  }
}
