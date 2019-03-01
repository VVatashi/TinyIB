<?php

namespace Imageboard\Service;

use Imageboard\Exception\{
    AccessDeniedException,
    NotFoundException,
    ValidationException
};
use Imageboard\Functions;
use Imageboard\Cache\CacheInterface;
use Imageboard\Model\{Ban, Post};

class PostService implements PostServiceInterface
{
    /** @var CacheInterface */
    protected $cache;

    /** @var CryptographyServiceInterface */
    protected $cryptography_service;

    /**
     * Creates a new PostService instance.
     *
     * @param CacheInterface $cache
     * @param CryptographyServiceInterface $cryptography_service
     */
    public function __construct(
        CacheInterface $cache,
        CryptographyServiceInterface $cryptography_service
    ) {
        $this->cache = $cache;
        $this->cryptography_service = $cryptography_service;
    }

    /**
     * Checks if poster IP is not banned.
     *
     * @param string $ip
     * @param null|Ban &$ban
     *   (Output) Ban model.
     *
     * @return bool
     */
    protected function checkBanned(string $ip, &$ban) : bool
    {
        $ban = Ban::where('ip', $ip)->first();
        if (!isset($ban)) {
            return true;
        }

        return $ban->isExpired();
    }

    /**
     * Checks message length against the configured limit.
     *
     * @param string $message
     * @param int &$length
     *   (Output) Message length.
     *
     * @return bool
     */
    protected function checkMessageSize(string $message, &$length) : bool
    {
        // @todo Configure max message length.
        $max_length = 8000;
        $length = strlen($message);
        return $length <= $max_length;
    }

    /**
     * Checks time delay from last post with the same IP.
     *
     * @param string $ip
     * @param int &$remains_time
     *   (Output) Seconds passed from the last post with the same IP.
     *
     * @return bool True if delay time has passed.
     */
    protected function checkFlood(string $ip, &$remains_time) : bool
    {
        if (TINYIB_DELAY <= 0) {
            return true;
        }

        $post = Post::getLastPostByIP($ip);
        if (isset($post)) {
            /** @var Post */
            $timestamp = $post->getCreatedTimestamp();
            $remains_time = TINYIB_DELAY - (time() - $timestamp);
            return $remains_time < 0;
        }

        return true;
    }

    /**
     * {@inheritDoc}
     */
    public function processName(string $name) : array
    {
        $secure_tripcode = '';
        $secure_password_index = strpos($name, '##');
        if ($secure_password_index !== false) {
            // Split secure tripcode password from the name.
            $secure_password = substr($name, $secure_password_index + 2);
            $name = substr($name, 0, $secure_password_index);
            $salt = defined('TINYIB_TRIPSEED') ? TINYIB_TRIPSEED : '';
            $secure_tripcode = '!!' . $this->cryptography_service
                ->generateSecureTripcode($secure_password, $salt);
        }

        $tripcode = '';
        $password_index = strpos($name, '#');
        if ($password_index !== false) {
            // Split tripcode password from name.
            $password = substr($name, $password_index + 1);
            $name = substr($name, 0, $password_index);
            $tripcode = $this->cryptography_service->generateTripcode($password);
        }

        return [
            'name' => $name,
            'tripcode' => $tripcode . $secure_tripcode,
        ];
    }

    /**
     * Escapes HTML special characters.
     *
     * @param string $string
     *
     * @return string
     */
    protected function cleanString(string $string) : string
    {
        $search = ['<', '>'];
        $replace = ['&lt;', '&gt;'];
        return str_replace($search, $replace, $string);
    }

    /**
     * Processes post links.
     *
     * @param string $message
     *
     * @return string
     */
    protected function postLink(string $message) : string
    {
        return preg_replace_callback('/&gt;&gt;([0-9]+)/', function ($matches) {
            $id = (int)$matches[1];
            $post = Post::find($id);
            if ($post !== null) {
                /** @var Post */
                $thread_id = $post->isThread() ? $post->id : $post->parent_id;
                return '<a href="/' . TINYIB_BOARD . "/res/$thread_id#$id\">" . $matches[0] . '</a>';
            }

            return $matches[0];
        }, $message);
    }

    /**
     * Processes quotes.
     *
     * @param string $message
     *
     * @return string
     */
    protected function colorQuote(string $message) : string
    {
        if (substr($message, -1, 1) != "\n") {
            $message .= "\n";
        }

        return preg_replace('/^(&gt;[^\>](.*))\n/m', "[quote]$1[/quote]\n", $message);
    }

