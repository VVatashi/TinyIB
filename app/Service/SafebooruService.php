<?php

namespace Imageboard\Service;

class SafebooruService implements SafebooruServiceInterface
{
  /**
   * {@inheritDoc}
   */
  function getCount(string $tags): int
  {
    $url = 'https://safebooru.org/index.php?page=dapi&s=post&q=index&limit=0&tags=' . urlencode($tags);
    $xml = simplexml_load_file($url);
    return (int)$xml['count'];
  }

  /**
   * {@inheritDoc}
   */
  function getRandomImageUrl(string $tags)
  {
    $count = $this->getCount($tags);
    if ($count === 0) {
      return null;
    }

    $offset = mt_rand(0, $count - 1);
    $url = "https://safebooru.org/index.php?page=dapi&s=post&q=index&limit=1&pid=$offset&tags=" . urlencode($tags);
    $xml = simplexml_load_file($url);
    return 'https:' . $xml->post['file_url'];
  }
}
