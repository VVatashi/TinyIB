<?php

namespace TinyIB\Model;

use TinyIB\Functions;
use VVatashi\BBCode\BBCodeDefinition;
use VVatashi\BBCode\HtmlGenerator;
use VVatashi\BBCode\Parser;
use VVatashi\BBCode\Token;
use VVatashi\BBCode\Tokenizer;

final class Post implements PostInterface
{
    /** @var int $id */
    protected $id;

    /** @var int $parent */
    protected $parent;

    /** @var int $timestamp */
    protected $timestamp;

    /** @var int $bumped */
    protected $bumped;

    /** @var string $ip */
    protected $ip;

    /** @var null|int $user_id */
    protected $user_id;

    /** @var string $name */
    protected $name;

    /** @var string $tripcode */
    protected $tripcode;

    /** @var string $email */
    protected $email;

    /** @var string $subject */
    protected $subject;

    /** @var string $message */
    protected $message;

    /** @var string $password */
    protected $password;

    /** @var string $file */
    protected $file;

    /** @var string $file_hex */
    protected $file_hex;

    /** @var string $file_original */
    protected $file_original;

    /** @var int $file_size */
    protected $file_size;

    /** @var int $image_width */
    protected $image_width;

    /** @var int $image_height */
    protected $image_height;

    /** @var string $thumb */
    protected $thumb;

    /** @var int $thumb_width */
    protected $thumb_width;

    /** @var int $thumb_height */
    protected $thumb_height;

    /** @var int $stickied */
    protected $stickied;

    /** @var int $moderated */
    protected $moderated;

    /**
     * {@inheritDoc}
     */
    public function getID() : int
    {
        return $this->id;
    }

    /**
     * {@inheritDoc}
     */
    public function setID(int $id) : PostInterface
    {
        $this->id = $id;
        return $this;
    }

    /**
     * {@inheritDoc}
     */
    public function isNew() : bool
    {
        return $this->getID() === 0;
    }

    /**
     * {@inheritDoc}
     */
    public function getParentID() : int
    {
        return $this->parent;
    }

    /**
     * {@inheritDoc}
     */
    public function setParentID(int $parent) : PostInterface
    {
        $this->parent = $parent;
        return $this;
    }

    /**
     * {@inheritDoc}
     */
    public function isThread() : bool
    {
        return $this->getParentID() === 0;
    }

    /**
     * {@inheritDoc}
     */
    public function isReply() : bool
    {
        return $this->getParentID() !== 0;
    }

    /**
     * {@inheritDoc}
     */
    public function getCreateTime() : int
    {
        return $this->timestamp;
    }

    /**
     * {@inheritDoc}
     */
    public function setCreateTime(int $timestamp) : PostInterface
    {
        $this->timestamp = $timestamp;
        return $this;
    }

    /**
     * {@inheritDoc}
     */
    public function getBumpTime() : int
    {
        return $this->bumped;
    }

    /**
     * {@inheritDoc}
     */
    public function setBumpTime(int $bumped) : PostInterface
    {
        $this->bumped = $bumped;
        return $this;
    }

    /**
     * {@inheritDoc}
     */
    public function getIP() : string
    {
        return $this->ip;
    }

    /**
     * {@inheritDoc}
     */
    public function setIP(string $ip) : PostInterface
    {
        $this->ip = $ip;
        return $this;
    }

    /**
     * {@inheritDoc}
     */
    public function getUserID()
    {
        return $this->user_id;
    }

    /**
     * {@inheritDoc}
     */
    public function setUserID($user_id) : PostInterface
    {
        $this->user_id = $user_id;
        return $this;
    }

    /**
     * {@inheritDoc}
     */
    public function getName() : string
    {
        return $this->name;
    }

    /**
     * {@inheritDoc}
     */
    public function setName(string $name) : PostInterface
    {
        $this->name = $name;
        return $this;
    }

    /**
     * {@inheritDoc}
     */
    public function getTripcode() : string
    {
        return $this->tripcode;
    }

    /**
     * {@inheritDoc}
     */
    public function setTripcode(string $tripcode) : PostInterface
    {
        $this->tripcode = $tripcode;
        return $this;
    }

    /**
     * {@inheritDoc}
     */
    public function getEmail() : string
    {
        return $this->email;
    }

    /**
     * {@inheritDoc}
     */
    public function setEmail(string $email) : PostInterface
    {
        $this->email = $email;
        return $this;
    }

    /**
     * {@inheritDoc}
     */
    public function getSubject() : string
    {
        return $this->subject;
    }

    /**
     * {@inheritDoc}
     */
    public function setSubject(string $subject) : PostInterface
    {
        $this->subject = $subject;
        return $this;
    }

    /**
     * {@inheritDoc}
     */
    public function getMessage() : string
    {
        return $this->message;
    }

    /**
     * {@inheritDoc}
     */
    public function setMessage(string $message) : PostInterface
    {
        $this->message = $message;
        return $this;
    }

    /**
     * {@inheritDoc}
     */
    public function getPassword() : string
    {
        return $this->password;
    }

    /**
     * {@inheritDoc}
     */
    public function setPassword(string $password) : PostInterface
    {
        $this->password = $password;
        return $this;
    }

