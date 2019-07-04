<?php

namespace Imageboard\Service;

use Imageboard\Exception\ValidationException;

class ThumbnailService
{
  const DEFAULT_MIME_TYPE = 'application/octet-stream';
  const DEFAULT_EXTENSION = 'bin';
  const AUDIO_THUMBNAIL   = 'images/audio_thumbnail.png';

  /** @var FileService */
  protected $file;

  /** @var ConfigService */
  protected $config;

  /**
   * Creates a new ThumbnailService instance.
   */
  function __construct(
    FileService $file,
    ConfigService $config
  ) {
    $this->file = $file;
    $this->config = $config;
  }

  /**
   * Returns mime-type for a file extension.
   *
   * @return null|string
   */
  function getMimeTypeByExtension(string $extension) {
    switch ($extension) {
      case 'jpg':
      case 'jpeg':
      case 'jpe':
      case 'jfi':
      case 'jfif':
      case 'jif':
        return 'image/jpeg';

      case 'png':
      case 'apng':
        return 'image/png';

      case 'gif':
        return 'image/gif';

      case 'webp':
        return 'image/webp';

      case 'mp3':
        return 'audio/mpeg';

      case 'm4a':
        return 'audio/mp4';

      case 'mp4':
      case 'm4v':
        return 'video/mp4';

      case 'webm':
        return 'video/webm';

      default: return null;
    }
  }

  /**
   * Returns file extension for a mime-type.
   */
  function getExtensionByMimeType(string $mime_type): string {
    switch ($mime_type) {
      case 'image/jpeg':
      case 'image/pjpeg':
        return 'jpg';

      case 'image/png':
      case 'image/x-png':
        return 'png';

      case 'image/gif':
        return 'gif';

      case 'image/webp':
        return 'webp';

      case 'audio/mp3':
      case 'audio/mpeg':
      case 'audio/mpeg3':
      case 'audio/mpeg-3':
      case 'audio/mpg':
      case 'audio/x-mp3':
      case 'audio/x-mpeg':
      case 'audio/x-mpeg3':
      case 'audio/x-mpeg-3':
      case 'audio/x-mpg':
        return 'mp3';

      case 'audio/mp4':
      case 'audio/m4a':
      case 'audio/x-m4a':
      case 'video/mp4':
      case 'video/mpeg4':
      case 'video/x-m4v':
        return 'mp4';

      case 'audio/webm':
      case 'video/webm':
        return 'webm';

      default: return static::DEFAULT_EXTENSION;
    }
  }

  /**
   * Returns mime-type for a file by content.
   *
   * @return null|string
   */
  function getMimeTypeByContent(string $path) {
    // Try determine mime-type from file content.
    $mime_split = explode(' ', trim(mime_content_type($path)));
    if (count($mime_split) > 0) {
      $mime_type = strtolower(array_pop($mime_split));
    }

    if (empty($mime_type) || $mime_type === static::DEFAULT_MIME_TYPE) {
      return null;
    }

    return $mime_type;
  }

  /**
   * Returns mime-type for a file.
   */
  function getMimeType(string $path): string {
    // Try determine mime-type from file content.
    $mime_type = $this->getMimeTypeByContent($path);
    if (!isset($mime_type)) {
      // Try determine mime-type from file extension.
      $extension = $this->file->getExtension($path);
      $mime_type = $this->getMimeTypeByExtension($extension);
    }

    return $mime_type ?? static::DEFAULT_MIME_TYPE;
  }

  function isImage(string $mime_type): bool {
    return in_array($mime_type, [
      'image/jpeg',
      'image/pjpeg',
      'image/png',
      'image/x-png',
      'image/gif',
      'image/webp',
    ]);
  }

  function isAudio(string $mime_type): bool {
    return in_array($mime_type, [
      'audio/mp3',
      'audio/mpeg',
      'audio/mpeg3',
      'audio/mpeg-3',
      'audio/mpg',
      'audio/x-mp3',
      'audio/x-mpeg',
      'audio/x-mpeg3',
      'audio/x-mpeg-3',
      'audio/x-mpg',
    ]);
  }

  function isVideo(string $mime_type): bool {
    return in_array($mime_type, [
      'audio/mp4',
      'audio/m4a',
      'audio/x-m4a',
      'audio/webm',
      'video/mp4',
      'video/mpeg4',
      'video/x-m4v',
      'video/webm',
    ]);
  }

