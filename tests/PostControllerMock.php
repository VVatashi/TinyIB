<?php

namespace TinyIB\Tests;

use TinyIB\Controller\PostControllerInterface;
use TinyIB\Request;
use TinyIB\Response;

class PostControllerMock implements PostControllerInterface
{
    /**
     * {@inheritDoc}
     */
    public function create(Request $request) : Response
    {
        return Response::ok();
    }

    /**
     * {@inheritDoc}
     */
    public function delete(Request $request) : Response
    {
        return Response::ok();
    }
}
