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
        $table = TINYIB_DBBANS;

        $table_exists = static::isTableExists($table);
        if ($table_exists === false) {
            if (TINYIB_DBDRIVER === 'pgsql') {
                $query = <<<EOL
CREATE TABLE "$table" (
    "id" bigserial NOT NULL,
    "ip" varchar(39) NOT NULL,
    "timestamp" integer NOT NULL,
    "expire" integer NOT NULL,
    "reason" text NOT NULL,
    PRIMARY KEY	("id")
);
CREATE INDEX ON "$table"("ip");
EOL;
            } else {
                $query = <<<EOL
CREATE TABLE `$table` (
    `id` mediumint(7) unsigned NOT NULL auto_increment,
    `ip` varchar(39) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
    `timestamp` int(20) NOT NULL,
    `expire` int(20) NOT NULL,
    `reason` text CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
    PRIMARY KEY	(`id`),
    KEY `ip` (`ip`)
);
EOL;
            }

            static::$pdo->exec($query);
        }
    }

    /**
     * {@inheritDoc}
     */
    protected function dataToModel(array $data)
    {
        return new Ban(
            (int)$data['id'],
            $data['ip'],
            (int)$data['timestamp'],
            (int)$data['expire'],
            $data['reason']
        );
    }

    /**
     * {@inheritDoc}
     *
     * @param Ban $model
     */
    protected function modelToData($model) : array
    {
        /** @var BanInterface $model */
        $data = [
            'id' => $model->getID(),
            'ip' => $model->getIP(),
            'timestamp' => $model->getCreatedDate(),
            'expire' => $model->getExpiresDate(),
            'reason' => $model->getReason(),
        ];

        return parent::modelToData($data);
    }
}
