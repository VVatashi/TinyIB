<?php

namespace Imageboard\Services\Booru;

class GelbooruService extends DanbooruService
{
  function __construct()
  {
    parent::__construct('https://gelbooru.com/');
  }
}
