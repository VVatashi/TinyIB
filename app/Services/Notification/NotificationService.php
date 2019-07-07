<?php

namespace Imageboard\Services\Notification;

interface NotificationService
{
  /**
   * Sends notification.
   *
   * @param int[]  $user_ids
   * @param string $title
   * @param string $message
   * @param string $url
   */
  function sendNotification(
    array $user_ids,
    string $title,
    string $message,
    string $url
  );
}
