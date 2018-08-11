<?php

namespace TinyIB\Tests;

use TinyIB\Controller\ManageControllerInterface;
use TinyIB\Request;
use TinyIB\Response;

class ManageControllerMock implements ManageControllerInterface
{
    /**
     * {@inheritDoc}
     */
    public function status(Request $request) : Response
    {
        return Response::ok();
    }

    /**
     * {@inheritDoc}
     */
    public function listBans(Request $request) : Response
    {
        return Response::ok();
    }

    /**
     * {@inheritDoc}
     */
    public function addBan(Request $request) : Response
    {
        return Response::ok();
    }

    /**
     * {@inheritDoc}
     */
    public function liftBan(Request $request) : Response
    {
        return Response::ok();
    }

    /**
     * {@inheritDoc}
     */
    public function moderate(Request $request) : Response
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

    /**
     * {@inheritDoc}
     */
    public function approve(Request $request) : Response
    {
        return Response::ok();
    }

    /**
     * {@inheritDoc}
     */
    public function setSticky(Request $request) : Response
    {
        return Response::ok();
    }

    /**
     * {@inheritDoc}
     */
    public function rawPost(Request $request) : Response
    {
        return Response::ok();
    }

    /**
     * {@inheritDoc}
     */
    public function rebuildAll(Request $request) : Response
    {
        return Response::ok();
    }

    /**
     * {@inheritDoc}
     */
    public function update(Request $request) : Response
    {
        return Response::ok();
    }

    /**
     * {@inheritDoc}
     */
    public function logout(Request $request) : Response
    {
        return Response::ok();
    }
}
