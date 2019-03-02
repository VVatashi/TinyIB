<?php

namespace Imageboard\Commands;

interface CommandHandlerInterface
{
    public function handle($query);
}
