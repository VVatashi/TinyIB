<?php

namespace TinyIB\Controller;

interface PostControllerInterface
{
    /**
     * Create post.
     *
     * @param array $data
     *   Post data.
     *
     * @return \TinyIB\Response
     */
    public function create($data);

    /**
     * Deletes specified post.
     *
     * @param integer $id
     *   Post id.
     * @param string|null $password
     *   Post delete password.
     *
     * @return \TinyIB\Response
     */
    public function delete($id, $password = null);
}
