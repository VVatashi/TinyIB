<?php

namespace App;

use Dotenv\Dotenv;

class App
{
  public function __construct()
  {
    $dotenv = Dotenv::createImmutable(__DIR__ . '/..');
    $dotenv->load();
  }

  public function handleRequest()
  {
    phpinfo();
  }
}
