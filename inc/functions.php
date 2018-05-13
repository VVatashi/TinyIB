<?php
if (!defined('TINYIB_BOARD')) {
    die('');
}

function cleanString($string)
{
    $search = array("<", ">");
    $replace = array("&lt;", "&gt;");

    return str_replace($search, $replace, $string);
}

function plural($singular, $count, $plural = 's')
{
    if ($plural == 's') {
        $plural = $singular . $plural;
    }
    return ($count == 1 ? $singular : $plural);
}

function newPost($parent = TINYIB_NEWTHREAD)
{
    return [
        'parent' => $parent,
        'timestamp' => '0',
        'bumped' => '0',
        'ip' => '',
        'name' => '',
        'tripcode' => '',
        'email' => '',
        'nameblock' => '',
        'subject' => '',
        'message' => '',
        'password' => '',
        'file' => '',
        'file_hex' => '',
        'file_original' => '',
        'file_size' => '0',
        'file_size_formatted' => '',
        'image_width' => '0',
        'image_height' => '0',
        'thumb' => '',
        'thumb_width' => '0',
        'thumb_height' => '0',
        'stickied' => '0',
        'moderated' => '1'
    ];
}

function convertBytes($number)
{
    $len = strlen($number);
    if ($len < 4) {
        return sprintf("%dB", $number);
    } elseif ($len <= 6) {
        return sprintf("%0.2fKB", $number / 1024);
    } elseif ($len <= 9) {
        return sprintf("%0.2fMB", $number / 1024 / 1024);
    }

    return sprintf("%0.2fGB", $number / 1024 / 1024 / 1024);
}

function nameAndTripcode($name)
{
    if (preg_match("/(#|!)(.*)/", $name, $regs)) {
        $cap = $regs[2];
        $cap_full = '#' . $regs[2];

        if (function_exists('mb_convert_encoding')) {
            $recoded_cap = mb_convert_encoding($cap, 'SJIS', 'UTF-8');
            if ($recoded_cap != '') {
                $cap = $recoded_cap;
            }
        }

        if (strpos($name, '#') === false) {
            $cap_delimiter = '!';
        } elseif (strpos($name, '!') === false) {
            $cap_delimiter = '#';
        } else {
            $cap_delimiter = (strpos($name, '#') < strpos($name, '!')) ? '#' : '!';
        }

        if (preg_match("/(.*)(" . $cap_delimiter . ")(.*)/", $cap, $regs_secure)) {
            $cap = $regs_secure[1];
            $cap_secure = $regs_secure[3];
            $is_secure_trip = true;
        } else {
            $is_secure_trip = false;
        }

        $tripcode = "";
        if ($cap != "") { // Copied from Futabally
            $cap = strtr($cap, "&amp;", "&");
            $cap = strtr($cap, "&#44;", ", ");
            $salt = substr($cap . "H.", 1, 2);
            $salt = preg_replace("/[^\.-z]/", ".", $salt);
            $salt = strtr($salt, ":;<=>?@[\\]^_`", "ABCDEFGabcdef");
            $tripcode = substr(crypt($cap, $salt), -10);
        }

        if ($is_secure_trip) {
            if ($cap != "") {
                $tripcode .= "!";
            }

            $tripcode .= "!" . substr(md5($cap_secure . TINYIB_TRIPSEED), 2, 10);
        }

        return array(preg_replace("/(" . $cap_delimiter . ")(.*)/", "", $name), $tripcode);
    }

    return array($name, "");
}

function _postLink($matches)
{
    global $post_repository;
    $post = $post_repository->postByID($matches[1]);

    if ($post) {
        return '<a href="/' . TINYIB_BOARD . '/res/' . ($post['parent'] == TINYIB_NEWTHREAD ? $post['id'] : $post['parent']) . '#' . $matches[1] . '">' . $matches[0] . '</a>';
    }

    return $matches[0];
}

function postLink($message)
{
    return preg_replace_callback('/&gt;&gt;([0-9]+)/', '_postLink', $message);
}

function colorQuote($message)
{
    if (substr($message, -1, 1) != "\n") {
        $message .= "\n";
    }
    return preg_replace('/^(&gt;[^\>](.*))\n/m', '<span class="unkfunc">\\1</span>' . "\n", $message);
}

function deletePostImages($post)
{
    // TODO: Exception handling & logging.

    if (!isEmbed($post['file_hex']) && !empty($post['file'])) {
        $path = 'src/' . $post['file'];
        if (file_exists($path)) {
            unlink($path);
        }
    }

    if (!empty($post['thumb'])) {
        $path = 'thumb/' . $post['thumb'];
        if (file_exists($path)) {
            unlink($path);
        }
    }
}

