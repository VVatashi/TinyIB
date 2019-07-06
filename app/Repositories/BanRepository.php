<?php

namespace Imageboard\Repositories;

use Doctrine\DBAL\ParameterType;
use Doctrine\DBAL\Query\QueryBuilder;
use Imageboard\Model\Ban;
use Imageboard\Service\{ConfigService, DatabaseService};

class BanRepository implements CrudRepository
{
  /** @var ConfigService */
  protected $config;

  /** @var DatabaseService */
  protected $database;

  /** @var string */
  protected $table;

  function __construct(
    ConfigService $config,
    DatabaseService $database
  ) {
    $this->config = $config;
    $this->database = $database;
    $this->table = $config->get('DBBANS', 'bans');
  }

  protected function mapToModel(array $row): Ban
  {
    return new Ban($row, false);
  }

  function add(Ban $ban): Ban
  {
    $connection = $this->database->getConnection();
    $builder = $connection->createQueryBuilder();
    $builder->insert($this->table)
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
    $builder->update($this->table)
      ->set('deleted_at', $builder->createNamedParameter(time(), ParameterType::INTEGER))
      ->where('id = ' . $builder->createNamedParameter((int)$ban->id, ParameterType::INTEGER))
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
      ->from($this->table, 'b')
      ->where('b.deleted_at IS NULL')
      ->andWhere('b.created_at >= ' . $builder->createNamedParameter($date_from))
      ->andWhere('b.created_at < ' . $builder->createNamedParameter($date_to));

    return (int)$query->execute()->fetchColumn();
  }

  protected function getBaseQuery(): QueryBuilder {
    $connection = $this->database->getConnection();
    $builder = $connection->createQueryBuilder();
    return $builder->select(
      'b.id',
      'b.created_at',
      'b.updated_at',
      'b.expires_at',
      'b.ip',
      'b.reason'
      )
      ->from($this->table, 'b');
  }

  /**
   * @return Ban[]
   */
  function getAll(int $date_from = 0, int $date_to = (1 << 31) - 1, $skip = null, $take = null): array
  {
    $query = $this->getBaseQuery();
    $query = $query->where('b.deleted_at IS NULL')
      ->andWhere('b.created_at >= ' . $query->createNamedParameter($date_from))
      ->andWhere('b.created_at < ' . $query->createNamedParameter($date_to))
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
    $query = $this->getBaseQuery();
    $query = $query->where('b.deleted_at IS NULL')
      ->andWhere('b.id = ' . $query->createNamedParameter($id));

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
    $query = $this->getBaseQuery();
    $query = $query->where('b.deleted_at IS NULL')
      ->andWhere('b.ip = ' . $query->createNamedParameter($ip));

    $row = $query->execute()->fetch();
    if ($row === false) {
      return null;
    }

    return $this->mapToModel($row);
  }
}
