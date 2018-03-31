<?php

namespace TinyIB\Repository;

class PDOBanRepository extends PDORepository implements IBanRepository
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
            static::$pdo->exec($bans_sql);
        }
    }

    /**
     * {@inheritDoc}
     */
    public function banByID($id)
    {
        return $this->getOne(['id' => $id]);
    }

    /**
     * {@inheritDoc}
     */
    public function banByIP($ip)
    {
        return $this->getOne(['ip' => $ip]);
    }

    /**
     * {@inheritDoc}
     */
    public function allBans()
    {
        return $this->getAll([], 'timestamp DESC');
    }

    /**
     * {@inheritDoc}
     */
    public function insertBan($ban)
    {
        $now = time();

        return $this->insert([
            'ip' => $ban['ip'],
            'timestamp' => $now,
            'expire' => $ban['expire'],
            'reason' => $ban['reason'],
        ]);
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
    public function deleteBanByID($id)
    {
        $this->delete(['id' => $id]);
    }
}
