<?php

namespace Imageboard\Model;

use Illuminate\Database\Eloquent\{Collection, Model, SoftDeletes};
use Imageboard\Exception\ConfigServiceException;
use VVatashi\BBCode\{Parser, TagDef};

/**
 * @property int    $id
 * @property int    $created_at
 * @property int    $updated_at
 * @property int    $deleted_at
 * @property int    $parent_id
 * @property int    $bumped_at
 * @property string $ip
 * @property int    $user_id
 * @property string $name
 * @property string $tripcode
 * @property string $email
 * @property string $subject
 * @property string $message
 * @property string $password
 * @property string $file
 * @property string $file_hex
 * @property string $file_original
 * @property int    $file_size
 * @property int    $image_width
 * @property int    $image_height
 * @property string $thumb
 * @property int    $thumb_width
 * @property int    $thumb_height
 * @property bool   $stickied
 * @property bool   $moderated
 * @method static where(array $array)
 */
class Post extends Model
{
  use SoftDeletes;
  use ModelTrait;

  protected $table;

  protected $fillable = [
    'parent_id',
    'bumped_at',
    'ip',
    'user_id',
    'name',
    'tripcode',
    'email',
    'subject',
    'message',
    'password',
    'file',
    'file_hex',
    'file_original',
    'file_size',
    'image_width',
    'image_height',
    'thumb',
    'thumb_width',
    'thumb_height',
    'stickied',
    'moderated',
  ];

  protected $dates = [
    'created_at',
    'updated_at',
    'deleted_at',
    'bumped_at',
  ];

  protected $dateFormat = 'U';

  /**
   * Post constructor.
   *
   * @param array $attributes
   *
   * @throws \Imageboard\Exception\ConfigServiceException
   */
  public function __construct (array $attributes = [])
  {
    parent::__construct( $attributes );

    $this->table = $this->config_service()->get( "TINYIB_DBPOSTS" );
  }

  function replies()
  {
    return $this->hasMany(static::class, 'parent_id');
  }

  function thread()
  {
    return $this->belongsTo(static::class, 'parent_id');
  }

  function getImageWidth()
  {
    return $this->image_width;
  }

  function getImageHeight()
  {
    return $this->image_height;
  }

  function getThumbWidth()
  {
    return $this->thumb_width;
  }

  function getThumbHeight()
  {
    return $this->thumb_height;
  }

  /**
   * Checks if post instance is not saved to the database.
   *
   * @return bool
   *   Post atatus.
   */
  function isNew(): bool
  {
    return $this->id === 0;
  }

  /**
   * Checks if the post is a thread.
   *
   * @return bool
   *   Is post a thread.
   */
  function isThread(): bool
  {
    return $this->parent_id === 0;
  }

  /**
   * Checks if the post is a reply.
   *
   * @return bool
   *   Is post a reply.
   */
  function isReply(): bool
  {
    return $this->parent_id !== 0;
  }

  /**
   * Returns create time of the post.
   *
   * @return int
   *   The create time of the post.
   */
  function getCreatedTimestamp(): int
  {
    return $this->created_at->getTimestamp();
  }

  /**
   * Returns bump time of the post.
   *
   * @return int
   *   The bump time of the post.
   */
  function getBumpedTimestamp(): int
  {
    return $this->bumped_at->getTimestamp();
  }

  /**
   * Returns the size of the file attached to the post.
   *
   * @return string
   *   The size of the file attached to the post.
   */
  function getFileSizeFormatted(): string
  {
    $size = $this->file_size;
    $units = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB'];
    for ($i = 0; $i < count($units) && $size >= 1000; ++$i) {
      $size /= 1000;
    }

    $size = round($size, 2, PHP_ROUND_HALF_DOWN);
    $unit = $units[$i];
    return "$size&nbsp;$unit";
  }

  /**
   * Checks if post is sticky.
   *
   * @return bool
   *   Is post sticky.
   */
  function isSticky(): bool
  {
    return $this->stickied === true;
  }

  /**
   * Returns the moderation status of the post.
   *
   * @return bool
   *   Is post moderated.
   */
  function isModerated(): bool
  {
    return $this->moderated === true;
  }

