<?php

namespace Imageboard\Services;

use Imageboard\Exceptions\{
  NotFoundException,
  ValidationException
};
use Imageboard\Functions;
use Imageboard\Models\{Ban, Post, RefMap};
use Imageboard\Repositories\{
  BanRepository,
  PostRepository,
  RefMapRepository
};
use Imageboard\Services\Booru\{
  SafebooruService,
  E621Service,
  SankakuService,
  GelbooruService,
  WebmbotService
};
use Imageboard\Services\Cache\CacheInterface;
use Imageboard\Services\Notification\NotificationService;
use Predis\Client as Redis;
use Psr\Log\LoggerInterface;

class PostService
{
  /** @var ConfigService */
  protected $config;

  /** @var CacheInterface */
  protected $cache;

  /** @var LoggerInterface */
  protected $logger;

  /** @var CaptchaService */
  protected $captcha;

  /** @var BanRepository */
  protected $ban_repository;

  /** @var PostRepository */
  protected $post_repository;

  /** @var RefMapRepository */
  protected $refmap_repository;

  /** @var ModLogService */
  protected $modlog_service;

  /** @var CryptographyService */
  protected $cryptography;

  /** @var FileService */
  protected $file;

  /** @var ThumbnailService */
  protected $thubmnail;

  /** @var SafebooruService */
  protected $safebooru;

  /** @var E621Service */
  protected $e621;

  /** @var SankakuService */
  protected $sankaku;

  /** @var GelbooruService */
  protected $gelbooru;

  /** @var WebmbotService */
  protected $webmbot;

  /** @var NotificationService */
  protected $notification;

  /** @var RendererService */
  protected $renderer;

  /**
   * Creates a new PostService instance.
   *
   * @param ConfigService       $config
   * @param CacheInterface      $cache
   * @param LoggerInterface     $logger
   * @param CaptchaService      $captcha
   * @param BanRepository       $ban_repository
   * @param RefMapRepository    $refmap_repository
   * @param PostRepository      $post_repository
   * @param ModLogService       $modlog_service
   * @param CryptographyService $cryptography
   * @param FileService         $file
   * @param ThumbnailService    $thubmnail
   * @param SafebooruService    $safebooru
   * @param E621Service         $e621
   * @param SankakuService      $sankaku
   * @param GelbooruService     $gelbooru
   * @param WebmbotService      $webmbot
   * @param ConfigService       $config
   * @param NotificationService $notification
   * @param RendererService     $renderer
   */
  function __construct(
    ConfigService       $config,
    CacheInterface      $cache,
    LoggerInterface     $logger,
    CaptchaService      $captcha,
    BanRepository       $ban_repository,
    RefMapRepository    $refmap_repository,
    PostRepository      $post_repository,
    ModLogService       $modlog_service,
    CryptographyService $cryptography,
    FileService         $file,
    ThumbnailService    $thubmnail,
    SafebooruService    $safebooru,
    E621Service         $e621,
    SankakuService      $sankaku,
    GelbooruService     $gelbooru,
    WebmbotService      $webmbot,
    NotificationService $notification,
    RendererService     $renderer
  ) {
    $this->config            = $config;
    $this->cache             = $cache;
    $this->logger            = $logger;
    $this->captcha           = $captcha;
    $this->ban_repository    = $ban_repository;
    $this->refmap_repository = $refmap_repository;
    $this->post_repository   = $post_repository;
    $this->modlog_service    = $modlog_service;
    $this->cryptography      = $cryptography;
    $this->file              = $file;
    $this->thubmnail         = $thubmnail;
    $this->safebooru         = $safebooru;
    $this->e621              = $e621;
    $this->sankaku           = $sankaku;
    $this->gelbooru          = $gelbooru;
    $this->webmbot           = $webmbot;
    $this->notification      = $notification;
    $this->renderer          = $renderer;
  }

