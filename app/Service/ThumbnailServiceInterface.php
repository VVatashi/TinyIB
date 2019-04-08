<?php

namespace Imageboard\Service;

interface ThumbnailServiceInterface
{
  /**
   * Returns mime-type for a file extension.
   */
  function getMimeTypeByExtension(string $extension): string;

  /**
   * Returns file extension for a mime-type.
   */
  function getExtensionByMimeType(string $mime_type): string;

  /**
   * Returns mime-type for a file.
   */
  function getMimeType(string $path): string;

  function isImage(string $mime_type): bool;

  function isAudio(string $mime_type): bool;

  function isVideo(string $mime_type): bool;

  /**
   * Returns width and height of an image or video.
   *
   * @param string $path Path to the file.
   *
   * @return int[] Width and height of the file.
   */
  function getFileSize(string $path): array;

  /**
   * Creates thumbnail.
   *
   * @param string $path Path to the original file.
   * @param string $output_dir Path to the output directory.
   *
   * @return string Path to the generated thumbnail file.
   */
  function createThumbnail(
    string $path,
    string $output_dir,
    int $max_width,
    int $max_height
  ): string;
}
