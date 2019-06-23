<?php

namespace Imageboard\Service;

class SafebooruService extends DanbooruService
{
  function __construct()
  {
    parent::__construct('https://safebooru.org/');
  }
}
