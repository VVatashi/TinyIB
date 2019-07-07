<?php

namespace Imageboard\Services;

use Doctrine\DBAL\{Configuration, Connection, DriverManager};

/**
 * @package Imageboard\Services
 */
class DatabaseService
{
  /** @var ConfigService */
  protected $config;

  /** @var Connection */
  protected $connection = null;

  function __construct(ConfigService $config)
  {
    $this->config = $config;
  }

  /**
   * @return Connection
   */
  function getConnection()
  {
    if (!isset($this->connection)) {
      $params = [
        'driver'   => 'pdo_' . $this->config->get('DBDRIVER'),
        'host'     => $this->config->get('DBHOST'),
        'dbname'   => $this->config->get('DBNAME'),
        'user'     => $this->config->get('DBUSERNAME'),
        'password' => $this->config->get('DBPASSWORD'),
      ];

      $config = new Configuration();
      $this->connection = DriverManager::getConnection($params, $config);
    }

    return $this->connection;
  }

  function getFullPath(): string
  {
    $dbname = $this->config->get('DBNAME');
    if (mb_strtolower($this->config->get('DBDRIVER')) === 'sqlite') {
      // Is full path or :memory:
      // TODO: Add fix for Windows-based OSes
      $fc = mb_substr($dbname, 0, 1);
      if (!in_array($fc, ['/', ':'])) {
        $defaultRootDir = __DIR__ . '/../..';
        $rootDir = $this->config->get('ROOT', $defaultRootDir);
        $path = $rootDir . DIRECTORY_SEPARATOR . $dbname;
        return $path;
      }
    }

    return $dbname;
  }
}
