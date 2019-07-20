<?php

namespace Imageboard\Repositories;

use Doctrine\DBAL\ParameterType;
use Doctrine\DBAL\Query\QueryBuilder;
use Imageboard\Models\Vote;
use Imageboard\Services\DatabaseService;

class VoteRepository implements Repository
{
  const TABLE = 'votes';

  /** @var DatabaseService */
  protected $database;

  function __construct(
    DatabaseService $database
  ) {
    $this->database = $database;
  }

  protected function mapToModel(array $row): Vote
  {
    return new Vote($row, false);
  }

  function add(Vote $vote): Vote
  {
    $connection = $this->database->getConnection();
    $builder = $connection->createQueryBuilder();
    $builder->insert(static::TABLE)
      ->values([
        'post_id' => $builder->createNamedParameter($vote->post_id),
        'user_id' => $builder->createNamedParameter($vote->user_id),
        'score'   => $builder->createNamedParameter($vote->score),
      ])
      ->execute();

    $vote->setId($connection->lastInsertId());
    return $vote;
  }

  function remove(Vote $vote): Vote
  {
    $connection = $this->database->getConnection();
    $builder = $connection->createQueryBuilder();
    $builder->delete(static::TABLE)
      ->where('id = ' . $builder->createNamedParameter((int) $vote->id, ParameterType::INTEGER))
      ->execute();

    $vote->setId(null);
    return $vote;
  }

  protected function getBaseQuery(): QueryBuilder
  {
    $connection = $this->database->getConnection();
    $builder = $connection->createQueryBuilder();
    return $builder->select(
      'v.id',
      'v.post_id',
      'v.user_id',
      'v.score'
    )
      ->from(static::TABLE, 'v');
  }

  /**
   * @param int $post_id
   * @param int $user_id
   *
   * @return null|Vote
   */
  function get(int $post_id, int $user_id)
  {
    $query = $this->getBaseQuery();
    $query = $query->where('v.post_id = ' . $query->createNamedParameter($post_id))
      ->andWhere('v.user_id = ' . $query->createNamedParameter($user_id));

    $row = $query->execute()->fetch();
    if ($row === false) {
      return null;
    }

    return $this->mapToModel($row);
  }
}
