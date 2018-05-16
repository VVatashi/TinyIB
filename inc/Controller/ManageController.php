<?php

namespace TinyIB\Controller;

use TinyIB\Response;

class ManageController implements IManageController
{
    /** @var \TinyIB\Cache\ICache $cache */
    protected $cache;

    /** @var \TinyIB\Repository\IBanRepository $ban_repository */
    protected $ban_repository;

    /** @var \TinyIB\Repository\IPostRepository $post_repository */
    protected $post_repository;

    /** @var \TinyIB\Renderer\IRenderer $renderer */
    protected $renderer;

    /**
     * Constructs new manage controller.
     *
     * @param \TinyIB\Cache\ICache $cache
     * @param \TinyIB\Repository\IBanRepository $ban_repository
     * @param \TinyIB\Repository\IPostRepository $post_repository
     * @param \TinyIB\Renderer\IRenderer $renderer
     */
    public function __construct($cache, $ban_repository, $post_repository, $renderer)
    {
        $this->cache = $cache;
        $this->ban_repository = $ban_repository;
        $this->post_repository = $post_repository;
        $this->renderer = $renderer;
    }

    /**
     * {@inheritDoc}
     */
    public function status()
    {
        list($logged_in, $is_admin) = manageCheckLogIn();

        $data = [
            'is_admin' => $is_admin,
            'is_logged_in' => $logged_in,
            'is_manage_page' => true,
        ];

        if (!$logged_in) {
            return Response::ok($this->renderer->render('manage_login_form.twig', $data));
        }

        $threads = $this->post_repository->countThreads();
        $bans = count($this->ban_repository->allBans());
        $data['info'] = $threads . ' thread' . ($threads > 1 ? 's' : '') . ', '
            . $bans . ' ban' . ($bans > 1 ? 's' : '');

        if (TINYIB_REQMOD === 'files' || TINYIB_REQMOD === 'all') {
            $data['reqmod_posts'] = array_map(function ($post) {
                $key = TINYIB_BOARD . ':index_post:' . $post['id'];

                if ($this->cache->exists($key)) {
                    $post['rendered'] = $this->cache->get($key);
                } else {
                    $post = $this->renderer->preprocessPost($post, TINYIB_INDEXPAGE);
                    $post['rendered'] = $this->renderer->renderPost($post, TINYIB_INDEXPAGE, true);
                    $this->cache->set($key, $post['rendered'], 4 * 60 * 60);
                }

                return $post;
            }, $this->post_repository->latestPosts(false));
        }

        $data['posts'] = array_map(function ($post) {
            $key = TINYIB_BOARD . ':index_post:' . $post['id'];

            if ($this->cache->exists($key)) {
                $post['rendered'] = $this->cache->get($key);
            } else {
                $post = $this->renderer->preprocessPost($post, TINYIB_INDEXPAGE);
                $post['rendered'] = $this->renderer->renderPost($post, TINYIB_INDEXPAGE, true);
                $this->cache->set($key, $post['rendered'], 4 * 60 * 60);
            }

            return $post;
        }, $this->post_repository->latestPosts(true));

        return Response::ok($this->renderer->render('manage_status.twig', $data));
    }

    /**
     * {@inheritDoc}
     */
    public function listBans($bans)
    {
        list($logged_in, $is_admin) = manageCheckLogIn();

        $data = [
            'is_admin' => $is_admin,
            'is_logged_in' => $logged_in,
            'is_manage_page' => true,
        ];

        if (!$logged_in || !$is_admin) {
            return Response::ok($this->renderer->render('manage_login_form.twig', $data));
        }

        $this->ban_repository->clearExpiredBans();

        $data['ip'] = $bans;
        $data['bans'] = $this->ban_repository->allBans();
        return Response::ok($this->renderer->render('manage_bans.twig', $data));
    }

    /**
     * {@inheritDoc}
     */
    public function addBan($bans, $ip, $expire = 0, $reason = '')
    {
        list($logged_in, $is_admin) = manageCheckLogIn();

        $data = [
            'is_admin' => $is_admin,
            'is_logged_in' => $logged_in,
            'is_manage_page' => true,
        ];

        if (!$logged_in || !$is_admin) {
            return Response::ok($this->renderer->render('manage_login_form.twig', $data));
        }

        $this->ban_repository->clearExpiredBans();
        $ban_exists = $this->ban_repository->banByIP($ip);

        if (!empty($ban_exists)) {
            $message = 'Sorry, there is already a ban on record for that IP address.';
            return Response::badRequest($message);
        }

        $ban = [
            'ip' => $ip,
            'expire' => ($expire > 0) ? (time() + $expire) : 0,
            'reason' => $reason,
        ];

        $this->ban_repository->insertBan($ban);

        $data['ip'] = $bans;
        $data['bans'] = $this->ban_repository->allBans();
        $data['text'] = 'Ban record added for ' . $ban['ip'];
        return Response::ok($this->renderer->render('manage_bans.twig', $data));
    }

