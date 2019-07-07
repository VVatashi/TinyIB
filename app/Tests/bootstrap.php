<?php

use Imageboard\App;
use Imageboard\Services\MigrationService;

require_once __DIR__ . '/../../vendor/autoload.php';

putenv("ENVIRONMENT=test");

// Bootstrap application.
$app = new App();
$app->bootstrap(false);

// Make container & database available globally.
$container = $app->getContainer();
$database = $app->getDatabase();

// Apply migrations
$migration = new MigrationService($database);
$migration->migrate();
