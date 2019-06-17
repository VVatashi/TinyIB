<?php

namespace Imageboard\Service;

interface BooruService
{
  /**
   * Returns URL of a random image. Null if nothing found.
   *
   * @param $tags Search query.
   *
   * @return null|string Image URL.
   */
  function getRandomImageUrl(string $tags);
}