    /**
     * {@inheritDoc}
     */
    public function liftBan($bans, $id)
    {
        list($logged_in, $is_admin) = manageCheckLogIn();

        $data = [
            'is_admin' => $is_admin,
            'is_logged_in' => $logged_in,
            'is_manage_page' => true,
        ];

        if (!$logged_in || !$is_admin) {
            return Response::ok($this->renderer->render('manage_login_form.twig', $data));
        }

        $this->ban_repository->clearExpiredBans();
        $ban = $this->ban_repository->banByID($id);

        if (empty($ban)) {
            $message = "Ban No.$id not found.";
            return Response::notFound($message);
        }

        $this->ban_repository->deleteBanByID($id);

        $data['ip'] = $bans;
        $data['bans'] = $this->ban_repository->allBans();
        $data['text'] = 'Ban record lifted for ' . $ban['ip'];
        return Response::ok($this->renderer->render('manage_bans.twig', $data));
    }

    /**
     * {@inheritDoc}
     */
    public function moderate($id = 0)
    {
        list($logged_in, $is_admin) = manageCheckLogIn();

        $data = [
            'is_admin' => $is_admin,
            'is_logged_in' => $logged_in,
            'is_manage_page' => true,
        ];

        if (!$logged_in) {
            return Response::ok($this->renderer->render('manage_login_form.twig', $data));
        }

        if ($id <= 0) {
            return Response::ok($this->renderer->render('manage_moderate_form.twig', $data));
        }

        $post = $this->post_repository->postByID($id);

        if (empty($post)) {
            $message = 'Sorry, there doesn\'t appear to be a post with that ID.';
            return Response::notFound($message);
        }

        $data['has_ban'] = $this->ban_repository->banByIP($post['ip']);
        $data['post'] = $post;

        $is_thread = $post['parent'] == TINYIB_NEWTHREAD;
        $posts = $is_thread ? $this->post_repository->postsInThreadByID($post['id']) : [$post];

        $data['posts'] = array_map(function ($post) {
            $key = TINYIB_BOARD . ':index_post:' . $post['id'];

            if ($this->cache->exists($key)) {
                $post['rendered'] = $this->cache->get($key);
            } else {
                $post = $this->renderer->preprocessPost($post, TINYIB_INDEXPAGE);
                $post['rendered'] = $this->renderer->renderPost($post, TINYIB_INDEXPAGE, true);
                $this->cache->set($key, $post['rendered'], 4 * 60 * 60);
            }

            return $post;
        }, $posts);

        return Response::ok($this->renderer->render('manage_moderate_post.twig', $data));
    }

    /**
     * {@inheritDoc}
     */
    public function delete($id)
    {
        list($logged_in, $is_admin) = manageCheckLogIn();

        $data = [
            'is_admin' => $is_admin,
            'is_logged_in' => $logged_in,
            'is_manage_page' => true,
        ];

        if (!$logged_in) {
            return Response::ok($this->renderer->render('manage_login_form.twig', $data));
        }

        $post = $this->post_repository->postByID($id);

        if (empty($post)) {
            $message = 'Sorry, there doesn\'t appear to be a post with that ID.';
            return Response::notFound($message);
        }

        $this->post_repository->deletePostByID($id);
        $this->cache->delete(TINYIB_BOARD . ':post:' . $id);
        $this->cache->deletePattern(TINYIB_BOARD . ':page:*');

        if ($post['parent'] != TINYIB_NEWTHREAD) {
            $this->cache->delete(TINYIB_BOARD . ':thread:' . $post['parent']);
        }

        $id = $post['id'];
        $data['text'] = "Post No.$id deleted.";
        return Response::ok($this->renderer->render('manage_info.twig', $data));
    }

