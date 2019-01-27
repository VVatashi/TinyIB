<?php

namespace TinyIB\Commands;

interface CommandHandlerInterface
{
    public function handle($query);
}
