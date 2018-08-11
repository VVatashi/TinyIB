<?php

namespace TinyIB\Tests;

use TinyIB\Controller\SettingsControllerInterface;
use TinyIB\Request;
use TinyIB\Response;

class SettingsControllerMock implements SettingsControllerInterface
{
    /**
     * {@inheritDoc}
     */
    public function settings(Request $request) : Response
    {
        return Response::ok();
    }
}
