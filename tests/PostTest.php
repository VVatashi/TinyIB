<?php

namespace TinyIB\Tests;

use PHPUnit\Framework\TestCase;
use TinyIB\Model\Post;
use TinyIB\Model\PostInterface;

final class PostTest extends TestCase
{
    public function testCreateThread() : void
    {
        // Post with a zero parent ID should be assumed as a thread.
        $post = new Post();
        $this->assertNotNull($post);
        $this->assertInstanceOf(PostInterface::class, $post);
        $this->assertInstanceOf(Post::class, $post);

        // Check that post is new.
        $is_new = $post->isNew();
        $this->assertEquals(true, $is_new);

        // Check post parent ID.
        $parent_id = $post->getParentID();
        $this->assertEquals(0, $parent_id);

        // Check that post is a thread.
        $is_thread = $post->isThread();
        $is_reply = $post->isReply();
        $this->assertEquals(true, $is_thread);
        $this->assertEquals(false, $is_reply);
    }

    public function testCreateReply() : void
    {
        // Post with a non-zero parent ID should be assumed as a reply.
        $post = new Post(1);
        $this->assertNotNull($post);
        $this->assertInstanceOf(PostInterface::class, $post);
        $this->assertInstanceOf(Post::class, $post);

        // Check that post is new.
        $is_new = $post->isNew();
        $this->assertEquals(true, $is_new);

        // Check post parent ID.
        $parent_id = $post->getParentID();
        $this->assertEquals(1, $parent_id);

        // Check that post is a reply.
        $is_thread = $post->isThread();
        $is_reply = $post->isReply();
        $this->assertEquals(false, $is_thread);
        $this->assertEquals(true, $is_reply);
    }

    public function testPostId() : void
    {
        $post = new Post();

        // Try set & get the ID of the post.
        $post->setID(1);
        $id = $post->getID();
        $this->assertEquals(1, $id);
    }

    public function testPostParentId() : void
    {
        $post = new Post();

        // Try change the post parent ID to 0.
        $post->setParentID(0);
        $parent = $post->getParentID();
        $this->assertEquals(0, $parent);

        // Check that post is a thread.
        $is_thread = $post->isThread();
        $is_reply = $post->isReply();
        $this->assertEquals(true, $is_thread);
        $this->assertEquals(false, $is_reply);

        // Try change the post parent ID to 1.
        $post->setParentID(1);
        $parent = $post->getParentID();
        $this->assertEquals(1, $parent);

        // Check that post is a reply.
        $is_thread = $post->isThread();
        $is_reply = $post->isReply();
        $this->assertEquals(false, $is_thread);
        $this->assertEquals(true, $is_reply);
    }

    public function testPostCreateTime() : void
    {
        $post = new Post();

        // Try set the post create time.
        $now = (new \DateTime())->getTimestamp();
        $post->setCreateTime($now);

        // Try get the post create time.
        $time = $post->getCreateTime();
        $this->assertEquals($now, $time);
    }

    public function testPostBumpTime() : void
    {
        $post = new Post();

        // Try set the post bump time.
        $now = (new \DateTime())->getTimestamp();
        $post->setBumpTime($now);

        // Try get the post bump time.
        $time = $post->getBumpTime();
        $this->assertEquals($now, $time);
    }

    public function testPostIp() : void
    {
        $post = new Post();

        // Try set & get the poster IP.
        $post->setIP('123.123.123.123');
        $ip = $post->getIP();
        $this->assertEquals('123.123.123.123', $ip);
    }

    public function testPostName() : void
    {
        $post = new Post();

        // Try set & get the poster name.
        $post->setName('Test');
        $name = $post->getName();
        $this->assertEquals('Test', $name);
    }

    public function testPostTripcode() : void
    {
        $post = new Post();

        // Try set & get the poster tripcode.
        $post->setTripcode('Test');
        $tripcode = $post->getTripcode();
        $this->assertEquals('Test', $tripcode);
    }

    public function testPostEmail() : void
    {
        $post = new Post();

        // Try set & get the poster email.
        $post->setEmail('Test');
        $email = $post->getEmail();
        $this->assertEquals('Test', $email);
    }

    public function testPostSubject() : void
    {
        $post = new Post();

        // Try set & get the subject of the post.
        $post->setSubject('Test');
        $subject = $post->getSubject();
        $this->assertEquals('Test', $subject);
    }

