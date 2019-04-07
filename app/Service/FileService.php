<?php

namespace Imageboard\Service;

class FileService implements FileServiceInterface
{
  /**
   * {@inheritDoc}
   */
  function getExtension(string $path): string {
    return pathinfo($path, PATHINFO_EXTENSION);
  }

  /**
   * {@inheritDoc}
   */
  function getFileName(string $path): string {
    return pathinfo($path, PATHINFO_FILENAME);
  }
}
