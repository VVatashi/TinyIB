<?php

namespace Imageboard\Controller\Admin;

use GuzzleHttp\Psr7\Response;
use Imageboard\Exception\{AccessDeniedException, NotFoundException};
use Imageboard\Model\{ModLog, User};
use Imageboard\Service\RendererServiceInterface;
use Psr\Http\Message\{ServerRequestInterface, ResponseInterface};

class UserCrudController implements UserCrudControllerInterface
{
    /** @var RendererServiceInterface */
    protected $renderer;

    /**
     * Creates a new AuthController instance.
     *
     * @param RendererServiceInterface $renderer
     */
    public function __construct(
        RendererServiceInterface $renderer
    ) {
        $this->renderer = $renderer;
    }

    /**
     * Returns links to the user entity.
     *
     * @param User $user User entity.
     *
     * @return string
     */
    protected function userLink(User $user) : string
    {
        $id = $user->id;
        $email = htmlentities($user->email, ENT_QUOTES);

        $id_link = "<a href=\"/" . TINYIB_BOARD . "/admin/user/$id\">#$id</a>";
        $email_link = "<a href=\"mailto:$email\">$email</a>";

        return "$id_link ($email_link)";
    }

    /**
     * {@inheritDoc}
     */
    public function list(ServerRequestInterface $request) : string
    {
        /** @var User */
        $current_user = $request->getAttribute('user');
        if (!$current_user->isMod()) {
            throw new AccessDeniedException('You are not allowed to access this page');
        }

        $users = User::orderBy('id', 'desc')->get();
        return $this->renderer->render('admin/user/list.twig', [
            'users' => $users,
        ]);
    }

    /**
     * {@inheritDoc}
     */
    public function show(ServerRequestInterface $request) : string
    {
        /** @var User */
        $current_user = $request->getAttribute('user');
        if (!$current_user->isMod()) {
            throw new AccessDeniedException('You are not allowed to access this page');
        }

        $id = (int)explode('/', $request->getUri()->getPath())[3];
        $user = User::find($id);
        if (!isset($user)) {
            throw new NotFoundException("User #$id not found.");
        }

        return $this->renderer->render('admin/user/show.twig', [
            'user' => $user,
        ]);
    }

    /**
     * {@inheritDoc}
     */
    public function createForm(ServerRequestInterface $request) : string
    {
        /** @var User */
        $current_user = $request->getAttribute('user');
        if (!$current_user->isMod()) {
            throw new AccessDeniedException('You are not allowed to access this page');
        }

        // Restore form input from the session.
        $error = isset($_SESSION['error']) ? $_SESSION['error'] : '';
        $email = isset($_SESSION['email']) ? $_SESSION['email'] : '';
        $password = isset($_SESSION['password']) ? $_SESSION['password'] : '';
        $role = isset($_SESSION['role']) ? $_SESSION['role'] : '';

        unset($_SESSION['error']);
        unset($_SESSION['email']);
        unset($_SESSION['password']);
        unset($_SESSION['role']);

        return $this->renderer->render('admin/user/create.twig', [
            'error' => $error,
            'email' => $email,
            'password' => $password,
            'role' => $role,
        ]);
    }

    /**
     * {@inheritDoc}
     */
    public function create(ServerRequestInterface $request) : ResponseInterface
    {
        /** @var User */
        $current_user = $request->getAttribute('user');
        if (!$current_user->isMod()) {
            throw new AccessDeniedException('You are not allowed to access this page');
        }

        $data = $request->getParsedBody();
        $email = isset($data['email']) ? $data['email'] : '';
        $password = isset($data['password']) ? $data['password'] : '';
        $role = isset($data['role']) ? (int)$data['role'] : 0;

        if (empty($email)) {
            $_SESSION['error'] = 'Email should not be empty';
            $_SESSION['email'] = $email;
            $_SESSION['password'] = $password;
            $_SESSION['role'] = $role;
            return new Response(302, ['Location' => '/' . TINYIB_BOARD . '/admin/user/create']);
        }

        if (empty($password)) {
            $_SESSION['error'] = 'Password should not be empty';
            $_SESSION['email'] = $email;
            $_SESSION['password'] = $password;
            $_SESSION['role'] = $role;
            return new Response(302, ['Location' => '/' . TINYIB_BOARD . '/admin/user/create']);
        }

        try {
            $user = User::where('email', $email)->first();
            if (isset($user)) {
                $_SESSION['error'] = "User $email is already exists";
                $_SESSION['email'] = $email;
                $_SESSION['password'] = $password;
                $_SESSION['role'] = $role;
                return new Response(302, ['Location' => '/' . TINYIB_BOARD . '/admin/user/create']);
            }

            $user = User::onlyTrashed()->where('email', $email)->forceDelete();

            $user = new User([
                'email' => $email,
                'role' => $role,
            ]);
            $user->setPassword($password);
            $user->save();

            $user_link = $this->userLink($current_user);
            $created_user_link = $this->userLink($user);
            ModLog::create([
                'message' => "User $user_link has created user $created_user_link",
                'user_id' => $current_user->id,
            ]);
        }
        catch(\Exception $e) {
            $_SESSION['error'] = $e->getMessage();
            $_SESSION['email'] = $email;
            $_SESSION['password'] = $password;
            $_SESSION['role'] = $role;
            return new Response(302, ['Location' => '/' . TINYIB_BOARD . '/admin/user']);
        }

        return new Response(302, ['Location' => '/' . TINYIB_BOARD . '/admin/user']);
    }

