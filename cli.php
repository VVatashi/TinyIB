#!/usr/bin/env php
<?php

if (!isset($argc) || $argc < 2) {
  return;
}

$commands = [];
$commands['serve'] = function () {
  shell_exec('php -S localhost:8000 -t webroot/');
};

$command = $argv[1];
if (isset($commands[$command])) {
  $commands[$command]();
} else {
  print("Unknown command: $command\n");
}
