<?php

namespace Imageboard\Service;

use Imageboard\Exception\{
  AccessDeniedException,
  NotFoundException,
  ValidationException
};
use Imageboard\Cache\CacheInterface;
use Imageboard\Model\{Ban, Post};

class PostService implements PostServiceInterface
{
  /** @var CacheInterface */
  protected $cache;

  /** @var CryptographyServiceInterface */
  protected $cryptography_service;

  /** @var FileServiceInterface */
  protected $file_service;

  /** @var ThumbnailServiceInterface */
  protected $thubmnail_service;

  /** @var SafebooruServiceInterface */
  protected $safebooru;

  /** @var \Imageboard\Service\ConfigServiceInterface */
  protected $config_service;

  /**
   * Creates a new PostService instance.
   *
   * @param CacheInterface                                $cache
   * @param CryptographyServiceInterface                  $cryptography_service
   * @param \Imageboard\Service\FileServiceInterface      $file_service
   * @param \Imageboard\Service\ThumbnailServiceInterface $thubmnail_service
   * @param \Imageboard\Service\SafebooruServiceInterface $safebooru
   * @param \Imageboard\Service\ConfigServiceInterface    $config_service
   */
  function __construct(
    CacheInterface $cache,
    CryptographyServiceInterface $cryptography_service,
    FileServiceInterface $file_service,
    ThumbnailServiceInterface $thubmnail_service,
    SafebooruServiceInterface $safebooru,
    ConfigServiceInterface $config_service
  ) {
    $this->cache = $cache;
    $this->cryptography_service = $cryptography_service;
    $this->file_service = $file_service;
    $this->thubmnail_service = $thubmnail_service;
    $this->safebooru = $safebooru;
    $this->config_service = $config_service;
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
  protected function checkBanned(string $ip, &$ban): bool
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
  protected function checkMessageSize(string $message, &$length): bool
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
  protected function checkFlood(string $ip, &$remains_time): bool
  {
    $delay = (int)$this->config_service->get("DELAY");

    if ($delay <= 0) {
      return true;
    }

    $post = Post::getLastPostByIP($ip);
    if (isset($post)) {
      /** @var Post */
      $timestamp = $post->getCreatedTimestamp();
      $remains_time = $delay - (time() - $timestamp);
      return $remains_time < 0;
    }

    return true;
  }

  /**
   * {@inheritDoc}
   */
  function processName(string $name): array
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
  protected function cleanString(string $string): string
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
  protected function postLink(string $message): string
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
  protected function colorQuote(string $message): string
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
  protected function makeLinksClickable(string $message): string
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
  protected function checkDuplicateFile(string $hash, &$posts): bool
  {
    $posts = Post::getPostsByHex($hash)->all();
    return empty($posts);
  }

  /**
   * Validates uploaded file.
   *
   * @throws \Exception
   */
  protected function validateFileUpload(array $file)
  {
    switch ($file['error']) {
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
   * {@inheritDoc}
   */
  function create(
    string $name,
    string $email,
    string $subject,
    string $message,
    string $password,
    string $ip,
    int $user_id = 0,
    int $parent = 0
  ): Post
  {
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
        . " You will be able to make another post in $remains_time second"
        . ($remains_time === 1 ? 's' : '') . '.');
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

    $message = rtrim($message);
    $message = $this->cleanString($message);
    $message = $this->postLink($message);
    $message = $this->colorQuote($message);
    $message = $this->makeLinksClickable($message);
    $message = str_replace("\n", '<br>', $message);

    if ($this->config_service->get("DICE_ENABLED")) {
      $message = $this->dice($message);
    }

    $post->message = $message;
    $post->password = !empty($password) ? md5(md5($password)) : '';

    if (isset($_FILES['file']) && !empty($_FILES['file']['name'])) {
      $file = $_FILES['file'];
    } elseif (isset($_FILES['file_mobile']) && !empty($_FILES['file_mobile']['name'])) {
      $file = $_FILES['file_mobile'];
    } else {
      $file = null;
    }

    $subject = preg_replace_callback('#\[safebooru=([^]]+)\]#', function (array $matches) use (&$file) {
      if (isset($file)) {
        return '';
      }

      // Try get & download a random image from the safebooru for the specified tags.
      $url = $this->safebooru->getRandomImageUrl($matches[1]);
      if (!isset($url)) {
        return '';
      }

      $path = tempnam(sys_get_temp_dir(), '');
      unlink($path);

      $size = file_put_contents($path, file_get_contents($url));
      if ($size === false) {
        return '';
      }

      $file = [
        'name' => basename($url),
        'tmp_name' => $path,
        'size' => $size,
        'error' => UPLOAD_ERR_OK,
      ];

      return '';
    }, $subject);

    $post->subject = $this->cleanString(substr($subject, 0, 75));

    if (!empty($file)) {
      $this->validateFileUpload($file);

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

      $file_name = time() . substr(microtime(), 2, 3);
      $file_extension = $this->file_service->getExtension($file['name']);
      $post->file = "$file_name.$file_extension";

      $file_path = "src/{$post->file}";
      if (!rename($file['tmp_name'], $file_path)) {
        throw new \Exception('Could not copy uploaded file.');
      }

      if ($file['size'] !== filesize($file_path)) {
        unlink($file_path);
        throw new ValidationException('File transfer failure. Please go back and try again.');
      }

      [$width, $height] = $this->thubmnail_service->getFileSize($file_path);
      $post->image_width = $width;
      $post->image_height = $height;

      if ($post->isThread()) {
        $max_width = TINYIB_MAXWOP;
        $max_height = TINYIB_MAXHOP;
      } else {
        $max_width = TINYIB_MAXW;
        $max_height = TINYIB_MAXH;
      }

      $post->thumb = $this->thubmnail_service->createThumbnail(
        $file_path,
        'thumb',
        $max_width,
        $max_height
      );

      $thumb_path = "thumb/{$post->thumb}";
      [$thumb_width, $thumb_height] = $this->thubmnail_service->getFileSize($thumb_path);
      $post->thumb_width = $thumb_width;
      $post->thumb_height = $thumb_height;
    }

    if (empty($post->file)) {
      // No file uploaded.
      if ($post->isThread() && !(bool)$this->config_service->get("NOFILEOK")) {
        throw new ValidationException('A file is required to start a thread.');
      }

      if (empty(str_replace('<br>', '', $post->message))) {
        throw new ValidationException('Please enter a message and/or upload a file.');
      }
    }

    $now = (new \DateTime())->getTimestamp();
    $post->bumped_at = $now;
    $post->moderated = true;
    $post->save();

    $board = $this->config_service->get("BOARD");

    if ($post->isModerated()) {
      Post::trimThreads();

      if ($post->isReply()) {
        $parent = $post->parent_id;
        $this->cache->deletePattern($board . ":thread:$parent:*");
        $this->cache->deletePattern($board . ":mobile:thread:$parent:page:*");

        if (strtolower($post->email) !== 'sage') {
          if (
            TINYIB_MAXREPLIES == 0
            || Post::getReplyCountByThreadID($parent) <= TINYIB_MAXREPLIES
          ) {
            $thread = Post::find($parent);
            if (isset($thread)) {
              $thread->bumped_at = time();
              $thread->save();
            }
          }
        }
      } else {
        $id = $post->id;
        $this->cache->deletePattern($board . ":thread:$id:*");
        $this->cache->deletePattern($board . ":mobile:thread:$id:page:*");
      }

      $this->cache->deletePattern($board . ':page:*');
      $this->cache->deletePattern($board . ':mobile:page:*');
    }

    return $post;
  }

  /**
   * {@inheritDoc}
   * @throws \Imageboard\Exception\NotFoundException
   * @throws \Imageboard\Exception\AccessDeniedException
   */
  function delete(int $id, string $password)
  {
    $board = $this->config_service->get("BOARD");

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
    $this->cache->deletePattern($board . ":thread:$thread_id:*");
    $this->cache->deletePattern($board . ':page:*');
    $this->cache->deletePattern($board . ':mobile:page:*');
  }
}
