<?php

namespace Imageboard\Migrations;

use Doctrine\DBAL\Schema\Schema;

class CreateTokens extends Migration
{
  const TABLE = 'tokens';

  function apply(Schema $schema)
  {
    $table = $schema->createTable(static::TABLE);
    $table->addColumn('id', 'integer', ['autoincrement' => true]);
    $table->addColumn('token', 'string', ['length' => 32]);
    $table->addColumn('expires_at', 'integer');
    $table->addColumn('created_at', 'integer', ['default' => 0]);
    $table->addColumn('updated_at', 'integer', ['default' => 0]);
    $table->addColumn('user_id', 'integer');
    $table->setPrimaryKey(['id']);
    $table->addUniqueIndex(['token']);
    $table->addForeignKeyConstraint('users', ['user_id'], ['id'], [
      'onUpdate' => 'CASCADE',
      'onDelete' => 'CASCADE',
    ]);
  }

  function revert(Schema $schema)
  {
    $schema->dropTable(static::TABLE);
  }
}
