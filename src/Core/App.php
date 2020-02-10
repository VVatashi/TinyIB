<?php

namespace App\Core;

use DI\Container;
use DI\ContainerBuilder;
use Dotenv\Dotenv;
use FastRoute\Dispatcher;
use FastRoute\RouteCollector;
use Laminas\Diactoros\ServerRequestFactory;
use Laminas\EventManager\EventManager;
use Psr\Http\Message\ResponseInterface;

class App
{
  /** @var Container */
  private $container;

  /** @var ModuleInterface[] */
  private $modules = [];

  /** @var EventManager */
  private $eventManager;

  /** @var Dispatcher */
  private $dispatcher;

  public function __construct()
  {
    $dotenv = Dotenv::createImmutable(__DIR__ . '/../..');
    $dotenv->load();

    $builder = new ContainerBuilder();
    $this->container = $builder->build();

    $this->eventManager = $this->container->get(EventManager::class);

    $this->loadModules();

    $this->dispatcher = \FastRoute\simpleDispatcher(function (RouteCollector $routes) {
      $this->eventManager->trigger('router.registerRoutes', $this, ['routes' => $routes]);
    });
  }

  private function loadModules(): void
  {
    $modulesJSON = file_get_contents(__DIR__ . '/../modules.json');
    /** @var string[] $moduleNames */
    $moduleNames = json_decode($modulesJSON, true)['modules'];
    foreach ($moduleNames as $moduleName) {
      $moduleClassName = "App\\Modules\\$moduleName\\Module";
      $this->modules[$moduleName] = $this->container->get($moduleClassName);
    }
  }

  public function handleRequest(): void
  {
    $method = $_SERVER['REQUEST_METHOD'];
    $uri = rawurldecode($_SERVER['REQUEST_URI']);
    $route = $this->dispatcher->dispatch($method, $uri);
    switch ($route[0]) {
      case Dispatcher::NOT_FOUND:
        http_response_code(404);
        exit;

      case Dispatcher::FOUND:
        /** @var callable $handler */
        $handler = $route[1];
        /** @var string[] $args */
        $args = $route[2];

        $request = ServerRequestFactory::fromGlobals();
        /** @var ResponseInterface $response */
        $response = $handler($request, $args);
        $status = $response->getStatusCode();
        $headers = $response->getHeaders();
        $body = $response->getBody();

        http_response_code($status);

        foreach ($headers as $name => $values) {
          header("$name: " . implode(',', $values));
        }

        $output = fopen('php://output', 'w+b');
        stream_copy_to_stream($body->detach(), $output);
        fclose($output);
        exit;

      case Dispatcher::METHOD_NOT_ALLOWED:
        /** @var string[] $allowedMethods */
        $allowedMethods = $route[1];

        http_response_code(405);
        header('Allow: ' . implode(',', $allowedMethods));
        exit;
    }
  }
}
