<?php

namespace Imageboard\Migrations;

use Doctrine\DBAL\Schema\Schema;

class CreateModLog implements Migration
{
  function apply(Schema $schema)
  {
    $table = $schema->createTable('mod_log');
    $table->addColumn('id', 'integer', ['autoincrement' => true]);
    $table->addColumn('message', 'string');
    $table->addColumn('created_at', 'integer');
    $table->addColumn('updated_at', 'integer');
    $table->addColumn('user_id', 'integer', ['notnull' => false]);
    $table->setPrimaryKey(['id']);
    $table->addForeignKeyConstraint('users', ['user_id'], ['id'], [
      'onUpdate' => 'CASCADE',
      'onDelete' => 'CASCADE',
    ]);
  }

  function revert(Schema $schema)
  {
    $schema->dropTable('mod_log');
  }
}
