<?php

namespace TinyIB\Repository;

use \TinyIB\Repository\PDOHelper;
use \TinyIB\Repository\SQLHelper;

abstract class PDORepository implements RepositoryInterface
{
    /** @var \PDO $pdo */
    protected static $pdo;

    /** @var string $table_name */
    protected $table_name;

    /**
     * @param string $table_name
     */
    public function __construct(string $table_name)
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
    }

    static protected function isTableExists(string $table)
    {
        if (TINYIB_DBDRIVER === 'pgsql') {
            $query = "SELECT count(*)
FROM pg_catalog.pg_tables
WHERE tablename LIKE ?";
            $statement = static::$pdo->prepare($query);
            $statement->execute([$table]);
        } else {
            $statement = static::$pdo->prepare('SHOW TABLES LIKE ?');
            $statement->execute([$table]);
            $statement = static::$pdo->query('SELECT FOUND_ROWS()');
        }

        return (int) $statement->fetchColumn() !== 0;
    }

    /**
     * @return string
     */
    protected function getDataSource() : string
    {
        $table = $this->table_name;
        return "\"$table\"";
    }

    /**
     * @param array $data
     *
     * @return mixed
     */
    protected function dataToModel(array $data)
    {
        return $data;
    }

    /**
     * @param mixed $model
     *
     * @return array
     */
    protected function modelToData($model) : array
    {
        if (isset($model['id']) && (int)$model['id'] === 0) {
            unset($model['id']);
        }

        return $model;
    }

    /**
     * {@inheritDoc}
     */
    public function getAll(array $conditions = [], $order = null, $columns = '*')
    {
        $query = "SELECT $columns FROM " . $this->getDataSource()
            . SQLHelper::createWhereClause($conditions)
            . SQLHelper::createOrderByClause($order);
        $params = SQLHelper::createWhereParams($conditions);
        $statement = static::$pdo->prepare($query);
        $statement->execute($params);
        return array_map([$this, 'dataToModel'], PDOHelper::rowsToArray($statement));
    }

    /**
     * {@inheritDoc}
     */
    public function getRange(array $conditions = [], $order, $take, $skip = 0, $columns = '*')
    {
        $query = "SELECT $columns FROM " . $this->getDataSource()
            . SQLHelper::createWhereClause($conditions)
            . SQLHelper::createOrderByClause($order)
            . " LIMIT $take OFFSET $skip";
        $params = SQLHelper::createWhereParams($conditions);
        $statement = static::$pdo->prepare($query);
        $statement->execute($params);
        return array_map([$this, 'dataToModel'], PDOHelper::rowsToArray($statement));
    }

    /**
     * {@inheritDoc}
     */
    public function getOne(array $conditions = [], $order = null, $columns = '*')
    {
        $query = "SELECT $columns FROM " . $this->getDataSource()
            . SQLHelper::createWhereClause($conditions)
            . SQLHelper::createOrderByClause($order)
            . ' LIMIT 1';
        $params = SQLHelper::createWhereParams($conditions);
        $statement = static::$pdo->prepare($query);
        $statement->execute($params);
        $data = $statement->fetch();
        return $data !== false ? $this->dataToModel($data) : null;
    }

    /**
     * {@inheritDoc}
     */
    public function getCount(array $conditions = [], $columns = '*')
    {
        $query = "SELECT count($columns) FROM " . $this->getDataSource()
            . SQLHelper::createWhereClause($conditions);
        $params = SQLHelper::createWhereParams($conditions);
        $statement = static::$pdo->prepare($query);
        $statement->execute($params);
        return (int)$statement->fetchColumn();
    }

    /**
     * {@inheritDoc}
     */
    public function insert($model)
    {
        $data = $this->modelToData($model);
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
    public function update($conditions, $model)
    {
        $data = $this->modelToData($model);
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
    protected function inTransaction()
    {
        return static::$pdo->inTransaction();
    }

    /**
     * {@inheritDoc}
     */
    protected function beginTransaction()
    {
        return static::$pdo->beginTransaction();
    }

    /**
     * {@inheritDoc}
     */
    protected function commit()
    {
        return static::$pdo->commit();
    }

    /**
     * {@inheritDoc}
     */
    public function getLastInsertId() : string
    {
        if (TINYIB_DBDRIVER === 'pgsql') {
            return static::$pdo->lastInsertId($this->table_name . '_id_seq');
        } else {
            return static::$pdo->lastInsertId();
        }
    }
}
