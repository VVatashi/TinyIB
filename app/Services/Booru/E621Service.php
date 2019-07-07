<?php

namespace Imageboard\Services\Booru;

use Predis\Client as Redis;

class E621Service implements BooruService
{
  const LOAD_PER_REQUEST = 20;

  /**
   * Returns URLs of a random images.
   *
   * @param string $tags E621 search query.
   * @param int $count
   *
   * @return string[] Image URLs.
   */
  protected function loadRandomImageUrls(string $tags, int $count)
  {
    $tags = urlencode("order:random $tags");
    $url = "https://e621.net/post/index.json?tags=$tags&limit=$count";
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
    return array_map(function ($item) {
      return $item['file_url'];
    }, $data);
  }

  /**
   * {@inheritdoc}
   */
  function getRandomImageUrl(string $tags)
  {
    $redis_host = ConfigService::getInstance()->get('REDIS_HOST', '');
    if (empty($redis_host)) {
      return null;
    }

    $key = "e621:$tags";

    $redis = new Redis($redis_host);
    $url = $redis->lpop($key);
    if (empty($url)) {
      $urls = $this->loadRandomImageUrls($tags, static::LOAD_PER_REQUEST);
      $redis->rpush($key, $urls);
      $url = array_pop($urls);
    }

    return $url;
  }
}
