#!/usr/bin/env php
<?php

use Imageboard\Service\ConfigService;

require_once __DIR__ . '/vendor/autoload.php';

if (!isset($argc) || $argc < 2) {
  return;
}

$commands = [];
$commands['serve'] = function () {
  $config = new ConfigService();
  $host = $config->get('DEBUG_BASE_URL', 'http://localhost:8000/');
  shell_exec("php -S $host -t webroot/");
};

$command = $argv[1];
if (isset($commands[$command])) {
  $commands[$command]();
} else {
  print("Unknown command: $command\n");
}
