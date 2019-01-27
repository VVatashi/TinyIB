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

$pdo = $capsule->getConnection()->getReadPdo();
$container->registerInstance(\PDO::class, $pdo);

function glob_recursive($pattern, $flags = 0)
{
    $files = glob($pattern, $flags);
    foreach (glob(dirname($pattern) . '/*', GLOB_ONLYDIR|GLOB_NOSORT) as $dir) {
        $files = array_merge($files, glob_recursive($dir . '/' . basename($pattern), $flags));
    }

    return $files;
}

// Discovery classes to register in the DIC.
$directories = [
    'Commands' => ['#$#', ''],
    'Controller' => ['#Interface$#', ''],
    'Model' => ['#Interface$#', ''],
    'Queries' => ['#$#', ''],
    'Service' => ['#Interface$#', ''],
];
foreach ($directories as $directory => $regex) {
    $base_dir = realpath(__DIR__ . '/../');
    $files = glob_recursive($base_dir . "/src/$directory/*.php");
    $files = array_map(function ($file) use ($base_dir) {
        $file = str_replace($base_dir, '', $file);
        $file = preg_replace('#^/src(.+)\\.php$#', 'TinyIB$1', $file);
        $file = str_replace('/', '\\', $file);
        return $file;
    }, $files);

    $interfaces = array_filter($files, function ($file) use ($regex) {
        return preg_match($regex[0], $file);
    });

    foreach ($interfaces as $interface) {
        $class = preg_replace($regex[0], $regex[1], $interface);
        if (in_array($class, $files)) {
            $container->registerType($interface, $class);
        }
    }
}

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

if (!Capsule::schema()->hasTable('mod_log')) {
    Capsule::schema()->create('mod_log', function (Blueprint $table) {
        $table->increments('id');
        $table->string('message');
        $table->integer('created_at');
        $table->integer('updated_at');
        $table->integer('user_id')->nullable();
        $table->foreign('user_id')->references('id')->on('users')->onDelete('cascade');
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
