<?php

namespace TinyIB\Controller;

use GuzzleHttp\Psr7\Response;
use Psr\Http\Message\ResponseInterface;
use Psr\Http\Message\ServerRequestInterface;
use TinyIB\Cache\CacheInterface;
use TinyIB\Functions;
use TinyIB\Model\Post;
use TinyIB\Repository\PostRepositoryInterface;
use TinyIB\Service\BanServiceInterface;
use TinyIB\Service\PostServiceInterface;
use TinyIB\Service\RendererServiceInterface;

final class PostController implements PostControllerInterface
{
    /** @var \TinyIB\Cache\CacheInterface $cache */
    protected $cache;

    /** @var \TinyIB\Repository\PostRepositoryInterface $post_repository */
    protected $post_repository;

    /** @var \TinyIB\Service\BanServiceInterface $ban_service */
    protected $ban_service;

    /** @var \TinyIB\Service\PostServiceInterface $post_service */
    protected $post_service;

    /** @var \TinyIB\Service\RendererServiceInterface $renderer */
    protected $renderer;

    /**
     * Constructs new post controller.
     *
     * @param \TinyIB\Cache\CacheInterface $cache
     * @param \TinyIB\Repository\PostRepositoryInterface $post_repository
     * @param \TinyIB\Service\BanServiceInterface $renderer
     * @param \TinyIB\Service\PostServiceInterface $renderer
     * @param \TinyIB\Service\RendererServiceInterface $renderer
     */
    public function __construct(
        CacheInterface $cache,
        PostRepositoryInterface $post_repository,
        BanServiceInterface $ban_service,
        PostServiceInterface $post_service,
        RendererServiceInterface $renderer
    ) {
        $this->cache = $cache;
        $this->post_repository = $post_repository;
        $this->ban_service = $ban_service;
        $this->post_service = $post_service;
        $this->renderer = $renderer;
    }

    protected function cleanString($string)
    {
        $search = array("<", ">");
        $replace = array("&lt;", "&gt;");

        return str_replace($search, $replace, $string);
    }

    protected function isRawPost()
    {
        if (isset($_POST['rawpost'])) {
            list($loggedin, $isadmin) = Functions::manageCheckLogIn();
            if ($loggedin) {
                return true;
            }
        }

        return false;
    }

    protected function checkCAPTCHA()
    {
        if (TINYIB_CAPTCHA === 'recaptcha') {
            require_once 'src/recaptcha/autoload.php';

            $captcha = isset($_POST['g-recaptcha-response']) ? $_POST['g-recaptcha-response'] : '';
            $failed_captcha = true;

            $recaptcha = new \ReCaptcha\ReCaptcha(TINYIB_RECAPTCHA_SECRET);
            $resp = $recaptcha->verify($captcha, $_SERVER['REMOTE_ADDR']);
            if ($resp->isSuccess()) {
                $failed_captcha = false;
            }

            if ($failed_captcha) {
                $captcha_error = 'Failed CAPTCHA.';
                $error_reason = '';

                if (count($resp->getErrorCodes()) == 1) {
                    $error_codes = $resp->getErrorCodes();
                    $error_reason = $error_codes[0];
                }

                if ($error_reason == 'missing-input-response') {
                    $captcha_error .= ' Please click the checkbox labeled "I\'m not a robot".';
                } else {
                    $captcha_error .= ' Reason:';
                    foreach ($resp->getErrorCodes() as $error) {
                        $captcha_error .= '<br>' . $error;
                    }
                }
                throw new \Exception($captcha_error);
            }
        } elseif (TINYIB_CAPTCHA) { // Simple CAPTCHA
            $captcha = isset($_POST['captcha']) ? strtolower(trim($_POST['captcha'])) : '';
            $captcha_solution = isset($_SESSION['tinyibcaptcha']) ? strtolower(trim($_SESSION['tinyibcaptcha'])) : '';

            if ($captcha == '') {
                throw new \Exception('Please enter the CAPTCHA text.');
            } elseif ($captcha != $captcha_solution) {
                throw new \Exception('Incorrect CAPTCHA text entered.  Please try again.<br>Click the image to retrieve a new CAPTCHA.');
            }
        }
    }

