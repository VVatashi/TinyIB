<?php

namespace Imageboard\Service;

class FileService
{
  /**
   * Returns file extension for a path.
   */
  function getExtension(string $path): string {
    return strtolower(pathinfo($path, PATHINFO_EXTENSION));
  }

  /**
   * Returns file name without extension for a path.
   */
  function getFileName(string $path): string {
    return pathinfo($path, PATHINFO_FILENAME);
  }
}
