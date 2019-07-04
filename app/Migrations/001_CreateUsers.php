<?php

namespace Imageboard\Migrations;

use Doctrine\DBAL\Schema\Schema;

class CreateUsers extends Migration
{
  const TABLE = 'users';

  function apply(Schema $schema)
  {
    $table = $schema->createTable(static::TABLE);
    $table->addColumn('id', 'integer', ['autoincrement' => true]);
    $table->addColumn('email', 'string');
    $table->addColumn('password_hash', 'string', ['fixed' => true, 'length' => 60]);
    $table->addColumn('role', 'integer', ['default' => 0]);
    $table->addColumn('created_at', 'integer', ['default' => 0]);
    $table->addColumn('updated_at', 'integer', ['default' => 0]);
    $table->addColumn('deleted_at', 'integer', ['notnull' => false]);
    $table->setPrimaryKey(['id']);
    $table->addUniqueIndex(['email']);
    $table->addIndex(['role']);
  }

  function revert(Schema $schema)
  {
    $schema->dropTable(static::TABLE);
  }
}
