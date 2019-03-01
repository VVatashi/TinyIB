<?php

namespace Imageboard\Controller;

use Psr\Http\Message\{ServerRequestInterface, ResponseInterface};

interface ManageControllerInterface
{
    /**
     * Show status page.
     *
     * @return ResponseInterface
     */
    public function status() : ResponseInterface;

    /**
     * List bans.
     *
     * @param ServerRequestInterface
     *
     * @return ResponseInterface
     */
    public function listBans(ServerRequestInterface $request) : ResponseInterface;

    /**
     * Add ban by IP.
     *
     * @param ServerRequestInterface
     *
     * @return ResponseInterface
     */
    public function addBan(ServerRequestInterface $request) : ResponseInterface;

    /**
     * Lift ban by ID.
     *
     * @param ServerRequestInterface
     *
     * @return ResponseInterface
     */
    public function liftBan(ServerRequestInterface $request) : ResponseInterface;

    /**
     * Moderate post by ID.
     *
     * @param ServerRequestInterface
     *
     * @return ResponseInterface
     */
    public function moderate(ServerRequestInterface $request) : ResponseInterface;

    /**
     * Delete post by ID.
     *
     * @param ServerRequestInterface
     *
     * @return ResponseInterface
     */
    public function delete(ServerRequestInterface $request) : ResponseInterface;

    /**
     * Approve post by ID.
     *
     * @param ServerRequestInterface
     *
     * @return ResponseInterface
     */
    public function approve(ServerRequestInterface $request) : ResponseInterface;

    /**
     * Set post stacky status by ID.
     *
     * @param ServerRequestInterface
     *
     * @return ResponseInterface
     */
    public function setSticky(ServerRequestInterface $request) : ResponseInterface;

    /**
     * Show raw post form.
     *
     * @return ResponseInterface
     */
    public function rawPost() : ResponseInterface;

    /**
     * Rebuild all pages.
     *
     * @return ResponseInterface
     */
    public function rebuildAll() : ResponseInterface;

    /**
     * Update.
     *
     * @return ResponseInterface
     */
    public function update() : ResponseInterface;

    /**
     * Logout.
     *
     * @return ResponseInterface
     */
    public function logout() : ResponseInterface;
}
