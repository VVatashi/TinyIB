<?php

namespace Imageboard\Repositories;

use Doctrine\DBAL\Query\QueryBuilder;
use Doctrine\DBAL\ParameterType;
use Imageboard\Model\User;
use Imageboard\Service\DatabaseService;

class UserRepository implements CrudRepository
{
  const TABLE = 'users';

  /** @var DatabaseService */
  protected $database;

  function __construct(DatabaseService $database)
  {
    $this->database = $database;
  }

  protected function mapToModel(array $row): User
  {
    return new User($row, false);
  }

  function add(User $user): User
  {
    $connection = $this->database->getConnection();
    $builder = $connection->createQueryBuilder();
    $builder->insert(static::TABLE)
      ->values([
        'created_at'    => $builder->createNamedParameter($user->created_at),
        'updated_at'    => $builder->createNamedParameter($user->updated_at),
        'deleted_at'    => $builder->createNamedParameter($user->deleted_at),
        'email'         => $builder->createNamedParameter($user->email),
        'password_hash' => $builder->createNamedParameter($user->password_hash),
        'role'          => $builder->createNamedParameter($user->role),
      ])
      ->execute();

    $user->setId($connection->lastInsertId());
    return $user;
  }

  function update(User $user): User
  {
    $connection = $this->database->getConnection();
    $builder = $connection->createQueryBuilder();
    $builder->update(static::TABLE)
      ->set('created_at', $builder->createNamedParameter($user->created_at))
      ->set('updated_at', $builder->createNamedParameter($user->updated_at))
      ->set('deleted_at', $builder->createNamedParameter($user->deleted_at))
      ->set('email', $builder->createNamedParameter($user->email))
      ->set('password_hash', $builder->createNamedParameter($user->password_hash))
      ->set('role', $builder->createNamedParameter($user->role))
      ->where('id = ' . $builder->createNamedParameter($user->id))
      ->execute();

    return $user;
  }

  function remove(User $user): User
  {
    $connection = $this->database->getConnection();
    $builder = $connection->createQueryBuilder();
    $builder->update(static::TABLE)
      ->set('deleted_at', $builder->createNamedParameter(time(), ParameterType::INTEGER))
      ->where('id = ' . $builder->createNamedParameter((int)$user->id, ParameterType::INTEGER))
      ->execute();

    $user->setId(null);
    return $user;
  }

  /**
   * @return int
   */
  function getCount(int $date_from = 0, int $date_to = (1 << 31) - 1): int
  {
    $connection = $this->database->getConnection();
    $builder = $connection->createQueryBuilder();
    $query = $builder->select('COUNT(u.id)')
      ->from(static::TABLE, 'u')
      ->where('u.deleted_at IS NULL')
      ->andWhere('u.created_at >= ' . $builder->createNamedParameter($date_from))
      ->andWhere('u.created_at < ' . $builder->createNamedParameter($date_to));

    return (int)$query->execute()->fetchColumn();
  }

  protected function getBaseQuery(): QueryBuilder {
    $connection = $this->database->getConnection();
    $builder = $connection->createQueryBuilder();
    return $builder->select(
      'u.id',
      'u.created_at',
      'u.updated_at',
      'u.deleted_at',
      'u.email',
      'u.password_hash',
      'u.role'
      )
      ->from(static::TABLE, 'u');
  }

  /**
   * @return User[]
   */
  function getAll(int $date_from = 0, int $date_to = (1 << 31) - 1, $skip = null, $take = null): array
  {
    $query = $this->getBaseQuery();
    $query = $query->where('u.deleted_at IS NULL')
      ->andWhere('u.created_at >= ' . $query->createNamedParameter($date_from))
      ->andWhere('u.created_at < ' . $query->createNamedParameter($date_to))
      ->orderBy('u.id', 'desc');

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
   * @return null|User
   */
  function getById(int $id)
  {
    $query = $this->getBaseQuery();
    $query = $query->where('u.deleted_at IS NULL')
      ->andWhere('u.id = ' . $query->createNamedParameter($id));

    $row = $query->execute()->fetch();
    if ($row === false) {
      return null;
    }

    return $this->mapToModel($row);
  }

  /**
   * @param string $email
   *
   * @return null|User
   */
  function getByEmail(string $email)
  {
    $query = $this->getBaseQuery();
    $query = $query->where('u.deleted_at IS NULL')
      ->andWhere('u.email = ' . $query->createNamedParameter($email));

    $row = $query->execute()->fetch();
    if ($row === false) {
      return null;
    }

    return $this->mapToModel($row);
  }
}
