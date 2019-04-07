<?php

namespace Imageboard\Helper;

use Imageboard\Service\ConfigServiceInterface;

class DatabaseHelper implements HelperInterface
{
  protected $_configService;

  public function __construct (ConfigServiceInterface $configService) {
    $this->_configService = $configService;
  }

  /**
   * Provider Sqlite
   *
   * @return bool
   */
  public function isSqlite() : bool {
    return strtolower($this->_configService->get('TINYIB_DBDRIVER')) == 'sqlite';
  }

  /**
   * Database full path
   *
   * @return string
   */
  public function getFullPath() : string {
    // Is full path or :memory:
    // TODO: Add fix for Windows-based OSes
    if(!in_array($this->_configService->get('TINYIB_DBNAME')[0] ?? ':', ['/', ':'])) {
      $dbPath = $this->_configService->get('TINYIB_ROOT', __DIR__ . '/../..')
        . DIRECTORY_SEPARATOR
        . $this->_configService->get('TINYIB_DBNAME');

      return $dbPath;
    }

    return $this->_configService->get('TINYIB_DBNAME');
  }
}
