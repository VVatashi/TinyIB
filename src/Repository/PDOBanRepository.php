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
}
