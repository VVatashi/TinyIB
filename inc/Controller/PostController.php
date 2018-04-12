<?php

namespace TinyIB\Controller;

use TinyIB\Response;

class PostController implements IPostController
{
    /** @var \TinyIB\Repository\IBanRepository $ban_repository */
    protected $ban_repository;

    /** @var \TinyIB\Repository\IPostRepository $post_repository */
    protected $post_repository;

    /** @var \TinyIB\Renderer\IRenderer $renderer */
    protected $renderer;

    /**
     * Constructs new post controller.
     *
     * @param \TinyIB\Repository\IBanRepository $ban_repository
     * @param \TinyIB\Repository\IPostRepository $post_repository
     * @param \TinyIB\Renderer\IRenderer $renderer
     */
    public function __construct($ban_repository, $post_repository, $renderer)
    {
        $this->ban_repository = $ban_repository;
        $this->post_repository = $post_repository;
        $this->renderer = $renderer;
    }

    /**
     * {@inheritDoc}
     */
    public function delete($id, $password = null)
    {
        if (empty($id)) {
            $message = 'Tick the box next to a post and click "Delete" to delete it.';
            return Response::badRequest($message);
        }

        if (TINYIB_DBMIGRATE) {
            $message = "Post deletion is currently disabled.\nPlease try again in a few moments.";
            return Response::serviceUnavailable($message);
        }

        $post = $this->post_repository->postByID($id);

        if (empty($post)) {
            $message = "Sorry, an invalid post identifier was sent.\nPlease go back, refresh the page, and try again.";
            return Response::notFound($message);
        }

        // Disabled due to Dollchan Extension Tools breaks.
        // list($logged_in, $is_admin) = manageCheckLogIn();
        //
        // if ($logged_in && empty($password)) {
        //     $url = basename($_SERVER['PHP_SELF']) . '?manage&moderate=' . $id;
        //     return Response::redirect($url);
        // }

        $password_hash = md5(md5($password));

        if (empty($post['password']) || $post['password'] !== $password_hash) {
            return Response::forbidden('Invalid password.');
        }

        $this->post_repository->deletePostByID($post['id']);

        $is_thread = $post['parent'] == TINYIB_NEWTHREAD;
        $thread_id = $is_thread ? $post['id'] : $post['parent'];

        $this->renderer->rebuildThread($thread_id);
        $this->renderer->rebuildIndexes();

        return Response::ok('Post deleted.');
    }
}
