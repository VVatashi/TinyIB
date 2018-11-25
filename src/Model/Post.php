<?php

namespace TinyIB\Model;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Database\Eloquent\Collection;
use TinyIB\Functions;
use VVatashi\BBCode\BBCodeDefinition;
use VVatashi\BBCode\HtmlGenerator;
use VVatashi\BBCode\Parser;
use VVatashi\BBCode\Token;
use VVatashi\BBCode\Tokenizer;

/**
 * @property int $id
 * @property int $created_at
 * @property int $updated_at
 * @property int $deleted_at
 * @property int $parent_id
 * @property int $bumped_at
 * @property string $ip
 * @property int $user_id
 * @property string $name
 * @property string $tripcode
 * @property string $email
 * @property string $subject
 * @property string $message
 * @property string $password
 * @property string $file
 * @property string $file_hex
 * @property string $file_original
 * @property int $file_size
 * @property int $image_width
 * @property int $image_height
 * @property string $thumb
 * @property int $thumb_width
 * @property int $thumb_height
 * @property bool $stickied
 * @property bool $moderated
 */
class Post extends Model
{
    use SoftDeletes;

    protected $table = TINYIB_DBPOSTS;

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

    public function replies()
    {
        return $this->hasMany(static::class, 'parent_id');
    }

    public function thread()
    {
        return $this->belongsTo(static::class, 'parent_id');
    }

    /**
     * Checks if post instance is not saved to the database.
     *
     * @return bool
     *   Post atatus.
     */
    public function isNew() : bool
    {
        return $this->id === 0;
    }

    /**
     * Checks if the post is a thread.
     *
     * @return bool
     *   Is post a thread.
     */
    public function isThread() : bool
    {
        return $this->parent_id === 0;
    }

    /**
     * Checks if the post is a reply.
     *
     * @return bool
     *   Is post a reply.
     */
    public function isReply() : bool
    {
        return $this->parent_id !== 0;
    }

    /**
     * Returns create time of the post.
     *
     * @return int
     *   The create time of the post.
     */
    public function getCreatedTimestamp() : int
    {
        return $this->created_at->getTimestamp();
    }

    /**
     * Returns bump time of the post.
     *
     * @return int
     *   The bump time of the post.
     */
    public function getBumpedTimestamp() : int
    {
        return $this->bumped_at->getTimestamp();
    }

    /**
     * Returns the size of the file attached to the post.
     *
     * @return string
     *   The size of the file attached to the post.
     */
    public function getFileSizeFormatted() : string
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
    public function isSticky() : bool
    {
        return $this->stickied === true;
    }

    /**
     * Returns the moderation status of the post.
     *
     * @return bool
     *   Is post moderated.
     */
    public function isModerated() : bool
    {
        return $this->moderated === true;
    }

    /**
     * @param string $message
     *
     * @return string
     */
    protected function wakabamark(string $message) : string
    {
        $patterns = array(
            '/\*\*(.*?)\*\*/si' => '[b]\\1[/b]',
            '/\*(.*?)\*/si' => '[i]\\1[/i]',
            '/~~(.*?)~~/si' => '[s]\\1[/s]',
            '/%%(.*?)%%/si' => '[spoiler]\\1[/spoiler]',
        );

        $tags = [
            'b' => BBCodeDefinition::create('strong'),
            'i' => BBCodeDefinition::create('em'),
            's' => BBCodeDefinition::create('del'),
            'spoiler' => BBCodeDefinition::create('span', 'class="spoiler"'),
        ];

        $tokenizer = new Tokenizer($tags);
        $parser = new Parser($tags);
        $generator = new HtmlGenerator($tags);

        $message = preg_replace(array_keys($patterns), array_values($patterns), $message);
        $tokens = $tokenizer->tokenize($message);
        $nodes = $parser->parse($tokens);
        return $generator->generate($nodes);
    }

    /**
     * @param string $message
     *
     * @return string
     */
    protected function bbcode(string $message) : string
    {
        $tags = [
            'b' => BBCodeDefinition::create('strong'),
            'i' => BBCodeDefinition::create('em'),
            'u' => BBCodeDefinition::create('span', 'style="text-decoration: underline;"'),
            's' => BBCodeDefinition::create('del'),
            'color' => BBCodeDefinition::create('span', function ($attribute) {
                $matches = [];
                if (preg_match('/#[0-9a-f]{6}/i', $attribute, $matches)) {
                    $color = $matches[0];
                    return "style=\"color: $color;\"";
                }

                return '';
            }),
            'sup' => BBCodeDefinition::create('sup'),
            'sub' => BBCodeDefinition::create('sub'),
            'spoiler' => BBCodeDefinition::create('span', 'class="spoiler"'),
            'rp' => BBCodeDefinition::create('span', 'class="rp"'),
            'code' => BBCodeDefinition::create('code', 'style="white-space: pre;"', false),
        ];

        $tokenizer = new Tokenizer($tags);
        $parser = new Parser($tags);
        $generator = new HtmlGenerator($tags);

        $tokens = $tokenizer->tokenize($message);

        // Process wakabamark.
        $tags = [];
        $is_code = false;
        $count = count($tokens);
        for ($i = 0; $i < $count; ++$i) {
            /** @var \VVatashi\BBCode\Token $token */
            $token = $tokens[$i];
            $type = $token->getType();
            switch ($type) {
                case Token::TEXT:
                    if (!$is_code) {
                        $text = $token->getText();
                        $text = $this->wakabamark($text);
                        $tokens[$i] = Token::text($text);
                    }
                    break;

                case Token::OPENING_TAG:
                    $text = $token->getText();
                    $tags[] = $text;
                    if ($text === 'code') {
                        $is_code = true;
                    }
                    break;

                case Token::CLOSING_TAG:
                    if (!empty($tags)) {
                        array_pop($tags);
                        $text = $token->getText();
                        if ($text === 'code') {
                            $is_code = array_search('code', $tags, true) !== false;
                        }
                    }
                    break;
            }
        }

        $nodes = $parser->parse($tokens);
        return $generator->generate($nodes);
    }

