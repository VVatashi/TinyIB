<?php

namespace Imageboard\Repositories;

use Imageboard\Model\Ban;
use Imageboard\Service\DatabaseService;

class BanRepository implements Repository
{
  const TABLE = 'bans';

  /** @var DatabaseService */
  protected $database;

  function __construct(DatabaseService $database)
  {
    $this->database = $database;
  }

  protected function mapToModel(array $row): Ban
  {
    return new Ban($row, false);
  }

  function add(Ban $ban): Ban
  {
    $connection = $this->database->getConnection();
    $builder = $connection->createQueryBuilder();
    $builder->insert(static::TABLE)
      ->values([
        'created_at' => $builder->createNamedParameter($ban->created_at),
        'updated_at' => $builder->createNamedParameter($ban->updated_at),
        'deleted_at' => $builder->createNamedParameter($ban->deleted_at),
        'expires_at' => $builder->createNamedParameter($ban->expires_at),
        'ip'         => $builder->createNamedParameter($ban->ip),
        'reason'     => $builder->createNamedParameter($ban->reason),
      ])
      ->execute();

    $ban->setId($connection->lastInsertId());
    return $ban;
  }

  function remove(Ban $ban): Ban
  {
    $connection = $this->database->getConnection();
    $builder = $connection->createQueryBuilder();
    $builder->delete(static::TABLE)
      ->where('id = ' . $builder->createNamedParameter($ban->id))
      ->execute();

    $ban->setId(null);
    return $ban;
  }

  /**
   * @return int
   */
  function getCount(int $date_from = 0, int $date_to = (1 << 31) - 1): int
  {
    $connection = $this->database->getConnection();
    $builder = $connection->createQueryBuilder();
    $query = $builder->select('COUNT(b.id)')
      ->from(static::TABLE, 'b')
      ->where('b.deleted_at IS NULL')
      ->andWhere('b.created_at >= ' . $builder->createNamedParameter($date_from))
      ->andWhere('b.created_at < ' . $builder->createNamedParameter($date_to));

    return (int)$query->execute()->fetchColumn();
  }

  /**
   * @return Ban[]
   */
  function getAll(int $date_from = 0, int $date_to = (1 << 31) - 1, $skip = null, $take = null): array
  {
    $connection = $this->database->getConnection();
    $builder = $connection->createQueryBuilder();
    $query = $builder->select(
      'b.id',
      'b.created_at',
      'b.updated_at',
      'b.expires_at',
      'b.ip',
      'b.reason'
      )
      ->from(static::TABLE, 'b')
      ->where('b.deleted_at IS NULL')
      ->andWhere('b.created_at >= ' . $builder->createNamedParameter($date_from))
      ->andWhere('b.created_at < ' . $builder->createNamedParameter($date_to))
      ->orderBy('b.id', 'desc');

    if (isset($skip)) {
      $query = $query->setFirstResult($skip);
    }

    if (isset($take)) {
      $query = $query->setMaxResults($take);
    }

    $rows = $query->execute()->fetchAll();
    return array_map([$this, 'mapToModel'], $rows);
  }

  /**
   * @param int $id
   *
   * @return null|Ban
   */
  function getById(int $id)
  {
    $connection = $this->database->getConnection();
    $builder = $connection->createQueryBuilder();
    $query = $builder->select(
      'b.id',
      'b.created_at',
      'b.updated_at',
      'b.expires_at',
      'b.ip',
      'b.reason'
      )
      ->from(static::TABLE, 'b')
      ->where('b.deleted_at IS NULL')
      ->andWhere('b.id = ' . $builder->createNamedParameter($id));
    $row = $query->execute()->fetch();
    if ($row === false) {
      return null;
    }

    return $this->mapToModel($row);
  }

  /**
   * @param string $ip
   *
   * @return null|Ban
   */
  function getByIp(string $ip)
  {
    $connection = $this->database->getConnection();
    $builder = $connection->createQueryBuilder();
    $query = $builder->select(
      'b.id',
      'b.created_at',
      'b.updated_at',
      'b.expires_at',
      'b.ip',
      'b.reason'
      )
      ->from(static::TABLE, 'b')
      ->where('b.deleted_at IS NULL')
      ->andWhere('b.ip = ' . $builder->createNamedParameter($ip));
    $row = $query->execute()->fetch();
    if ($row === false) {
      return null;
    }

    return $this->mapToModel($row);
  }
}
