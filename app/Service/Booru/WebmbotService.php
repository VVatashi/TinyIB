<?php

namespace Imageboard\Service\Booru;

class WebmbotService implements BooruService
{
  /**
   * {@inheritdoc}
   */
  function getRandomImageUrl(string $tags)
  {
    $url = "https://webmbot.ga/api/webmapi/getrandomvideo";
    $xml = simplexml_load_file($url);
    $url = (string)$xml;
    if (substr($url, 0, 2) === '//') {
      $url = "https:$url";
    }

    return $url;
  }
}
