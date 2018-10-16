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

if (!Capsule::schema()->hasTable(TINYIB_DBBANS)) {
    Capsule::schema()->create(TINYIB_DBBANS, function (Blueprint $table) {
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

if (!Capsule::schema()->hasTable(TINYIB_DBPOSTS)) {
    Capsule::schema()->create(TINYIB_DBPOSTS, function (Blueprint $table) {
        $table->increments('id');
        $table->integer('parent_id')->index()->default(0);
        $table->integer('user_id')->index()->default(0);
        $table->string('ip', 39);
        $table->string('name', 75);
        $table->string('tripcode', 22);
        $table->string('email', 75);
        $table->string('subject', 75);
        $table->text('message');
        $table->string('password');
        $table->string('file')->nullable();
        $table->string('file_hex', 75)->nullable();
        $table->string('file_original')->nullable();
        $table->integer('file_size')->default(0);
        $table->integer('image_width')->default(0);
        $table->integer('image_height')->default(0);
        $table->string('thumb')->nullable();
        $table->integer('thumb_width')->default(0);
        $table->integer('thumb_height')->default(0);
        $table->boolean('stickied')->index()->default(false);
        $table->boolean('moderated')->index()->default(true);
        $table->integer('created_at')->default(0);
        $table->integer('bumped_at')->index()->default(0);
        $table->integer('updated_at')->default(0);
        $table->integer('deleted_at')->nullable();
    });
}
