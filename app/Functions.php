<?php

namespace Imageboard;

use Imageboard\Models\Post;

class Functions
{
  /**
   * Format exception string.
   *
   * @param \Throwable $exception
   *
   * @return string
   */
  static function formatException(\Throwable $exception): string
  {
    $trace = $exception->getTrace();
    $trace_lines = array_map(function ($key, $value) {
      $file = isset($value['file']) ? basename($value['file']) : '';
      $line = isset($value['line']) ? $value['line'] : '';
      $function = $value['function'];
      $args = isset($value['args']) ? implode(', ', array_map('gettype', $value['args'])) : '';
      return "#$key $file:$line $function($args)";
    }, array_keys($trace), $trace);

    $type = get_class($exception);
    $exception_message = $exception->getMessage();
    $file = basename($exception->getFile());
    $line = $exception->getLine();
    return "$type '$exception_message' at $file:$line. Stack trace:\n" . implode("\n", $trace_lines);
  }

  static function globRec($pattern, $flags = 0)
  {
    $files = glob($pattern, $flags);
    $path = dirname($pattern) . '/*';
    foreach (glob($path, GLOB_ONLYDIR | GLOB_NOSORT) as $dir) {
      $path = $dir . '/' . basename($pattern);
      $files = array_merge($files, static::globRec($path, $flags));
    }

    return $files;
  }
}
