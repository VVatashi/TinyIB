<?php

namespace Imageboard\Models;

use Imageboard\Exceptions\ValidationException;
use Imageboard\Services\ConfigService;
use VVatashi\BBCode\{Parser, TagDef, Node\Node, Node\TagNode, Node\TextNode};

class TreeParser extends Parser {
  /**
   * Parses input string.
   *
   * @param string $text
   *
   * @return Node[]
   */
  public function getTree(string $text): array {
    $tokens = $this->tokenizer->tokenize($text);
    $segments = $this->createSegments($tokens);
    return $this->createTree($segments);
  }
}

/**
 * @property-read int    $id
 * @property-read int    $created_at
 * @property-read int    $updated_at
 * @property-read int    $deleted_at
 * @property-read int    $parent_id
 * @property-read int    $bumped_at
 * @property-read string $ip
 * @property-read int    $user_id
 * @property-read string $name
 * @property-read string $tripcode
 * @property-read string $subject
 * @property-read string $message
 * @property-read string $message_raw
 * @property-read string $file
 * @property-read string $file_hex
 * @property-read string $file_original
 * @property-read int    $file_size
 * @property-read int    $image_width
 * @property-read int    $image_height
 * @property-read string $thumb
 * @property-read int    $thumb_width
 * @property-read int    $thumb_height
 * @property-read int    $score
 */
class Post extends Model
{
  /** @var null|int */
  protected $id = null;

  /** @var int */
  protected $created_at = 0;

  /** @var int */
  protected $updated_at = 0;

  /** @var null|int */
  protected $deleted_at = null;

  /** @var int */
  protected $parent_id = 0;

  /** @var int */
  protected $bumped_at = 0;

  /** @var string */
  protected $ip = '';

  /** @var int */
  protected $user_id = 0;

  /** @var string */
  protected $name = '';

  /** @var string */
  protected $tripcode = '';

  /** @var string */
  protected $subject = '';

  /** @var string */
  protected $message = '';

  /** @var string */
  protected $file = '';

  /** @var string */
  protected $file_hex = '';

  /** @var string */
  protected $file_original = '';

  /** @var int */
  protected $file_size = 0;

  /** @var int */
  protected $image_width = 0;

  /** @var int */
  protected $image_height = 0;

  /** @var string */
  protected $thumb = '';

  /** @var int */
  protected $thumb_width = 0;

  /** @var int */
  protected $thumb_height = 0;

  /** @var int */
  protected $score = 0;

  /**
   * Post constructor.
   *
   * @param array $attributes
   * @param bool  $validate
   */
  public function __construct(array $attributes = [], bool $validate = true)
  {
    parent::__construct($attributes);

    if ($validate) {
      $this->setId($attributes['id'] ?? null);
      $this->setCreatedAt($attributes['created_at'] ?? 0);
      $this->setUpdatedAt($attributes['updated_at'] ?? 0);
      $this->setDeletedAt($attributes['deleted_at'] ?? null);
      $this->setParentId($attributes['parent_id'] ?? 0);
      $this->setBumpedAt($attributes['bumped_at'] ?? 0);
      $this->setIp($attributes['ip'] ?? '');
      $this->setUserId($attributes['user_id'] ?? 0);
      $this->setName($attributes['name'] ?? '');
      $this->setTripcode($attributes['tripcode'] ?? '');
      $this->setSubject($attributes['subject'] ?? '');
      $this->setMessage($attributes['message'] ?? '');
      $this->setMessageRaw($attributes['message_raw'] ?? '');
      $this->setFile($attributes['file'] ?? '');
      $this->setFileHex($attributes['file_hex'] ?? '');
      $this->setFileOriginal($attributes['file_original'] ?? '');
      $this->setFileSize($attributes['file_size'] ?? 0);
      $this->setImageWidth($attributes['image_width'] ?? 0);
      $this->setImageHeight($attributes['image_height'] ?? 0);
      $this->setThumb($attributes['thumb'] ?? '');
      $this->setThumbWidth($attributes['thumb_width'] ?? 0);
      $this->setThumbHeight($attributes['thumb_height'] ?? 0);
    }
  }

