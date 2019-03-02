<?php

namespace Imageboard\Command;

interface CommandHandlerInterface
{
    public function handle($query);
}
