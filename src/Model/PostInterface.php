<?php

namespace TinyIB\Model;

interface PostInterface
{
    /**
     * Returns ID of the post.
     *
     * @return int
     *   Post ID.
     */
    public function getID() : int;

    /**
     * Changes ID of the post.
     *
     * @param int $id
     *   The new ID for the post.
     *
     * @return PostInterface
     *   Post itself.
     */
    public function setID(int $id) : PostInterface;

    /**
     * Checks if post instance is not saved to the database.
     *
     * @return bool
     *   Post atatus.
     */
    public function isNew() : bool;

    /**
     * Returns id of the post parent.
     *
     * @return int
     *   Parent ID.
     */
    public function getParentID() : int;

    /**
     * Changes the parent ID of the post.
     *
     * @param int $parent
     *   The parent ID of the post.
     *
     * @return PostInterface
     *   Post itself.
     */
    public function setParentID(int $parent) : PostInterface;

    /**
     * Checks if the post is a thread.
     *
     * @return bool
     *   Is post a thread.
     */
    public function isThread() : bool;

    /**
     * Checks if the post is a reply.
     *
     * @return bool
     *   Is post a reply.
     */
    public function isReply() : bool;

    /**
     * Returns create time of the post.
     *
     * @return int
     *   The create time of the post.
     */
    public function getCreateTime() : int;

    /**
     * Changes the create time of the post.
     *
     * @param int $timestamp
     *   The create time of the post.
     *
     * @return PostInterface
     *   Post itself.
     */
    public function setCreateTime(int $timestamp) : PostInterface;

    /**
     * Returns bump time of the post.
     *
     * @return int
     *   The bump time of the post.
     */
    public function getBumpTime() : int;

    /**
     * Changes the bump time of the post.
     *
     * @param int $timestamp
     *   The bump time of the post.
     *
     * @return PostInterface
     *   Post itself.
     */
    public function setBumpTime(int $timestamp) : PostInterface;

    /**
     * Returns the poster IP.
     *
     * @return string
     *   The poster IP.
     */
    public function getIP() : string;

    /**
     * Changes the poster IP.
     *
     * @param string $ip
     *   The poster IP.
     *
     * @return PostInterface
     *   Post itself.
     */
    public function setIP(string $ip) : PostInterface;

    /**
     * Returns the poster name.
     *
     * @return string
     *   The poster name.
     */
    public function getName() : string;

    /**
     * Changes the poster name.
     *
     * @param string $name
     *   The poster name.
     *
     * @return PostInterface
     *   Post itself.
     */
    public function setName(string $name) : PostInterface;

    /**
     * Returns the poster tripcode.
     *
     * @return string
     *   The poster tripcode.
     */
    public function getTripcode() : string;

    /**
     * Changes the poster tripcode.
     *
     * @param string $tripcode
     *   The poster tripcode.
     *
     * @return PostInterface
     *   Post itself.
     */
    public function setTripcode(string $tripcode) : PostInterface;

    /**
     * Returns the poster email.
     *
     * @return string
     *   The poster email.
     */
    public function getEmail() : string;

    /**
     * Changes the poster email.
     *
     * @param string $email
     *   The poster email.
     *
     * @return PostInterface
     *   Post itself.
     */
    public function setEmail(string $email) : PostInterface;

    /**
     * Returns the subject of the post.
     *
     * @return string
     *   The subject of the post.
     */
    public function getSubject() : string;

    /**
     * Changes the subject of the post.
     *
     * @param string $subject
     *   The subject of the post.
     *
     * @return PostInterface
     *   Post itself.
     */
    public function setSubject(string $subject) : PostInterface;

    /**
     * Returns the message of the post.
     *
     * @return string
     *   The message of the post.
     */
    public function getMessage() : string;

    /**
     * Changes the message of the post.
     *
     * @param string $message
     *   The message of the post.
     *
     * @return PostInterface
     *   Post itself.
     */
    public function setMessage(string $message) : PostInterface;

    /**
     * Returns the hash of the post delete password.
     *
     * @return string
     *   The hash of the post delete password.
     */
    public function getPassword() : string;

    /**
     * Changes the hash of the post delete password.
     *
     * @param string $password
     *   The hash of the post delete password.
     *
     * @return PostInterface
     *   Post itself.
     */
    public function setPassword(string $password) : PostInterface;

    /**
     * Returns the name of the file attached to the post.
     *
     * @return string
     *   The name of the file attached to the post.
     */
    public function getFileName() : string;

    /**
     * Changes the name of the file attached to the post.
     *
     * @param string $name
     *   The name of the file attached to the post.
     *
     * @return PostInterface
     *   Post itself.
     */
    public function setFileName(string $name) : PostInterface;

