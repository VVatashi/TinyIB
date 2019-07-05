<?php

namespace Imageboard\Repositories;

use Doctrine\DBAL\Query\QueryBuilder;
use Imageboard\Model\RefMap;
use Imageboard\Service\DatabaseService;

class RefMapRepository implements Repository
{
  const TABLE = 'refmap';

  /** @var DatabaseService */
  protected $database;

  function __construct(DatabaseService $database)
  {
    $this->database = $database;
  }

  protected function mapToModel(array $row): RefMap
  {
    return new RefMap($row, false);
  }

  function add(RefMap $ref): RefMap
  {
    $connection = $this->database->getConnection();
    $builder = $connection->createQueryBuilder();
    $builder->insert(static::TABLE)
      ->values([
        'post_id'   => $builder->createNamedParameter($ref->post_id),
        'target_id' => $builder->createNamedParameter($ref->target_id),
      ])
      ->execute();

    $ref->setId($connection->lastInsertId());
    return $ref;
  }

  protected function getBaseQuery(): QueryBuilder {
    $connection = $this->database->getConnection();
    $builder = $connection->createQueryBuilder();
    return $builder->select(
      'r.id',
      'r.post_id',
      'r.target_id'
      )
      ->from(static::TABLE, 'r');
  }

  /**
   * @param int[] $post_ids
   *
   * @return RefMap[]
   */
  function getMany(array $post_ids): array
  {
    if (empty($post_ids)) {
      return [];
    }

    $query = $this->getBaseQuery();
    $post_id_params = array_map([$query, 'createNamedParameter'], $post_ids);
    $target_id_params = array_map([$query, 'createNamedParameter'], $post_ids);
    $query = $query->where('r.post_id IN (' . implode(',', $post_id_params) . ')')
      ->orWhere('r.target_id IN (' . implode(',', $target_id_params)  . ')')
      ->orderBy('r.id', 'asc');

    $rows = $query->execute()->fetchAll();
    return array_map([$this, 'mapToModel'], $rows);
  }

  /**
   * @param int $post_id
   *
   * @return RefMap[]
   */
  function getByPost(int $post_id): array
  {
    $query = $this->getBaseQuery();
    $query = $query->where('r.post_id = ' . $query->createNamedParameter($post_id))
      ->orWhere('r.target_id = ' . $query->createNamedParameter($post_id))
      ->orderBy('r.id', 'asc');

    $rows = $query->execute()->fetchAll();
    return array_map([$this, 'mapToModel'], $rows);
  }
}
