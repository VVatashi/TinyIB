<?php

namespace Imageboard\Service;

class GelbooruService extends DanbooruService
{
  function __construct()
  {
    parent::__construct('https://gelbooru.com/');
  }
}