  /**
   * @param null|int $id
   *
   * @return Post
   *
   * @throws ValidationException
   */
  function setId($id): self
  {
    if (isset($id) && $id <= 0) {
      throw new ValidationException('ID should be NULL or positive integer');
    }

    $this->id = $id;
    return $this;
  }

  /**
   * @param int $created_at
   *
   * @return Post
   *
   * @throws ValidationException
   */
  function setCreatedAt(int $created_at): self
  {
    if ($created_at < 0) {
      throw new ValidationException('Created at should not be less than zero');
    }

    $this->created_at = $created_at;
    return $this;
  }

  /**
   * @param int $updated_at
   *
   * @return Post
   *
   * @throws ValidationException
   */
  function setUpdatedAt(int $updated_at): self
  {
    if ($updated_at < 0) {
      throw new ValidationException('Updated at should not be less than zero');
    }

    $this->updated_at = $updated_at;
    return $this;
  }

  /**
   * @param null|int $deleted_at
   *
   * @return Post
   *
   * @throws ValidationException
   */
  function setDeletedAt($deleted_at): self
  {
    if (isset($deleted_at) && $deleted_at <= 0) {
      throw new ValidationException('Deleted at should be NULL or positive integer');
    }

    $this->deleted_at = $deleted_at;
    return $this;
  }

  /**
   * @param int $parent_id
   *
   * @return Post
   */
  function setParentId(int $parent_id): self
  {
    $this->parent_id = $parent_id;
    return $this;
  }

  /**
   * @param int $bumped_at
   *
   * @return Post
   *
   * @throws ValidationException
   */
  function setBumpedAt(int $bumped_at): self
  {
    if ($bumped_at < 0) {
      throw new ValidationException('Bumped at should not be less than zero');
    }

    $this->bumped_at = $bumped_at;
    return $this;
  }

  /**
   * @param string $ip
   *
   * @return Post
   */
  function setIp(string $ip): self
  {
    $this->ip = $ip;
    return $this;
  }

  /**
   * @param int $user_id
   *
   * @return Post
   */
  function setUserId(int $user_id): self
  {
    $this->user_id = $user_id;
    return $this;
  }

  /**
   * @param string $name
   *
   * @return Post
   */
  function setName(string $name): self
  {
    $this->name = $name;
    return $this;
  }

  /**
   * @param string $tripcode
   *
   * @return Post
   */
  function setTripcode(string $tripcode): self
  {
    $this->tripcode = $tripcode;
    return $this;
  }

  /**
   * @param string $subject
   *
   * @return Post
   */
  function setSubject(string $subject): self
  {
    $this->subject = $subject;
    return $this;
  }

  /**
   * @param string $message
   *
   * @return Post
   */
  function setMessage(string $message): self
  {
    $this->message = $message;
    return $this;
  }

  /**
   * @param string $message_raw
   *
   * @return Post
   */
  function setMessageRaw(string $message_raw): self
  {
    $this->message_raw = $message_raw;
    return $this;
  }

  /**
   * @param string $file
   *
   * @return Post
   */
  function setFile(string $file): self
  {
    $this->file = $file;
    return $this;
  }

  /**
   * @param string $file_hex
   *
   * @return Post
   */
  function setFileHex(string $file_hex): self
  {
    $this->file_hex = $file_hex;
    return $this;
  }

  /**
   * @param string $password
   *
   * @return Post
   */
  function setFileOriginal(string $file_original): self
  {
    $this->file_original = $file_original;
    return $this;
  }

  /**
   * @param int $file_size
   *
   * @return Post
   */
  function setFileSize(int $file_size): self
  {
    $this->file_size = $file_size;
    return $this;
  }

  /**
   * @param int $image_width
   *
   * @return Post
   */
  function setImageWidth(int $image_width): self
  {
    $this->image_width = $image_width;
    return $this;
  }

  /**
   * @param int $image_height
   *
   * @return Post
   */
  function setImageHeight(int $image_height): self
  {
    $this->image_height = $image_height;
    return $this;
  }

  /**
   * @param string $thumb
   *
   * @return Post
   */
  function setThumb(string $thumb): self
  {
    $this->thumb = $thumb;
    return $this;
  }

  /**
   * @param int $thumb_width
   *
   * @return Post
   */
  function setThumbWidth(int $thumb_width): self
  {
    $this->thumb_width = $thumb_width;
    return $this;
  }

