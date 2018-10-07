<?php

use Illuminate\Database\Capsule\Manager as Capsule;
use Illuminate\Database\Schema\Blueprint;
use VVatashi\DI\Container;

require_once __DIR__ . '/../vendor/autoload.php';
require_once __DIR__ . '/../settings.test.php';

$container = new Container();

$capsule = new Capsule();
$capsule->addConnection([
    'driver'    => 'sqlite',
    'database'  => ':memory:',
    'prefix'    => '',
]);
$capsule->setAsGlobal();
$capsule->bootEloquent();
$container->registerInstance(Capsule::class, $capsule);

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