    protected function checkBanned()
    {
        $ban = $this->ban_service->getByIP($_SERVER['REMOTE_ADDR']);
        if (isset($ban)) {
            if (!$ban->isExpired()) {
                $expire = $ban->isPermanent()
                    ? '<br>This ban is permanent and will not expire.'
                    : '<br>This ban will expire ' . date('y/m/d(D)H:i:s', $ban->getExpiresDate());
                $reason = $ban->hasReason() ? '<br>Reason: ' . $ban->getReason() : '';
                throw new \Exception('Your IP address ' . $ban->getIP() . ' has been banned from posting on this image board.  ' . $expire . $reason);
            } else {
                $this->ban_service->removeExpired();
            }
        }
    }

    protected function checkMessageSize($message)
    {
        $length = strlen($message);
        if ($length > 8000) {
            throw new \Exception("Please shorten your message, or post it in multiple parts. Your message is $length characters long, and the maximum allowed is 8000.");
        }
    }

    protected function checkFlood()
    {
        if (TINYIB_DELAY > 0) {
            $ip = $_SERVER['REMOTE_ADDR'];
            /** @var \TinyIB\Model\PostInterface $last_post */
            $last_post = $this->post_repository->getLastPostByIP($ip);
            if ($last_post !== null) {
                $timestamp = $last_post->getCreateTime();
                if (time() - $timestamp < TINYIB_DELAY) {
                    throw new \Exception("Please wait a moment before posting again.  You will be able to make another post in " . (TINYIB_DELAY - (time() - $timestamp)) . " " . Functions::plural('second', (TINYIB_DELAY - (time() - $timestamp))) . '.');
                }
            }
        }
    }

    protected function setParent($parent)
    {
        if (isset($_POST["parent"])) {
            if ($_POST["parent"] != TINYIB_NEWTHREAD) {
                if (!$this->post_repository->isThreadExistsByID($_POST['parent'])) {
                    throw new \Exception("Invalid parent thread ID supplied, unable to create post.");
                }

                return $_POST["parent"];
            }
        }

        return TINYIB_NEWTHREAD;
    }

    protected function _postLink($matches)
    {
        /** @var \TinyIB\Model\PostInterface $post */
        $post = $this->post_repository->getPostByID($matches[1]);
        if ($post !== null) {
            $id = $post->isThread() ? $post->getID() : $post->getParentID();
            return '<a href="/' . TINYIB_BOARD . "/res/$id#" . $matches[1] . '">' . $matches[0] . '</a>';
        }

        return $matches[0];
    }

    protected function postLink($message)
    {
        return preg_replace_callback('/&gt;&gt;([0-9]+)/', [$this, '_postLink'], $message);
    }

    protected function colorQuote($message)
    {
        if (substr($message, -1, 1) != "\n") {
            $message .= "\n";
        }
        return preg_replace('/^(&gt;[^\>](.*))\n/m', '<span class="unkfunc">\\1</span>' . "\n", $message);
    }

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