  /**
   * @return string
   */
  function getFileExtension(): string
  {
    if (empty($this->file)) {
      return '';
    }

    return strtolower(pathinfo($this->file, PATHINFO_EXTENSION));
  }

  /**
   * @return string
   */
  function getFileType(): string
  {
    $extension = $this->getFileExtension();

    switch ($extension) {
      case 'jpg':
      case 'jpeg':
      case 'jpe':
      case 'jfi':
      case 'jfif':
      case 'jif':
      case 'png':
      case 'apng':
      case 'gif':
      case 'webp':
        return 'image';

      case 'mp3':
        return 'audio';

      case 'mp4':
      case 'webm':
        return 'video';

      default:
        return '';
    }
  }

  protected static function fixLinks(string $message): string
  {
    $link_pattern = '#href="/' . TINYIB_BOARD . '/res/(\d+)\#(\d+)"#';
    return preg_replace_callback($link_pattern, function ($matches) {
      $target_thread_id = (int)$matches[1];
      $target_post_id = (int)$matches[2];

      return 'class="post__reference-link"'
        . ' href="/' . TINYIB_BOARD . "/res/$target_thread_id#reply_$target_post_id\""
        . " data-target-post-id=\"$target_post_id\"";
    }, $message);
  }

  function getMessageFormatted(): string
  {
    // Convert Wakabamark to BBCodes.
    $patterns = [
      '/\*\*(.*?)\*\*/si' => '[b]\\1[/b]',
      '/\*(.*?)\*/si' => '[i]\\1[/i]',
      '/~~(.*?)~~/si' => '[s]\\1[/s]',
      '/%%(.*?)%%/si' => '[spoiler]\\1[/spoiler]',
    ];

    $flags = PREG_SPLIT_NO_EMPTY | PREG_SPLIT_DELIM_CAPTURE;
    $rawContentPattern = '/(\[code\].+?\[\/code\])/';
    $segments = preg_split($rawContentPattern, $this->message, -1, $flags);
    $segments = array_map(function ($segment) use ($patterns, $rawContentPattern) {
      $matches = [];
      if (!preg_match($rawContentPattern, $segment, $matches)) {
        return preg_replace(array_keys($patterns), array_values($patterns), $segment);
      } else {
        // Not replace Wakabamark in raw content tags.
        return $segment;
      }
    }, $segments);
    $message = implode('', $segments);

    // Process BBCodes.
    $parser = new Parser([
      new TagDef('b', ['outputFormat' => '<strong>{content}</strong>']),
      new TagDef('i', ['outputFormat' => '<em>{content}</em>']),
      new TagDef('u', ['outputFormat' => '<span class="markup__underline">{content}</span>']),
      new TagDef('s', ['outputFormat' => '<del>{content}</del>']),
      new TagDef('sub'),
      new TagDef('sup'),
      new TagDef('code', [
        'outputFormat' => '<code>{content}</code>',
        'rawContent' => true,
      ]),
      new TagDef('spoiler', ['outputFormat' => '<span class="markup__spoiler">{content}</span>']),
      new TagDef('rp',      ['outputFormat' => '<span class="markup__rp">{content}</span>']),
      new TagDef('color', [
        'attributePattern' =>
'/
  #
  (?:
      [0-9a-fA-F]{3}
  ){1,2}
/x',
        'outputFormat' => '<span style="color: {attribute};">{content}</span>',
      ]),
      new TagDef('quote', ['outputFormat' => '<span class="markup__quote">{content}</span>']),
    ]);
    $message = $parser->parse($message);

    // Make post reference links undetectable by DE.
    /** @todo Fix later. */
    $message = preg_replace('#&gt;&gt;(\d+)#', '&gt;&#8203;&gt;$1', $message);

    return static::fixLinks($message);
  }

  /**
   * Returns the thread count.
   *
   * @return int
   */
  static function getThreadCount(): int
  {
    return Post::where([
      ['parent_id', 0],
      ['moderated', true],
    ])
      ->count();
  }

