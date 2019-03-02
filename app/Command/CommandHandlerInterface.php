<?php

namespace Imageboard\Command;

interface CommandHandlerInterface
{
  function handle($query);
}
