<?php

namespace Imageboard\Migrations;

use Doctrine\DBAL\Schema\Schema;
use Imageboard\Services\ConfigService;

class CreateRatingVotes extends Migration
{
  const TABLE = 'votes';
  const USERS_TABLE = 'users';

  function apply(Schema $schema)
  {
    $posts_table = ConfigService::getInstance()->get('DBPOSTS', 'posts');
    $users_table = static::USERS_TABLE;

    $table = $schema->createTable(static::TABLE);
    $table->addColumn('id', 'integer', ['autoincrement' => true]);
    $table->addColumn('post_id', 'integer');
    $table->addColumn('user_id', 'integer');
    $table->addColumn('score', 'integer');
    $table->setPrimaryKey(['id']);
    $table->addUniqueIndex(['post_id', 'user_id']);
    $table->addForeignKeyConstraint($posts_table, ['post_id'], ['id'], [
      'onUpdate' => 'CASCADE',
      'onDelete' => 'CASCADE',
    ]);
    $table->addForeignKeyConstraint($users_table, ['user_id'], ['id'], [
      'onUpdate' => 'CASCADE',
      'onDelete' => 'CASCADE',
    ]);
  }

  function revert(Schema $schema)
  {
    $schema->dropTable(static::TABLE);
  }
}