    /**
     * Processes links.
     *
     * @param string $message
     *
     * @return string
     */
    protected function makeLinksClickable(string $message) : string
    {
        $url_pattern =
'/
    https?:\/\/
    [-a-zA-Z0-9@:%._\+~#=]{2,}
    \.[a-z]{2,}\b
    [-a-zA-Z0-9@:%_\+.~#?&\/=]*
/x';

        return preg_replace($url_pattern, '<a href="$0">$0</a>', $message);
    }

    /**
     * Processes dice roll.
     *
     * @param string $message
     *
     * @return string
     */
    protected function dice($message)
    {
        return preg_replace_callback('/##(\d+)d(\d+)##/si', function ($matches) {
            $count = min(max((int)$matches[1], 1), TINYIB_DICE_MAX_COUNT);
            $max = min(max((int)$matches[2], 1), TINYIB_DICE_MAX_VALUE);

            $sum = 0;
            $results = [];

            for ($i = 0; $i < $count; ++$i) {
                $value = mt_rand(1, $max);

                $sum += $value;
                $results[] = $value;
            }

            $info = implode(', ', $results);

            return "<span class=\"dice\">##${count}d$max## = $info ($sum)</span>";
        }, $message);
    }

    /**
     * Checks duplicate file.
     *
     * @param string $hash
     * @param Post[] &$posts
     *   (Output) Posts with the same file.
     *
     * @return bool
     */
    protected function checkDuplicateFile(string $hash, &$posts) : bool
    {
        $posts = Post::getPostsByHex($hash)->all();
        return empty($posts);
    }

    /**
     * {@inheritDoc}
     */
    public function create(
        string $name,
        string $email,
        string $subject,
        string $message,
        string $password,
        string $ip,
        int $user_id = 0,
        int $parent = 0,
        bool $rawpost = false
    ) : Post {
        global $tinyib_uploads;

        list($logged_in, $is_admin) = Functions::manageCheckLogIn();
        $rawpost = $logged_in && $rawpost;

        if (!$logged_in) {
            $ban = null;
            if (!$this->checkBanned($ip, $ban)) {
                $expire = $ban->isPermanent()
                    ? '<br>This ban is permanent and will not expire.'
                    : '<br>This ban will expire ' . date('y/m/d(D)H:i:s', $ban->getExpiresTimestamp());
                $reason = $ban->hasReason() ? '<br>Reason: ' . $ban->reason : '';
                throw new ValidationException('Your IP address ' . $ban->ip
                    . ' has been banned from posting on this image board.  ' . $expire . $reason);
            }

            $length = 0;
            if (!$this->checkMessageSize($message, $length)) {
                // @todo Configure max message length.
                $max_length = 8000;
                throw new ValidationException('Please shorten your message, or post it in multiple parts.'
                    . " Your message is $length characters long, and the maximum allowed is $max_length.");
            }

            $remains_time = 0;
            if (!$this->checkFlood($ip, $remains_time)) {
                throw new ValidationException('Please wait a moment before posting again.'
                    . " You will be able to make another post in $remains_time "
                    . Functions::plural('second', $remains_time) . '.');
            }
        }

        if ($parent !== TINYIB_NEWTHREAD) {
            $thread = Post::where([
                ['id', $parent],
                ['parent_id', 0],
                ['moderated', true],
            ])->get();
            if (!isset($thread)) {
                throw new NotFoundException('Invalid parent thread ID supplied, unable to create post.');
            }
        }

        $post = new Post();
        $post->parent_id = $parent;
        $post->ip = $ip;
        $post->user_id = $user_id;

        $nameAndTripcode = $this->processName($name);
        $post->name = $this->cleanString(substr($nameAndTripcode['name'], 0, 75));
        $post->tripcode = $nameAndTripcode['tripcode'];
        $post->email = $this->cleanString(str_replace('"', '&quot;', substr($email, 0, 75)));
        $post->subject = $this->cleanString(substr($subject, 0, 75));

        if ($rawpost) {
            // Treat message as a raw HTML.
            $post->message = $message;
        } else {
            $message = rtrim($message);
            $message = $this->cleanString($message);
            $message = $this->postLink($message);
            $message = $this->colorQuote($message);
            $message = $this->makeLinksClickable($message);
            $message = str_replace("\n", '<br>', $message);

            if (TINYIB_DICE_ENABLED) {
                $message = $this->dice($message);
            }

            $post->message = $message;
        }

        $post->password = !empty($password) ? md5(md5($password)) : '';

        if (isset($_FILES['file']) && !empty($_FILES['file']['name'])) {
            $file = $_FILES['file'];
        } elseif (isset($_FILES['file_mobile']) && !empty($_FILES['file_mobile']['name'])) {
            $file = $_FILES['file_mobile'];
        } else {
            $file = null;
        }

        if (!empty($file)) {
            Functions::validateFileUpload($file);

            if (!is_file($file['tmp_name']) || !is_readable($file['tmp_name'])) {
                throw new ValidationException('File transfer failure. Please retry the submission.');
            }

            if (TINYIB_MAXKB > 0 && filesize($file['tmp_name']) > TINYIB_MAXKB * 1024) {
                throw new ValidationException('That file is larger than ' . TINYIB_MAXKBDESC . '.');
            }

            $post->file_original = trim(htmlentities(substr($file['name'], 0, 50), ENT_QUOTES));
            $post->file_hex = md5_file($file['tmp_name']);
            $post->file_size = $file['size'];

            if (TINYIB_FILE_ALLOW_DUPLICATE === false) {
                $posts = [];
                if (!$this->checkDuplicateFile($post->file_hex, $posts)) {
                    $post = current($posts);
                    $id = $post->id;
                    $thread_id = $post->isThread() ? $id : $post->parent_id;
                    throw new ValidationException('Duplicate file uploaded.'
                        . " That file has already been posted <a href=\"res/$thread_id.html#$id\">here</a>.");
                }
            }

            $file_mime_split = explode(' ', trim(mime_content_type($file['tmp_name'])));
            if (count($file_mime_split) > 0) {
                $file_mime = strtolower(array_pop($file_mime_split));
            } else {
                if (!@getimagesize($file['tmp_name'])) {
                    throw new ValidationException('Failed to read the MIME type and size of the uploaded file.'
                        . ' Please retry the submission.');
                }

                $file_info = getimagesize($file['tmp_name']);
                $file_mime = mime_content_type($file_location);
            }

            // If can't obtain the file mime, try get it from extension
            if (empty($file_mime) || $file_mime === 'application/octet-stream') {
                $mime_types = [
                    'jpg' => 'image/jpeg',
                    'jpeg' => 'image/jpeg',
                    'png' => 'image/png',
                    'gif' => 'image/gif',
                    'mp3' => 'audio/mpeg',
                    'mp4' => 'video/mp4',
                    'webm' => 'video/webm',
                ];

                $parts = explode('.', $file['name']);
                $extension = end($parts);

                if (isset($mime_types[$extension])) {
                    $file_mime = $mime_types[$extension];
                }
            }

            if (empty($file_mime)) {
                throw new ValidationException('Can\'t determine the type of uploaded file.');
            }

            if (!isset($tinyib_uploads[$file_mime])) {
                throw new ValidationException("File type $file_mime is not supported.");
            }

            $file_name = time() . substr(microtime(), 2, 3);
            $post->file = $file_name . '.' . $tinyib_uploads[$file_mime][0];

            $file_location = 'src/' . $post->file;
            if (!move_uploaded_file($file['tmp_name'], $file_location)) {
                throw new \Exception('Could not copy uploaded file.');
            }

            if ($file['size'] !== filesize($file_location)) {
                unlink($file_location);
                throw new ValidationException('File transfer failure. Please go back and try again.');
            }

            if (in_array($file_mime, [
                'audio/webm',
                'video/webm',
                'audio/mp4',
                'video/mp4',
            ])) {
                // Determine the video size.
                $width = explode("\n", shell_exec('mediainfo --Inform="Video;%Width%\n" ' . $file_location));
                $height = explode("\n", shell_exec('mediainfo --Inform="Video;%Height%\n" ' . $file_location));

                $width = (int)reset($width);
                $height = (int)reset($height);

                $width = max(0, $width);
                $height = max(0, $height);

                $post->image_width = $width;
                $post->image_height = $height;

                if ($width > 0 && $height > 0) {
                    // Create a video thumbnail.
                    list($thumb_maxwidth, $thumb_maxheight) = Functions::thumbnailDimensions($post);
                    $post->thumb = "${file_name}s.jpg";
                    $size = max($thumb_maxwidth, $thumb_maxheight);
                    $thumb = $post->thumb;
                    shell_exec("ffmpegthumbnailer -s $size -t 00:00:00 -i $file_location -o thumb/$thumb");

                    $thumb_info = getimagesize("thumb/$thumb");
                    $post->thumb_width = $thumb_info[0];
                    $post->thumb_height = $thumb_info[1];

                    if ($post->thumb_width <= 0 || $post->thumb_height <= 0) {
                        unlink($file_location);
                        unlink("thumb/$thumb");
                        throw new ValidationException('Sorry, your video appears to be corrupt.');
                    }
                }
            } elseif (in_array($file_mime, [
                'image/jpeg',
                'image/pjpeg',
                'image/png',
                'image/gif',
                'application/x-shockwave-flash',
            ])) {
                // Determine the image size.
                $output = [];

                if ($file_mime === 'image/gif') {
                    exec("identify -format '%w %h' ${file_location}[0]", $output);
                } else {
                    exec("identify -format '%w %h' $file_location", $output);
                }

                $output = explode(' ', reset($output));

                if (count($output) < 2) {
                    throw new ValidationException('Image appears to be corrupt.');
                }

                list($width, $height) = $output;
                $post->image_width = $width;
                $post->image_height = $height;
            }

            if (isset($tinyib_uploads[$file_mime][1])) {
                // Use the static thumbnail.
                $thumbfile_split = explode('.', $tinyib_uploads[$file_mime][1]);
                $post->thumb = $file_name . 's.' . array_pop($thumbfile_split);

                $thumb = $post->thumb;
                if (!copy($tinyib_uploads[$file_mime][1], "thumb/$thumb")) {
                    unlink($file_location);
                    throw new \Exception('Could not create thumbnail.');
                }
            } elseif (in_array($file_mime, [
                'image/jpeg',
                'image/pjpeg',
                'image/png',
                'image/gif',
            ])) {
                // Create an image thumbnail.
                $post->thumb = $file_name . 's.' . $tinyib_uploads[$file_mime][0];
                list($thumb_maxwidth, $thumb_maxheight) = Functions::thumbnailDimensions($post);

                $thumb = $post->thumb;
                if (!Functions::createThumbnail($file_location, "thumb/$thumb", $thumb_maxwidth, $thumb_maxheight)) {
                    unlink($file_location);
                    throw new \Exception('Could not create thumbnail.');
                }
            }

            $thumb = $post->thumb;
            if (!empty($thumb)) {
                $thumb_info = getimagesize("thumb/$thumb");
                $post->thumb_width = $thumb_info[0];
                $post->thumb_height = $thumb_info[1];
            }
        }

        if (empty($post->file)) {
            // No file uploaded.
            if ($post->isThread() && !empty($tinyib_uploads) && !TINYIB_NOFILEOK) {
                throw new ValidationException('A file is required to start a thread.');
            }

            if (empty(str_replace('<br>', '', $post->message))) {
                $allowed = !empty($tinyib_uploads) ? ' and/or upload a file' : '';
                throw new ValidationException("Please enter a message$allowed.");
            }
        }

        if (!$logged_in && ((empty($post->file) && TINYIB_REQMOD == 'files') || TINYIB_REQMOD == 'all')) {
            $post->moderated = false;
        } else {
            $post->moderated = true;
        }

        $now = (new \DateTime())->getTimestamp();
        $post->bumped_at = $now;
        $post->save();

        if ($post->isModerated()) {
            Post::trimThreads();

            if ($post->isReply()) {
                $parent = $post->parent_id;
                $this->cache->deletePattern(TINYIB_BOARD . ":thread:$parent:*");
                $this->cache->deletePattern(TINYIB_BOARD . ":mobile:thread:$parent:page:*");

                if (strtolower($post->email) !== 'sage') {
                    if (TINYIB_MAXREPLIES == 0
                        || Post::getReplyCountByThreadID($parent) <= TINYIB_MAXREPLIES) {
                        $thread = Post::find($parent);
                        if (isset($thread)) {
                            $thread->bumped_at = time();
                            $thread->save();
                        }
                    }
                }
            } else {
                $id = $post->id;
                $this->cache->deletePattern(TINYIB_BOARD . ":thread:$id:*");
                $this->cache->deletePattern(TINYIB_BOARD . ":mobile:thread:$id:page:*");
            }

            $this->cache->deletePattern(TINYIB_BOARD . ':page:*');
            $this->cache->deletePattern(TINYIB_BOARD . ':mobile:page:*');
        }

        return $post;
    }

    /**
     * {@inheritDoc}
     */
    public function delete(int $id, string $password)
    {
        /** @var Post */
        $post = Post::find($id);
        if ($post === null) {
            throw new NotFoundException("Post #$id not found.");
        }

        $password_hash = md5(md5($password));
        if ($password_hash !== $post->password) {
            throw new AccessDeniedException('Invalid password.');
        }

        Post::deletePostByID($id);

        $thread_id = $post->isThread() ? $id : $post->parent_id;
        $this->cache->deletePattern(TINYIB_BOARD . ":thread:$thread_id:*");
        $this->cache->deletePattern(TINYIB_BOARD . ':page:*');
        $this->cache->deletePattern(TINYIB_BOARD . ':mobile:page:*');
    }
}
