<?php

namespace TinyIB\Repository;

use TinyIB\Model\Ban;
use TinyIB\Model\BanInterface;

class PDOBanRepository extends PDORepository implements BanRepositoryInterface
{
    public function __construct()
    {
        parent::__construct(TINYIB_DBBANS);

        // Create the bans table if it does not exist
        $table_name = static::$pdo->quote(TINYIB_DBBANS);

        if (TINYIB_DBDRIVER === 'pgsql') {
            $query_str = 'SELECT count(*) FROM pg_catalog.pg_tables'
                . " WHERE tablename LIKE $table_name";
            $query = static::$pdo->query($query_str);
        } else {
            static::$pdo->query("SHOW TABLES LIKE $table_name");
            $query = static::$pdo->query('SELECT FOUND_ROWS()');
        }

        $table_exists = $query->fetchColumn() != 0;

        if ($table_exists === false) {
            if (TINYIB_DBDRIVER === 'pgsql') {
                $sql = 'CREATE TABLE "' . TINYIB_DBBANS . '" (
                    "id" bigserial NOT NULL,
                    "ip" varchar(39) NOT NULL,
                    "timestamp" integer NOT NULL,
                    "expire" integer NOT NULL,
                    "reason" text NOT NULL,
                    PRIMARY KEY	("id")
                );
                CREATE INDEX ON "' . TINYIB_DBBANS . '"("ip");';
            } else {
                $sql = "CREATE TABLE `" . TINYIB_DBBANS . "` (
                    `id` mediumint(7) unsigned NOT NULL auto_increment,
                    `ip` varchar(39) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
                    `timestamp` int(20) NOT NULL,
                    `expire` int(20) NOT NULL,
                    `reason` text CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
                    PRIMARY KEY	(`id`),
                    KEY `ip` (`ip`)
                )";
            }

            static::$pdo->exec($sql);
        }
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
    public function banByID(int $id)
    {
        $data = $this->getOne(['id' => $id]);
        if ($data === false) {
            return null;
        }

        return $this->createModel($data);
    }

    /**
     * {@inheritDoc}
     */
    public function banByIP(string $ip)
    {
        $data = $this->getOne(['ip' => $ip]);
        if ($data === false) {
            return null;
        }

        return $this->createModel($data);
    }

    /**
     * {@inheritDoc}
     */
    public function allBans() : array
    {
        $data = $this->getAll([], 'timestamp DESC');
        return array_map([$this, 'createModel'], $data);
    }

    /**
     * {@inheritDoc}
     */
    public function insertBan(BanInterface $ban) : int
    {
        $this->insert([
            'ip' => $ban->getIP(),
            'timestamp' => $ban->getCreatedDate(),
            'expire' => $ban->getExpiresDate(),
            'reason' => $ban->getReason(),
        ]);

        if (TINYIB_DBDRIVER === 'pgsql') {
            return static::$pdo->lastInsertId(TINYIB_DBBANS . '_id_seq');
        } else {
            return static::$pdo->lastInsertId();
        }
    }

    /**
     * {@inheritDoc}
     */
    public function clearExpiredBans()
    {
        $now = time();

        $this->delete([
            ['expire' => ['#op' => '>', 0]],
            ['expire' => ['#op' => '<=', $now]],
        ]);
    }

    /**
     * {@inheritDoc}
     */
    public function deleteBanByID(int $id)
    {
        $this->delete(['id' => $id]);
    }
}
