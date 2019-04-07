<?php

namespace Imageboard\Service;

interface FileServiceInterface
{
  /**
   * Returns file extension for a path.
   */
  function getExtension(string $path): string;

  /**
   * Returns file name without extension for a path.
   */
  function getFileName(string $path): string;
}
