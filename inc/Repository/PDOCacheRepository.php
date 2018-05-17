<?php

namespace TinyIB\Repository;

class PDOCacheRepository extends PDORepository implements ICacheRepository
{
    public function __construct()
    {
        parent::__construct(TINYIB_DBCACHE);

        // Create the cache table if it does not exist
        $table_name = static::$pdo->quote(TINYIB_DBCACHE);

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
                $sql = 'CREATE TABLE "' . TINYIB_DBCACHE . '" (
                    "key" varchar(255) NOT NULL,
                    "value" text NOT NULL,
                    "timestamp" integer NOT NULL,
                    PRIMARY KEY	("key")
                );
                CREATE INDEX ON "' . TINYIB_DBCACHE . '"("timestamp");';
            } else {
                $sql = "CREATE TABLE `" . TINYIB_DBCACHE . "` (
                    `key` varchar(255) NOT NULL,
                    `value` text CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
                    `timestamp` int(20) NOT NULL,
                    PRIMARY KEY	(`key`),
                    KEY `timestamp` (`timestamp`)
                )";
            }

            static::$pdo->exec($sql);
        }

        $this->beginTransaction();
        register_shutdown_function(function () {
            $this->commit();
        });
    }

    /**
     * {@inheritDoc}
     */
    public function getByKey($key)
    {
        $now = time();
        $result = $this->getOne([
            'key' => $key,
            [
                '#op' => 'OR',
                ['timestamp' => 0],
                ['timestamp' => ['#op' => '>', $now]],
            ],
        ]);
        return $result !== false ? $result['value'] : null;
    }

    /**
     * {@inheritDoc}
     */
    public function set($key, $value, $expire = null)
    {
        $now = time();
        $timestamp = isset($expire) ? $now + $expire : 0;

        if ($this->getOne(['key' => $key]) !== false) {
            $this->update(['key' => $key], [
                'value' => $value,
                'timestamp' => $timestamp,
            ]);
        } else {
            $this->insert([
                'key' => $key,
                'value' => $value,
                'timestamp' => $timestamp,
            ]);
        }

        return $value;
    }

    /**
     * {@inheritDoc}
     */
    public function deleteByKey($key)
    {
        $value = $this->getByKey($key);
        $this->delete(['key' => $key]);
        return $value;
    }

    /**
     * {@inheritDoc}
     */
    public function deletePattern($pattern)
    {
        $pattern = str_replace('*', '%', $pattern);
        return $this->delete(['key' => ['#op' => 'LIKE', $pattern]]);
    }
}
