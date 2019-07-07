<?php

namespace Imageboard\Services;

class SessionService
{
  function has(string $name): bool {
    return isset($_SESSION[$name]);
  }

  function get(string $name, $default = null) {
    return $_SESSION[$name] ?? $default;
  }

  function set(string $name, $value): void {
    $_SESSION[$name] = $value;
  }

  function delete(string $name) {
    $value = $_SESSION[$name] ?? null;
    unset($_SESSION[$name]);
    return $value;
  }

  function __isset(string $name): bool {
    return $this->has($name);
  }

  function __get(string $name) {
    return $this->get($name);
  }

  function __set(string $name, $value): void {
    $this->set($name, $value);
  }
}