    public function testPostMessage() : void
    {
        $post = new Post();

        // Try set & get the message of the post.
        $post->setMessage('Test');
        $message = $post->getMessage();
        $this->assertEquals('Test', $message);
    }

    public function testPostPassword() : void
    {
        $post = new Post();

        // Try set & get the message of the post.
        $post->setPassword('Test');
        $password = $post->getPassword();
        $this->assertEquals('Test', $password);
    }

    public function testPostFileName() : void
    {
        $post = new Post();

        // Try set & get the name of the file attached to the post.
        $post->setFileName('Test');
        $file_name = $post->getFileName();
        $this->assertEquals('Test', $file_name);
    }

    public function testPostFileHash() : void
    {
        $post = new Post();

        // Try set & get the hash of the file attached to the post.
        $post->setFileHash('Test');
        $file_hash = $post->getFileHash();
        $this->assertEquals('Test', $file_hash);
    }

    public function testPostOriginalFileName() : void
    {
        $post = new Post();

        // Try set & get the original name of the file attached to the post.
        $post->setOriginalFileName('Test');
        $file_name = $post->getOriginalFileName();
        $this->assertEquals('Test', $file_name);
    }

    public function testPostFileSize() : void
    {
        $post = new Post();

        // Try set & get the size in bytes of the file attached to the post.
        $post->setFileSize(1000);
        $file_size = $post->getFileSize();
        $this->assertEquals(1000, $file_size);
    }

    public function testPostFileSizeFormatted() : void
    {
        $post = new Post();

        // Try set & get the size of the file attached to the post.
        // Input => expected.
        $tests = [
            0 => '0 B',
            100 => '100 B',
            500 => '500 B',
            1000 => '1 KB',
            1234 => '1.23 KB',
            12345 => '12.34 KB',
            123456 => '123.46 KB',
            1234567 => '1.23 MB',
        ];

        foreach ($tests as $input => $expected) {
            $post->setFileSize($input);
            $file_size = $post->getFileSizeFormatted();
            $this->assertEquals($expected, $file_size);
        }
    }

    public function testPostImageWidth() : void
    {
        $post = new Post();

        // Try set & get the width of the image attached to the post.
        $post->setImageWidth(1000);
        $image_width = $post->getImageWidth();
        $this->assertEquals(1000, $image_width);
    }

    public function testPostImageHeight() : void
    {
        $post = new Post();

        // Try set & get the width of the image attached to the post.
        $post->setImageHeight(1000);
        $image_height = $post->getImageHeight();
        $this->assertEquals(1000, $image_height);
    }

    public function testPostThumbnailName() : void
    {
        $post = new Post();

        // Try set & get the name of the thumbnail of the file attached to the post.
        $post->setThumbnailName('Test');
        $name = $post->getThumbnailName();
        $this->assertEquals('Test', $name);
    }

    public function testPostThumbnailWidth() : void
    {
        $post = new Post();

        // Try set & get the width of the thumbnail of the file attached to the post.
        $post->setThumbnailWidth(1000);
        $image_width = $post->getThumbnailWidth();
        $this->assertEquals(1000, $image_width);
    }

    public function testPostThumbnailHeight() : void
    {
        $post = new Post();

        // Try set & get the width of the thumbnail of the file attached to the post.
        $post->setThumbnailHeight(1000);
        $image_height = $post->getThumbnailHeight();
        $this->assertEquals(1000, $image_height);
    }

    public function testPostStickyStatus() : void
    {
        $post = new Post();

        // Try set post sticky flag.
        $post->setSticky(false);
        $stickied = $post->isSticky();
        $this->assertEquals(false, $stickied);

        // Try unset post sticky flag.
        $post->setSticky(true);
        $stickied = $post->isSticky();
        $this->assertEquals(true, $stickied);
    }

    public function testPostModerationStatus() : void
    {
        $post = new Post();

        // Try set post moderated flag.
        $post->setModerated(false);
        $moderated = $post->isModerated();
        $this->assertEquals(false, $moderated);

        // Try unset post moderated flag.
        $post->setModerated(true);
        $moderated = $post->isModerated();
        $this->assertEquals(true, $moderated);
    }
}