  /**
   * @param int $thumb_height
   *
   * @return Post
   */
  function setThumbHeight(int $thumb_height): self
  {
    $this->thumb_height = $thumb_height;
    return $this;
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
    $board = ConfigService::getInstance()->get('BOARD');
    $link_pattern = '#href="/' . $board . '/res/(\d+)\#(\d+)"#';
    return preg_replace_callback($link_pattern, function ($matches) use ($board) {
      $target_thread_id = (int)$matches[1];
      $target_post_id = (int)$matches[2];

      return 'class="post__reference-link"'
        . ' href="/' . $board . "/res/$target_thread_id#reply_$target_post_id\""
        . " data-target-post-id=\"$target_post_id\"";
    }, $message);
  }

  protected static function convertWakabamarkToBBCode(string $message): string {
    static $patterns = [];
    if (empty($patterns)) {
      $patterns = [
        '/\*\*(.*?)\*\*/si' => '[b]\\1[/b]',
        '/\*(.*?)\*/si'     => '[i]\\1[/i]',
        '/~~(.*?)~~/si'     => '[s]\\1[/s]',
        '/%%(.*?)%%/si'     => '[spoiler]\\1[/spoiler]',
      ];
    }

    $flags = PREG_SPLIT_NO_EMPTY | PREG_SPLIT_DELIM_CAPTURE;
    $rawContentPattern = '/(\[code\].+?\[\/code\])/';
    $segments = preg_split($rawContentPattern, $message, -1, $flags);
    $segments = array_map(function ($segment) use ($patterns, $rawContentPattern) {
      $matches = [];
      if (!preg_match($rawContentPattern, $segment, $matches)) {
        return preg_replace(array_keys($patterns), array_values($patterns), $segment);
      } else {
        // Not replace Wakabamark in raw content tags.
        return $segment;
      }
    }, $segments);

    return implode('', $segments);
  }

  protected static function getBBCodes(): array {
    static $bbcodes = [];
    if (empty($bbcodes)) {
      $bbcodes = [
        new TagDef('b', ['outputFormat' => '<strong>{content}</strong>']),
        new TagDef('i', ['outputFormat' => '<em>{content}</em>']),
        new TagDef('u', ['outputFormat' => '<span class="markup__underline">{content}</span>']),
        new TagDef('s', ['outputFormat' => '<del>{content}</del>']),
        new TagDef('sub'),
        new TagDef('sup'),
        new TagDef('code', [
          'attributePattern' => '/[a-zA-Z]*/',
          'outputFormat' => '<code data-code="{attribute}">{content}</code>',
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
        new TagDef('link', [
          'attributePattern' => '/[^"]+/',
          'outputFormat' => '<a href="{attribute}">{content}</a>',
        ]),
        new TagDef('quote', ['outputFormat' => '<span class="markup__quote">{content}</span>']),
      ];
    }

    return $bbcodes;
  }

  function getMessageFormatted(): string {
    $message = static::convertWakabamarkToBBCode($this->message);

    $parser = new Parser(static::getBBCodes());
    $message = $parser->parse($message);

    return static::fixLinks($message);
  }

  protected static function processNode(Node $node): array {
    $data = [];

    if ($node instanceof TagNode) {
      $data['type'] = 'tag';

      $tag = $node->getTag();
      $data['tag'] = $tag->getTagName();

      $attribute = $tag->getAttribute();
      if (!empty($attribute)) {
        $data['attribute'] = $tag->getAttribute();
      }

      $data['children'] = array_map([Post::class, 'processNode'], $node->getChildren());
    } elseif ($node instanceof TextNode) {
      $data['type'] = 'text';
      $data['text'] = html_entity_decode($node->getText());
    }

    return $data;
  }

  function getMessageTree(): array {
    $message = str_replace("\r", '', $this->message);
    $message = str_replace('<br>', "\n", $message);
    $message = preg_replace('/<a href="([^"]+)">([^<]+)<\/a>/', '[link="$1"]$2[/link]', $message);

    $message = static::convertWakabamarkToBBCode($message);

    $parser = new TreeParser(static::getBBCodes());
    $tree = $parser->getTree($message);

    return array_map([Post::class, 'processNode'], $tree);
  }
}
