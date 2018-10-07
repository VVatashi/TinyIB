<?php

use Illuminate\Database\Capsule\Manager as Capsule;
use Illuminate\Database\Schema\Blueprint;

require_once __DIR__ . '/../vendor/autoload.php';

// Include settings.php.
if (!file_exists(__DIR__ . '/../settings.php')) {
    $message = 'Please copy the file settings.default.php to settings.php';
    throw new Exception($message);
}

require_once __DIR__ . '/../settings.php';

$capsule = new Capsule();
$capsule->addConnection([
    'driver'    => TINYIB_DBDRIVER,
    'host'      => TINYIB_DBHOST,
    'database'  => TINYIB_DBNAME,
    'username'  => TINYIB_DBUSERNAME,
    'password'  => TINYIB_DBPASSWORD,
    'charset'   => 'utf8',
    'collation' => 'utf8_unicode_ci',
    'prefix'    => '',
]);
$capsule->setAsGlobal();
$capsule->bootEloquent();

if (!Capsule::schema()->hasTable('bans')) {
    Capsule::schema()->create('bans', function (Blueprint $table) {
        $table->increments('id');
        $table->string('reason')->nullable();
        $table->integer('expires_at')->default(0);
        $table->integer('created_at')->default(0);
        $table->integer('updated_at')->default(0);
        $table->integer('deleted_at')->nullable();
    });
}

if (!Capsule::schema()->hasTable('users')) {
    Capsule::schema()->create('users', function (Blueprint $table) {
        $table->increments('id');
        $table->string('email')->unique();
        $table->char('password_hash', 60);
        $table->integer('role')->index()->default(0);
        $table->integer('created_at')->default(0);
        $table->integer('updated_at')->default(0);
        $table->integer('deleted_at')->nullable();
    });
}