function checkCAPTCHA()
{
    if (TINYIB_CAPTCHA === 'recaptcha') {
        require_once 'inc/recaptcha/autoload.php';

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

function checkBanned()
{
    global $ban_repository;
    $ban = $ban_repository->banByIP($_SERVER['REMOTE_ADDR']);

    if ($ban) {
        if ($ban['expire'] == 0 || $ban['expire'] > time()) {
            $expire = ($ban['expire'] > 0) ? ('<br>This ban will expire ' . date('y/m/d(D)H:i:s', $ban['expire'])) : '<br>This ban is permanent and will not expire.';
            $reason = ($ban['reason'] == '') ? '' : ('<br>Reason: ' . $ban['reason']);
            throw new \Exception('Your IP address ' . $ban['ip'] . ' has been banned from posting on this image board.  ' . $expire . $reason);
        } else {
            $ban_repository->clearExpiredBans();
        }
    }
}

function checkFlood()
{
    global $post_repository;

    if (TINYIB_DELAY > 0) {
        $lastpost = $post_repository->lastPostByIP();
        if ($lastpost) {
            if ((time() - $lastpost['timestamp']) < TINYIB_DELAY) {
                throw new \Exception("Please wait a moment before posting again.  You will be able to make another post in " . (TINYIB_DELAY - (time() - $lastpost['timestamp'])) . " " . plural("second", (TINYIB_DELAY - (time() - $lastpost['timestamp']))) . ".");
            }
        }
    }
}

function checkMessageSize()
{
    if (strlen($_POST["message"]) > 8000) {
        throw new \Exception("Please shorten your message, or post it in multiple parts. Your message is " . strlen($_POST["message"]) . " characters long, and the maximum allowed is 8000.");
    }
}

function manageCheckLogIn()
{
    $loggedin = false;
    $isadmin = false;
    if (isset($_POST['managepassword'])) {
        if ($_POST['managepassword'] === TINYIB_ADMINPASS) {
            $_SESSION['tinyib'] = TINYIB_ADMINPASS;
        } elseif (TINYIB_MODPASS != '' && $_POST['managepassword'] === TINYIB_MODPASS) {
            $_SESSION['tinyib'] = TINYIB_MODPASS;
        }
    }

    if (isset($_SESSION['tinyib'])) {
        if ($_SESSION['tinyib'] === TINYIB_ADMINPASS) {
            $loggedin = true;
            $isadmin = true;
        } elseif (TINYIB_MODPASS != '' && $_SESSION['tinyib'] === TINYIB_MODPASS) {
            $loggedin = true;
        }
    }

    return array($loggedin, $isadmin);
}

function setParent()
{
    global $post_repository;

    if (isset($_POST["parent"])) {
        if ($_POST["parent"] != TINYIB_NEWTHREAD) {
            if (!$post_repository->threadExistsByID($_POST['parent'])) {
                throw new \Exception("Invalid parent thread ID supplied, unable to create post.");
            }

            return $_POST["parent"];
        }
    }

    return TINYIB_NEWTHREAD;
}

function isRawPost()
{
    if (isset($_POST['rawpost'])) {
        list($loggedin, $isadmin) = manageCheckLogIn();
        if ($loggedin) {
            return true;
        }
    }

    return false;
}

function validateFileUpload()
{
    switch ($_FILES['file']['error']) {
        case UPLOAD_ERR_OK:
            break;
        case UPLOAD_ERR_FORM_SIZE:
            throw new \Exception("That file is larger than " . TINYIB_MAXKBDESC . ".");
        case UPLOAD_ERR_INI_SIZE:
            throw new \Exception("The uploaded file exceeds the upload_max_filesize directive (" . ini_get('upload_max_filesize') . ") in php.ini.");
        case UPLOAD_ERR_PARTIAL:
            throw new \Exception("The uploaded file was only partially uploaded.");
        case UPLOAD_ERR_NO_FILE:
            throw new \Exception("No file was uploaded.");
        case UPLOAD_ERR_NO_TMP_DIR:
            throw new \Exception("Missing a temporary folder.");
        case UPLOAD_ERR_CANT_WRITE:
            throw new \Exception("Failed to write file to disk");
        default:
            throw new \Exception("Unable to save the uploaded file.");
    }
}

function checkDuplicateFile($hex)
{
    global $post_repository;
    $hexmatches = $post_repository->postsByHex($hex);

    if (count($hexmatches) > 0) {
        foreach ($hexmatches as $hexmatch) {
            throw new \Exception("Duplicate file uploaded. That file has already been posted <a href=\"res/" . (($hexmatch["parent"] == TINYIB_NEWTHREAD) ? $hexmatch["id"] : $hexmatch["parent"]) . ".html#" . $hexmatch["id"] . "\">here</a>.");
        }
    }
}

function thumbnailDimensions($post)
{
    if ($post['parent'] == TINYIB_NEWTHREAD) {
        $max_width = TINYIB_MAXWOP;
        $max_height = TINYIB_MAXHOP;
    } else {
        $max_width = TINYIB_MAXW;
        $max_height = TINYIB_MAXH;
    }
    return ($post['image_width'] > $max_width || $post['image_height'] > $max_height) ? array($max_width, $max_height) : array($post['image_width'], $post['image_height']);
}

function createThumbnail($file_location, $thumb_location, $new_w, $new_h)
{
    if (TINYIB_THUMBNAIL == 'gd') {
        $system = explode(".", $thumb_location);
        $system = array_reverse($system);
        if (preg_match("/jpg|jpeg/", $system[0])) {
            $src_img = imagecreatefromjpeg($file_location);
        } elseif (preg_match("/png/", $system[0])) {
            $src_img = imagecreatefrompng($file_location);
        } elseif (preg_match("/gif/", $system[0])) {
            $src_img = imagecreatefromgif($file_location);
        } else {
            return false;
        }

        if (!$src_img) {
            throw new \Exception("Unable to read uploaded file during thumbnailing. A common cause for this is an incorrect extension when the file is actually of a different type.");
        }

        $old_x = imageSX($src_img);
        $old_y = imageSY($src_img);
        $percent = ($old_x > $old_y) ? ($new_w / $old_x) : ($new_h / $old_y);
        $thumb_w = round($old_x * $percent);
        $thumb_h = round($old_y * $percent);

        $dst_img = imagecreatetruecolor($thumb_w, $thumb_h);
        if (preg_match("/png/", $system[0]) && imagepng($src_img, $thumb_location)) {
            imagealphablending($dst_img, false);
            imagesavealpha($dst_img, true);

            $color = imagecolorallocatealpha($dst_img, 0, 0, 0, 0);
            imagefilledrectangle($dst_img, 0, 0, $thumb_w, $thumb_h, $color);
            imagecolortransparent($dst_img, $color);

            imagecopyresampled($dst_img, $src_img, 0, 0, 0, 0, $thumb_w, $thumb_h, $old_x, $old_y);
        } else {
            fastimagecopyresampled($dst_img, $src_img, 0, 0, 0, 0, $thumb_w, $thumb_h, $old_x, $old_y);
        }

        if (preg_match("/png/", $system[0])) {
            if (!imagepng($dst_img, $thumb_location)) {
                return false;
            }
        } elseif (preg_match("/jpg|jpeg/", $system[0])) {
            if (!imagejpeg($dst_img, $thumb_location, 70)) {
                return false;
            }
        } elseif (preg_match("/gif/", $system[0])) {
            if (!imagegif($dst_img, $thumb_location)) {
                return false;
            }
        }

        imagedestroy($dst_img);
        imagedestroy($src_img);
    } else { // imagemagick
        $discard = '';
        $exit_status = 1;
        $extension = pathinfo($thumb_location, PATHINFO_EXTENSION);

        $output = [];

        if ($extension === 'gif') {
            exec("identify -format '%w %h' ${file_location}[0]", $output);
        }
        else {
            exec("identify -format '%w %h' $file_location", $output);
        }

        $output = explode(' ', reset($output));

        if (count($output) < 2) {
            return false;
        }

        list($width, $height) = $output;

        if (!is_numeric($width) || $width > TINYIB_FILE_MAXW) {
            return false;
        }

        if (!is_numeric($height) || $height > TINYIB_FILE_MAXH) {
            return false;
        }

        if ($extension === 'gif') {
            if (TINYIB_FILE_ANIM_GIF_THUMB) {
                exec("convert $file_location -auto-orient -thumbnail '" . $new_w . "x" . $new_h . "' -coalesce -layers OptimizeFrame -depth 4 -type palettealpha $thumb_location", $discard, $exit_status);
            } else {
                exec("convert ${file_location}[0] -auto-orient -thumbnail '" . $new_w . "x" . $new_h . "' -layers OptimizeFrame -depth 8 $thumb_location", $discard, $exit_status);
            }
        } else {
            exec("convert $file_location -auto-orient -thumbnail '" . $new_w . "x" . $new_h . "' -layers OptimizeFrame -depth 8 $thumb_location", $discard, $exit_status);
        }

        if ($extension === 'png') {
            exec("pngoptimizercl -file:$thumb_location", $discard, $exit_status);
        }

        if ($exit_status != 0) {
            return false;
        }
    }

    return true;
}

function fastimagecopyresampled(&$dst_image, &$src_image, $dst_x, $dst_y, $src_x, $src_y, $dst_w, $dst_h, $src_w, $src_h, $quality = 3)
{
    // Author: Tim Eckel - Date: 12/17/04 - Project: FreeRingers.net - Freely distributable.
    if (empty($src_image) || empty($dst_image)) {
        return false;
    }

    if ($quality <= 1) {
        $temp = imagecreatetruecolor($dst_w + 1, $dst_h + 1);

        imagecopyresized($temp, $src_image, $dst_x, $dst_y, $src_x, $src_y, $dst_w + 1, $dst_h + 1, $src_w, $src_h);
        imagecopyresized($dst_image, $temp, 0, 0, 0, 0, $dst_w, $dst_h, $dst_w, $dst_h);
        imagedestroy($temp);
    } elseif ($quality < 5 && (($dst_w * $quality) < $src_w || ($dst_h * $quality) < $src_h)) {
        $tmp_w = $dst_w * $quality;
        $tmp_h = $dst_h * $quality;
        $temp = imagecreatetruecolor($tmp_w + 1, $tmp_h + 1);

        imagecopyresized($temp, $src_image, $dst_x * $quality, $dst_y * $quality, $src_x, $src_y, $tmp_w + 1, $tmp_h + 1, $src_w, $src_h);
        imagecopyresampled($dst_image, $temp, 0, 0, 0, 0, $dst_w, $dst_h, $tmp_w, $tmp_h);
        imagedestroy($temp);
    } else {
        imagecopyresampled($dst_image, $src_image, $dst_x, $dst_y, $src_x, $src_y, $dst_w, $dst_h, $src_w, $src_h);
    }

    return true;
}

function addVideoOverlay($thumb_location)
{
    if (file_exists('video_overlay.png')) {
        if (substr($thumb_location, -4) == ".jpg") {
            $thumbnail = imagecreatefromjpeg($thumb_location);
        } else {
            $thumbnail = imagecreatefrompng($thumb_location);
        }
        list($width, $height, $type, $attr) = getimagesize($thumb_location);

        $overlay_play = imagecreatefrompng('video_overlay.png');
        imagealphablending($overlay_play, false);
        imagesavealpha($overlay_play, true);
        list($overlay_width, $overlay_height, $overlay_type, $overlay_attr) = getimagesize('video_overlay.png');

        if (substr($thumb_location, -4) == ".png") {
            imagecolortransparent($thumbnail, imagecolorallocatealpha($thumbnail, 0, 0, 0, 127));
            imagealphablending($thumbnail, true);
            imagesavealpha($thumbnail, true);
        }

        imagecopy($thumbnail, $overlay_play, ($width / 2) - ($overlay_width / 2), ($height / 2) - ($overlay_height / 2), 0, 0, $overlay_width, $overlay_height);

        if (substr($thumb_location, -4) == ".jpg") {
            imagejpeg($thumbnail, $thumb_location);
        } else {
            imagepng($thumbnail, $thumb_location);
        }
    }
}

function strallpos($haystack, $needle, $offset = 0)
{
    $result = array();
    for ($i = $offset; $i < strlen($haystack); $i++) {
        $pos = strpos($haystack, $needle, $i);
        if ($pos !== false) {
            $offset = $pos;
            if ($offset >= $i) {
                $i = $offset;
                $result[] = $offset;
            }
        }
    }
    return $result;
}

function url_get_contents($url)
{
    if (!function_exists('curl_init')) {
        return file_get_contents($url);
    }

    $ch = curl_init();
    curl_setopt($ch, CURLOPT_URL, $url);
    curl_setopt($ch, CURLOPT_FOLLOWLOCATION, true);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    $output = curl_exec($ch);
    curl_close($ch);

    return $output;
}

function isEmbed($file_hex)
{
    global $tinyib_embeds;
    return in_array($file_hex, array_keys($tinyib_embeds));
}

function getEmbed($url)
{
    global $tinyib_embeds;

    function getOEmbed($service_url, $url)
    {
        $service_url = str_ireplace("TINYIBEMBED", urlencode($url), $service_url);
        return json_decode(url_get_contents($service_url), true);
    }

    foreach ($tinyib_embeds as $name => $service) {
        if (is_string($service)) {
            // oEmbed by default
            $result = getOEmbed($service, $url);
        } elseif (is_array($service)) {
            if ($service['type'] === 'oembed') {
                $result = getOEmbed($service['url'], $url);
            } elseif ($service['type'] === 'custom') {
                $result = $service['callback']($url);
            }
        }

        if (!empty($result)) {
            return array($name, $result);
        }
    }

    return array('', array());
}

function installedViaGit()
{
    return is_dir('.git');
}

function dice($message)
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
