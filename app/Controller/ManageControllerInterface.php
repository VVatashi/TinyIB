<?php

namespace Imageboard\Controller;

use Psr\Http\Message\ServerRequestInterface;

interface ManageControllerInterface
{
    /**
     * Show status page.
     *
     * @return string Response HTML.
     */
    public function status() : string;

    /**
     * List bans.
     *
     * @param ServerRequestInterface $request
     *
     * @return string Response HTML.
     */
    public function listBans(ServerRequestInterface $request) : string;

    /**
     * Add ban by IP.
     *
     * @param ServerRequestInterface $request
     *
     * @return string Response HTML.
     */
    public function addBan(ServerRequestInterface $request) : string;

    /**
     * Lift ban by ID.
     *
     * @param ServerRequestInterface $request
     * @param array $args Path arguments.
     *
     * @return string Response HTML.
     */
    public function liftBan(ServerRequestInterface $request, array $args) : string;

    /**
     * Moderate post by ID.
     *
     * @param array $args Path arguments.
     *
     * @return string Response HTML.
     */
    public function moderate(array $args) : string;

    /**
     * Delete post by ID.
     *
     * @param array $args Path arguments.
     *
     * @return string Response HTML.
     */
    public function delete(array $args) : string;

    /**
     * Approve post by ID.
     *
     * @param array $args Path arguments.
     *
     * @return string Response HTML.
     */
    public function approve(array $args) : string;

    /**
     * Set post stacky status by ID.
     *
     * @param array $args Path arguments.
     *
     * @return string Response HTML.
     */
    public function setSticky(ServerRequestInterface $request, array $args) : string;

    /**
     * Show raw post form.
     *
     * @return string Response HTML.
     */
    public function rawPost() : string;

    /**
     * Rebuild all pages.
     *
     * @return string Response HTML.
     */
    public function rebuildAll() : string;

    /**
     * Update.
     *
     * @return string Response HTML.
     */
    public function update() : string;

    /**
     * Logout.
     *
     * @return string|ResponseInterface Response.
     */
    public function logout();
}
