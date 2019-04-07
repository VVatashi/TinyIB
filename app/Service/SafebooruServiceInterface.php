<?php

namespace Imageboard\Service;

interface SafebooruServiceInterface
{
  /**
   * Returns count of found images.
   *
   * @param $tags Safebooru search query.
   *
   * @return int Count of found images.
   */
  function getCount(string $tags): int;

  /**
   * Returns URL of a random image. Null if nothing found.
   *
   * @param $tags Safebooru search query.
   *
   * @return null|string Image URL.
   */
  function getRandomImageUrl(string $tags);
}