    /**
     * {@inheritDoc}
     */
    public function approve($id)
    {
        list($logged_in, $is_admin) = manageCheckLogIn();

        $data = [
            'is_admin' => $is_admin,
            'is_logged_in' => $logged_in,
            'is_manage_page' => true,
        ];

        if (!$logged_in) {
            return Response::ok($this->renderer->render('manage_login_form.twig', $data));
        }

        if ($id <= 0) {
            $message = 'Form data was lost. Please go back and try again.';
            return Response::badRequest($message);
        }

        $post = $this->post_repository->postByID($id);

        if (empty($post)) {
            $message = 'Sorry, there doesn\'t appear to be a post with that ID.';
            return Response::notFound($message);
        }

        $this->post_repository->approvePostByID($post['id']);
        $thread_id = $post['parent'] == TINYIB_NEWTHREAD ? $post['id'] : $post['parent'];

        if (strtolower($post['email']) !== 'sage'
            && (TINYIB_MAXREPLIES === 0
            || $this->post_repository->numRepliesToThreadByID($thread_id) <= TINYIB_MAXREPLIES)) {
            $this->post_repository->bumpThreadByID($thread_id);
        }

        $this->cache->delete(TINYIB_BOARD . ':post:' . $id);
        $this->cache->delete(TINYIB_BOARD . ':thread:' . $thread_id);
        $this->cache->deletePattern(TINYIB_BOARD . ':page:*');

        $id = $post['id'];
        $data['text'] = "Post No.$id approved.";
        return Response::ok($this->renderer->render('manage_info.twig', $data));
    }

    /**
     * {@inheritDoc}
     */
    public function setSticky($id, $sticky = true)
    {
        list($logged_in, $is_admin) = manageCheckLogIn();

        $data = [
            'is_admin' => $is_admin,
            'is_logged_in' => $logged_in,
            'is_manage_page' => true,
        ];

        if (!$logged_in) {
            return Response::ok($this->renderer->render('manage_login_form.twig', $data));
        }

        if ($id <= 0) {
            $message = 'Form data was lost. Please go back and try again.';
            return Response::badRequest($message);
        }

        $post = $this->post_repository->postByID($id);

        if (empty($post) || $post['parent'] != TINYIB_NEWTHREAD) {
            $message = 'Sorry, there doesn\'t appear to be a thread with that ID.';
            return Response::notFound($message);
        }

        $this->post_repository->stickyThreadByID($id, $sticky);
        $this->cache->delete(TINYIB_BOARD . ':post:' . $id);
        $this->cache->delete(TINYIB_BOARD . ':thread:' . $id);
        $this->cache->deletePattern(TINYIB_BOARD . ':page:*');

        $id = $post['id'];
        $action = $sticky ? 'stickied' : 'un-stickied';
        $data['text'] = "Thread No.$id $action.";
        return Response::ok($this->renderer->render('manage_info.twig', $data));
    }

    /**
     * {@inheritDoc}
     */
    public function rawPost()
    {
        list($logged_in, $is_admin) = manageCheckLogIn();

        $data = [
            'is_admin' => $is_admin,
            'is_logged_in' => $logged_in,
            'is_manage_page' => true,
        ];

        if (!$logged_in) {
            return Response::ok($this->renderer->render('manage_login_form.twig', $data));
        }

        return Response::ok($this->renderer->render('manage_raw_post_form.twig', $data));
    }

    /**
     * {@inheritDoc}
     */
    public function rebuildAll()
    {
        list($logged_in, $is_admin) = manageCheckLogIn();

        $data = [
            'is_admin' => $is_admin,
            'is_logged_in' => $logged_in,
            'is_manage_page' => true,
        ];

        if (!$logged_in || !$is_admin) {
            return Response::ok($this->renderer->render('manage_login_form.twig', $data));
        }

        $this->cache->deletePattern(TINYIB_BOARD . ':post:*');
        $this->cache->deletePattern(TINYIB_BOARD . ':thread:*');
        $this->cache->deletePattern(TINYIB_BOARD . ':page:*');

        $data['text'] = 'Rebuilt board.';
        return Response::ok($this->renderer->render('manage_info.twig', $data));
    }

    /**
     * {@inheritDoc}
     */
    public function update()
    {
        list($logged_in, $is_admin) = manageCheckLogIn();

        $data = [
            'is_admin' => $is_admin,
            'is_logged_in' => $logged_in,
            'is_manage_page' => true,
        ];

        if (!$logged_in || !$is_admin) {
            return Response::ok($this->renderer->render('manage_login_form.twig', $data));
        }

        if (is_dir('.git')) {
            $data['git_output'] = shell_exec('git pull 2>&1');
        }

        return Response::ok($this->renderer->render('manage_update.twig', $data));
    }

    /**
     * {@inheritDoc}
     */
    public function logout()
    {
        list($logged_in, $is_admin) = manageCheckLogIn();

        $data = [
            'is_admin' => $is_admin,
            'is_logged_in' => $logged_in,
            'is_manage_page' => true,
        ];

        if (!$logged_in) {
            return Response::ok($this->renderer->render('manage_login_form.twig', $data));
        }

        $_SESSION['tinyib'] = '';
        session_destroy();

        $url = '/' . TINYIB_BOARD . '/manage';
        return Response::redirect($url);
    }
}
