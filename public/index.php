<?php

use App\Core\App;

require_once __DIR__ . '/../vendor/autoload.php';

$app = new App();
$app->handleRequest();