    /**
     * {@inheritDoc}
     */
    public function editForm(ServerRequestInterface $request) : string
    {
        /** @var User */
        $current_user = $request->getAttribute('user');
        if (!$current_user->isMod()) {
            throw new AccessDeniedException('You are not allowed to access this page');
        }

        $id = (int)explode('/', $request->getUri()->getPath())[3];
        $user = User::find($id);
        if (!isset($user)) {
            throw new NotFoundException("User #$id not found.");
        }

        // Restore form input from the session.
        $error = isset($_SESSION['error']) ? $_SESSION['error'] : '';

        unset($_SESSION['error']);

        return $this->renderer->render('admin/user/edit.twig', [
            'error' => $error,
            'user' => $user,
        ]);
    }

    /**
     * {@inheritDoc}
     */
    public function edit(ServerRequestInterface $request) : ResponseInterface
    {
        /** @var User */
        $current_user = $request->getAttribute('user');
        if (!$current_user->isMod()) {
            throw new AccessDeniedException('You are not allowed to access this page');
        }

        $id = (int)explode('/', $request->getUri()->getPath())[3];
        $user = User::find($id);
        if (!isset($user)) {
            throw new NotFoundException("User #$id not found.");
        }

        $data = $request->getParsedBody();
        $email = isset($data['email']) ? $data['email'] : '';
        $password = isset($data['password']) ? $data['password'] : '';
        $role = isset($data['role']) ? (int)$data['role'] : '';

        if (empty($email)) {
            $_SESSION['error'] = 'Email should not be empty';
            return new Response(302, ['Location' => '/' . TINYIB_BOARD . "/admin/user/$id/edit"]);
        }

        try {
            $user->email = $email;
            $user->role = $role;

            if (!empty($password)) {
                $user->setPassword($password);
            }

            $user->save();

            $user_link = $this->userLink($current_user);
            $edited_user_link = $this->userLink($user);
            ModLog::create([
                'message' => "User $user_link has edited user $edited_user_link",
                'user_id' => $current_user->id,
            ]);
        }
        catch(\Exception $e) {
            $_SESSION['error'] = $e->getMessage();
            return new Response(302, ['Location' => '/' . TINYIB_BOARD . '/admin/user']);
        }

        return new Response(302, ['Location' => '/' . TINYIB_BOARD . '/admin/user']);
    }

    /**
     * {@inheritDoc}
     */
    public function deleteConfirm(ServerRequestInterface $request) : string
    {
        /** @var User */
        $current_user = $request->getAttribute('user');
        if (!$current_user->isMod()) {
            throw new AccessDeniedException('You are not allowed to access this page');
        }

        $id = (int)explode('/', $request->getUri()->getPath())[3];

        $user = User::find($id);
        if (!isset($user)) {
            throw new NotFoundException("User #$id not found.");
        }

        return $this->renderer->render('confirm.twig', [
            'message' => 'Are you sure you want to delete the user <em><a href="mailto:' . $user->email . '">' . $user->email . '</a></em>?',
            'submit' => 'Yes',
            'cancel' => 'No',
            'submit_url' => "admin/user/$id/delete/submit",
            'cancel_url' => 'admin/user',
            'method' => 'POST',
        ]);
    }

    /**
     * {@inheritDoc}
     */
    public function delete(ServerRequestInterface $request) : ResponseInterface
    {
        /** @var User */
        $current_user = $request->getAttribute('user');
        if (!$current_user->isMod()) {
            throw new AccessDeniedException('You are not allowed to access this page');
        }

        $id = (int)explode('/', $request->getUri()->getPath())[3];

        $user = User::find($id);
        if (!isset($user)) {
            throw new NotFoundException("User #$id not found.");
        }

        $user_link = $this->userLink($current_user);
        $deleted_user_link = $this->userLink($user);
        ModLog::create([
            'message' => "User $user_link has deleted user $deleted_user_link",
            'user_id' => $current_user->id,
        ]);

        $user->delete();

        return new Response(302, ['Location' => '/' . TINYIB_BOARD . '/admin/user']);
    }
}
