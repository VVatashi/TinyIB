<?php
# TinyIB
#
# https://github.com/tslocum/TinyIB
#
# Contact the author via tslocum@gmail.com if you need support.
# See README for instructions on configuring, moderating and upgrading your board.

// Board description and behavior
define('TINYIB_BASE_URL', 'https://localhost/');
define('TINYIB_BOARD', 'b');          // Unique identifier for this board using only letters and numbers
define('TINYIB_BOARDDESC', 'TinyIB'); // Displayed at the top of every page
define('TINYIB_ALWAYSNOKO', false);   // Redirect to thread after posting
define('TINYIB_CAPTCHA', '');         // Reduce spam by requiring users to pass a CAPTCHA when posting: simple / recaptcha  (click Rebuild All in the management panel after enabling)  ['' to disable]

// Board appearance
define('TINYIB_LOGO', '');            // Logo HTML
define('TINYIB_THREADSPERPAGE', 10);  // Amount of threads shown per index page
define('TINYIB_PREVIEWREPLIES', 3);   // Amount of replies previewed on index pages
define('TINYIB_TRUNCATE', 15);        // Messages are truncated to this many lines on board index pages  [0 to disable]
define('TINYIB_TIMEZONE', 'UTC');     // See https://secure.php.net/manual/en/timezones.php - e.g. America/Los_Angeles

// Post control
define('TINYIB_DELAY', 30);           // Delay (in seconds) between posts from the same IP address to help control flooding  [0 to disable]
define('TINYIB_MAXTHREADS', 100);     // Oldest threads are discarded when the thread count passes this limit  [0 to disable]
define('TINYIB_MAXREPLIES', 0);       // Maximum replies before a thread stops bumping  [0 to disable]

// Upload types
//   Empty array to disable
//   Format: MIME type => (extension, optional thumbnail)
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
    //'audio/webm' => ['webm', 'images/audio_thumbnail.png'],

    // Video upload requires mediainfo and ffmpegthumbnailer  (see README for instructions)
    'video/mp4' => ['mp4'],
    //'video/webm' => ['webm'],

    //'application/x-shockwave-flash' => ['swf', 'images/swf_thumbnail.png'];
];

// Dice roll
define('TINYIB_DICE_ENABLED', true);
define('TINYIB_DICE_MAX_COUNT', 20);
define('TINYIB_DICE_MAX_VALUE', 10000);

// File control
define('TINYIB_MAXKB', 2048);         // Maximum file size in kilobytes  [0 to disable]
define('TINYIB_MAXKBDESC', '2 MB');   // Human-readable representation of the maximum file size
define('TINYIB_THUMBNAIL', 'gd');     // Thumbnail method to use: gd / imagemagick  (see README for instructions)
define('TINYIB_NOFILEOK', false);     // Allow the creation of new threads without uploading a file
define('TINYIB_FILE_ALLOW_DUPLICATE', false); // Allow duplicate files
define('TINYIB_FILE_ANIM_GIF_THUMB', true); // Animate gif thumbnails
define('TINYIB_FILE_SHOW_ORIG_NAME', true); // Show original file name
define('TINYIB_FILE_OPTIMIZE_PNG', false); // Optimize png thumbnails with pngoptimizercl
define('TINYIB_FILE_MAXW', 8192);           // Max allowed width
define('TINYIB_FILE_MAXH', 8192);           // Max allowed height

// Thumbnail size - new thread
define('TINYIB_MAXWOP', 250);         // Width
define('TINYIB_MAXHOP', 250);         // Height

// Thumbnail size - reply
define('TINYIB_MAXW', 250);           // Width
define('TINYIB_MAXH', 250);           // Height

// Tripcode seed - Must not change once set!
define('TINYIB_TRIPSEED', '');        // Enter some random text  (used when generating secure tripcodes)

// CAPTCHA
//   The following only apply when TINYIB_CAPTCHA is set to recaptcha
//   For API keys visit https://www.google.com/recaptcha
define('TINYIB_RECAPTCHA_SITE', '');  // Site key
define('TINYIB_RECAPTCHA_SECRET', '');// Secret key
define('TINYIB_RECAPTCHA_THRESHOLD', 0.5);

// Database
define('TINYIB_DBMIGRATE', false);    // Enable database migration tool  (see README for instructions)
define('TINYIB_DBBANS', 'bans');      // Bans table name (use the same bans table across boards for global bans)
define('TINYIB_DBPOSTS', TINYIB_BOARD . '_posts'); // Posts table name

// Database configuration - MySQL
define('TINYIB_DBHOST', 'localhost'); // Hostname
define('TINYIB_DBPORT', 3306);        // Port  (set to 0 if you are using a UNIX socket as the host)
define('TINYIB_DBUSERNAME', '');      // Username
define('TINYIB_DBPASSWORD', '');      // Password
define('TINYIB_DBNAME', '');          // Database

// Database configuration - PDO
define('TINYIB_DBDRIVER', 'mysql');   // PDO driver to use (mysql / sqlite / pgsql / etc.)

// Cache

// TINYIB_CACHE possible values:
//   ''      - no caching.
//   'redis' - use redis for cache.
define('TINYIB_CACHE', '');

// Redis cache host.
define('TINYIB_CACHE_REDIS_HOST', 'unix:/var/run/redis/redis.sock');

// Google Tag Manager

define('TINYIB_GTM', '');
define('TINYIB_GTM_AMP', '');
