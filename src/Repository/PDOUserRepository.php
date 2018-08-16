<?php

namespace TinyIB\Repository;

use TinyIB\Model\User;
use TinyIB\Model\UserInterface;

class PDOUserRepository extends PDORepository implements UserRepositoryInterface
{
    /**
     * Creates a new PDOUserRepository instance.
     */
    public function __construct()
    {
        $table = 'users';
        parent::__construct($table);

        $table_exists = static::isTableExists($table);
        if ($table_exists === false) {
            if (TINYIB_DBDRIVER === 'pgsql') {
                $query = <<<EOL
CREATE TABLE "$table" (
    "id" serial NOT NULL,
    "email" varchar(255) NOT NULL,
    "password" char(60) NOT NULL,
    "role" integer NOT NULL,
    PRIMARY KEY	("id")
);

CREATE UNIQUE INDEX ON "$table" ("email");
CREATE INDEX ON "$table" ("role");
EOL;
                static::$pdo->exec($query);
            } else {
                $query = <<<EOL
CREATE TABLE "$table" (
    "id" INT UNSIGNED NOT NULL AUTO_INCREMENT,
    "email" VARCHAR(255) NOT NULL UNIQUE,
    "password" CHAR(60) NOT NULL,
    "role" INT NOT NULL,
    PRIMARY KEY	("id"),
    KEY ("email"),
    KEY ("role")
);
EOL;
                static::$pdo->exec($query);
            }
        }
    }

    /**
     * {@inheritDoc}
     */
    protected function dataToModel(array $data)
    {
        return new User(
            (int)$data['id'],
            $data['email'],
            $data['password'],
            (int)$data['role']
        );
    }

    /**
     * {@inheritDoc}
     *
     * @param User $model
     */
    protected function modelToData($model) : array
    {
        $data = [
            'id' => $model->getID(),
            'email' => $model->getEmail(),
            'password' => $model->getPasswordHash(),
            'role' => $model->getRole(),
        ];

        return parent::modelToData($data);
    }
}
