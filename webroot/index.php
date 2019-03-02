<?php

use Imageboard\App;

require_once __DIR__ . '/../vendor/autoload.php';
require_once __DIR__ . '/../settings.php';

$app = new App();
$app->bootstrap()->handleRequest();
