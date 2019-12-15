<?php

namespace Imageboard\Controllers\Api;

use Imageboard\Controllers\ControllerInterface;
use Imageboard\Services\{ConfigService, UserService};
use GuzzleHttp\Psr7\Response;
use Psr\Http\Message\{ServerRequestInterface, ResponseInterface};

class StatusController implements ControllerInterface
{
  /** @var ConfigService */
  protected $config;

  /** @var UserService */
  protected $service;

  public function __construct(
    ConfigService $config,
    UserService   $service
  ) {
    $this->config  = $config;
    $this->service = $service;
  }

  public function status(ServerRequestInterface $request): ResponseInterface
  {
    $user = $request->getAttribute('user');
    if (!isset($user)) {
      $user = $this->service->getCurrentUser();
    }

    $ip = $_SERVER['REMOTE_ADDR'];
    $salt = $this->config->get('IP_SALT', '1234');
    $hash = base64_encode(md5($salt . md5($ip, true), true));

    $data = [
      'base_url'      => $this->config->get('BASE_PATH'),
      'content_url'   => $this->config->get('CONTENT_PATH'),
      'websocket_url' => $this->config->get('WEBSOCKET_URL'),
      'board'         => $this->config->get('BOARD'),
      'anon_posting'  => $this->config->get('ANON_POSTING'),
      'ip_hash'       => $hash,
      'user_id'       => $user->id,
      'user_email'    => $user->email,
      'user_role'     => $user->role,
    ];

    return new Response(200, [], json_encode($data));
  }
}
