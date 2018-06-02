<?php

namespace TinyIB\Repository;

use \TinyIB\Repository\PDOHelper;
use \TinyIB\Repository\SQLHelper;

abstract class PDORepository implements IRepository
{
    /** @var \PDO $pdo */
    protected static $pdo;

    /** @var string $table_name */
    protected $table_name;

    /**
     * @param string $table_name
     */
    public function __construct($table_name)
    {
        $this->table_name = $table_name;

        if (empty(static::$pdo)) {
            try {
                static::$pdo = PDOHelper::createPDO();
            } catch (\PDOException $e) {
                $msg = $e->getMessage();
                throw new \Exception("Failed to connect to the database: $msg");
            }
        }

        if (!$this->inTransaction()) {
            $this->beginTransaction();
            static::$pdo->query('SET TRANSACTION ISOLATION LEVEL SERIALIZABLE');
            register_shutdown_function(function () {
                $this->commit();
            });
        }
    }

    /**
     * {@inheritDoc}
     */
    public function getAll($conditions = [], $order = null, $columns = '*')
    {
        $table_name = $this->table_name;
        $query = "SELECT $columns FROM $table_name"
            . SQLHelper::createWhereClause($conditions)
            . SQLHelper::createOrderByClause($order);
        $params = SQLHelper::createWhereParams($conditions);
        $statement = static::$pdo->prepare($query);
        $statement->execute($params);
        return PDOHelper::rowsToArray($statement);
    }

    /**
     * {@inheritDoc}
     */
    public function getRange($conditions, $order, $take, $skip = 0, $columns = '*')
    {
        $table_name = $this->table_name;
        $query = "SELECT $columns FROM $table_name"
            . SQLHelper::createWhereClause($conditions)
            . SQLHelper::createOrderByClause($order)
            . " LIMIT $take OFFSET $skip";
        $params = SQLHelper::createWhereParams($conditions);
        $statement = static::$pdo->prepare($query);
        $statement->execute($params);
        return PDOHelper::rowsToArray($statement);
    }

    /**
     * {@inheritDoc}
     */
    public function getOne($conditions, $order = null, $columns = '*')
    {
        $table_name = $this->table_name;
        $query = "SELECT $columns FROM $table_name"
            . SQLHelper::createWhereClause($conditions)
            . SQLHelper::createOrderByClause($order)
            . ' LIMIT 1';
        $params = SQLHelper::createWhereParams($conditions);
        $statement = static::$pdo->prepare($query);
        $statement->execute($params);
        return $statement->fetch();
    }

    /**
     * {@inheritDoc}
     */
    public function getCount($conditions, $columns = '*')
    {
        $table_name = $this->table_name;
        $query = "SELECT count($columns) FROM $table_name"
            . SQLHelper::createWhereClause($conditions);
        $params = SQLHelper::createWhereParams($conditions);
        $statement = static::$pdo->prepare($query);
        $statement->execute($params);
        return (int)$statement->fetchColumn();
    }

    /**
     * {@inheritDoc}
     */
    public function insert($data)
    {
        $table_name = $this->table_name;
        $columns = implode(', ', array_keys($data));
        $values = implode(', ', array_fill(0, count($data), '?'));

        if (TINYIB_DBDRIVER === 'pgsql') {
            $query = "INSERT INTO $table_name ($columns) VALUES ($values) ON CONFLICT DO NOTHING";
        } else {
            // TODO: Any simple standard SQL way to do it?
            $query = "INSERT INTO $table_name ($columns) VALUES ($values)";
        }

        $params = array_values($data);
        $statement = static::$pdo->prepare($query);
        $statement->execute($params);
        return $statement->rowCount();
    }

    /**
     * @param array $conditions
     * @param array $data
     */
    public function update($conditions, $data)
    {
        $table_name = $this->table_name;
        $keys = array_map(function ($key) {
            return "$key = ?";
        }, array_keys($data));
        $query = "UPDATE $table_name SET " . implode(', ', $keys)
            . SQLHelper::createWhereClause($conditions);
        $params = array_merge(array_values($data), SQLHelper::createWhereParams($conditions));
        $statement = static::$pdo->prepare($query);
        $statement->execute($params);
        return $statement->rowCount();
    }

    /**
     * {@inheritDoc}
     */
    public function delete($conditions)
    {
        $table_name = $this->table_name;
        $query = "DELETE FROM $table_name"
            . SQLHelper::createWhereClause($conditions);
        $params = SQLHelper::createWhereParams($conditions);
        $statement = static::$pdo->prepare($query);
        $statement->execute($params);
        return $statement->rowCount();
    }

    /**
     * {@inheritDoc}
     */
    public function inTransaction()
    {
        return static::$pdo->inTransaction();
    }

    /**
     * {@inheritDoc}
     */
    public function beginTransaction()
    {
        return static::$pdo->beginTransaction();
    }

    /**
     * {@inheritDoc}
     */
    public function commit()
    {
        return static::$pdo->commit();
    }
}
