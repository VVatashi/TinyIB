<?php

namespace TinyIB\Controller;

interface IManageController
{

    /**
     * Show status page.
     *
     * @return \TinyIB\Response
     */
    public function status();

    /**
     * List bans.
     *
     * @param string $bans
     *   IP placeholder.
     *
     * @return \TinyIB\Response
     */
    public function listBans($bans);

    /**
     * Add ban by IP.
     *
     * @param string $bans
     *   IP placeholder.
     * @param string ip
     *   Ban IP.
     * @param integer $expire
     *   Ban expiration time.
     * @param string $reason
     *   Ban reason phrase.
     *
     * @return \TinyIB\Response
     */
    public function addBan($bans, $ip, $expire = 0, $reason = '');

    /**
     * Lift ban by ID.
     *
     * @param string $bans
     *   IP placeholder.
     * @param string $id
     *   Ban ID to lift.
     *
     * @return \TinyIB\Response
     */
    public function liftBan($bans, $id);

    /**
     * Moderate post by ID.
     *
     * @param integer $id
     *
     * @return \TinyIB\Response
     */
    public function moderate($id);

    /**
     * Delete post by ID.
     *
     * @param integer $id
     *
     * @return \TinyIB\Response
     */
    public function delete($id);

    /**
     * Approve post by ID.
     *
     * @param integer $id
     *
     * @return \TinyIB\Response
     */
    public function approve($id);

    /**
     * Set post stacky status by ID.
     *
     * @param integer $id
     * @param boolean $sticky
     *
     * @return \TinyIB\Response
     */
    public function setSticky($id, $sticky = true);

    /**
     * Show raw post form.
     *
     * @return \TinyIB\Response
     */
    public function rawPost();

    /**
     * Rebuild all pages.
     *
     * @return \TinyIB\Response
     */
    public function rebuildAll();

    /**
     * Update TinyIB.
     *
     * @return \TinyIB\Response
     */
    public function update();

    /**
     * Logout.
     *
     * @return \TinyIB\Response
     */
    public function logout();
}