  /**
   * @param Post[] $posts
   *
   * @return array Post view model.
   */
  protected function mapToViewModels(array $posts): array
  {
    $post_ids = array_map(function (Post $post) {
      return $post->id;
    }, $posts);
    $refs = $this->refmap_repository->getMany($post_ids);

    $results = [];
    foreach ($posts as $post) {
      $salt = $this->config->get('IP_SALT', '1234');
      $hash = base64_encode(md5($salt . md5($post->ip, true), true));

      /** @var Post $post */
      $results[$post->id] = [
        'id'             => $post->id,
        'created_at'     => $post->created_at,
        'updated_at'     => $post->updated_at,
        'parent_id'      => $post->parent_id,
        'bumped_at'      => $post->bumped_at,
        'ip_hash'        => $hash,
        'name'           => $post->name,
        'tripcode'       => $post->tripcode,
        'subject'        => $post->subject,
        'message'        => $post->getMessageFormatted(),
        'message_raw'    => $post->message_raw,
        'message_tree'   => $post->getMessageTree(),
        'refs_from'      => [],
        'refs_to'        => [],
        'file'           => $post->file,
        'file_hex'       => $post->file_hex,
        'file_original'  => $post->file_original,
        'file_type'      => $post->getFileType(),
        'file_size'      => $post->file_size,
        'file_size_text' => $post->getFileSizeFormatted(),
        'file_extension' => $post->getFileExtension(),
        'image_width'    => $post->image_width,
        'image_height'   => $post->image_height,
        'thumb'          => $post->thumb,
        'thumb_width'    => $post->thumb_width,
        'thumb_height'   => $post->thumb_height,
        'score'          => (int) $post->score,
      ];

      foreach ($refs as $ref) {
        if ($ref->target_id === $post->id) {
          $results[$post->id]['refs_from'][] = $ref->post_id;
        }

        if ($ref->post_id === $post->id) {
          $results[$post->id]['refs_to'][] = $ref->target_id;
        }
      }
    }

    return array_values($results);
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
    $ban = $this->ban_repository->getByIp($ip);
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
    $delay = (int) $this->config->get('DELAY');

    if ($delay <= 0) {
      return true;
    }

    $post = $this->post_repository->getLatestPostByIP($ip);
    if (isset($post)) {
      $remains_time = $delay - (time() - $post->created_at);
      return $remains_time < 0;
    }

    return true;
  }