  protected function getImageSize(string $path, string $mime_type): array {
    // Use ImageMagick identify utility.
    $output = [];
    if ($mime_type !== 'image/gif') {
      exec("identify -format '%w %h' $path", $output);
    } else {
      exec("identify -format '%w %h' ${path}[0]", $output);
    }

    $sizes = explode(' ', reset($output));
    if (count($sizes) < 2) {
      throw new ValidationException('Image appears to be corrupt.');
    }

    $sizes = array_map(function ($size) {
      return max(0, (int)$size);
    }, $sizes);

    return $sizes;
  }

  protected function getVideoSize(string $path): array {
    // Use mediainfo utility.
    $width = explode("\n", shell_exec('mediainfo --Inform="Video;%Width%\n" ' . $path));
    $height = explode("\n", shell_exec('mediainfo --Inform="Video;%Height%\n" ' . $path));

    $width = reset($width);
    $height = reset($height);

    $width = max(0, (int)$width);
    $height = max(0, (int)$height);

    return [$width, $height];
  }

  /**
   * Returns width and height of an image or video.
   *
   * @param string $path Path to the file.
   *
   * @return int[] Width and height of the file.
   */
  function getFileSize(string $path): array {
    $mime_type = $this->getMimeType($path);
    if ($this->isImage($mime_type)) {
      return $this->getImageSize($path, $mime_type);
    } else if ($this->isVideo($mime_type)) {
      return $this->getVideoSize($path);
    }

    return [0, 0];
  }

  protected function createImageThumbnail(
    string $path,
    string $mime_type,
    string $output_path,
    int $max_width,
    int $max_height
  ) {
    $extension = $this->file->getExtension($path);

    // Get thumbnail size.
    [$width, $height] = $this->getImageSize($path, $mime_type);
    if ($width > $max_width || $height > $max_height) {
      $width = $max_width;
      $height = $max_height;
    }

    // Use ImageMagick convert to create thumbnail.
    if ($extension !== 'gif') {
      $options = '-layers OptimizeFrame -depth 8';
    } elseif (!$this->config->get('FILE_ANIM_GIF_THUMB')) {
      $path .= '[0]';
      $options = '-layers OptimizeFrame -depth 8';
    } else {
      $options = '-coalesce -layers OptimizeFrame -depth 4 -type palettealpha';
    }
    exec("convert $path -auto-orient -thumbnail '{$width}x$height' $options $output_path");

    // Optimize png.
    if ($extension === 'png' && $this->config->get('FILE_OPTIMIZE_PNG')) {
      exec("pngoptimizercl -file:$output_path");
    }
  }

  protected function createVideoThumbnail(
    string $path,
    string $output_path,
    int $max_width,
    int $max_height
  ) {
    // Get thumbnail size.
    [$width, $height] = $this->getVideoSize($path);
    if ($width > $max_width || $height > $max_height) {
      $width = $max_width;
      $height = $max_height;
    }

    shell_exec("ffmpeg -y -loglevel quiet -i $path"
      . " -vframes 1 -vf scale=w=$width:h=$height:force_original_aspect_ratio=decrease $output_path");
  }

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
  ): string {
    $mime_type = $this->getMimeType($path);
    if ($this->isImage($mime_type)) {
      $file_name = $this->file->getFileName($path);
      $extension = $this->file->getExtension($path);
      $thumb_name = "{$file_name}s.$extension";
      $thumb_path = "$output_dir/$thumb_name";
      $this->createImageThumbnail($path, $mime_type, $thumb_path, $max_width, $max_height);
      return $thumb_name;
    } elseif ($this->isAudio($mime_type)) {
      $file_name = $this->file->getFileName($path);
      $extension = $this->file->getExtension(static::AUDIO_THUMBNAIL);
      $thumb_name = "{$file_name}s.$extension";
      $thumb_path = "$output_dir/$thumb_name";
      $this->createImageThumbnail(static::AUDIO_THUMBNAIL, $mime_type, $thumb_path, $max_width, $max_height);
      return $thumb_name;
    } elseif ($this->isVideo($mime_type)) {
      $file_name = $this->file->getFileName($path);
      $thumb_name = "{$file_name}s.jpg";
      $thumb_path = "$output_dir/$thumb_name";
      $this->createVideoThumbnail($path, $thumb_path, $max_width, $max_height);
      return $thumb_name;
    }

    return '';
  }
}
