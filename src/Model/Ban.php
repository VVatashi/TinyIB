<?php

namespace TinyIB\Model;

class Ban implements BanInterface
{
    use ImmutableTrait;

    /** @var int $id */
    protected $id;

    /** @var string $ip */
    protected $ip;

    /** @var int $created_at */
    protected $created_at;

    /** @var int $expires_at */
    protected $expires_at;

    /** @var string $reason */
    protected $reason;

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
    public function withID(int $id) : BanInterface
    {
        return $this->with('id', $id);
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
    public function withIP(string $ip) : BanInterface
    {
        return $this->with('ip', $ip);
    }

    /**
     * {@inheritDoc}
     */
    public function getCreatedDate() : int
    {
        return $this->created_at;
    }

    /**
     * {@inheritDoc}
     */
    public function withCreatedDate(int $created_at) : BanInterface
    {
        return $this->with('created_at', $created_at);
    }

    /**
     * {@inheritDoc}
     */
    public function getExpiresDate() : int
    {
        return $this->expires_at;
    }

    /**
     * {@inheritDoc}
     */
    public function isPermanent() : bool
    {
        return $this->expires_at === 0;
    }

    /**
     * {@inheritDoc}
     */
    public function isExpired() : bool
    {
        return !$this->isPermanent() && $this->expires_at < time();
    }

    /**
     * {@inheritDoc}
     */
    public function withExpiresDate(int $expires_at) : BanInterface
    {
        return $this->with('expires_at', $expires_at);
    }

    /**
     * {@inheritDoc}
     */
    public function getReason() : string
    {
        return $this->reason;
    }

    /**
     * {@inheritDoc}
     */
    public function hasReason() : bool
    {
        return !empty($this->reason);
    }

    /**
     * {@inheritDoc}
     */
    public function withReason(string $reason) : BanInterface
    {
        return $this->with('reason', $reason);
    }

    /**
     * Creates a new instance of a ban.
     */
    public function __construct(
        int $id,
        string $ip,
        int $created_at,
        int $expires_at,
        string $reason = ''
    ) {
        $this->id = $id;
        $this->ip = $ip;
        $this->created_at = $created_at;
        $this->expires_at = $expires_at;
        $this->reason = $reason;
    }
}
