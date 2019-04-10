<?php

use Illuminate\Database\Capsule\Manager as Capsule;
use Illuminate\Database\Schema\Blueprint;
use Imageboard\App;
use Imageboard\Helper\DatabaseHelper;
use Imageboard\Service\ConfigService;

require_once __DIR__ . '/../../vendor/autoload.php';

//
putenv("ENVIRONMENT=test");

// Bootstrap application.
$app = new App();
$app->bootstrap(false);

// Make container available globally.
$container = $app->getContainer();

// Init config
$config = new ConfigService();
$databaseHelper = new DatabaseHelper($config);

$databaseHelper->createDatabaseStructure();
