<?php

use Illuminate\Database\Capsule\Manager as Capsule;
use Illuminate\Database\Schema\Blueprint;
use Imageboard\App;
use Imageboard\Helper\DatabaseHelper;
use Imageboard\Service\ConfigService;

require_once __DIR__ . '/../../vendor/autoload.php';

// Bootstrap application.
$app = new App();
$app->bootstrap(false);

// Make container available globally.
$container = $app->getContainer();

// Init config
$config = new ConfigService();
$config
  ->setConfigPath(__DIR__ . '/../../settings.test.php')
  ->resetConfig();
$databaseHelper = new DatabaseHelper($config);

$databaseHelper->createDatabaseStructure();
