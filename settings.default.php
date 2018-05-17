<?php
# TinyIB
#
# https://github.com/tslocum/TinyIB
#
# Contact the author via tslocum@gmail.com if you need support.
# See README for instructions on configuring, moderating and upgrading your board.

// Administrator/moderator credentials
define('TINYIB_ADMINPASS', '');       // Administrators have full access to the board
define('TINYIB_MODPASS', '');         // Moderators only have access to delete (and moderate if TINYIB_REQMOD is set) posts  ['' to disable]

// Board description and behavior
define('TINYIB_BOARD', 'b');          // Unique identifier for this board using only letters and numbers
define('TINYIB_BOARDDESC', 'TinyIB'); // Displayed at the top of every page
define('TINYIB_ALWAYSNOKO', false);   // Redirect to thread after posting
define('TINYIB_CAPTCHA', '');         // Reduce spam by requiring users to pass a CAPTCHA when posting: simple / recaptcha  (click Rebuild All in the management panel after enabling)  ['' to disable]
define('TINYIB_REQMOD', '');          // Require moderation before displaying posts: files / all  (see README for instructions, only MySQL is supported)  ['' to disable]

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
$tinyib_uploads = array(
    'image/jpeg' => array('jpg'),
    'image/pjpeg' => array('jpg'),
    'image/png' => array('png'),
    'image/gif' => array('gif'),

    'audio/mpeg' => array('mp3', 'audio_thumbnail.png'),
    'audio/mp3' => array('mp3', 'audio_thumbnail.png'),
    'audio/x-mpeg' => array('mp3', 'audio_thumbnail.png'),
    'audio/x-mpeg-3' => array('mp3', 'audio_thumbnail.png'),
    'audio/mp4' => array('mp4', 'audio_thumbnail.png'),
    //'audio/webm' => array('webm', 'audio_thumbnail.png'),

    // Video upload requires mediainfo and ffmpegthumbnailer  (see README for instructions)
    'video/mp4' => array('mp4'),
    //'video/webm' => array('webm'),

    //'application/x-shockwave-flash' => array('swf', 'swf_thumbnail.png'));
);

function buildEmbedHtml($url, $extension)
{
    if ($extension === 'mp4') {
        return '<video controls autoplay><source src="' . $url . '" type="video/mp4" /></video>';
    } elseif ($extension === 'webm') {
        return '<video controls autoplay><source src="' . $url . '" type="video/webm" /></video>';
    } else {
        return '<img src="' . $url . '" alt="" />';
    }
}

// Embeds
//   Empty array to disable
$tinyib_embeds = array(
    // oEmbed APIs
    'SoundCloud' => array(
        'type' => 'oembed',
        'url' => 'http://soundcloud.com/oembed?format=json&url=TINYIBEMBED',
    ),
    'Vimeo' => array(
        'type' => 'oembed',
        'url' => 'http://vimeo.com/api/oembed.json?url=TINYIBEMBED',
    ),
    'YouTube' => array(
        'type' => 'oembed',
        'url' => 'http://www.youtube.com/oembed?url=TINYIBEMBED&format=json',
    ),
    // Custom embeds
    'Imgur' => array(
        'type' => 'custom',
        'callback' => function ($url) {
            $matches = array();

            if (preg_match('/(?:https?:\/\/)i\.imgur\.com\/(\w{1,8})\.(\w{3,4})/i', $url, $matches)) {
                $hash = $matches[1];
                $extension = $matches[2];
                $url = "https://i.imgur.com/$hash.$extension";
                $is_video = in_array($extension, array('mp4', 'webm'));

                return array(
                    'type' => $is_video ? 'video' : 'photo',
                    'title' => "$hash.$extension",
                    'url' => $url,
                    'thumbnail_url' => "https://i.imgur.com/${hash}m.jpg",
                    'html' => buildEmbedHtml($url, $extension),
                );
            }

            return null;
        },
    ),
);

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

// Database
define('TINYIB_DBMIGRATE', false);    // Enable database migration tool  (see README for instructions)
define('TINYIB_DBBANS', 'bans');      // Bans table name (use the same bans table across boards for global bans)
define('TINYIB_DBCACHE', TINYIB_BOARD . '_cache'); // Cache table name
define('TINYIB_DBPOSTS', TINYIB_BOARD . '_posts'); // Posts table name

// Database configuration - MySQL
define('TINYIB_DBHOST', 'localhost'); // Hostname
define('TINYIB_DBPORT', 3306);        // Port  (set to 0 if you are using a UNIX socket as the host)
define('TINYIB_DBUSERNAME', '');      // Username
define('TINYIB_DBPASSWORD', '');      // Password
define('TINYIB_DBNAME', '');          // Database

// Database configuration - PDO
define('TINYIB_DBDRIVER', 'mysql');   // PDO driver to use (mysql / sqlite / pgsql / etc.)
define('TINYIB_DBDSN', '');           // Enter a custom DSN to override all of the connection/driver settings above  (see README for instructions)
//                                         When changing this, you should still set TINYIB_DBDRIVER appropriately.
//                                         If you're using PDO with a MySQL database, you should leave this blank.

// Cache.
// TINYIB_CACHE possible values:
//   memory - For tests only. Not stores anything between requests actually.
//   database - Default. Uses cache table in the database.
//   redis - Preferred if possible.
define('TINYIB_CACHE', 'database');
define('TINYIB_CACHE_REDIS_HOST', 'unix:/var/run/redis/redis.sock'); // Redis host.
