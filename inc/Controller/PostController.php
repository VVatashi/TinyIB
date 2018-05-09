<?php

namespace TinyIB\Controller;

use TinyIB\Response;

class PostController implements IPostController
{
    /** @var \TinyIB\Repository\IBanRepository $ban_repository */
    protected $ban_repository;

    /** @var \TinyIB\Repository\IPostRepository $post_repository */
    protected $post_repository;

    /** @var \TinyIB\Renderer\IRenderer $renderer */
    protected $renderer;

    /**
     * Constructs new post controller.
     *
     * @param \TinyIB\Repository\IBanRepository $ban_repository
     * @param \TinyIB\Repository\IPostRepository $post_repository
     * @param \TinyIB\Renderer\IRenderer $renderer
     */
    public function __construct($ban_repository, $post_repository, $renderer)
    {
        $this->ban_repository = $ban_repository;
        $this->post_repository = $post_repository;
        $this->renderer = $renderer;
    }

    /**
     * {@inheritDoc}
     */
    public function create($data)
    {
        global $tinyib_embeds, $tinyib_uploads;

        $redirect_url = 'index.html';

        if (TINYIB_DBMIGRATE) {
            $message = "Posting is currently disabled.\nPlease try again in a few moments.";
            return Response::serviceUnavailable($message);
        }

        list($logged_in, $is_admin) = manageCheckLogIn();
        $rawpost = isRawPost();

        if (!$logged_in) {
            checkCAPTCHA();
            checkBanned();
            checkMessageSize();
            checkFlood();
        }

        $post = newPost(setParent());
        $post['ip'] = $_SERVER['REMOTE_ADDR'];

        list($post['name'], $post['tripcode']) = nameAndTripcode($data['name']);

        $post['name'] = cleanString(substr($post['name'], 0, 75));
        $post['email'] = cleanString(str_replace('"', '&quot;', substr($data['email'], 0, 75)));
        $post['subject'] = cleanString(substr($data['subject'], 0, 75));

        if ($rawpost) {
            $rawposttext = ($is_admin)
                ? ' <span style="color: red;">## Admin</span>'
                : ' <span style="color: purple;">## Mod</span>';
            $post['message'] = $data['message']; // Treat message as raw HTML
        } else {
            $rawposttext = '';
            $message = colorQuote(postLink(cleanString(rtrim($data['message']))));
            $message = $this->renderer->makeLinksClickable($message);
            $post['message'] = str_replace("\n", '<br>', $message);

            if (TINYIB_DICE_ENABLED) {
                $post['message'] = dice($post['message']);
            }
        }

        $post['password'] = ($data['password'] != '') ? md5(md5($data['password'])) : '';

        if (isset($data['embed']) && trim($data['embed']) != '') {
            list($service, $embed) = getEmbed(trim($data['embed']));

            if (empty($embed) || !isset($embed['html']) || !isset($embed['title']) || !isset($embed['thumbnail_url'])) {
                $embeds = implode("/", array_keys($tinyib_embeds));
                $message = "Invalid embed URL. Only $embeds URLs are supported.";
                return Response::badRequest($message);
            }

            $post['file_hex'] = $service;
            $temp_file = time() . substr(microtime(), 2, 3);
            $file_location = 'thumb/' . $temp_file;
            file_put_contents($file_location, url_get_contents($embed['thumbnail_url']));

            $file_info = getimagesize($file_location);
            $file_mime = mime_content_type($file_location);
            $post['image_width'] = $file_info[0];
            $post['image_height'] = $file_info[1];

            if ($file_mime == 'image/jpeg') {
                $post['thumb'] = $temp_file . '.jpg';
            } elseif ($file_mime == 'image/gif') {
                $post['thumb'] = $temp_file . '.gif';
            } elseif ($file_mime == 'image/png') {
                $post['thumb'] = $temp_file . '.png';
            } else {
                return Response::serverError('Error while processing audio/video.');
            }
            $thumb_location = 'thumb/' . $post['thumb'];

            list($thumb_maxwidth, $thumb_maxheight) = thumbnailDimensions($post);

            if (!createThumbnail($file_location, $thumb_location, $thumb_maxwidth, $thumb_maxheight)) {
                return Response::serverError("Could not create thumbnail.");
            }

            if ($embed['type'] !== 'photo') {
                addVideoOverlay($thumb_location);
            }

            $thumb_info = getimagesize($thumb_location);
            $post['thumb_width'] = $thumb_info[0];
            $post['thumb_height'] = $thumb_info[1];

            $post['file_original'] = cleanString($embed['title']);
            $post['file'] = $embed['html'];
        } elseif (isset($_FILES['file']) && $_FILES['file']['name'] != '') {
            validateFileUpload();

            if (!is_file($_FILES['file']['tmp_name']) || !is_readable($_FILES['file']['tmp_name'])) {
                return Response::serverError('File transfer failure. Please retry the submission.');
            }

            if (TINYIB_MAXKB > 0 && filesize($_FILES['file']['tmp_name']) > TINYIB_MAXKB * 1024) {
                return Response::badRequest('That file is larger than ' . TINYIB_MAXKBDESC . '.');
            }

            $post['file_original'] = trim(htmlentities(substr($_FILES['file']['name'], 0, 50), ENT_QUOTES));
            $post['file_hex'] = md5_file($_FILES['file']['tmp_name']);
            $post['file_size'] = $_FILES['file']['size'];
            $post['file_size_formatted'] = convertBytes($post['file_size']);

            if (TINYIB_FILE_ALLOW_DUPLICATE === false) {
                checkDuplicateFile($post['file_hex']);
            }

            $file_mime_split = explode(' ', trim(mime_content_type($_FILES['file']['tmp_name'])));

            if (count($file_mime_split) > 0) {
                $file_mime = strtolower(array_pop($file_mime_split));
            } else {
                if (!@getimagesize($_FILES['file']['tmp_name'])) {
                    $message = 'Failed to read the MIME type and size of the uploaded file.'
                        . ' Please retry the submission.';
                    return Response::serverError($message);
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
                return Response::badRequest($this->renderer->supportedFileTypes());
            }

            $file_name = time() . substr(microtime(), 2, 3);
            $post['file'] = $file_name . '.' . $tinyib_uploads[$file_mime][0];

            $file_location = 'src/' . $post['file'];

            if (!move_uploaded_file($_FILES['file']['tmp_name'], $file_location)) {
                return Response::serverError("Could not copy uploaded file.");
            }

            if ($_FILES['file']['size'] != filesize($file_location)) {
                @unlink($file_location);
                return Response::serverError('File transfer failure. Please go back and try again.');
            }

            if ($file_mime == "audio/webm" || $file_mime == "video/webm"
                || $file_mime == "audio/mp4" || $file_mime == "video/mp4") {
                $post['image_width'] = max(0, intval(shell_exec('mediainfo --Inform="Video;%Width%" ' . $file_location)));
                $post['image_height'] = max(0, intval(shell_exec('mediainfo --Inform="Video;%Height%" ' . $file_location)));

                if ($post['image_width'] > 0 && $post['image_height'] > 0) {
                    list($thumb_maxwidth, $thumb_maxheight) = thumbnailDimensions($post);
                    $post['thumb'] = "${file_name}s.jpg";
                    $size = max($thumb_maxwidth, $thumb_maxheight);
                    shell_exec("ffmpegthumbnailer -s $size -i $file_location -o thumb/{$post['thumb']}");

                    $thumb_info = getimagesize("thumb/" . $post['thumb']);
                    $post['thumb_width'] = $thumb_info[0];
                    $post['thumb_height'] = $thumb_info[1];

                    if ($post['thumb_width'] <= 0 || $post['thumb_height'] <= 0) {
                        @unlink($file_location);
                        @unlink('thumb/' . $post['thumb']);
                        return Response::badRequest('Sorry, your video appears to be corrupt.');
                    }

                    addVideoOverlay("thumb/" . $post['thumb']);
                }

                $duration = intval(shell_exec('mediainfo --Inform="General;%Duration%" ' . $file_location));

                if ($duration > 0) {
                    $mins = floor(round($duration / 1000) / 60);
                    $secs = str_pad(floor(round($duration / 1000) % 60), 2, "0", STR_PAD_LEFT);

                    $post['file_original'] = "$mins:$secs" . ($post['file_original'] != '' ? (', ' . $post['file_original']) : '');
                }
            } elseif (in_array($file_mime, ['image/jpeg', 'image/pjpeg', 'image/png', 'image/gif', 'application/x-shockwave-flash'])) {
                $output = [];

                if ($file_mime === 'image/gif') {
                    exec("identify -format '%w %h' ${file_location}[0]", $output);
                }
                else {
                    exec("identify -format '%w %h' $file_location", $output);
                }

                $output = explode(' ', reset($output));

                if (count($output) < 2) {
                    return Response::badRequest('Image appears to be corrupt.');
                }

                list($width, $height) = $output;
                $post['image_width'] = $width;
                $post['image_height'] = $height;
            }

            if (isset($tinyib_uploads[$file_mime][1])) {
                $thumbfile_split = explode('.', $tinyib_uploads[$file_mime][1]);
                $post['thumb'] = $file_name . 's.' . array_pop($thumbfile_split);

                if (!copy($tinyib_uploads[$file_mime][1], 'thumb/' . $post['thumb'])) {
                    @unlink($file_location);
                    return Response::serverError('Could not create thumbnail.');
                }

                if ($file_mime == 'application/x-shockwave-flash') {
                    addVideoOverlay('thumb/' . $post['thumb']);
                }
            } elseif (in_array($file_mime, ['image/jpeg', 'image/pjpeg', 'image/png', 'image/gif'])) {
                $post['thumb'] = $file_name . 's.' . $tinyib_uploads[$file_mime][0];
                list($thumb_maxwidth, $thumb_maxheight) = thumbnailDimensions($post);

                if (!createThumbnail($file_location, 'thumb/' . $post['thumb'], $thumb_maxwidth, $thumb_maxheight)) {
                    @unlink($file_location);
                    return Response::serverError('Could not create thumbnail.');
                }
            }

            if ($post['thumb'] != '') {
                $thumb_info = getimagesize('thumb/' . $post['thumb']);
                $post['thumb_width'] = $thumb_info[0];
                $post['thumb_height'] = $thumb_info[1];
            }
        }

        if ($post['file'] == '') { // No file uploaded
            $allowed = "";

            if (!empty($tinyib_uploads)) {
                $allowed = 'file';
            }

            if (!empty($tinyib_embeds)) {
                if ($allowed != '') {
                    $allowed .= ' or ';
                }

                $allowed .= 'embed URL';
            }

            if ($post['parent'] == TINYIB_NEWTHREAD && $allowed != '' && !TINYIB_NOFILEOK) {
                return Response::badRequest("A $allowed is required to start a thread.");
            }

            if (str_replace('<br>', '', $post['message']) == '') {
                $allowed = $allowed != '' ? " and/or upload a $allowed" : '';
                return Response::badRequest('Please enter a message' . $allowed . '.');
            }
        }

        if (!$logged_in && (($post['file'] != '' && TINYIB_REQMOD == 'files') || TINYIB_REQMOD == 'all')) {
            $post['moderated'] = '0';
        }

        $post['id'] = $this->post_repository->insertPost($post);

        if ($post['moderated'] == '1') {
            if (TINYIB_ALWAYSNOKO || strtolower($post['email']) == 'noko') {
                $id = $post['parent'] == TINYIB_NEWTHREAD ? $post['id'] : $post['parent'];
                $redirect_url = "res/$id.html#" . $post['id'];
            }

            $this->post_repository->trimThreads();

            if ($post['parent'] != TINYIB_NEWTHREAD) {
                $this->renderer->rebuildThread($post['parent']);

                if (strtolower($post['email']) != 'sage') {
                    if (TINYIB_MAXREPLIES == 0
                        || $this->post_repository->numRepliesToThreadByID($post['parent']) <= TINYIB_MAXREPLIES) {
                        $this->post_repository->bumpThreadByID($post['parent']);
                    }
                }
            } else {
                $this->renderer->rebuildThread($post['id']);
            }

            $this->renderer->rebuildIndexes();
        }

        return Response::redirect($redirect_url);
    }

    /**
     * {@inheritDoc}
     */
    public function delete($id, $password = null)
    {
        if (empty($id)) {
            $message = 'Tick the box next to a post and click "Delete" to delete it.';
            return Response::badRequest($message);
        }

        if (TINYIB_DBMIGRATE) {
            $message = "Post deletion is currently disabled.\nPlease try again in a few moments.";
            return Response::serviceUnavailable($message);
        }

        $post = $this->post_repository->postByID($id);

        if (empty($post)) {
            $message = "Sorry, an invalid post identifier was sent.\nPlease go back, refresh the page, and try again.";
            return Response::notFound($message);
        }

        // Disabled due to Dollchan Extension Tools breaks.
        // list($logged_in, $is_admin) = manageCheckLogIn();
        //
        // if ($logged_in && empty($password)) {
        //     $url = basename($_SERVER['PHP_SELF']) . '?manage&moderate=' . $id;
        //     return Response::redirect($url);
        // }

        $password_hash = md5(md5($password));

        if (empty($post['password']) || $post['password'] !== $password_hash) {
            return Response::forbidden('Invalid password.');
        }

        $this->post_repository->deletePostByID($post['id']);

        $is_thread = $post['parent'] == TINYIB_NEWTHREAD;
        $thread_id = $is_thread ? $post['id'] : $post['parent'];

        $this->renderer->rebuildThread($thread_id);
        $this->renderer->rebuildIndexes();

        return Response::ok('Post deleted.');
    }
}
