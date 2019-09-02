<?php

use Imageboard\App;

require_once __DIR__ . '/../vendor/autoload.php';

$app = new App();
$app->bootstrap()->handleRequest();
exit;
