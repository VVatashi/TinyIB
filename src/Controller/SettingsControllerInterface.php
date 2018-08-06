<?php

namespace TinyIB\Controller;

use TinyIB\Request;
use TinyIB\Response;

interface SettingsControllerInterface
{
    /**
     * Shows settings form.
     *
     * @param \TinyIB\Request
     *
     * @return \TinyIB\Response
     */
    public function settings(Request $request) : Response;
}
