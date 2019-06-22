<?php

namespace Imageboard\Repositories;

use Imageboard\Model\Token;
use Imageboard\Service\DatabaseService;

class TokenRepository implements Repository
{
  const TABLE = 'tokens';

  /** @var DatabaseService */
  protected $database;

  function __construct(DatabaseService $database)
  {
    $this->database = $database;
  }

  protected function mapToModel(array $row): Token
  {
    return new Token($row, false);
  }

  function add(Token $token): Token
  {
    $connection = $this->database->getConnection();
    $builder = $connection->createQueryBuilder();
    $builder->insert(static::TABLE)
      ->values([
        'created_at' => $builder->createNamedParameter($token->created_at),
        'updated_at' => $builder->createNamedParameter($token->updated_at),
        'expires_at' => $builder->createNamedParameter($token->expires_at),
        'token'      => $builder->createNamedParameter($token->token),
        'user_id'    => $builder->createNamedParameter($token->user_id),
      ])
      ->execute();

    $token->setId($connection->lastInsertId());
    return $token;
  }

  function remove(Token $token): Token
  {
    $connection = $this->database->getConnection();
    $builder = $connection->createQueryBuilder();
    $builder->delete(static::TABLE)
      ->where('id = ' . $builder->createNamedParameter($token->id))
      ->execute();

    $token->setId(null);
    return $token;
  }

  /**
   * @param string $token
   *
   * @return null|Token
   */
  function getByToken(string $token)
  {
    $connection = $this->database->getConnection();
    $builder = $connection->createQueryBuilder();
    $query = $builder->select(
      't.id',
      't.created_at',
      't.updated_at',
      't.expires_at',
      't.token',
      't.user_id'
      )
      ->from(static::TABLE, 't')
      ->where('t.token = ' . $builder->createNamedParameter($token));
    $row = $query->execute()->fetch();
    if ($row === false) {
      return null;
    }

    return $this->mapToModel($row);
  }
}