    /**
     * @param string $message
     *
     * @return string
     */
    public function markup(string $message) : string
    {
        return $this->bbcode($message);
    }

    /**
     * @return string
     */
    public function getFileExtension() : string
    {
        if (empty($this->file)) {
            return '';
        }

        $file_parts = explode('.', $this->file);
        return end($file_parts);
    }

    /**
     * @return string
     */
    public function getFileType() : string
    {
        $extension = $this->getFileExtension();

        switch ($extension) {
            case 'jpg':
            case 'png':
            case 'gif':
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

    /**
     * Creates a post view model from this post model.
     *
     * @param bool $res
     *   False for index pages, true for res pages.
     */
    public function createViewModel(bool $res) : array
    {
        $post = [
            'id' => $this->id,
            'parent' => $this->parent_id,
            'timestamp' => $this->getCreatedTimestamp(),
            'bumped' => $this->getBumpedTimestamp(),
            'ip' => $this->ip,
            'user_id' => $this->user_id,
            'name' => $this->name,
            'tripcode' => $this->tripcode,
            'email' => $this->email,
            'subject' => $this->subject,
            'message' => $this->message,
            'password' => $this->password,
            'file' => $this->file,
            'file_hex' => $this->file_hex,
            'file_original' => $this->file_original,
            'file_size' => $this->file_size,
            'file_size_formatted' => $this->getFileSizeFormatted(),
            'image_width' => $this->image_width,
            'image_height' => $this->image_height,
            'thumb' => $this->thumb,
            'thumb_width' => $this->thumb_width,
            'thumb_height' => $this->thumb_height,
            'stickied' => $this->isSticky() ? 1 : 0,
            'moderated' => $this->isModerated() ? 1 : 0,
        ];

        // Truncate messages on board index pages for readability
        if (TINYIB_TRUNCATE > 0 && !$res
            && substr_count($post['message'], '<br>') > TINYIB_TRUNCATE) {
            $br_offsets = Functions::strallpos($post['message'], '<br>');
            $post['message'] = substr($post['message'], 0, $br_offsets[TINYIB_TRUNCATE - 1]);
            $post['is_truncated'] = true;
        }

        // Process post message.
        try {
            $post['message'] = $this->markup($post['message']);
        }
        catch (\Exception $e) {
            // TODO: log error.
        }

        $link_pattern = '#href="/' . TINYIB_BOARD . '/res/(\d+)\#(\d+)"#';
        $post['message'] = preg_replace_callback($link_pattern, function ($matches) {
            $target_thread_id = (int)$matches[1];
            $target_post_id = (int)$matches[2];

            // If link to the same thread.
            return 'class="post__reference-link"'
                . ' href="/' . TINYIB_BOARD . "/res/$target_post_id#$target_post_id\""
                . " data-target-post-id=\"$target_post_id\"";
        }, $post['message']);

        // Process post file.
        if (isset($post['file'])) {
            $file_parts = explode('.', $post['file']);
            $post['file_extension'] = end($file_parts);

            if (in_array($post['file_extension'], ['jpg', 'png', 'gif'])) {
                $post['file_type'] = 'image';
            } elseif (in_array($post['file_extension'], ['mp3'])) {
                $post['file_type'] = 'audio';
            } elseif (in_array($post['file_extension'], ['mp4', 'webm'])) {
                $post['file_type'] = 'video';
            }
        }

        return $post;
    }

    /**
     * Returns the thread count.
     *
     * @return int
     */
    public static function getThreadCount() : int
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
     */
    public static function getThreadsByPage(int $page) : Collection
    {
        $skip = $page * TINYIB_THREADSPERPAGE;
        $take = TINYIB_THREADSPERPAGE;

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
    public static function getReplyCountByThreadID(int $id) : int
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
    public static function getPostsByThreadID(
        int $id,
        bool $moderated_only = true,
        $take = null,
        $skip = 0
    ) : Collection {
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
    public static function getPostsByHex(string $hash) : Collection
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
    public static function getLatestPosts(bool $moderated = true) : Collection
    {
        $count = 10;

        return Post::where('moderated', $moderated)
            ->orderBy('created_at', 'desc')
            ->take($count)
            ->get();
    }

    /**
     * Deletes a post by ID.
     *
     * @param int $id
     *   Post ID.
     */
    public static function deletePostByID(int $id)
    {
        $posts = static::getPostsByThreadID($id, false);

        foreach ($posts as $post) {
            Functions::deletePostImages($post);
            $post->delete();
        }
    }

    /**
     * Removes old threads.
     */
    public static function trimThreads()
    {
        $limit = (int)TINYIB_MAXTHREADS;

        if ($limit > 0) {
            /** @var Post[] $results */
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
    public static function getLastPostByIP(string $ip)
    {
        return Post::where('ip', $ip)
            ->orderBy('id', 'desc')
            ->first();
    }
}
