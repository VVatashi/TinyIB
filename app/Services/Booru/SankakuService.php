<?php

namespace Imageboard\Services\Booru;

class SankakuService implements BooruService
{
  /**
   * {@inheritdoc}
   */
  function getRandomImageUrl(string $tags)
  {
    $tags = urlencode("order:random $tags");
    $url = "https://capi-v2.sankakucomplex.com/posts?lang=english&page=1&limit=1&tags=" . $tags;
    $client = new \GuzzleHttp\Client();
    $response = $client->request('GET', $url, [
      'headers' => [
        'User-Agent' => 'lewd.site/1.0',
      ]
    ]);
    if ($response->getStatusCode() !== 200) {
      return null;
    }

    $data = json_decode((string)$response->getBody(), true);
    $url = $data[0]['file_url'];
    if (substr($url, 0, 2) === '//') {
      $url = "https:$url";
    }

    return $url;
  }
}
