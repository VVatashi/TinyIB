<?php

namespace TinyIB\Controller;

use Psr\Http\Message\ResponseInterface;
use Psr\Http\Message\ServerRequestInterface;

interface ManageControllerInterface
{
    /**
     * Show status page.
     *
     * @return \Psr\Http\Message\ResponseInterface
     */
    public function status() : ResponseInterface;

    /**
     * List bans.
     *
     * @param \Psr\Http\Message\ServerRequestInterface
     *
     * @return \Psr\Http\Message\ResponseInterface
     */
    public function listBans(ServerRequestInterface $request) : ResponseInterface;

    /**
     * Add ban by IP.
     *
     * @param \Psr\Http\Message\ServerRequestInterface
     *
     * @return \Psr\Http\Message\ResponseInterface
     */
    public function addBan(ServerRequestInterface $request) : ResponseInterface;

    /**
     * Lift ban by ID.
     *
     * @param \Psr\Http\Message\ServerRequestInterface
     *
     * @return \Psr\Http\Message\ResponseInterface
     */
    public function liftBan(ServerRequestInterface $request) : ResponseInterface;

    /**
     * Moderate post by ID.
     *
     * @param \Psr\Http\Message\ServerRequestInterface
     *
     * @return \Psr\Http\Message\ResponseInterface
     */
    public function moderate(ServerRequestInterface $request) : ResponseInterface;

    /**
     * Delete post by ID.
     *
     * @param \Psr\Http\Message\ServerRequestInterface
     *
     * @return \Psr\Http\Message\ResponseInterface
     */
    public function delete(ServerRequestInterface $request) : ResponseInterface;

    /**
     * Approve post by ID.
     *
     * @param \Psr\Http\Message\ServerRequestInterface
     *
     * @return \Psr\Http\Message\ResponseInterface
     */
    public function approve(ServerRequestInterface $request) : ResponseInterface;

    /**
     * Set post stacky status by ID.
     *
     * @param \Psr\Http\Message\ServerRequestInterface
     *
     * @return \Psr\Http\Message\ResponseInterface
     */
    public function setSticky(ServerRequestInterface $request) : ResponseInterface;

    /**
     * Show raw post form.
     *
     * @return \Psr\Http\Message\ResponseInterface
     */
    public function rawPost() : ResponseInterface;

    /**
     * Rebuild all pages.
     *
     * @return \Psr\Http\Message\ResponseInterface
     */
    public function rebuildAll() : ResponseInterface;

    /**
     * Update TinyIB.
     *
     * @return \Psr\Http\Message\ResponseInterface
     */
    public function update() : ResponseInterface;

    /**
     * Logout.
     *
     * @return \Psr\Http\Message\ResponseInterface
     */
    public function logout() : ResponseInterface;
}
