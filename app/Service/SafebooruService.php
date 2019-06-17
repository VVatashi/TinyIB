<?php

namespace Imageboard\Service;

class SafebooruService implements BooruService
{
  /**
   * Returns count of found images.
   *
   * @param $tags Safebooru search query.
   *
   * @return int Count of found images.
   */
  function getCount(string $tags): int
  {
    $url = 'https://safebooru.org/index.php?page=dapi&s=post&q=index&limit=0&tags=' . urlencode($tags);
    $xml = simplexml_load_file($url);
    return (int)$xml['count'];
  }

  /**
   * {@inheritdoc}
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
    $url = $xml->post['file_url'];
    if (substr($url, 0, 2) === '//') {
      $url = "https:$url";
    }

    return $url;
  }
}
