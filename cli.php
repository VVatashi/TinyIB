#!/usr/bin/env php
<?php

const UNIX_CODE_ERR_GENERAL = 1;
const UNIX_CODE_OK = 0;

use Imageboard\Service\{ConfigService, DatabaseService, MigrationService};

require_once __DIR__ . '/vendor/autoload.php';

$allow_colors = true;
// CLI colors support
$colors = [
  "black" => "\e[0;30m",
  "dark_gray" => "\e[1;30m",
  "blue" => "\e[0;34m",
  "light_blue" => "\e[1;34m",
  "green" => "\e[0;32m",
  "light_green" => "\e[1;32m",
  "cyan" => "\e[0;36m",
  "light_cyan" => "\e[1;36m",
  "red" => "\e[0;31m",
  "light_red" => "\e[1;31m",
  "purple" => "\e[0;35m",
  "light_purple" => "\e[1;35m",
  "brown" => "\e[0;33m",
  "yellow" => "\e[1;33m",
  "light_gray" => "\e[0;37m",
  "white" => "\e[1;37m",
  "default" => "\e[0m"
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
    $tabs = str_repeat("\t", $tabs_count);
    print("{$color("green")}{$command} $tabs {$color("white")}{$description}\n");
  };

  print("{$color("green")}Imageboard simple command-line interface{$color("default")}\n\n");
  $write_command("help", "Show commands list", 4);
  $write_command("serve", "Start PHP web server", 4);
  $write_command("migration:list", "Show all migrations status", 3);
  $write_command("migration:migrate", "Apply migration by name", 2);
  $write_command("migration:revert <name>", "Revert migration by name", 1);
  $write_command("migration:apply  <name>", "Apply migration by name", 1);
  $write_command("create:dango:family", "Create big dango family! For Nagisa...", 2);
  print($color("default"));
};

$commands['create:dango:family'] = function(array $args) use ($colors, $color) {
  $dango_color = function() use ($colors) {
    return $colors[array_rand($colors)];
  };

  print("{$dango_color()}だんご　{$dango_color()}だんご　{$dango_color()}だんご　{$dango_color()}だんご　{$dango_color()}だんご　{$color("default")}だんご　大家族\n");
  print("\n{$color("white")}Put all of them together to make a family of one hundred!\n\n");
  
  $dango_count = 10;
  for($i = 0; $i < 10; $i++) {
    print(str_repeat("🍡", $dango_count) . "\n");
  }
  print("\nThe big dumpling family!{$color("default")}\n");
};

$commands['migration:list'] = function (array $args) use ($color) {
  $config = new ConfigService();
  $database = new DatabaseService($config);
  $migrations = new MigrationService($database);
  $all = $migrations->getMigrations();
  $applied = $migrations->getAppliedMigrations();
  foreach ($all as $migration) {
    $status = in_array($migration, $applied) ? "{$color("green")}Applied" : "{$color("yellow")}Pending";
    printf("{$color("whilte")}%-20s | %-10s{$color("default")}\n", $migration, $status);
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
    print("{$color("red")}Migration name is required{$color("default")}\n");
    return UNIX_CODE_ERR_GENERAL;
  }

  $config = new ConfigService();
  $database = new DatabaseService($config);
  $migrations = new MigrationService($database);
  if (!$migrations->apply($migration)) {
    print("{$color("red")}Migration {$color("white")}$migration {$color("red")}is not found or already applied{$color("default")}\n");
  }
};

$commands['migration:revert'] = function (array $args) use ($color) {
  $migration = array_shift($args);
  if (empty($migration)) {
    print("{$color("red")}Migration name is required{$color("default")}\n");
    return UNIX_CODE_ERR_GENERAL;
  }

  $config = new ConfigService();
  $database = new DatabaseService($config);
  $migrations = new MigrationService($database);
  if (!$migrations->revert($migration)) {
    print("{$color("red")}Migration {$color("white")}$migration {$color("red")}is not found or not applied{$color("default")}\n");
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
  print("{$color("red")}Unknown command: {$color("white")}$command{$color("white")}\n");
  return UNIX_CODE_ERR_GENERAL;
}

return UNIX_CODE_OK;
