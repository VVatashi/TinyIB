<?php

namespace App\Modules\Core;

use App\Core\ModuleInterface;
use FastRoute\RouteCollector;
use Laminas\Diactoros\Response\JsonResponse;
use Laminas\EventManager\Event;
use Laminas\EventManager\EventManager;
use Psr\Http\Message\RequestInterface;

class Module implements ModuleInterface
{
  public function __construct(EventManager $eventManager)
  {
    $eventManager->attach('router.registerRoutes', function (Event $event) {
      /** @var RouteCollector $routes */
      $routes = $event->getParam('routes');

      $routes->get('/test', function (RequestInterface $request, array $args) {
        return new JsonResponse(['data' => 'Howdy world!']);
      });
    });
  }
}