  /**
   * Returns threads by a board page.
   *
   * @param int $page
   *
   * @return Collection
   * @throws \Imageboard\Exception\ConfigServiceException
   */
  static function getThreadsByPage(int $page): Collection
  {
    $threads_per_page = (int)self::config()->get("THREADSPERPAGE");
    // $threads_per_page = TINYIB_THREADSPERPAGE;

    $skip = $page * $threads_per_page;
    $take = $threads_per_page;

    return Post::where([
      ['parent_id', 0],
      ['moderated', true],
    ])
      ->orderBy('stickied', 'desc')
      ->orderBy('bumped_at', 'desc')
      ->skip($skip)
      ->take($take)
      ->get();
  }

  /**
   * Returns the thread reply count by thread ID.
   *
   * @param int $id
   *   Thread ID.
   *
   * @return int
   */
  static function getReplyCountByThreadID(int $id): int
  {
    return Post::where([
      ['parent_id', $id],
      ['moderated', true],
    ])
      ->count();
  }

  /**
   * Returns posts by thread ID.
   *
   * @param int $id
   *   Thread ID.
   * @param bool $moderated_only
   *
   * @return Collection
   */
  static function getPostsByThreadID(
    int $id,
    bool $moderated_only = true,
    $take = null,
    $skip = 0
  ): Collection {
    $query = Post::where(function ($query) use ($id) {
      $query->where('id', $id);
      $query->orWhere('parent_id', $id);
    })
      ->orderBy('id', 'desc');

    if ($moderated_only) {
      $query = $query->where('moderated', true);
    }

    if (isset($take)) {
      $query->skip($skip)->take($take);
    }

    return $query->get()->reverse();
  }

  /**
   * Returns posts by the hash of the attached file.
   *
   * @param string $hash
   *
   * @return Collection
   */
  static function getPostsByHex(string $hash): Collection
  {
    return Post::where([
      ['file_hex', $hash],
      ['moderated', true],
    ])->get();
  }

  /**
   * Returns latest posts.
   *
   * @param bool $moderated
   *
   * @return Collection
   */
  static function getLatestPosts(bool $moderated = true): Collection
  {
    $count = 10;

    return Post::where('moderated', $moderated)
      ->orderBy('created_at', 'desc')
      ->take($count)
      ->get();
  }

  /**
   * Deletes image & thumbnail of the post.
   *
   * @param Post $post
   */
  function deletePostImages()
  {
    // TODO: Exception handling & logging.

    if (!empty($this->file)) {
      $path = 'src/' . $this->file;
      if (file_exists($path)) {
        unlink($path);
      }
    }

    if (!empty($this->thumb)) {
      $path = 'thumb/' . $this->thumb;
      if (file_exists($path)) {
        unlink($path);
      }
    }
  }

  /**
   * Deletes a post.
   *
   * @param Post $post
   */
  static function deletePost(Post $post)
  {
    static::deletePostByID($post->id);
  }

  /**
   * Deletes a post by ID.
   *
   * @param int $id
   *   Post ID.
   */
  static function deletePostByID(int $id)
  {
    $posts = static::getPostsByThreadID($id, false);

    foreach ($posts as $post) {
      $post->deletePostImages();
      $post->delete();
    }
  }

  /**
   * Removes old threads.
   *
   * @throws \Imageboard\Exception\ConfigServiceException
   */
  static function trimThreads()
  {
    $limit = (int)self::$config_service->get("MAXTHREADS");

    if ($limit > 0) {
      /** @var Post[] */
      $threads = Post::where([
        ['parent_id', 0],
        ['moderated', true],
      ])
        ->orderBy('stickied', 'desc')
        ->orderBy('bumped_at', 'desc')
        ->skip($limit)
        ->take(100)
        ->get();

      foreach ($threads as $thread) {
        static::deletePostByID($thread->id);
      }
    }
  }

  /**
   * Returns the last post by the poster IP.
   *
   * @return null|Post
   */
  static function getLastPostByIP(string $ip)
  {
    return Post::where('ip', $ip)
      ->orderBy('id', 'desc')
      ->first();
  }
}
