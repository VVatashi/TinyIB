<?php

namespace Imageboard\Migrations;

use Doctrine\DBAL\ParameterType;
use Doctrine\DBAL\Schema\Schema;
use Doctrine\DBAL\Query\QueryBuilder;
use Imageboard\Services\ConfigService;

class AddRawMessage extends Migration
{
  const COLUMN = 'message_raw';
  const ITEMS_PER_STEP = 1000;

  function apply(Schema $schema)
  {
    $table_name = ConfigService::getInstance()->get('DBPOSTS', 'posts');
    $table = $schema->getTable($table_name);
    $table->addColumn(static::COLUMN, 'text')->setDefault('');
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
        // Reverse post markup.
        $post['message'] = preg_replace('/<a href="\/[a-z0-9_-]+\/res\/\d+#\d+">&gt;&gt;(\d+)<\/a>/i', '>>$1', $post['message']);
        $post['message'] = preg_replace('/<a href="[^"]+"(?:\starget="_blank")?>([^<]+)<\/a>/i', '$1', $post['message']);
        $post['message'] = preg_replace('/<span class="unkfunc">([^<]+)<\/span>/i', '[quote]$1[/quote]', $post['message']);
        $post['message'] = preg_replace('/<span class="dice">(##\d+d\d+##)\s=\s\d+(?:,\s\d+)*\s\(\d+\)<\/span>/i', '$1', $post['message']);
        $post['message'] = str_replace('<br>', "\n", $post['message']);
        $post['message'] = str_replace("\r", '', $post['message']);
        $post['message'] = html_entity_decode($post['message']);

        $b = clone $builder;
        $b->update($table_name, 'p')
          ->set(static::COLUMN, $b->createNamedParameter($post['message']))
          ->where('p.id = ' . $b->createNamedParameter($post['id'], ParameterType::INTEGER))
          ->execute();
      }
    }

    print("Upgraded data\n");
  }

  function revert(Schema $schema)
  {
    $table_name = ConfigService::getInstance()->get('DBPOSTS', 'posts');
    $table = $schema->getTable($table_name);
    $table->dropColumn(static::COLUMN);
  }
}
