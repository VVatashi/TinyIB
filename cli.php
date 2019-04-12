#!/usr/bin/env php
<?php

const UNIX_CODE_ERR_GENERAL = 1;
const UNIX_CODE_OK = 0;

use Imageboard\Service\ConfigService;

require_once __DIR__ . '/vendor/autoload.php';

if (!isset($argc) || $argc < 2) {
  return UNIX_CODE_ERR_GENERAL;
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
  return UNIX_CODE_ERR_GENERAL;
}

return UNIX_CODE_OK;
