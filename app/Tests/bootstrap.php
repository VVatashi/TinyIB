<?php

use Imageboard\App;
use Imageboard\Service\MigrationService;

require_once __DIR__ . '/../../vendor/autoload.php';

putenv("ENVIRONMENT=test");

// Bootstrap application.
$app = new App();
$app->bootstrap(false);

// Make container available globally.
$container = $app->getContainer();

// Apply migrations
$migration = new MigrationService($app->getDatabase());
$migration->migrate();
