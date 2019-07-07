<?php

namespace Imageboard\Services\Notification;

use GuzzleHttp\Client;

class OneSignalService implements NotificationService
{
  /** @var string */
  protected $appid;

  /** @var string */
  protected $key;

  function __construct() {
    $this->appid = $this->config->get('ONESIGNAL_APPID', '');
    $this->key   = $this->config->get('ONESIGNAL_KEY', '');
  }

  /**
   * {@inheritDoc}
   */
  function sendNotification(
    array $user_ids,
    string $title,
    string $message,
    string $url
  ) {
    if (empty($user_ids)) {
      return;
    }

    $data = [
      'app_id'   => $this->appid,
      'filters'  => [],
      'headings' => [
        'en' => $title,
      ],
      'contents' => [
        'en' => $message,
      ],
      'url' => $url,
    ];

    foreach ($user_ids as $user_id) {
      if (!empty($data['filters'])) {
        $data['filters'][] = ['operator' => 'OR'];
      }

      $data['filters'][] = [
        'field'    => 'tag',
        'key'      => 'user_id',
        'relation' => '=',
        'value'    => $user_id,
      ];
    }

    $client = new Client();
    $client->post('https://onesignal.com/api/v1/notifications', [
      'headers' => ['Authorization' => "Basic {$this->key}"],
      'json' => $data,
    ]);
  }
}
