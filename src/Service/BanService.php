<?php

namespace TinyIB\Service;

use TinyIB\Repository\BanRepositoryInterface;
use TinyIB\Model\Ban;
use TinyIB\Model\BanInterface;
use TinyIB\Service\BanServiceInterface;

class BanService implements BanServiceInterface
{
    /** @var \TinyIB\Repository\BanRepositoryInterface $ban_repository */
    protected $ban_repository;

    /**
     * Creates a new ban service instance.
     *
     * @param \TinyIB\Repository\BanRepositoryInterface $ban_repository
     */
    public function __construct(
        BanRepositoryInterface $ban_repository
    ) {
        $this->ban_repository = $ban_repository;
    }

    /**
     * {@inheritDoc}
     */
    public function create(string $ip, int $expires_at = 0, string $reason = '') : BanInterface
    {
        $model = new Ban(0, $ip, time(), $expires_at, $reason);
        $this->ban_repository->insert($model);
        $id = $this->ban_repository->getLastInsertId();
        return $this->ban_repository->getOne(['id' => $id]);
    }

    /**
     * {@inheritDoc}
     */
    public function liftByID(int $id)
    {
        $this->ban_repository->delete(['id' => $id]);
    }

    /**
     * {@inheritDoc}
     */
    public function removeExpired()
    {
        $now = time();

        $this->ban_repository->delete([
            ['expire' => ['#op' => '>', 0]],
            ['expire' => ['#op' => '<=', $now]],
        ]);
    }
}
