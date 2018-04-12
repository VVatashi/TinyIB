<?php

namespace TinyIB\Controller;

interface IPostController
{
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
