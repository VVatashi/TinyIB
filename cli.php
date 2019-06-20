#!/usr/bin/env php
<?php

const UNIX_CODE_ERR_GENERAL = 1;
const UNIX_CODE_OK = 0;

use Imageboard\Service\{ConfigService, DatabaseService, MigrationService};

require_once __DIR__ . '/vendor/autoload.php';

if (!isset($argc) || $argc < 2) {
  return UNIX_CODE_ERR_GENERAL;
}

$commands = [];
$commands['serve'] = function (array $args) {
  $config = new ConfigService();
  $host = $config->get('DEBUG_BASE_URL', 'http://localhost:8000/');
  shell_exec("php -S $host -t webroot/");
};

$commands['migration:list'] = function (array $args) {
  $config = new ConfigService();
  $database = new DatabaseService($config);
  $migrations = new MigrationService($database);
  $all = $migrations->getMigrations();
  $applied = $migrations->getAppliedMigrations();
  foreach ($all as $migration) {
    $status = in_array($migration, $applied) ? 'Applied' : 'Pending';
    printf("%-20s | %-10s\n", $migration, $status);
  }
};

$commands['migration:migrate'] = function (array $args) {
  $config = new ConfigService();
  $database = new DatabaseService($config);
  $migrations = new MigrationService($database);
  $migrations->migrate();
};

$commands['migration:apply'] = function (array $args) {
  $migration = array_shift($args);
  if (empty($migration)) {
    print("Migration name is required\n");
    return;
  }

  $config = new ConfigService();
  $database = new DatabaseService($config);
  $migrations = new MigrationService($database);
  if (!$migrations->apply($migration)) {
    print("Migration $migration is not found or already applied\n");
  }
};

$commands['migration:revert'] = function (array $args) {
  $migration = array_shift($args);
  if (empty($migration)) {
    print("Migration name is required\n");
    return;
  }

  $config = new ConfigService();
  $database = new DatabaseService($config);
  $migrations = new MigrationService($database);
  if (!$migrations->revert($migration)) {
    print("Migration $migration is not found or not applied\n");
  }
};

array_shift($argv);
$command = array_shift($argv);
if (isset($commands[$command])) {
  $commands[$command]($argv);
} else {
  print("Unknown command: $command\n");
  return UNIX_CODE_ERR_GENERAL;
}

return UNIX_CODE_OK;