    /**
     * {@inheritDoc}
     */
    public function getFileName() : string
    {
        return $this->file;
    }

    /**
     * {@inheritDoc}
     */
    public function setFileName(string $name) : PostInterface
    {
        $this->file = $name;
        return $this;
    }

    /**
     * {@inheritDoc}
     */
    public function getFileHash() : string
    {
        return $this->file_hex;
    }

    /**
     * {@inheritDoc}
     */
    public function setFileHash(string $hash) : PostInterface
    {
        $this->file_hex = $hash;
        return $this;
    }

    /**
     * {@inheritDoc}
     */
    public function getOriginalFileName() : string
    {
        return $this->file_original;
    }

    /**
     * {@inheritDoc}
     */
    public function setOriginalFileName(string $name) : PostInterface
    {
        $this->file_original = $name;
        return $this;
    }

    /**
     * {@inheritDoc}
     */
    public function getFileSize() : int
    {
        return $this->file_size;
    }

    /**
     * {@inheritDoc}
     */
    public function setFileSize(int $size) : PostInterface
    {
        $this->file_size = $size;
        return $this;
    }

    /**
     * {@inheritDoc}
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
     * {@inheritDoc}
     */
    public function getImageWidth() : int
    {
        return $this->image_width;
    }

    /**
     * {@inheritDoc}
     */
    public function setImageWidth(int $width) : PostInterface
    {
        $this->image_width = $width;
        return $this;
    }

    /**
     * {@inheritDoc}
     */
    public function getImageHeight() : int
    {
        return $this->image_height;
    }

    /**
     * {@inheritDoc}
     */
    public function setImageHeight(int $height) : PostInterface
    {
        $this->image_height = $height;
        return $this;
    }

    /**
     * {@inheritDoc}
     */
    public function getThumbnailName() : string
    {
        return $this->thumb;
    }

    /**
     * {@inheritDoc}
     */
    public function setThumbnailName(string $name) : PostInterface
    {
        $this->thumb = $name;
        return $this;
    }

    /**
     * {@inheritDoc}
     */
    public function getThumbnailWidth() : int
    {
        return $this->thumb_width;
    }

    /**
     * {@inheritDoc}
     */
    public function setThumbnailWidth(int $width) : PostInterface
    {
        $this->thumb_width = $width;
        return $this;
    }

    /**
     * {@inheritDoc}
     */
    public function getThumbnailHeight() : int
    {
        return $this->thumb_height;
    }

    /**
     * {@inheritDoc}
     */
    public function setThumbnailHeight(int $height) : PostInterface
    {
        $this->thumb_height = $height;
        return $this;
    }

    /**
     * {@inheritDoc}
     */
    public function isSticky() : bool
    {
        return $this->stickied === 1;
    }

    /**
     * {@inheritDoc}
     */
    public function setSticky(bool $stickied) : PostInterface
    {
        $this->stickied = $stickied ? 1 : 0;
        return $this;
    }

    /**
     * {@inheritDoc}
     */
    public function isModerated() : bool
    {
        return $this->moderated === 1;
    }

    /**
     * {@inheritDoc}
     */
    public function setModerated(bool $moderated) : PostInterface
    {
        $this->moderated = $moderated ? 1 : 0;
        return $this;
    }

    /**
     * Creates a new instance of the post.
     */
    public function __construct(int $parent = 0)
    {
        $this->id = 0;
        $this->parent = $parent;

        $this->timestamp = 0;
        $this->bumped = 0;

        $this->ip = '';
        $this->user_id = null;

        $this->name = '';
        $this->tripcode = '';
        $this->email = '';
        $this->subject = '';
        $this->message = '';

        $this->password = '';

        $this->file = '';
        $this->file_hex = '';
        $this->file_original = '';
        $this->file_size = 0;
        $this->file_size_formatted = '';

        $this->image_width = 0;
        $this->image_height = 0;

        $this->thumb = '';
        $this->thumb_width = 0;
        $this->thumb_height = 0;

        $this->stickied = 0;
        $this->moderated = 1;
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
        if (empty($this->getFileName())) {
            return '';
        }

        $file_parts = explode('.', $this->getFileName());
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
     * {@inheritDoc}
     */
    public function createViewModel(bool $res) : array
    {
        $post = [
            'id' => $this->getID(),
            'parent' => $this->getParentID(),
            'timestamp' => $this->getCreateTime(),
            'bumped' => $this->getBumpTime(),
            'ip' => $this->getIP(),
            'user_id' => $this->getUserID(),
            'name' => $this->getName(),
            'tripcode' => $this->getTripcode(),
            'email' => $this->getEmail(),
            'subject' => $this->getSubject(),
            'message' => $this->getMessage(),
            'password' => $this->getPassword(),
            'file' => $this->getFileName(),
            'file_hex' => $this->getFileHash(),
            'file_original' => $this->getOriginalFileName(),
            'file_size' => $this->getFileSize(),
            'file_size_formatted' => $this->getFileSizeFormatted(),
            'image_width' => $this->getImageWidth(),
            'image_height' => $this->getImageHeight(),
            'thumb' => $this->getThumbnailName(),
            'thumb_width' => $this->getThumbnailWidth(),
            'thumb_height' => $this->getThumbnailHeight(),
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
}
