<?php

namespace Imageboard\Service;

use Exception;
use Imageboard\Migrations\MigrationInterface;

/**
 * @package Imageboard\Service
 */
class MigrationService
{
  protected const MIGRATIONS_TABLE = 'migrations';

  /** @var DatabaseService */
  protected $database;

  function __construct(DatabaseService $database)
  {
    $this->database = $database;
  }

  protected function ensureMigrationsTable()
  {
    $connection = $this->database->getConnection();
    $manager = $connection->getSchemaManager();
    $schema = $manager->createSchema();
    if (!$schema->hasTable(static::MIGRATIONS_TABLE)) {
      $newSchema = clone $schema;
      $table = $newSchema->createTable(static::MIGRATIONS_TABLE);
      $table->addColumn('migration', 'string');

      $platform = $connection->getDatabasePlatform();
      $queries = $schema->getMigrateToSql($newSchema, $platform);

      $connection->beginTransaction();

      try {
        foreach ($queries as $query) {
          $connection->exec($query);
        }

        $connection->commit();
      } catch (Exception $e) {
        $connection->rollBack();

        throw $e;
      }
    }
  }

  function applyMigration(MigrationInterface $migration)
  {
    $this->ensureMigrationsTable();

    $connection = $this->database->getConnection();
    $manager = $connection->getSchemaManager();
    $schema = $manager->createSchema();
    $newSchema = clone $schema;
    $migration->apply($newSchema);

    $platform = $connection->getDatabasePlatform();
    $queries = $schema->getMigrateToSql($newSchema, $platform);

    $connection->beginTransaction();

    try {
      foreach ($queries as $query) {
        $connection->exec($query);
      }

      $builder = $connection->createQueryBuilder();
      $migration->upgradeData($builder);

      $class_parts = explode('\\', get_class($migration));
      $class = array_pop($class_parts);

      $builder->insert(static::MIGRATIONS_TABLE)
        ->values([
          'migration' => $builder->createNamedParameter($class),
        ])
        ->execute();

      $connection->commit();
    } catch (Exception $e) {
      $connection->rollBack();

      throw $e;
    }
  }

  function revertMigration(MigrationInterface $migration)
  {
    $this->ensureMigrationsTable();

    $connection = $this->database->getConnection();
    $manager = $connection->getSchemaManager();
    $schema = $manager->createSchema();
    $newSchema = clone $schema;
    $migration->revert($newSchema);

    $platform = $connection->getDatabasePlatform();
    $queries = $schema->getMigrateToSql($newSchema, $platform);

    $connection->beginTransaction();

    try {
      foreach ($queries as $query) {
        $connection->exec($query);
      }

      $class_parts = explode('\\', get_class($migration));
      $class = array_pop($class_parts);

      $builder = $connection->createQueryBuilder();
      $builder->delete(static::MIGRATIONS_TABLE)
        ->where('migration = ' . $builder->createNamedParameter($class))
        ->execute();

      $connection->commit();
    } catch (Exception $e) {
      $connection->rollBack();

      throw $e;
    }
  }

  /**
   * @return string[]
   */
  function getMigrations(): array
  {
    $migrations = [];
    $files = scandir(__DIR__ . '/../Migrations');
    foreach ($files as $file) {
      $matches = [];
      if (preg_match('/^(\d+)_(\w+)\.php$/', $file, $matches)) {
        $migrations[(int)$matches[1]] = $matches[2];
      }
    }

    return $migrations;
  }

  /**
   * @return string[]
   */
  function getAppliedMigrations(): array
  {
    $this->ensureMigrationsTable();

    $all = $this->getMigrations();
    $connection = $this->database->getConnection();
    $builder = $connection->createQueryBuilder();
    $migrations = $builder->select('migration')
      ->from(static::MIGRATIONS_TABLE)
      ->execute()
      ->fetchAll(\PDO::FETCH_COLUMN);

    return array_intersect($all, $migrations);
  }

  /**
   * @return string[]
   */
  function getPendingMigrations(): array
  {
    $all = $this->getMigrations();
    $applied = $this->getAppliedMigrations();
    return array_diff($all, $applied);
  }

  function migrate()
  {
    $this->ensureMigrationsTable();
    $migrations = $this->getPendingMigrations();
    foreach ($migrations as $key => $class) {
      $key = str_pad($key, 3, '0', STR_PAD_LEFT);
      $file = __DIR__ . "/../Migrations/${key}_$class.php";
      require $file;

      $class = "Imageboard\\Migrations\\$class";
      /** @var MigrationInterface $migration */
      $migration = new $class;
      $this->applyMigration($migration);
    }
  }

  function apply(string $name): bool
  {
    $this->ensureMigrationsTable();
    $migrations = $this->getPendingMigrations();
    $found = false;
    foreach ($migrations as $key => $class) {
      if ($class === $name) {
        $found = true;
        $key = str_pad($key, 3, '0', STR_PAD_LEFT);
        $file = __DIR__ . "/../Migrations/${key}_$class.php";
        require $file;

        $class = "Imageboard\\Migrations\\$class";
        /** @var MigrationInterface $migration */
        $migration = new $class;
        $this->applyMigration($migration);
        break;
      }
    }

    return $found;
  }

  function revert(string $name): bool
  {
    $this->ensureMigrationsTable();
    $migrations = $this->getAppliedMigrations();
    $found = false;
    foreach ($migrations as $key => $class) {
      if ($class === $name) {
        $found = true;
        $key = str_pad($key, 3, '0', STR_PAD_LEFT);
        $file = __DIR__ . "/../Migrations/${key}_$class.php";
        require $file;

        $class = "Imageboard\\Migrations\\$class";
        /** @var MigrationInterface $migration */
        $migration = new $class;
        $this->revertMigration($migration);
        break;
      }
    }

    return $found;
  }
}
