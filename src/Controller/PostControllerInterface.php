<?php

namespace TinyIB\Controller;

use TinyIB\Request;
use TinyIB\Response;

interface PostControllerInterface
{
    /**
     * Create post.
     *
     * @param \TinyIB\Request
     *
     * @return \TinyIB\Response
     */
    public function create(Request $request) : Response;

    /**
     * Deletes specified post.
     *
     * @param \TinyIB\Request
     *
     * @return \TinyIB\Response
     */
    public function delete(Request $request) : Response;
}