  /**
   * Processes poster name.
   *
   * @param string $name
   *   Poster name.
   *
   * @return array
   *   Array keys:
   *     name - processed poster name;
   *     tripcode - processed poster tripcode.
   */
  protected function processName(string $name): array
  {
    $secure_tripcode = '';
    $secure_password_index = strpos($name, '##');
    if ($secure_password_index !== false) {
      // Split secure tripcode password from the name.
      $secure_password = substr($name, $secure_password_index + 2);
      $name = substr($name, 0, $secure_password_index);
      $salt = $this->config->get('TRIPSEED', '');
      $secure_tripcode = '!!' . $this->cryptography
        ->generateSecureTripcode($secure_password, $salt);
    }

    $tripcode = '';
    $password_index = strpos($name, '#');
    if ($password_index !== false) {
      // Split tripcode password from name.
      $password = substr($name, $password_index + 1);
      $name = substr($name, 0, $password_index);
      $tripcode = $this->cryptography->generateTripcode($password);
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
      $count = min(max((int) $matches[1], 1), $this->config->get('DICE_MAX_COUNT'));
      $max = min(max((int) $matches[2], 1), $this->config->get('DICE_MAX_VALUE'));

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

  protected function postCount($user_id, $message)
  {
    if (!isset($user_id) || $user_id === 0) {
      return $message;
    }

    return preg_replace_callback('#(?:^|<br>)\s*/postcount\s*<br>#si', function ($matches) use ($user_id) {
      $post_count = $this->post_repository->getUserPostCount($user_id);
      $thread_count = $this->post_repository->getUserThreadCount($user_id);
      return "<span class=\"dice\">{$matches[0]}Posts created: $post_count<br>Threads: $thread_count<br></span>";
    }, $message);
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
        $max_desc = $this->config->get('MAXKBDESC');
        throw new \Exception("That file is larger than $max_desc.");
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
   * Creates a post.
   *
   * @param string $name
   * @param string $email
   * @param string $subject
   * @param string $message
   * @param string $captcha
   * @param int    $user_id
   * @param int    $parent
   *
   * @return Post
   *
   * @throws ValidationException
   * @throws NotFoundException
   */
  function create(
    string $name,
    string $email,
    string $subject,
    string $message,
    string $captcha,
    string $ip,
    int $user_id = 0,
    int $parent = 0
  ): Post {
    $ban = null;
    if (!$this->checkBanned($ip, $ban)) {
      $expire = $ban->isPermanent()
        ? '<br>This ban is permanent and will not expire.'
        : '<br>This ban will expire ' . date('y/m/d(D)H:i:s', $ban->expires_at);
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

    if ($parent !== NEWTHREAD) {
      $thread = $this->post_repository->getById($parent, true);
      if (!isset($thread)) {
        throw new NotFoundException('Invalid parent thread ID supplied, unable to create post.');
      }
    }

    if ($user_id === 0) {
      $anonPosting = $this->config->get('ANON_POSTING', 'allow');
      if ($anonPosting === 'disallow') {
        throw new ValidationException('Anonymous posting disabled.');
      } elseif ($anonPosting === 'captcha') {
        if (!$this->captcha->checkCaptcha($captcha)) {
          $this->captcha->resetCaptcha();
          throw new ValidationException('Invalid captcha.');
        }
      }
    }

    $post = new Post();
    $post->setParentId($parent);
    $post->setIp($ip);
    $post->setUserId($user_id);

    $nameAndTripcode = $this->processName($name);
    $post->setName($this->cleanString(substr($nameAndTripcode['name'], 0, 75)));
    $post->setTripcode($nameAndTripcode['tripcode']);

    $post->setMessageRaw($message);

    $message = rtrim($message);
    $message = $this->cleanString($message);

    // Process post links.
    $board = $this->config->get('BOARD');
    $refs = [];
    $message = preg_replace_callback('/&gt;&gt;([0-9]+)/', function ($matches) use ($board, &$refs) {
      $id = (int) $matches[1];
      $post = $this->post_repository->getById($id);
      if ($post !== null) {
        if (!in_array($id, $refs)) {
          $refs[] = $id;
        }

        /** @var Post $post */
        $thread_id = $post->isThread() ? $post->id : $post->parent_id;
        return '<a href="/' . $board . "/res/$thread_id#$id\">" . $matches[0] . '</a>';
      }

      return $matches[0];
    }, $message);

    $message = $this->colorQuote($message);
    $message = $this->makeLinksClickable($message);
    $message = str_replace("\n", '<br>', $message);

    if ($this->config->get("DICE_ENABLED")) {
      $message = $this->dice($message);
    }

    $message = $this->postCount($post->user_id, $message);

    $post->setMessage($message);

    // Detect spam.
    if ($this->config->get('DETECT_SPAM', '') === 'same_message') {
      if (!empty($message) && !isset($_FILES['file']) && !isset($_FILES['file_mobile'])) {
        $last = $this->post_repository->getLatestPostByIP($post->ip);
        if (isset($last) && $message === $last->message) {
          throw new ValidationException('Spam detected');
        }
      }
    }

    if (isset($_FILES['file']) && !empty($_FILES['file']['name'])) {
      $file = $_FILES['file'];
    } elseif (isset($_FILES['file_mobile']) && !empty($_FILES['file_mobile']['name'])) {
      $file = $_FILES['file_mobile'];
    } else {
      $file = null;
    }

    /** @var BooruService[] $booru */
    $booru = [
      '#\[\s*safebooru\s*=\s*([^]]+)\s*\]#' => $this->safebooru,
      '#\[\s*e621\s*=\s*([^]]+)\s*\]#'      => $this->e621,
      '#\[\s*sankaku\s*=\s*([^]]+)\s*\]#'   => $this->sankaku,
      '#\[\s*gelbooru\s*=\s*([^]]+)\s*\]#'  => $this->gelbooru,
      '#\[\s*webmbot\s*\]#'                 => $this->webmbot,
    ];

    foreach ($booru as $tag_pattern => $service) {
      $subject = preg_replace_callback($tag_pattern, function (array $matches) use ($service, &$file) {
        if (isset($file)) {
          return '';
        }

        // Try get & download a random image for the specified tags.
        $tags = $matches[1] ?? '';
        $url = $service->getRandomImageUrl($tags);
        if (!isset($url)) {
          return '';
        }

        $path = tempnam(sys_get_temp_dir(), '');
        unlink($path);

        $options = [
          'http' => [
            'method' => 'GET',
            'header' => 'User-Agent: lewd.site/1.0\r\n',
          ]
        ];
        $context = stream_context_create($options);
        $size = file_put_contents($path, file_get_contents($url, false, $context));
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
    }

    $post->setSubject($this->cleanString(substr($subject, 0, 75)));

    if (!empty($file)) {
      $this->validateFileUpload($file);

      if (!is_file($file['tmp_name']) || !is_readable($file['tmp_name'])) {
        throw new ValidationException('File transfer failure. Please retry the submission.');
      }

      $max = (int) $this->config->get('MAXKB', 0);
      if ($max > 0 && filesize($file['tmp_name']) > $max * 1024) {
        $max_desc = $this->config->get('MAXKBDESC');
        throw new ValidationException("That file is larger than $max_desc.");
      }

      $post->setFileOriginal(trim(htmlentities(substr($file['name'], 0, 50), ENT_QUOTES)));
      $post->setFileHex(md5_file($file['tmp_name']));
      $post->setFileSize($file['size']);

      $file_name = time() . substr(microtime(), 2, 3);
      $mime_type = $this->thubmnail->getMimeTypeByContent($file['tmp_name'])
        ?? $this->thubmnail->getMimeTypeByExtension($file['name']);
      if (!isset($mime_type)) {
        throw new ValidationException('Unknown file type.');
      }

      $file_extension = $this->thubmnail->getExtensionByMimeType($mime_type);
      if (empty($file_extension) || $file_extension === ThumbnailService::DEFAULT_EXTENSION) {
        throw new ValidationException("Unknown file type: $mime_type.");
      }

      $post->setFile("$file_name.$file_extension");

      $file_path = "src/{$post->file}";
      if (!rename($file['tmp_name'], $file_path)) {
        throw new \Exception('Could not copy uploaded file.');
      }

      if ($file['size'] !== filesize($file_path)) {
        unlink($file_path);
        throw new ValidationException('File transfer failure. Please go back and try again.');
      }

      [$width, $height] = $this->thubmnail->getFileSize($file_path);
      $post->setImageWidth($width);
      $post->setImageHeight($height);

      $max_width = (int) $this->config->get('MAXW');
      $max_height = (int) $this->config->get('MAXH');

      $thumb = $this->thubmnail->createThumbnail(
        $file_path,
        'thumb',
        $max_width,
        $max_height
      );
      $post->setThumb($thumb);

      $thumb_path = "thumb/{$post->thumb}";
      [$thumb_width, $thumb_height] = $this->thubmnail->getFileSize($thumb_path);
      $post->setThumbWidth($thumb_width);
      $post->setThumbHeight($thumb_height);
    }

    if (empty($post->file)) {
      // No file uploaded.
      if ($post->isThread() && !(bool) $this->config->get("NOFILEOK")) {
        throw new ValidationException('A file is required to start a thread.');
      }

      if (empty(str_replace('<br>', '', $post->message))) {
        throw new ValidationException('Please enter a message and/or upload a file.');
      }
    }

    $now = time();
    $post->setCreatedAt($now);
    $post->setUpdatedAt($now);
    $post->setBumpedAt($now);
    $this->post_repository->add($post);

    // Populate the reference map.
    foreach ($refs as $ref) {
      $this->refmap_repository->add(new RefMap([
        'post_id'   => $post->id,
        'target_id' => $ref,
      ]));
    }

    // Bump thread.
    if ($post->isReply()) {
      if (strtolower($post->email) !== 'sage') {
        $max_replies = $this->config->get("MAXREPLIES");
        if (
          $max_replies == 0
          || $this->post_repository->getThreadPostCount($parent) <= $max_replies
        ) {
          $thread = $this->post_repository->getById($parent);
          if (isset($thread)) {
            $thread->setBumpedAt($post->created_at);
            $this->post_repository->update($thread);
          }
        }
      }
    }

    // Do stuff after response is sent to speed things up.
    register_shutdown_function(function () use ($post, $refs) {
      // Check threads limit.
      // TODO: move it to the cron or something.
      if ($post->isThread()) {
        $this->trimThreads();
      }

      // Invalidate cache.
      $board = $this->config->get("BOARD");
      $parent = $post->parent_id;
      if ($post->isReply()) {
        $this->cache->deletePattern($board . ":thread:$parent:*");
      } else {
        $id = $post->id;
        $this->cache->deletePattern($board . ":thread:$id:*");
      }
      $this->cache->deletePattern($board . ':page:*');

      // Send post to the redis queue.
      $is_redis_enabled = $this->config->get('REDIS_ENABLE', false);
      $redis_host = $this->config->get('REDIS_HOST', '');
      if ($is_redis_enabled) {
        $salt = $this->config->get('IP_SALT', '1234');
        $hash = base64_encode(md5($salt . md5($post->ip, true), true));

        $board = $this->config->get('BOARD');
        $channel = "$board:thread:$parent";
        $data = [
          'id'             => $post->id,
          'created_at'     => $post->created_at,
          'updated_at'     => $post->updated_at,
          'parent_id'      => $post->parent_id,
          'bumped_at'      => $post->bumped_at,
          'ip_hash'        => $hash,
          'name'           => $post->name,
          'tripcode'       => $post->tripcode,
          'subject'        => $post->subject,
          'message'        => $post->getMessageFormatted(),
          'message_raw'    => $post->message_raw,
          'message_tree'   => $post->getMessageTree(),
          'refs_from'      => [],
          'refs_to'        => [],
          'file'           => $post->file,
          'file_hex'       => $post->file_hex,
          'file_original'  => $post->file_original,
          'file_type'      => $post->getFileType(),
          'file_size'      => $post->file_size,
          'file_size_text' => $post->getFileSizeFormatted(),
          'file_extension' => $post->getFileExtension(),
          'image_width'    => $post->image_width,
          'image_height'   => $post->image_height,
          'thumb'          => $post->thumb,
          'thumb_width'    => $post->thumb_width,
          'thumb_height'   => $post->thumb_height,
          'score'          => (int) $post->score,
        ];

        $data['html'] = $this->renderer->render('ajax/post.twig', [
          'post' => $data,
          'res'  => RESPAGE,
        ]);

        $message = json_encode([
          'type' => 'add_post',
          'data' => $data,
        ]);

        $redis = new Redis($redis_host);
        $redis->publish($channel, $message);
        $redis->quit();
      }

      // Send desktop notifications.
      if (!empty($refs)) {
        $posts = $this->post_repository->getMany($refs);
        $user_ids = array_filter(array_map(function (Post $post) {
          return $post->user_id;
        }, $posts));

        $protocol = $_SERVER['REQUEST_SCHEME'] ?? 'https';
        $hostname = $_SERVER['HTTP_HOST'] ?? 'localhost';
        $basePath = $this->config->get('BASE_PATH', '/');

        $name = $post->name . $post->tripcode;
        if (empty($name)) {
          $name = 'Anonymous';
        }

        $date = date('Y-m-d H:i:s', $post->created_at);
        $message = preg_replace('/\[[^[]+\]/', '', $post->message_raw);
        $message = "{$post->name}!{$post->tripcode} $date\r\n$message";
        $title = "New reply in $basePath/{$post->parent_id}";
        $url = "$protocol://$hostname$basePath/res/{$post->parent_id}#reply_{$post->id}";

        try {
          $this->notification->sendNotification($user_ids, $title, $message, $url);
        } catch (\Exception $exception) {
          $message = Functions::formatException($exception);
          $this->logger->error($message);
        }
      }
    });

    return $post;
  }

  /**
   * Deletes image & thumbnail of the post.
   *
   * @param Post $post
   */
  function deletePostImages(Post $post)
  {
    // TODO: Exception handling & logging.

    if (!empty($post->file)) {
      $path = 'src/' . $post->file;
      if (file_exists($path)) {
        unlink($path);
      }
    }

    if (!empty($post->thumb)) {
      $path = 'thumb/' . $post->thumb;
      if (file_exists($path)) {
        unlink($path);
      }
    }
  }

  /**
   * Deletes post or thread by ID.
   *
   * @param int       $id
   * @param null|User $user User who deletes a post.
   *
   * @throws NotFoundException
   */
  function delete(int $id, $user = null)
  {
    $board = $this->config->get("BOARD");
    $post = $this->post_repository->getById($id);
    if ($post === null) {
      throw new NotFoundException("Post #$id not found.");
    }

    // Remove post and children posts if it is a thread.
    $posts = $this->post_repository->getThreadPosts($id);
    foreach ($posts as $post) {
      $this->deletePostImages($post);
      $this->post_repository->remove($post);
    }

    // Clear cache.
    $thread_id = $post->isThread() ? $id : $post->parent_id;
    $this->cache->deletePattern($board . ":thread:$thread_id:*");
    $this->cache->deletePattern($board . ':page:*');

    if (isset($user)) {
      // Add entry to the modlog.
      $ip = $post->ip;
      $this->modlog_service->create("User {$user->email} has deleted post {$id} (created from {$ip}).", $user->id);
    }

    $is_redis_enabled = $this->config->get('REDIS_ENABLE', false);
    $redis_host = $this->config->get('REDIS_HOST', '');
    if ($is_redis_enabled) {
      // Send notify to the redis queue.
      $board = $this->config->get('BOARD');
      $channel = "$board:thread:$thread_id";
      $data = [
        'id' => $id,
      ];

      $message = json_encode([
        'type' => 'remove_post',
        'data' => $data,
      ]);

      $redis = new Redis($redis_host);
      $redis->publish($channel, $message);
      $redis->quit();
    }
  }

  /**
   * Removes old threads.
   *
   * @throws ConfigServiceException
   */
  function trimThreads()
  {
    $limit = (int) $this->config->get('MAXTHREADS');
    if ($limit > 0) {
      $threads = $this->post_repository->getThreads($limit, 100);
      foreach ($threads as $thread) {
        $this->delete($thread->id);
      }
    }
  }

  function getThreads(): array
  {
    $posts = $this->post_repository->getThreads();
    return $this->mapToViewModels($posts);
  }

  function getThreadsByPage(int $page): array
  {
    $posts = $this->post_repository->getThreadsByPage($page);
    return $this->mapToViewModels($posts);
  }

  function getThreadPosts(int $thread_id, int $after_id = 0): array
  {
    $posts = $this->post_repository->getThreadPosts($thread_id, $after_id);
    return $this->mapToViewModels($posts);
  }

  function getLastThreadPosts(int $thread_id, int $count): array
  {
    $posts = $this->post_repository->getLastThreadPosts($thread_id, $count);
    return $this->mapToViewModels($posts);
  }

  /**
   * @param int $post_id
   *
   * @return array Post view model.
   *
   * @throws NotFoundException
   */
  function getById(int $post_id): array
  {
    $post = $this->post_repository->getById($post_id);
    if (!isset($post)) {
      throw new NotFoundException("Post #$post_id was not found.");
    }

    return $this->mapToViewModels([$post])[0];
  }
}
