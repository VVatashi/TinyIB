<?php

namespace Imageboard\Migrations;

use Doctrine\DBAL\Schema\Schema;
use Imageboard\Services\ConfigService;

class CreateBans extends Migration
{
  function apply(Schema $schema)
  {
    $table_name = ConfigService::getInstance()->get('DBBANS');
    $table = $schema->createTable($table_name);
    $table->addColumn('id', 'integer', ['autoincrement' => true]);
    $table->addColumn('ip', 'string');
    $table->addColumn('reason', 'string', ['notnull' => false]);
    $table->addColumn('expires_at', 'integer', ['default' => 0]);
    $table->addColumn('created_at', 'integer', ['default' => 0]);
    $table->addColumn('updated_at', 'integer', ['default' => 0]);
    $table->addColumn('deleted_at', 'integer', ['notnull' => false]);
    $table->setPrimaryKey(['id']);
  }

  function revert(Schema $schema)
  {
    $table_name = ConfigService::getInstance()->get('DBBANS');
    $schema->dropTable($table_name);
  }
}
