<?php

namespace TinyIB\Repository;

class PDOHelper
{
    /**
     * @return string
     */
    protected static function getDSN()
    {
        if (TINYIB_DBDSN == '') {
            // Build a default (likely MySQL) DSN
            $dsn = TINYIB_DBDRIVER . ':host=' . TINYIB_DBHOST;

            if (TINYIB_DBPORT > 0) {
                $dsn .= ';port=' . TINYIB_DBPORT;
            }

            $dsn .= ';dbname=' . TINYIB_DBNAME;
        } else {
            // Use a custom DSN
            $dsn = TINYIB_DBDSN;
        }

        return $dsn;
    }

    /**
     * @return array
     */
    protected static function getPDOOptions()
    {
        $options = [
            \PDO::ATTR_PERSISTENT => true,
            \PDO::ATTR_ERRMODE => \PDO::ERRMODE_EXCEPTION,
        ];

        if (TINYIB_DBDRIVER !== 'pgsql') {
            $options[\PDO::MYSQL_ATTR_INIT_COMMAND] = 'SET NAMES utf8';
        }

        return $options;
    }

    /**
     * @return \PDO
     *
     * @throws \PDOException
     */
    public static function createPDO()
    {
        return new \PDO(
            static::getDSN(),
            TINYIB_DBUSERNAME,
            TINYIB_DBPASSWORD,
            static::getPDOOptions()
        );
    }

    /**
     * @param \PDOStatement $statement
     *
     * @return array
     */
    public static function rowsToArray($statement)
    {
        $data = [];

        while ($row = $statement->fetch()) {
            $data[] = $row;
        }

        return $data;
    }
}
