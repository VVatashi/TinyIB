<?php

namespace TinyIB\Controller;

use TinyIB\Request;
use TinyIB\Response;

interface ManageControllerInterface
{
    /**
     * Show status page.
     *
     * @param \TinyIB\Request
     *
     * @return \TinyIB\Response
     */
    public function status(Request $request) : Response;

    /**
     * List bans.
     *
     * @param \TinyIB\Request
     *
     * @return \TinyIB\Response
     */
    public function listBans(Request $request) : Response;

    /**
     * Add ban by IP.
     *
     * @param \TinyIB\Request
     *
     * @return \TinyIB\Response
     */
    public function addBan(Request $request) : Response;

    /**
     * Lift ban by ID.
     *
     * @param \TinyIB\Request
     *
     * @return \TinyIB\Response
     */
    public function liftBan(Request $request) : Response;

    /**
     * Moderate post by ID.
     *
     * @param \TinyIB\Request
     *
     * @return \TinyIB\Response
     */
    public function moderate(Request $request) : Response;

    /**
     * Delete post by ID.
     *
     * @param \TinyIB\Request
     *
     * @return \TinyIB\Response
     */
    public function delete(Request $request) : Response;

    /**
     * Approve post by ID.
     *
     * @param \TinyIB\Request
     *
     * @return \TinyIB\Response
     */
    public function approve(Request $request) : Response;

    /**
     * Set post stacky status by ID.
     *
     * @param \TinyIB\Request
     *
     * @return \TinyIB\Response
     */
    public function setSticky(Request $request) : Response;

    /**
     * Show raw post form.
     *
     * @param \TinyIB\Request
     *
     * @return \TinyIB\Response
     */
    public function rawPost(Request $request) : Response;

    /**
     * Rebuild all pages.
     *
     * @param \TinyIB\Request
     *
     * @return \TinyIB\Response
     */
    public function rebuildAll(Request $request) : Response;

    /**
     * Update TinyIB.
     *
     * @param \TinyIB\Request
     *
     * @return \TinyIB\Response
     */
    public function update(Request $request) : Response;

    /**
     * Logout.
     *
     * @param \TinyIB\Request
     *
     * @return \TinyIB\Response
     */
    public function logout(Request $request) : Response;
}