    /**
     * Returns the hash of the file attached to the post.
     *
     * @return string
     *   The hash of the file attached to the post.
     */
    public function getFileHash() : string;

    /**
     * Changes the hash of the file attached to the post.
     *
     * @param string $hash
     *   The hash of the file attached to the post.
     *
     * @return PostInterface
     *   Post itself.
     */
    public function setFileHash(string $hash) : PostInterface;

    /**
     * Returns the original name of the file attached to the post.
     *
     * @return string
     *   The original name of the file attached to the post.
     */
    public function getOriginalFileName() : string;

    /**
     * Changes the original name of the file attached to the post.
     *
     * @param string $name
     *   The original name of the file attached to the post.
     *
     * @return PostInterface
     *   Post itself.
     */
    public function setOriginalFileName(string $name) : PostInterface;

    /**
     * Returns the size in bytes of the file attached to the post.
     *
     * @return int
     *   The size in bytes of the file attached to the post.
     */
    public function getFileSize() : int;

    /**
     * Changes the size in bytes of the file attached to the post.
     *
     * @param int $size
     *   The size in bytes of the file attached to the post.
     *
     * @return PostInterface
     *   Post itself.
     */
    public function setFileSize(int $size) : PostInterface;

    /**
     * Returns the size of the file attached to the post.
     *
     * @return string
     *   The size of the file attached to the post.
     */
    public function getFileSizeFormatted() : string;

    /**
     * Returns the width of the image attached to the post.
     *
     * @return int
     *   The the width of the image attached to the post.
     */
    public function getImageWidth() : int;

    /**
     * Changes the width of the image attached to the post.
     *
     * @param int $width
     *   The width of the image attached to the post.
     *
     * @return PostInterface
     *   Post itself.
     */
    public function setImageWidth(int $width) : PostInterface;

    /**
     * Returns the height of the image attached to the post.
     *
     * @return int
     *   The the height of the image attached to the post.
     */
    public function getImageHeight() : int;

    /**
     * Changes the height of the image attached to the post.
     *
     * @param int $height
     *   The height of the image attached to the post.
     *
     * @return PostInterface
     *   Post itself.
     */
    public function setImageHeight(int $height) : PostInterface;

    /**
     * Returns the name of the thumbnail of the file attached to the post.
     *
     * @return string
     *   The name of the thumbnail of the file attached to the post.
     */
    public function getThumbnailName() : string;

    /**
     * Changes the name of the thumbnail of the file attached to the post.
     *
     * @param string $name
     *   The name of the thumbnail of the file attached to the post.
     *
     * @return PostInterface
     *   Post itself.
     */
    public function setThumbnailName(string $name) : PostInterface;

    /**
     * Returns the width of the thumbnail of the file attached to the post.
     *
     * @return int
     *   The the width of the thumbnail of the file attached to the post.
     */
    public function getThumbnailWidth() : int;

    /**
     * Changes the width of the thumbnail of the file attached to the post.
     *
     * @param int $width
     *   The width of the thumbnail of the file attached to the post.
     *
     * @return PostInterface
     *   Post itself.
     */
    public function setThumbnailWidth(int $width) : PostInterface;

    /**
     * Returns the height of the thumbnail of the file attached to the post.
     *
     * @return int
     *   The the height of the thumbnail of the file attached to the post.
     */
    public function getThumbnailHeight() : int;

    /**
     * Changes the height of the thumbnail of the file attached to the post.
     *
     * @param int $height
     *   The height of the thumbnail of the file attached to the post.
     *
     * @return PostInterface
     *   Post itself.
     */
    public function setThumbnailHeight(int $height) : PostInterface;

    /**
     * Checks if post is sticky.
     *
     * @return bool
     *   Is post sticky.
     */
    public function isSticky() : bool;

    /**
     * Changes the sticky status of the post.
     *
     * @param bool $stickied
     *   The stickied status of the post.
     *
     * @return PostInterface
     *   Post itself.
     */
    public function setSticky(bool $stickied) : PostInterface;

    /**
     * Returns the moderation status of the post.
     *
     * @return bool
     *   Is post moderated.
     */
    public function isModerated() : bool;

    /**
     * Changes the moderation status of the post.
     *
     * @param bool $moderated
     *   The moderation status of the post.
     *
     * @return PostInterface
     *   Post itself.
     */
    public function setModerated(bool $moderated) : PostInterface;

    /**
     * Creates a post view model from this post model.
     *
     * @param bool $res
     *   False for index pages, true for res pages.
     */
    public function createViewModel(bool $res) : array;
}
