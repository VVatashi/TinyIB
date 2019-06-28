#!/usr/bin/env php
<?php

const UNIX_CODE_ERR_GENERAL = 1;
const UNIX_CODE_OK = 0;

use Imageboard\Service\{ConfigService, DatabaseService, MigrationService};

require_once __DIR__ . '/vendor/autoload.php';

$allow_colors = true;
// CLI colors support
$colors = [
  "red"     => "\e[01;31m",
  "green"   => "\e[01;32m",
  "white"   => "\e[01;37m",
  "default" => "\e[01;39m",
];

// Manage color
$color = function($name) use ($colors, $allow_colors) {
  return $allow_colors && array_key_exists($name, $colors) ? $colors[$name] : "";
};

$commands = [];
$commands['serve'] = function (array $args) use ($color) {
  $config = new ConfigService();
  $host = $config->get('DEBUG_BASE_URL', 'localhost:8000');

  print("{$color("red")}Development server started: {$color("white")}<http://$host/>\n");
  print("{$color("default")}Press Ctrl+C to stop");

  shell_exec("php -S $host -t webroot/");
};

$commands['help'] = function() use ($color) {
  $write_command = function($command, string $description, $tabs_count = 1) use ($color) {
    $tabs = "";
    for($i = 0; $i < $tabs_count; $i++) {
      $tabs .= "\t";
    }

    print("{$color("green")}{$command} $tabs {$color("white")}{$description}\n");
  };

  print("{$color("green")}Imageboard simple command-line interface{$color("default")}\n\n");
  $write_command("help", "Show commands list", 4);
  $write_command("serve", "Start PHP web server", 4);
  $write_command("migration:list", "Show all migrations status", 3);
  $write_command("migration:migrate <name>", "Apply migration by name", 1);
  $write_command("migration:apply","Apply migrations", 2);
};

$commands['migration:list'] = function (array $args) use ($color) {
  $config = new ConfigService();
  $database = new DatabaseService($config);
  $migrations = new MigrationService($database);
  $all = $migrations->getMigrations();
  $applied = $migrations->getAppliedMigrations();
  foreach ($all as $migration) {
    $status = in_array($migration, $applied) ? "{$color("green")}Applied" : "{$color("red")}Pending";
    printf("%-20s | %-10s{$color("default")}\n", $migration, $status);
  }
};

$commands['migration:migrate'] = function (array $args) {
  $config = new ConfigService();
  $database = new DatabaseService($config);
  $migrations = new MigrationService($database);
  $migrations->migrate();
};

$commands['migration:apply'] = function (array $args) use ($color) {
  $migration = array_shift($args);
  if (empty($migration)) {
    print("{$color("red")}Migration name is required\n");
    return UNIX_CODE_ERR_GENERAL;
  }

  $config = new ConfigService();
  $database = new DatabaseService($config);
  $migrations = new MigrationService($database);
  if (!$migrations->apply($migration)) {
    print("{$color("red")}Migration {$color("white")}$migration {$color("red")}Mis not found or already applied\n");
  }
};

$commands['migration:revert'] = function (array $args) use ($color) {
  $migration = array_shift($args);
  if (empty($migration)) {
    print("{$color("red")}Migration name is required\n");
    return UNIX_CODE_ERR_GENERAL;
  }

  $config = new ConfigService();
  $database = new DatabaseService($config);
  $migrations = new MigrationService($database);
  if (!$migrations->revert($migration)) {
    print("{$color("red")}Migration {$color("white")}$migration {$color("red")}is not found or not applied\n");
  }
};

// Show help if CLI started without args
if (!isset($argc) || $argc < 2) {
  $commands["help"]();
  return UNIX_CODE_OK;
}

array_shift($argv);
$command = array_shift($argv);
if (isset($commands[$command])) {
  $commands[$command]($argv);
} else {
  print("{$color("red")}Unknown command: {$color("white")}$command\n");
  return UNIX_CODE_ERR_GENERAL;
}

return UNIX_CODE_OK;