            return "<span class=\"dice\" title=\"$info\">##${count}d$max## = $sum</span>";
        }, $message);
    }

    protected function checkDuplicateFile($hash)
    {
        $hexmatches = $this->post_repository->getPostsByHex($hash);

        if (count($hexmatches) > 0) {
            foreach ($hexmatches as $hexmatch) {
                throw new \Exception("Duplicate file uploaded. That file has already been posted <a href=\"res/" . (($hexmatch["parent"] == TINYIB_NEWTHREAD) ? $hexmatch["id"] : $hexmatch["parent"]) . ".html#" . $hexmatch["id"] . "\">here</a>.");
            }
        }
    }

    /**
     * {@inheritDoc}
     */
    public function create(ServerRequestInterface $request) : ResponseInterface
    {
        global $tinyib_embeds, $tinyib_uploads;

        $redirect_url = '/' . TINYIB_BOARD . '/';

        if (TINYIB_DBMIGRATE) {
            $message = "Posting is currently disabled.\nPlease try again in a few moments.";
            return new Response(503, [], $message);
        }

        list($logged_in, $is_admin) = Functions::manageCheckLogIn();
        $rawpost = $this->isRawPost();

        $data = array_intersect_key($request->getParsedBody(), array_flip([
            'name',
            'email',
            'subject',
            'message',
            'password',
            'embed',
            'parent',
        ]));

        if (!$logged_in) {
            $this->checkCAPTCHA();
            $this->checkBanned();
            $this->checkMessageSize($data['message']);
            $this->checkFlood();
        }

        $post = new Post((int)$data['parent']);
        $post->setIP($_SERVER['REMOTE_ADDR']);

        $nameAndTripcode = $this->post_service->processName($data['name']);
        $post->setName($this->cleanString(substr($nameAndTripcode['name'], 0, 75)));
        $post->setTripcode($nameAndTripcode['tripcode']);
        $post->setEmail($this->cleanString(str_replace('"', '&quot;', substr($data['email'], 0, 75))));
        $post->setSubject($this->cleanString(substr($data['subject'], 0, 75)));

        if ($rawpost) {
            $rawposttext = ($is_admin)
                ? ' <span style="color: red;">## Admin</span>'
                : ' <span style="color: purple;">## Mod</span>';
            $post->setMessage($data['message']); // Treat message as raw HTML
        } else {
            $rawposttext = '';
            $message = $this->colorQuote($this->postLink($this->cleanString(rtrim($data['message']))));
            $message = $this->renderer->makeLinksClickable($message);
            $message = str_replace("\n", '<br>', $message);

            if (TINYIB_DICE_ENABLED) {
                $message = $this->dice($message);
            }

            $post->setMessage($message);
        }

        $post->setPassword(!empty($data['password']) ? md5(md5($data['password'])) : '');

        if (isset($data['embed']) && trim(!empty($data['embed']))) {
            list($service, $embed) = Functions::getEmbed(trim($data['embed']));

            if (empty($embed) || !isset($embed['html']) || !isset($embed['title']) || !isset($embed['thumbnail_url'])) {
                $embeds = implode("/", array_keys($tinyib_embeds));
                $message = "Invalid embed URL. Only $embeds URLs are supported.";
                return new Response(400, [], $message);
            }

            $post->setFileHash($service);
            $temp_file = time() . substr(microtime(), 2, 3);
            $file_location = 'thumb/' . $temp_file;
            file_put_contents($file_location, Functions::url_get_contents($embed['thumbnail_url']));

            $file_info = getimagesize($file_location);
            $file_mime = mime_content_type($file_location);
            $post->setImageWidth($file_info[0]);
            $post->setImageHeight($file_info[1]);

            if ($file_mime === 'image/jpeg') {
                $post->setThumbnailName($temp_file . '.jpg');
            } elseif ($file_mime === 'image/gif') {
                $post->setThumbnailName($temp_file . '.gif');
            } elseif ($file_mime === 'image/png') {
                $post->setThumbnailName($temp_file . '.png');
            } else {
                return new Response(500, [], 'Error while processing audio/video.');
            }
            $thumb_location = 'thumb/' . $post->getThumbnailName();

            list($thumb_maxwidth, $thumb_maxheight) = Functions::thumbnailDimensions($post);

            if (!Functions::createThumbnail($file_location, $thumb_location, $thumb_maxwidth, $thumb_maxheight)) {
                return new Response(500, [], 'Could not create thumbnail.');
            }

            if ($embed['type'] !== 'photo') {
                Functions::addVideoOverlay($thumb_location);
            }

            $thumb_info = getimagesize($thumb_location);
            $post->setThumbnailWidth($thumb_info[0]);
            $post->setThumbnailHeight($thumb_info[1]);

            $post->setOriginalFileName($this->cleanString($embed['title']));
            $post->setFileName($embed['html']);
        } elseif (isset($_FILES['file']) && !empty($_FILES['file']['name'])) {
            Functions::validateFileUpload();

            if (!is_file($_FILES['file']['tmp_name']) || !is_readable($_FILES['file']['tmp_name'])) {
                return new Response(500, [], 'File transfer failure. Please retry the submission.');
            }

            if (TINYIB_MAXKB > 0 && filesize($_FILES['file']['tmp_name']) > TINYIB_MAXKB * 1024) {
                return new Response(400, [], 'That file is larger than ' . TINYIB_MAXKBDESC . '.');
            }

            $post->setOriginalFileName(trim(htmlentities(substr($_FILES['file']['name'], 0, 50), ENT_QUOTES)));
            $post->setFileHash(md5_file($_FILES['file']['tmp_name']));
            $post->setFileSize($_FILES['file']['size']);

            if (TINYIB_FILE_ALLOW_DUPLICATE === false) {
                $this->checkDuplicateFile($post->getFileHash());
            }

            $file_mime_split = explode(' ', trim(mime_content_type($_FILES['file']['tmp_name'])));
            if (count($file_mime_split) > 0) {
                $file_mime = strtolower(array_pop($file_mime_split));
            } else {
                if (!@getimagesize($_FILES['file']['tmp_name'])) {
                    $message = 'Failed to read the MIME type and size of the uploaded file.'
                        . ' Please retry the submission.';
                    return new Response(500, [], $message);
                }

                $file_info = getimagesize($_FILES['file']['tmp_name']);
                $file_mime = mime_content_type($file_location);
            }

            // If can't obtain file mime, try get it from extension
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

                $parts = explode('.', $_FILES['file']['name']);
                $extension = end($parts);

                if (isset($mime_types[$extension])) {
                    $file_mime = $mime_types[$extension];
                }
            }

            if (empty($file_mime) || !isset($tinyib_uploads[$file_mime])) {
                return new Response(500, [], $this->renderer->supportedFileTypes());
            }

            $file_name = time() . substr(microtime(), 2, 3);
            $post->setFileName($file_name . '.' . $tinyib_uploads[$file_mime][0]);

            $file_location = 'src/' . $post->getFileName();
            if (!move_uploaded_file($_FILES['file']['tmp_name'], $file_location)) {
                return new Response(500, [], "Could not copy uploaded file.");
            }

            if ($_FILES['file']['size'] !== filesize($file_location)) {
                unlink($file_location);
                return new Response(500, [], 'File transfer failure. Please go back and try again.');
            }

            if ($file_mime == "audio/webm" || $file_mime == "video/webm"
                || $file_mime == "audio/mp4" || $file_mime == "video/mp4") {
                $width = explode("\n", shell_exec('mediainfo --Inform="Video;%Width%\n" ' . $file_location));
                $height = explode("\n", shell_exec('mediainfo --Inform="Video;%Height%\n" ' . $file_location));
                $width = (int)reset($width);
                $height = (int)reset($height);
                $post->setImageWidth(max(0, $width));
                $post->setImageHeight(max(0, $height));

                if ($post->getImageWidth() > 0 && $post->getImageHeight() > 0) {
                    list($thumb_maxwidth, $thumb_maxheight) = Functions::thumbnailDimensions($post);
                    $post->setThumbnailName("${file_name}s.jpg");
                    $size = max($thumb_maxwidth, $thumb_maxheight);
                    $thumb = $post->getThumbnailName();
                    shell_exec("ffmpegthumbnailer -s $size -t 00:00:00 -i $file_location -o thumb/$thumb");

                    $thumb_info = getimagesize("thumb/$thumb");
                    $post->setThumbnailWidth($thumb_info[0]);
                    $post->setThumbnailHeight($thumb_info[1]);

                    if ($post->getThumbnailWidth() <= 0 || $post->getThumbnailHeight() <= 0) {
                        unlink($file_location);
                        unlink("thumb/$thumb");
                        return new Response(400, [], 'Sorry, your video appears to be corrupt.');
                    }

                    Functions::addVideoOverlay("thumb/$thumb");
                }
            } elseif (in_array($file_mime, [
                'image/jpeg',
                'image/pjpeg',
                'image/png',
                'image/gif',
                'application/x-shockwave-flash',
            ])) {
                $output = [];

                if ($file_mime === 'image/gif') {
                    exec("identify -format '%w %h' ${file_location}[0]", $output);
                } else {
                    exec("identify -format '%w %h' $file_location", $output);
                }

                $output = explode(' ', reset($output));

                if (count($output) < 2) {
                    return new Response(400, [], 'Image appears to be corrupt.');
                }

                list($width, $height) = $output;
                $post->setImageWidth($width);
                $post->setImageHeight($height);
            }

            if (isset($tinyib_uploads[$file_mime][1])) {
                $thumbfile_split = explode('.', $tinyib_uploads[$file_mime][1]);
                $post->setThumbnailName($file_name . 's.' . array_pop($thumbfile_split));

                $thumb = $post->getThumbnailName();
                if (!copy($tinyib_uploads[$file_mime][1], "thumb/$thumb")) {
                    unlink($file_location);
                    return new Response(500, [], 'Could not create thumbnail.');
                }

                if ($file_mime === 'application/x-shockwave-flash') {
                    Functions::addVideoOverlay("thumb/$thumb");
                }
            } elseif (in_array($file_mime, [
                'image/jpeg',
                'image/pjpeg',
                'image/png',
                'image/gif',
            ])) {
                $post->setThumbnailName($file_name . 's.' . $tinyib_uploads[$file_mime][0]);
                list($thumb_maxwidth, $thumb_maxheight) = Functions::thumbnailDimensions($post);

                $thumb = $post->getThumbnailName();
                if (!Functions::createThumbnail($file_location, "thumb/$thumb", $thumb_maxwidth, $thumb_maxheight)) {
                    unlink($file_location);
                    return new Response(500, [], 'Could not create thumbnail.');
                }
            }

            $thumb = $post->getThumbnailName();
            if (!empty($thumb)) {
                $thumb_info = getimagesize("thumb/$thumb");
                $post->setThumbnailWidth($thumb_info[0]);
                $post->setThumbnailHeight($thumb_info[1]);
            }
        }

        if (empty($post->getFileName())) { // No file uploaded
            $allowed = '';
            if (!empty($tinyib_uploads)) {
                $allowed = 'file';
            }

            if (!empty($tinyib_embeds)) {
                if ($allowed != '') {
                    $allowed .= ' or ';
                }

                $allowed .= 'embed URL';
            }

            if ($post->isThread() && !empty($allowed) && !TINYIB_NOFILEOK) {
                return new Response(400, [], "A $allowed is required to start a thread.");
            }

            if (empty(str_replace('<br>', '', $post->getMessage()))) {
                $allowed = $allowed != '' ? " and/or upload a $allowed" : '';
                return new Response(400, [], 'Please enter a message' . $allowed . '.');
            }
        }

        if (!$logged_in && ((empty($post->getFileName()) && TINYIB_REQMOD == 'files') || TINYIB_REQMOD == 'all')) {
            $post->setModerated(false);
        }

        $now = (new \DateTime())->getTimestamp();
        $post->setCreateTime($now);
        $post->setBumpTime($now);
        $post->setID($this->post_repository->insertPost($post));

        if ($post->isModerated()) {
            if (TINYIB_ALWAYSNOKO || strtolower($post->getEmail()) === 'noko') {
                $id = $post->isThread() ? $post->getID() : $post->getParentID();
                $redirect_url = '/' . TINYIB_BOARD . "/res/$id#" . $post->getID();
            }

            $this->post_repository->trimThreads();

            if ($post->isReply()) {
                $id = $post->getID();
                $this->cache->delete(TINYIB_BOARD . ":post:$id");
                $this->cache->delete(TINYIB_BOARD . ":index_post:$id");

                $parent = $post->getParentID();
                $this->cache->delete(TINYIB_BOARD . ":post:$parent");
                $this->cache->delete(TINYIB_BOARD . ":index_post:$parent");
                $this->cache->delete(TINYIB_BOARD . ":thread:$parent");

                if (strtolower($post->getEmail()) !== 'sage') {
                    if (TINYIB_MAXREPLIES == 0
                        || $this->post_repository->getReplyCountByThreadID($parent) <= TINYIB_MAXREPLIES) {
                        $this->post_repository->bumpThreadByID($parent);
                    }
                }
            } else {
                $id = $post->getID();
                $this->cache->delete(TINYIB_BOARD . ":post:$id");
                $this->cache->delete(TINYIB_BOARD . ":index_post:$id");
                $this->cache->delete(TINYIB_BOARD . ":thread:$id");
            }

            $this->cache->deletePattern(TINYIB_BOARD . ':page:*');
        }

        return new Response(302, ['Location' => $redirect_url]);
    }

    /**
     * {@inheritDoc}
     */
    public function delete(ServerRequestInterface $request) : ResponseInterface
    {
        $data = $request->getParsedBody();
        $id = isset($data['delete']) ? $data['delete'] : null;
        if (empty($id)) {
            $message = 'Tick the box next to a post and click "Delete" to delete it.';
            return new Response(400, [], $message);
        }

        if (TINYIB_DBMIGRATE) {
            $message = "Post deletion is currently disabled.\nPlease try again in a few moments.";
            return new Response(503, [], $message);
        }

        /** @var \TinyIB\Model\PostInterface $post */
        $post = $this->post_repository->getPostByID($id);
        if ($post === null) {
            $message = "Sorry, an invalid post identifier was sent.\nPlease go back, refresh the page, and try again.";
            return new Response(404, [], $message);
        }

        $password = isset($data['password']) ? $data['password'] : null;
        $password_hash = md5(md5($password));
        if ($password_hash !== $post->getPassword()) {
            return new Response(403, [], 'Invalid password.');
        }

        $this->post_repository->deletePostByID($post->getID());

        $thread_id = $post->isThread() ? $post->getID() : $post->getParentID();
        $this->cache->delete(TINYIB_BOARD . ':post:' . $post->getID());
        $this->cache->delete(TINYIB_BOARD . ':index_post:' . $thread_id);
        $this->cache->delete(TINYIB_BOARD . ':thread:' . $thread_id);
        $this->cache->deletePattern(TINYIB_BOARD . ':page:*');

        return new Response(200, [], 'Post deleted.');
    }
}
