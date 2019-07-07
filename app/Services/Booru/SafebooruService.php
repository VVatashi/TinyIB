<?php

namespace Imageboard\Services\Booru;

class SafebooruService extends DanbooruService
{
  function __construct()
  {
    parent::__construct('https://safebooru.org/');
  }
}
