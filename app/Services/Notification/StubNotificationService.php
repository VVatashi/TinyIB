<?php

namespace Imageboard\Services\Notification;

class StubNotificationService implements NotificationService
{
  /**
   * {@inheritDoc}
   */
  function sendNotification(
    array $user_ids,
    string $title,
    string $message,
    string $url
  ) { }
}
