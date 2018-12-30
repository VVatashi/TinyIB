<?php

define('TINYIB_BASE_URL', 'http://localhost/');
define('TINYIB_BOARD', 'test');
define('TINYIB_BOARDDESC', 'Test');
define('TINYIB_ALWAYSNOKO', true);
define('TINYIB_CAPTCHA', '');

define('TINYIB_LOGO', '');
define('TINYIB_THREADSPERPAGE', 10);
define('TINYIB_PREVIEWREPLIES', 3);
define('TINYIB_TRUNCATE', 15);
define('TINYIB_TIMEZONE', 'UTC');

define('TINYIB_DELAY', 1);
define('TINYIB_MAXTHREADS', 50);
define('TINYIB_MAXREPLIES', 500);

$tinyib_uploads = [
    'image/jpeg' => ['jpg'],
    'image/pjpeg' => ['jpg'],
    'image/png' => ['png'],
    'image/gif' => ['gif'],

    'audio/mpeg' => ['mp3', 'images/audio_thumbnail.png'],
    'audio/mp3' => ['mp3', 'images/audio_thumbnail.png'],
    'audio/x-mpeg' => ['mp3', 'images/audio_thumbnail.png'],
    'audio/x-mpeg-3' => ['mp3', 'images/audio_thumbnail.png'],
    'audio/mp4' => ['mp4', 'images/audio_thumbnail.png'],
    'audio/webm' => ['webm', 'images/audio_thumbnail.png'],

    'video/mp4' => ['mp4'],
    'video/webm' => ['webm'],
];

define('TINYIB_DICE_ENABLED', true);
define('TINYIB_DICE_MAX_COUNT', 20);
define('TINYIB_DICE_MAX_VALUE', 10000);

define('TINYIB_MAXKB', 20480);
define('TINYIB_MAXKBDESC', '20 MB');
define('TINYIB_THUMBNAIL', 'imagemagick');
define('TINYIB_NOFILEOK', false);
define('TINYIB_FILE_ALLOW_DUPLICATE', true);
define('TINYIB_FILE_ANIM_GIF_THUMB', false);
define('TINYIB_FILE_SHOW_ORIG_NAME', false);
define('TINYIB_FILE_OPTIMIZE_PNG', false);
define('TINYIB_FILE_MAXW', 8192);
define('TINYIB_FILE_MAXH', 8192);

define('TINYIB_MAXWOP', 250);
define('TINYIB_MAXHOP', 250);

define('TINYIB_MAXW', 250);
define('TINYIB_MAXH', 250);

define('TINYIB_TRIPSEED', '');

define('TINYIB_RECAPTCHA_SITE', '');
define('TINYIB_RECAPTCHA_SECRET', '');
define('TINYIB_RECAPTCHA_THRESHOLD', 0.5);

define('TINYIB_DBMIGRATE', false);
define('TINYIB_DBBANS', 'bans');
define('TINYIB_DBPOSTS', TINYIB_BOARD . '_posts');

define('TINYIB_DBHOST', 'localhost');
define('TINYIB_DBPORT', 0);
define('TINYIB_DBUSERNAME', '');
define('TINYIB_DBPASSWORD', '');
define('TINYIB_DBNAME', ':memory:');

define('TINYIB_DBDRIVER', 'sqlite');

define('TINYIB_CACHE', '');
define('TINYIB_CACHE_REDIS_HOST', 'unix:/var/run/redis/redis.sock');

define('TINYIB_GTM', '');
define('TINYIB_GTM_AMP', '');
