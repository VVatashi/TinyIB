<?php

namespace Imageboard\Migrations;

use Doctrine\DBAL\Schema\Schema;
use Imageboard\Services\ConfigService;

class CreatePosts extends Migration
{
  function apply(Schema $schema)
  {
    $table_name = ConfigService::getInstance()->get('DBPOSTS', 'posts');
    $table = $schema->createTable($table_name);
    $table->addColumn('id', 'integer', ['autoincrement' => true]);
    $table->addColumn('parent_id', 'integer', ['default' => 0]);
    $table->addColumn('user_id', 'integer', ['default' => 0]);
    $table->addColumn('ip', 'string', ['length' => 39]);
    $table->addColumn('name', 'string', ['length' => 75]);
    $table->addColumn('tripcode', 'string', ['length' => 22]);
    $table->addColumn('email', 'string', ['length' => 75]);
    $table->addColumn('subject', 'string', ['length' => 75]);
    $table->addColumn('message', 'text');
    $table->addColumn('password', 'string');
    $table->addColumn('file', 'string', ['notnull' => false]);
    $table->addColumn('file_hex', 'string', ['length' => 75, 'notnull' => false]);
    $table->addColumn('file_original', 'string', ['notnull' => false]);
    $table->addColumn('file_size', 'integer', ['default' => 0]);
    $table->addColumn('image_width', 'integer', ['default' => 0]);
    $table->addColumn('image_height', 'integer', ['default' => 0]);
    $table->addColumn('thumb', 'string', ['notnull' => false]);
    $table->addColumn('thumb_width', 'integer', ['default' => 0]);
    $table->addColumn('thumb_height', 'integer', ['default' => 0]);
    $table->addColumn('stickied', 'boolean', ['default' => 0]);
    $table->addColumn('moderated', 'boolean', ['default' => 1]);
    $table->addColumn('created_at', 'integer', ['default' => 0]);
    $table->addColumn('bumped_at', 'integer', ['default' => 0]);
    $table->addColumn('updated_at', 'integer', ['default' => 0]);
    $table->addColumn('deleted_at', 'integer', ['notnull' => false]);
    $table->setPrimaryKey(['id']);
    $table->addIndex(['parent_id']);
    $table->addIndex(['user_id']);
    $table->addIndex(['stickied']);
    $table->addIndex(['moderated']);
    $table->addIndex(['bumped_at']);
  }

  function revert(Schema $schema)
  {
    $table_name = ConfigService::getInstance()->get('DBPOSTS', 'posts');
    $schema->dropTable($table_name);
  }
}
