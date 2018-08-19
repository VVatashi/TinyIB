<?php

namespace TinyIB;

use TinyIB\Model\PostInterface;

class Functions
{
    /**
     * Returns singular or plural form of the word depending on the count.
     *
     * @param string $singular
     *   Word.
     * @param int $count
     *   Count.
     * @param null|string $plural
     *   Plural form of the word (optional). If not specified, adds the 's' suffix to the singular form.
     *
     * @return string
     */
    public static function plural(string $singular, int $count, string $plural = 's') : string
    {
        if ($plural === 's') {
            $plural = $singular . $plural;
        }

        return $count === 1 ? $singular : $plural;
    }

    /**
     * Deletes image & thumbnail of the post.
     *
     * @param PostInterface $post
     */
    public static function deletePostImages(PostInterface $post)
    {
        // TODO: Exception handling & logging.

        if (!static::isEmbed($post->getFileHash()) && !empty($post->getFileName())) {
            $path = 'src/' . $post->getFileName();
            if (file_exists($path)) {
                unlink($path);
            }
        }

        if (!empty($post->getThumbnailName())) {
            $path = 'thumb/' . $post->getThumbnailName();
            if (file_exists($path)) {
                unlink($path);
            }
        }
    }

    /**
     * Checks if user is logged in.
     *
     * @return bool[]
     *   Array keys:
     *     0 - true if user is logged in;
     *     1 - true if user is admin.
     */
    public static function manageCheckLogIn()
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

    /**
     * Validates uploaded file.
     *
     * @throws \Exception
     */
    public static function validateFileUpload()
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

    /**
     * Checks thumbnail size.
     *
     * @param PostInterface $post
     *
     * @return int[]
     *   Thumbnail size.
     */
    public static function thumbnailDimensions(PostInterface $post)
    {
        if ($post->isThread()) {
            $max_width = TINYIB_MAXWOP;
            $max_height = TINYIB_MAXHOP;
        } else {
            $max_width = TINYIB_MAXW;
            $max_height = TINYIB_MAXH;
        }

        $width = $post->getImageWidth();
        $height = $post->getImageHeight();
        return $width > $max_width || $height > $max_height
            ? [$max_width, $max_height]
            : [$width, $height];
    }

    /**
     * Creates thumbnail.
     *
     * @param string $file_location
     * @param string $thumb_location
     * @param int $new_w
     * @param int $new_h
     *
     * @return bool
     */
    public static function createThumbnail($file_location, $thumb_location, $new_w, $new_h)
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
                static::fastimagecopyresampled($dst_img, $src_img, 0, 0, 0, 0, $thumb_w, $thumb_h, $old_x, $old_y);
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
            } else {
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
                if (TINYIB_FILE_OPTIMIZE_PNG) {
                    exec("pngoptimizercl -file:$thumb_location", $discard, $exit_status);
                }
            }

            if ($exit_status != 0) {
                return false;
            }
        }

        return true;
    }

    /**
     * Resizes image.
     *
     * @param resource $dst_image
     * @param resource $src_image
     * @param int $dst_x
     * @param int $dst_y
     * @param int $src_x
     * @param int $src_y
     * @param int $dst_w
     * @param int $dst_h
     * @param int $src_w
     * @param int $src_h
     * @param int $quality
     *
     * @return bool
     */
    protected static function fastimagecopyresampled(
        &$dst_image,
        &$src_image,
        $dst_x,
        $dst_y,
        $src_x,
        $src_y,
        $dst_w,
        $dst_h,
        $src_w,
        $src_h,
        $quality = 3
    ) {
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

    /**
     * Adds overlay to a video.
     *
     * @param string $thumb_location
     */
    public static function addVideoOverlay($thumb_location)
    {
        $overlay = 'images/video_overlay.png';
        if (file_exists($overlay)) {
            if (substr($thumb_location, -4) == ".jpg") {
                $thumbnail = imagecreatefromjpeg($thumb_location);
            } else {
                $thumbnail = imagecreatefrompng($thumb_location);
            }
            list($width, $height, $type, $attr) = getimagesize($thumb_location);

            $overlay_play = imagecreatefrompng($overlay);
            imagealphablending($overlay_play, false);
            imagesavealpha($overlay_play, true);
            list($overlay_width, $overlay_height, $overlay_type, $overlay_attr) = getimagesize($overlay);

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

    /**
     * Finds all positions of a substring in the string.
     *
     * @param string $haystack
     * @param string $needle
     * @param int $offset
     *
     * @return int[]
     */
    public static function strallpos($haystack, $needle, $offset = 0)
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

    /**
     * Retrives contents from url.
     *
     * @param string $url
     *
     * @return string
     */
    public static function url_get_contents($url)
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

    /**
     * Determines if file is embed.
     *
     * @param string $file_hex
     *
     * @return bool
     */
    public static function isEmbed($file_hex)
    {
        global $tinyib_embeds;
        return in_array($file_hex, array_keys($tinyib_embeds));
    }

    /**
     * Returns embed data.
     *
     * @param string $url
     *
     * @return array
     */
    public static function getEmbed($url)
    {
        global $tinyib_embeds;

        function getOEmbed($service_url, $url)
        {
            $service_url = str_ireplace("TINYIBEMBED", urlencode($url), $service_url);
            return json_decode(Functions::url_get_contents($service_url), true);
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

    /**
     * Determines if board is installed via git.
     *
     * @return bool
     */
    public static function installedViaGit()
    {
        return is_dir('.git');
    }
}
