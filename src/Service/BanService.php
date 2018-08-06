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
     * Creates a ban model from a data array.
     *
     * @param array $data
     *
     * @return TinyIB\Model\BanInterface
     */
    protected function createModel(array $data) : BanInterface
    {
        $ban = new Ban(
            $data['id'],
            $data['ip'],
            $data['timestamp'],
            $data['expire'],
            $data['reason']
        );

        return $ban;
    }

    /**
     * {@inheritDoc}
     */
    public function getAll() : array
    {
        $data = $this->ban_repository->getAll([], 'timestamp DESC');
        return array_map([$this, 'createModel'], $data);
    }

    /**
     * Loads a single ban model by a property.
     *
     * @param $name
     *   Property name.
     * @param $value
     *   Property value.
     *
     * @return \TinyIB\Model\BanInterface|null
     *   Loaded ban model or null.
     */
    protected function getOneByProperty($name, $value)
    {
        $data = $this->ban_repository->getOne([$name => $value]);
        if ($data === false) {
            return null;
        }

        return $this->createModel($data);
    }

    /**
     * {@inheritDoc}
     */
    public function getByID(int $id)
    {
        return $this->getOneByProperty('id', $id);
    }

    /**
     * {@inheritDoc}
     */
    public function getByIP(string $ip)
    {
        return $this->getOneByProperty('ip', $ip);
    }

    /**
     * {@inheritDoc}
     */
    public function getCount() : int
    {
        return $this->ban_repository->getCount([]);
    }

    /**
     * {@inheritDoc}
     */
    public function create(string $ip, int $expires_at = 0, string $reason = '') : BanInterface
    {
        $this->ban_repository->insert([
            'ip' => $ip,
            'timestamp' => time(),
            'expire' => $expires_at,
            'reason' => $reason,
        ]);

        $id = $this->ban_repository->getLastInsertId();
        return $this->getByID($id);
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
