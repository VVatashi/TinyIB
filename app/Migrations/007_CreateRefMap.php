<?php

namespace Imageboard\Migrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\DBAL\Query\QueryBuilder;
use Imageboard\Service\ConfigService;

class CreateRefMap extends Migration
{
  const TABLE = 'refmap';
  const ITEMS_PER_STEP = 1000;

  function apply(Schema $schema)
  {
    $posts_table = ConfigService::getInstance()->get('DBPOSTS', 'posts');

    $table = $schema->createTable(static::TABLE);
    $table->addColumn('id', 'integer', ['autoincrement' => true]);
    $table->addColumn('post_id', 'integer');
    $table->addColumn('target_id', 'integer');
    $table->setPrimaryKey(['id']);
    $table->addUniqueIndex(['post_id', 'target_id']);
    $table->addForeignKeyConstraint($posts_table, ['post_id'], ['id'], [
      'onUpdate' => 'CASCADE',
      'onDelete' => 'CASCADE',
    ]);
    $table->addForeignKeyConstraint($posts_table, ['target_id'], ['id'], [
      'onUpdate' => 'CASCADE',
      'onDelete' => 'CASCADE',
    ]);
  }

  function upgradeData(QueryBuilder $builder)
  {
    print("Upgrading data...\n");

    $table_name = ConfigService::getInstance()->get('DBPOSTS', 'posts');
    $b = clone $builder;
    $count = $b->select('COUNT(p.id)')
      ->from($table_name, 'p')
      ->where('p.deleted_at IS NULL')
      ->execute()
      ->fetchColumn();

    for ($offset = 0; $offset < $count; $offset += static::ITEMS_PER_STEP) {
      print("$offset/$count\n");

      $b = clone $builder;
      $posts = $b->select('p.id', 'p.message')
        ->from($table_name, 'p')
        ->where('p.deleted_at IS NULL')
        ->orderBy('id', 'asc')
        ->setFirstResult($offset)
        ->setMaxResults(static::ITEMS_PER_STEP)
        ->execute()
        ->fetchAll();

      foreach ($posts as $post) {
        // Parse references from a post markup.
        $matches = [];
        preg_match_all(
          '/<a href="\/[a-z0-9_-]+\/res\/\d+#\d+">&gt;&gt;(\d+)<\/a>/i',
          $post['message'],
          $matches,
          PREG_PATTERN_ORDER
        );

        $refs = array_unique($matches[1]);
        foreach ($refs as $ref) {
          $b = clone $builder;
          $b->insert('refmap')
            ->values([
              'post_id'   => $post['id'],
              'target_id' => $ref,
            ])
            ->execute();
        }
      }
    }

    print("Upgraded data\n");
  }

  function revert(Schema $schema)
  {
    $schema->dropTable(static::TABLE);
  }
}
