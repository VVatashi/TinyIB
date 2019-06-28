<?php

namespace Imageboard\Service\Booru;

class GelbooruService extends DanbooruService
{
  function __construct()
  {
    parent::__construct('https://gelbooru.com/');
  }
}
