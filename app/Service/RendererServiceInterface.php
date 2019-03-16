<?php

namespace Imageboard\Service;

interface RendererServiceInterface
{
  /**
   * Register global variable for twig templates.
   *
   * @param string $name
   * @param mixed $value
   */
  function registerGlobal(string $name, $value);

  /**
   * @param string $template
   * @param array $variables
   *
   * @return string
   */
  function render(string $template, array $variables = []) : string;
}
