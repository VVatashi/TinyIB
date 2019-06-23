<?php

namespace Imageboard\Service;

abstract class DanbooruService implements BooruService
{
  /** @var string $base_url */
  protected $base_url;

  function __construct(string $base_url)
  {
    $this->base_url = $base_url;
  }

  /**
   * Returns count of found images.
   *
   * @param $tags Danbooru search query.
   *
   * @return int Count of found images.
   */
  function getCount(string $tags): int
  {
    $url = $this->base_url . 'index.php?page=dapi&s=post&q=index&limit=0&tags=' . urlencode($tags);
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
    $url = $this->base_url . "index.php?page=dapi&s=post&q=index&limit=1&pid=$offset&tags=" . urlencode($tags);
    $xml = simplexml_load_file($url);
    $url = $xml->post['file_url'];
    if (substr($url, 0, 2) === '//') {
      $url = "https:$url";
    }

    return $url;
  }
}
